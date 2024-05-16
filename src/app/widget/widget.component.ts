import { Component } from '@angular/core';

@Component({
  selector: 'app-widget',
  standalone: true,
  template: `
    <div class="widget-header">
      <div class="widget-title">Weather Forecast</div>
      <div class="widget-sub-title">Currently in Vienna, Austria</div>
    </div>
    <div class="widget-content">
      <div class="sky-condition">☀️</div>
      <div class="temperature">21°C</div>
    </div>
  `,
})
export class WidgetComponent {

}
