import { Component, ContentChild, ElementRef, ViewEncapsulation, afterNextRender, afterRender, contentChild, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {


  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  public label = input.required<string>();
  // private el = inject(ElementRef);

  constructor() {
    // afterRender(() => console.log('afterRender!')); // will run after any changes have been detected in the entire application

    // afterNextRender(() => console.log('afterNextRender!')); // will run after any changes have been detected in the current component
  }

  onClick() {
    console.log('clicked!');
    // console.log(this.el);
    console.log(this.control());

  }
}
