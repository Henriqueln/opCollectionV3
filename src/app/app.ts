import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule, CardModule, ToastModule],
  providers: [MessageService],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  items: MenuItem[] = [
    {
      label: 'Sets',
      icon: 'pi pi-book',
      routerLink: '/sets'
    },
    {
      label: 'Cards',
      icon: 'pi pi-file',
      routerLink: '/cards'
    },
    {
      label: 'Support Strings',
      icon: 'pi pi-address-book',
      routerLink: '/support-strings'
    },
  ];
  protected readonly title = signal('opCollectionV3');
}
