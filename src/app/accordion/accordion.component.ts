import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accordion',
  styleUrls: ['./accordion.component.css'],
  template:
    `<div class="{{class}}">
    <button class="accordion" (click)="toggle()">{{title}}<div class="icon {{icon}}"></div></button>
    <div class="panel" #panel>
      <p>
          {{panelText}}
      </p>
    </div>
  </div>`
})
export class AccordionComponent implements OnInit {

  @Input() icon = '';
  @Input() title = '';
  @Input() iconLeft = false;
  @Input() variant = '';
  @Input() disabled = false;
  @ViewChild("panel", { static: false }) panel: ElementRef;

  public panelText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`;

  private visible = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    if (!this.disabled) {
      this.visible = !this.visible;
      this.panel.nativeElement.style.display = this.visible ? "block" : "none";
      this.icon = this.visible ? 'minus' : 'plus';
    }
  }

  get class() {
    let variantClass = `accordion-item-${this.variant}`;
    let returnValue = `accordion-item ${(this.variant) ? variantClass : ''} ${this.disabled ? 'disabled' : ''}`;
    if (this.iconLeft) {
      returnValue += ` icon-left`;
    }

    return returnValue.trim();
  }
}
