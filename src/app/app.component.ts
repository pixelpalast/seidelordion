import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ba-accordion [disabled]="disabled" [label]="label">{{content}}</ba-accordion>
  `,
})
export class AppComponent {
  public label = "Neuer Artikel 3";
  public content = 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.';
  public disabled = true;

  title = 'baaccordiordion';
}
