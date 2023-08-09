import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const slideDownElements = this.elementRef.nativeElement.querySelectorAll('.slide-down');

    const isElementInViewport = (element: HTMLElement): boolean => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    slideDownElements.forEach((element: HTMLElement) => {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });

    window.addEventListener('scroll', () => {
      slideDownElements.forEach((element: HTMLElement) => {
        if (isElementInViewport(element)) {
          element.classList.add('visible');
        }
      });
    });
  }
}
