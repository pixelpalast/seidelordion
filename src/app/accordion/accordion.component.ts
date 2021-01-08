import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() icon = '';
  @Input() title = '';
  @Input() iconLeft = false;
  @Input() variant = '';
  @Input() disabled = false;
  @ViewChild("panel", { static: false }) panel: ElementRef;

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
