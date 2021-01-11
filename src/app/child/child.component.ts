import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() parentCounter: number;

  childCounter = 10;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {this.childCounter++; }, 500);
  }
}
