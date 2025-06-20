import {Component, OnInit} from '@angular/core';
import {ClientService} from "../shared/client.service";
import {Client} from "../shared/client.model";
import {Location} from "@angular/common";

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  standalone: true,
  styleUrls: ['./client-new.component.css']
})
export class ClientNewComponent implements OnInit {

  constructor(
    private clientService: ClientService,
    private location: Location
  ) { }

  ngOnInit(): void { }

  onSave(name: string, phone: string): void {
    console.log("onSave:", name, phone);

    const client = {
      name,
      phone,
    };

    this.clientService.saveClient({name: 'Teszt', phone: '12345'}).subscribe({
      next: res => console.log('Mentés sikeres', res),
      error: err => console.error('Mentés hiba', err)
    });
  }



}
