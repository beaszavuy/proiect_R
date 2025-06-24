import {Component, OnInit} from "@angular/core";
import {ClientService} from "./shared/client.service";
import {ClientListComponent} from "./client-list/client-list.component";
import {Router} from '@angular/router';

@Component({
  selector: 'ubb-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  standalone: true,
  imports: [
    ClientListComponent
  ]
})
export class ClientsComponent implements OnInit{

  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }

  addNewClient() {
    console.log("addNewMovie called");
    this.router.navigate(['/client-new']);
  }
  // editClient(id: number) {
  //   this.router.navigate(['/client-edit', id]);
  // }
}
