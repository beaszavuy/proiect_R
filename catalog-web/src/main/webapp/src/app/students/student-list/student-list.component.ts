import {Component, OnInit} from '@angular/core';
import {Student} from "../shared/student.model";
import {StudentService} from "../shared/student.service";
import {Router} from "@angular/router";
import {NgForOf, NgIf, UpperCasePipe} from '@angular/common';


@Component({
  selector: 'ubb-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  imports: [
    NgIf,
    NgForOf,
    UpperCasePipe
  ]
})
export class StudentListComponent implements OnInit {
  errorMessage: string = "";
  students: Array<Student> = [];
  selectedStudent: Student | undefined;

  constructor(private studentService: StudentService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents()
      .subscribe({
        next: (students) => {
          this.students = students
        },
        error: (err: any) => {
          this.errorMessage = err
        },
        complete: () => {
        }
      })
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  gotoDetail(): void {
    this.router.navigate(['/student/detail', this.selectedStudent?.id]);
  }

}
