import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  parentCounter = 0;

  ngOnInit(): void {
  }

  counterPlus(): void {
    this.parentCounter++;
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  sendCounter(): void {
    this.parentCounter++;
  }
}
