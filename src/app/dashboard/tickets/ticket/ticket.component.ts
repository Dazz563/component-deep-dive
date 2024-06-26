import { Component, input, output, signal } from '@angular/core';
import { ITicket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  protected detailsVisible = signal(false);

  public data = input.required<ITicket>();

  public emitCloseTicket = output();

  protected toggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
  }

  protected closeTicket() {
    this.emitCloseTicket.emit();
  }
}
