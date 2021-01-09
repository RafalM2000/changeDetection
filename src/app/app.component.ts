import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paretnCounter = 0;

  ngOnInit(): void {
    setInterval(() => {this.paretnCounter++}, 500)
  }
}
