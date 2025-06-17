import {Component, OnInit} from '@angular/core';
import {DisciplineService} from "../shared/discipline.service";
import {Discipline} from "../shared/discipline.model";
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-discipline-list',
  templateUrl: './discipline-list.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./discipline-list.component.css']
})
export class DisciplineListComponent implements OnInit {
  disciplines: Discipline[] = [];

  constructor(private disciplineService: DisciplineService) {
  }

  ngOnInit(): void {

    this.disciplineService.getDisciplines()
      .subscribe(disciplinesArr => this.disciplines = disciplinesArr);



  }

  onDelete(discipline: Discipline) {
    this.disciplineService.deleteDiscipline(discipline.id)
      .subscribe(_ => {

        console.log("delete-ok");
        //???? delete here???
      });

    this.disciplines = this.disciplines.filter(d => d.id !== discipline.id);//== ===

  }
}
