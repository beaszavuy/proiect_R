import {Component, OnInit} from '@angular/core';
import {DisciplineService} from "../shared/discipline.service";
import {Discipline} from "../shared/discipline.model";
import {Location} from "@angular/common";

@Component({
  selector: 'app-discipline-new',
  templateUrl: './discipline-new.component.html',
  styleUrls: ['./discipline-new.component.css']
})
export class DisciplineNewComponent implements OnInit {

  constructor(private disciplineService: DisciplineService,
              private location: Location) {
  }

  ngOnInit(): void {
  }

  onSave(title: string, teacher: string, credits: string) {
    console.log("onSave:", title, teacher, credits);

    const discipline: Discipline = {title, teacher, credits: +credits} as Discipline;

    this.disciplineService.saveDiscipline(discipline)
      .subscribe(_ => console.log("ok"));

    // this.disciplineService.saveDiscipline(discipline)
    //   .subscribe(discipline => console.log("ok-saved ", discipline));
    //
    // this.disciplineService.saveDiscipline(discipline)
    //   .subscribe((discipline: Discipline) => console.log("ok-saved ",discipline));

    // this.disciplineService.saveDiscipline(discipline)
    //   .subscribe(_ => {
    //     console.log("ok");
    //     // this.location.back();
    //   }, err => console.log(err));

    // this.disciplineService.saveDiscipline(discipline)
    //   .subscribe({
    //     next: (discipline: Discipline) => {
    //     },
    //     error: (err: any) => {
    //     }
    //   });


    this.location.back();
  }
}
