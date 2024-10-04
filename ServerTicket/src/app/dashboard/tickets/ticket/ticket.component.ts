import { Component, Input, input, output, signal } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  close = output();
  detailsVisibile = signal(false);

  onToggleDetails() {
    // this.detailsVisibile.set(!this.detailsVisibile());
    this.detailsVisibile.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
