import { Routes } from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {DisciplinesComponent} from './disciplines/disciplines.component';
import {DisciplineNewComponent} from './disciplines/discipline-new/discipline-new.component';
import {StudentDetailComponent} from './students/student-detail/student-detail.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'students', component: StudentsComponent},
  {path: 'student/detail/:id', component: StudentDetailComponent},
  //
  {path: 'disciplines', component: DisciplinesComponent},
  {path: 'discipline-new', component: DisciplineNewComponent},
];
