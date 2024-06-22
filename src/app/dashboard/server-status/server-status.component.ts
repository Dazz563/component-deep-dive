import { AfterViewInit, Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit {

  protected currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef)

  constructor() {

  }


  // ngOnInit will run after all the inputs are set
  ngOnInit(): void {
    console.log('ngOnInit');

    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {

        this.currentStatus = 'online';

      } else if (rnd < 0.8) {

        this.currentStatus = 'offline';

      } else {

        this.currentStatus = 'unknown';

      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');

  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
