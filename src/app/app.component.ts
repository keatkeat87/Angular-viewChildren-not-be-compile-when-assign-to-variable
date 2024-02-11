import { Component, ElementRef, effect, viewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    // assign viewChildren() to a variable instead of a property
    const titles = viewChildren<string, ElementRef<HTMLHeadingElement>>(
      'title',
      {
        read: ElementRef,
      }
    );

    effect(() => {
      console.log(titles());
    });
  }
}
