import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { ITicket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  imports: [NewTicketComponent, TicketComponent]
})
export class TicketsComponent {
  protected tickets: ITicket[] = [];


  protected postTicket(ticketData: { title: string, request: string }) {
    const ticket: ITicket = {
      title: ticketData.title,
      request: ticketData.request,
      id: Math.random().toString(),
      status: 'open',
    }

    this.tickets.push(ticket);
  }
}
