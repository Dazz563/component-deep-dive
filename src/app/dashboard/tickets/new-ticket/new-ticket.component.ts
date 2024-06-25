import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, fromEvent, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule]
})
export class NewTicketComponent {

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  private search = viewChild.required<ElementRef<HTMLInputElement>>('titleInput');

  ngOnInit(): void {

    this.searchTitle();

  }

  protected searchTitle() {
    fromEvent<Event>(this.search().nativeElement, 'keyup')
      .pipe(
        map(() => this.search().nativeElement.value),
        debounceTime(500), // wait 500ms after each keystroke before considering the term
        distinctUntilChanged(), // avoids duplicates in case you shift + type
        // switchMap((title) => this.sendAPIRequest(title))
      )
      .subscribe(console.log)
  }

  // protected sendAPIRequest(title: string): Promise<string> {

  //   return new Promise(resolve => setTimeout(() => resolve(title), 1000));
  // }

  protected onSubmit(title: string, request: string) {

    if (!title || !request) {

      return;

    }

    this.form().nativeElement.reset();

  }





}
