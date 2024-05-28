import { Component, contentChild, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgTemplateOutlet } from '@angular/common';
import { WidgetContentDirective } from '../widget-content.directive';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [ButtonComponent, NgTemplateOutlet],
  template: `
    <div class="widget-header">
      <ng-content select="[header]" />
      <app-button class="action">
        <ng-content ngProjectAs="[slot='icon']" select="[slot='action-icon']" />
      </app-button>
    </div>
    @if (!hidden()) {
      <div class="widget-content">
        <ng-container [ngTemplateOutlet]="content()?.tpl || noContent"></ng-container>
        <ng-template #noContent>
          <p class="no-content">No content...</p>
        </ng-template>
      </div>
    }
    <button (click)="hidden.set(!hidden())">Expand/Collapse</button>
  `,
})
export class WidgetComponent {
  hidden = signal(false);
  content = contentChild(WidgetContentDirective);
}
