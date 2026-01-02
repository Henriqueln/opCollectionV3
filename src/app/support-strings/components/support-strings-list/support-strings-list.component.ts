import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { SupportStringsService } from '../../services/support-strings.service';
import { SupportString } from '../../models/support-string';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-support-strings-list',
  templateUrl: './support-strings-list.component.html',
  styleUrls: ['./support-strings-list.component.css'],
  imports: [
    ListboxModule,
    InputTextModule,
    FormsModule,
    FloatLabel,
    ButtonModule,
    ToastModule
  ],
  providers: [
    MessageService
  ]
})
export class SupportStringsListComponent implements OnInit {
  characterNames: string[] = [];
  eventNames: string[] = [];
  types: string[] = [];
  stringValue = '';
  supportStrings = {
    characterNames: [],
    eventNames: [],
    types: []
  } as SupportString
  constructor(
    private supportStringsService: SupportStringsService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.supportStringsService.getSupportStrings().subscribe({
      next: (result) => {
        this.supportStrings = result
        this.characterNames = result.characterNames;
        this.eventNames = result.eventNames;
        this.types = result.types;
      },
      error: () => this.messageService.add({ severity: 'error', summary: 'Error', life: 3000 })
    })
  }

  addCharacterName() {
    if (this.characterNames.some(c => c === this.stringValue)) return;
    this.characterNames = [...this.characterNames, this.stringValue];
  }

  addEventName() {
    if (this.eventNames.some(c => c === this.stringValue)) return;
    this.eventNames = [...this.eventNames, this.stringValue];
  }

  addType() {
    if (this.types.some(c => c === this.stringValue)) return;
    this.types = [...this.types, this.stringValue];
  }

  save() {
    this.supportStrings.characterNames = this.characterNames;
    this.supportStrings.eventNames = this.eventNames;
    this.supportStrings.types = this.types;
    this.supportStringsService.updateSupportStrings(this.supportStrings).subscribe({
      next: () => this.messageService.add({ severity: 'success', summary: 'Updated', life: 3000 }),
      error: () => this.messageService.add({ severity: 'error', summary: 'Error', life: 3000 })
    });
  }

}
