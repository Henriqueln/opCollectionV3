import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { Set } from '../../models/set';
import { ButtonModule } from 'primeng/button';
import { SetsService } from '../../services/sets.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { StoreService } from '../../../app/shared/store.service';


@Component({
  selector: 'app-sets-create',
  templateUrl: './sets-create.component.html',
  styleUrls: ['./sets-create.component.css'],
  imports: [
    InputTextModule,
    FormsModule,
    FloatLabel,
    ButtonModule,
    ToastModule
  ],
  providers: [
    MessageService, 
  ]
})
export class SetsCreateComponent implements OnInit {
  set: Set = {
    code: '',
    image: '',
    name: ''
  }
  constructor(
    private setsService: SetsService,
    private messageService: MessageService,
    private storeService: StoreService
  ) { }

  ngOnInit() {
  }

  createSet(): void {
    this.setsService.createSet(this.set).subscribe({
      next: () => { 
        this.messageService.add({ severity: 'success', summary: 'Set Created', life: 3000 }); 
        this.storeService.setSets([]);
      },
      error: (error) => { }
    })
  }

}
