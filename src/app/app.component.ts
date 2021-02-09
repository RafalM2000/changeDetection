import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  parentCounter = {licznik: 0};

  ngOnInit(): void {
      }

  sendCounter(): void {
    this.parentCounter.licznik++;
  }
}
