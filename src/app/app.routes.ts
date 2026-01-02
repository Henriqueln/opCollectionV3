import { Routes } from '@angular/router';
import { SetsListComponent } from '../sets/components/sets-list/sets-list.component';
import { SetsCreateComponent } from '../sets/components/sets-create/sets-create.component';
import { CardsListComponent } from '../cards/components/cards-list/cards-list.component';
import { SupportStringsListComponent } from './support-strings/components/support-strings-list/support-strings-list.component';

export const routes: Routes = [
    { path: '', component: SetsListComponent },
    { path: 'sets', component: SetsListComponent },
    { path: 'sets-create', component: SetsCreateComponent },
    { path: 'cards', component: CardsListComponent },
    { path: 'support-strings', component: SupportStringsListComponent },
];
