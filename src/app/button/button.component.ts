import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
  <button>
    <ng-content />
    <span class="button-icon">
      <ng-content select="[slot='icon']"></ng-content>
    </span>
  </button>
  `
})
export class ButtonComponent {}
