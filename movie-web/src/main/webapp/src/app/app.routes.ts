import { Routes } from '@angular/router';
import {ClientsComponent} from './clients/clients.component';
import {MovieComponent} from './movie/movie.component';
import {MovieNewComponent} from './movie/movie-new/movie-new.component';
import {ClientDetailComponent} from './clients/client-detail/client-detail.component';
import {ClientNewComponent} from './clients/client-new/client-new.component';
import {ClientEditComponent} from './clients/client-edit/client-edit.component';
import {MovieDetailComponent} from './movie/movie-details/movie-details.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'clients', component: ClientsComponent},
  {path: 'client/detail/:id', component: ClientDetailComponent},
  {path: 'client-new', component:ClientNewComponent},
  { path: 'client-edit/:id', component: ClientEditComponent },

  //
  {path: 'movies', component: MovieComponent},
  {path: 'movie-new', component: MovieNewComponent},
  { path: 'movies/:id', component: MovieDetailComponent },

];
