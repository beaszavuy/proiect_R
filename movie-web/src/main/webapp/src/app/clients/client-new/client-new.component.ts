import {Component, OnInit} from '@angular/core';
import {ClientService} from "../shared/client.service";
import {Client} from "../shared/client.model";
import {Location} from "@angular/common";

@Component({
  selector: 'app-movie-new',
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

    this.clientService.saveClient(client).subscribe({
      next: (savedClient) => {
        console.log("Client saved:", savedClient);
        this.location.back();
      },
      error: (err) => {
        console.error("Save error:", err);
      }
    });
  }



}
