import { Component, DestroyRef, ElementRef, OnDestroy, OnInit, inject, output, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, fromEvent, map, switchMap } from 'rxjs';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule]
})
export class NewTicketComponent implements OnInit {

  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  private search = viewChild.required<ElementRef<HTMLInputElement>>('titleInput');

  protected enteredTitle = '';
  protected enteredRequest = '';

  public emitTicket = output<{ title: string, request: string }>();

  private destroyRef = inject(DestroyRef)

  ngOnInit(): void {

    // this.searchTitle();

  }

  protected searchTitle() {
    const search$ = fromEvent<Event>(this.search().nativeElement, 'keyup')
      .pipe(
        map(() => this.search().nativeElement.value),
        debounceTime(500), // wait 500ms after each keystroke before considering the term (save API calls)
        distinctUntilChanged(), // avoids duplicates in case you shift + type
        switchMap((title) => this.sendAPIRequest(title))
      )
      .subscribe(console.log)

    this.destroyRef.onDestroy(() => {
      search$.unsubscribe();
    });
  }

  protected sendAPIRequest(title: string): Promise<string> {

    return new Promise(resolve => setTimeout(() => resolve(title), 1000));
  }

  protected onSubmit() {

    if (this.enteredTitle === '' || this.enteredRequest === '') {

      return;

    }

    this.emitTicket.emit({ title: this.enteredTitle, request: this.enteredRequest });


    this.enteredTitle = '';
    this.enteredRequest = '';

  }


}
