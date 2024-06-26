import { Component, input, signal } from '@angular/core';
import { ITicket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  public data = input.required<ITicket>();
  protected detailsVisible = signal(false);

  protected toggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
  }
}
