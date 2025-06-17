import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DisciplineListComponent} from './discipline-list/discipline-list.component';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  imports: [
    DisciplineListComponent
  ],
  styleUrls: ['./disciplines.component.css']
})
export class DisciplinesComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  addNewDiscipline() {
    console.log("addNewDiscipline called");
    this.router.navigate(['/discipline-new']);
  }
}
