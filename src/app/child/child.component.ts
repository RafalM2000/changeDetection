import { Component, OnInit, Input, DoCheck, SimpleChanges, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit,  DoCheck, AfterContentInit, AfterContentChecked {

  @Input() parentCounter: {licznik: number};

  constructor() {}

  ngOnInit(): void {
    console.log('OnInit');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('OnChanges', changes);
  // }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  };

  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
}
