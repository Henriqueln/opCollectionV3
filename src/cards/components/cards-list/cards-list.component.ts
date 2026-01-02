import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { TableModule } from 'primeng/table';
import { Card, CardCategory, CardColor, CardRarity } from '../../models/card';
import { CardsService } from '../../services/cards.service';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { Set } from '../../../sets/models/set';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../../../app/shared/store.service';
import { SetsService } from '../../../sets/services/sets.service';
import { SupportStringsService } from '../../../app/support-strings/services/support-strings.service';
import { SupportString } from '../../../app/support-strings/models/support-string';
import { ToastModule } from 'primeng/toast';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IftaLabelModule } from 'primeng/iftalabel';



@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css'],
  imports: [
    ButtonModule,
    TableModule,
    PopoverModule,
    CommonModule,
    MultiSelectModule,
    FormsModule,
    ToastModule,
    FloatLabelModule,
    IftaLabelModule
  ]
})
export class CardsListComponent implements OnInit {
  cards: Card[] = [];
  cardsFiltered: Card[] = [];
  selectedSets: Set[] = [];
  sets: Set[] = [];
  selectedCard: Card = {
    category: CardCategory.Character,
    code: '',
    source: '',
    type1: '',
    type2: '',
    type3: '',
    color: CardColor.Red,
    color2: CardColor.Green,
    name: '',
    playset: 0,
    quantity: 0,
    rarity: CardRarity.Common,
    set: '',
  };

  incrementValue: number = 1;

  supportStrings: SupportString = {
    characterNames: [],
    eventNames: [],
    types: []
  }

  createCardActive = false;

  constructor(
    private cardsService: CardsService,
    private setsService: SetsService,
    private cdr: ChangeDetectorRef,
    private storeService: StoreService,
    private supportStringService: SupportStringsService
  ) { }

  ngOnInit() {
    this.cardsService.getCards().subscribe({
      next: (cards) => {
        this.cards = cards
        this.cardsFiltered = cards.filter(c => c.set === 'OP01')
        this.cdr.markForCheck()
      }
    })

    if (this.storeService.getSets().length > 0) {
      this.sets = this.storeService.getSets();
      this.selectedSets = []
    }
    else {
      this.setsService.getSets().subscribe({
        next: (sets) => {
          this.sets = sets
          this.selectedSets = []
        },
        error: (error) => console.warn('error')
      })
    }

    this.supportStringService.getSupportStrings().subscribe(result => {
      this.supportStrings = result;
    })
  }

  changeFilters() {
    this.cardsFiltered = this.cards.filter(c => this.selectedSets.map(s => s.code).includes(c.set));
    this.cdr.markForCheck();
  }

  getColor(card: Card, color: string): string {
    if (!color) color = card.color;
    if (color === CardColor.Red) {
      if (card.quantity >= card.playset) return 'dark-red'
      else return 'red';
    }
    if (color === CardColor.Green) {
      if (card.quantity >= card.playset) return 'dark-green'
      else return 'green';
    }
    if (color === CardColor.Blue) {
      if (card.quantity >= card.playset) return 'dark-blue'
      else return 'blue';
    }
    if (color === CardColor.Purple) {
      if (card.quantity >= card.playset) return 'dark-purple'
      else return 'purple';
    }
    if (color === CardColor.Black) {
      if (card.quantity >= card.playset) return 'dark-black'
      else return 'black';
    }
    if (color === CardColor.Yellow) {
      if (card.quantity >= card.playset) return 'dark-yellow'
      else return 'yellow';
    }
    return '';
  }

  createCard() {
    const newCard: Card = {
      category: this.selectedCard.category,
      code: this.selectedCard.code,
      color: this.selectedCard.color,
      color2: this.selectedCard.color2,
      name: this.selectedCard.name,
      playset: this.selectedCard.playset,
      quantity: this.selectedCard.quantity || 0,
      rarity: this.selectedCard.rarity,
      set: this.selectedCard.set,
      source: this.selectedCard.source,
      type1: this.selectedCard.type1,
      type2: this.selectedCard.type2,
      type3: this.selectedCard.type3,
    }
    this.cardsService.createCard(newCard).subscribe({
      next: () => {},
      error: () => console.warn('error')
    })
  }

  generateAlt(card: Card) {
    let newCode = '';
    if (card.code.includes('_')) {
      const parts = card.code.split('_');
      let sameCards = this.cards.filter(c => c.code.startsWith(parts[0]));
      let newVersion = Number(sameCards.reverse()[0].code.split('_p')[1]) + 1;
      newCode = parts[0] + '_p' + newVersion;
    } else {
      let sameCards = this.cards.filter(c => card.code === c.code.split('_p')[0]);
      console.log('aqui', card.code.split('_p'));
      let newVersion = 1
      if (sameCards.length > 1) {
        newVersion = Number(sameCards.reverse()[0].code.split('_p')[1]) + 1;
      }
      newCode = card.code + '_p' + newVersion;
    }
    const altCard: Card = {
      ...card,
      rarity: CardRarity.Alternate,
      code: newCode,
      playset: 1,
      quantity: 0
    };
    this.selectedCard = altCard;
  }

  increment(card: Card) {
    card.quantity += this.incrementValue;
    this.cardsService.updateCard(card).subscribe({
      next: () => { this.changeFilters(); },
      error: () => console.warn('error')
    });
  }

  decrement(card: Card) {
    card.quantity -= this.incrementValue;
    if (card.quantity < 0) card.quantity = 0;
    this.cardsService.updateCard(card).subscribe({
      next: () => { this.changeFilters(); },
      error: () => console.warn('error')
    });
  }

}
