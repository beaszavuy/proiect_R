import { Routes } from '@angular/router';
import {ClientsComponent} from './clients/clients.component';
import {MovieComponent} from './movie/movie.component';
import {MovieNewComponent} from './movie/movie-new/movie-new.component';
import {ClientDetailComponent} from './clients/client-detail/client-detail.component';
import {ClientNewComponent} from './clients/client-new/client-new.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'clients', component: ClientsComponent},
  {path: 'client/detail/:id', component: ClientDetailComponent},
  {path: 'client-new', component:ClientNewComponent},
  //
  {path: 'movies', component: MovieComponent},
  {path: 'movie-new', component: MovieNewComponent},
];
