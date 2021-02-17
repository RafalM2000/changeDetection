import { Component, OnInit, Input, OnChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy,
  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit,  OnChanges,
AfterViewInit, AfterViewChecked , AfterContentInit, AfterContentChecked,
OnDestroy {

  @Input() parentCounter: number;

  constructor() {}

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnChanges(): void {
    console.log('OnChanges');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
