import {Component, OnInit} from '@angular/core';
import {Client} from "../shared/client.model";
import {ClientService} from "../shared/client.service";
import {Router} from "@angular/router";
import {NgForOf, NgIf, UpperCasePipe} from '@angular/common';


@Component({
  selector: 'ubb-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    UpperCasePipe
  ]
})
export class ClientListComponent implements OnInit {
  errorMessage: string = "";
  clients: Array<Client> = [];
  selectedClient: Client | undefined;

  constructor(private clientService: ClientService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients()
      .subscribe({
        next: (client) => {
          this.clients = client
        },
        error: (err: any) => {
          this.errorMessage = err
        },
        complete: () => {
        }
      })
  }

  onSelect(client: Client): void {
    this.selectedClient = client;
  }

  gotoDetail(): void {
    this.router.navigate(['/clients/detail', this.selectedClient?.id]);
  }
  editClient(id: number): void {
    this.router.navigate(['/client-edit', id]);
  }

}
