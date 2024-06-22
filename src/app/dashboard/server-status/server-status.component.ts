import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  protected currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {

  }

  // ngOnInit will run after all the inputs are set
  ngOnInit(): void {
    console.log('ngOnInit');

    setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {

        this.currentStatus = 'online';

      } else if (rnd < 0.8) {

        this.currentStatus = 'offline';

      } else {

        this.currentStatus = 'unknown';

      }
    }, 5000);

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit');

  }
}
