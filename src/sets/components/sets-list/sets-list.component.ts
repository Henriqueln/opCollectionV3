import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Set } from '../../models/set';
import { SetsService } from '../../services/sets.service';
import { RouterLink } from "@angular/router";
import { StoreService } from '../../../app/shared/store.service';
import { PopoverModule } from 'primeng/popover';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-sets-list',
  templateUrl: './sets-list.component.html',
  styleUrls: ['./sets-list.component.css'],
  imports: [
    ButtonModule,
    TableModule,
    RouterLink,
    PopoverModule
  ],
  providers: [
    SetsService,
    MessageService
  ],
})
export class SetsListComponent implements OnInit {
  sets: Set[] = [];

  constructor(
    private setsService: SetsService,
    private cdr: ChangeDetectorRef,
    private storeService: StoreService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    if (this.storeService.getSets().length > 0) {
      this.sets = this.storeService.getSets();
      this.cdr.markForCheck();
    } else {
      this.setsService.getSets().subscribe({
        next: (data) => {
          this.sets = data
          this.storeService.setSets(data);
          this.cdr.markForCheck();
        },
        error: (err) => this.messageService.add({ severity: 'error', summary: 'error', life: 3000 })
      })
    }
  }

}
