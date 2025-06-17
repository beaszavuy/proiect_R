import {Component} from "@angular/core";
import {StudentService} from "./shared/student.service";
import {StudentListComponent} from "./student-list/student-list.component";

@Component({
    selector: 'ubb-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css'],
    imports: [
        StudentListComponent
    ]
})
export class StudentsComponent {

}
