import { Component, OnChanges, Input, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ParentComponent implements OnChanges {
  @Input() value: any;
  previousValue: any;
  currentValue: any;
  message: any;
  title = 'PersonalTemplate1';
  ngOnChanges(changes: SimpleChanges) {
    // console.log('Title changed:', changes['title1'].currentValue);

    if (changes['value']) {
      this.previousValue = changes['value'].previousValue;
      this.currentValue = changes['value'].currentValue;
    }
  }
}


@Component({
  selector: 'app-root',
  template: `
    <app-parent [value]="inputValue"></app-parent>
    <button (click)="updateValue()">Update Value</button>
  `
})
export class AppComponent {
  inputValue = 'initial value';

  updateValue() {
    this.inputValue = 'updated value';
  }
}



