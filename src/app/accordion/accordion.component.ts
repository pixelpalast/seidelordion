import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  template: `
    <ba-accordion [label]="title" [icon]="iconLeft" [color-variant]="variant" [disabled]="disabled">
      <p>{{panelText}}</p>
    </ba-accordion>`
})
export class AccordionComponent implements OnInit {
  @Input() title = '';
  @Input() iconLeft = false;
  @Input() variant = '';
  @Input() disabled = false;

  public panelText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`;

  private visible = false;

  constructor() { }

  ngOnInit(): void {
  }
}
