import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'tigi';
  constructor() {
    console.log('AppComponent initialized');
  }
  ngOnInit() {
    console.log('AppComponent ngOnInit');
  }
  ngOnDestroy() { 
    console.log('AppComponent ngOnDestroy');
  }
}
