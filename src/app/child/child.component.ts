import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() parentCounter: number;

  childCounter = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {this.childCounter++}, 500)
  }
}
