import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css'],
  
})
export class GrandchildComponent implements OnInit {

  @Input() childCounter: number;

  grandchildCounter = 20;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    setInterval(() => {this.grandchildCounter++; }, 500);

    setInterval(() => {this.ref.detectChanges(); }, 1500);
  }

}
