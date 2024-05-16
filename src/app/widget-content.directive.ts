import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[appWidgetContent]',
  standalone: true
})
export class WidgetContentDirective {
  tpl = inject(TemplateRef)
}
