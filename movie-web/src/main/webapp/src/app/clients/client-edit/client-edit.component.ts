import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../shared/client.service';
import { Client } from '../shared/client.model';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css'],
  imports: [
    FormsModule,
    CommonModule,
  ],
  standalone: true
})
export class ClientEditComponent implements OnInit {
  clientId!: number;
  client!: Client;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.clientId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Kliens ID:', this.clientId);

    this.clientService.getClient(this.clientId).subscribe({
      next: client => {
        console.log('Lekért kliens:', client);
        if (client) {
          this.client = client;
        } else {
          console.error('Kliens nem található!');
        }
      },
      error: err => console.error('Hiba kliens lekérésekor:', err)
    });
  }


  onSave(): void {
    this.clientService.update(this.client).subscribe({
      next: updatedClient => {
        console.log('Kliens frissítve:', updatedClient);
        this.router.navigate(['/clients']); // navigálj vissza a listához
      },
      error: err => console.error('Frissítés hiba:', err)
    });
  }

}
