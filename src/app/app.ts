import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChildren('trail') trails!: QueryList<ElementRef>;
  isOpen = false;

  private smoothPointer = { x: 0, y: 0 };
  private totalPointsArray = [40, 35, 30, 25];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log('Número de paths encontrados tras timeout:', this.trails.length);

      if (this.trails && this.trails.length > 0) {
        this.smoothPointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        this.initMouseTracking();
        this.updatePath();
      } else {
        console.error('Aun no se encuentran los elementos. Verifica que #trail esté en app.html');
      }
    }, 100);
  }

  initMouseTracking() {
    window.addEventListener('mousemove', (event) => {
      gsap.to(this.smoothPointer, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  }

  updatePath() {
    const trailElements = this.trails.toArray();

    trailElements.forEach((pathRef, index) => {
      const path = pathRef.nativeElement as SVGPathElement;

      const pointsIndex = index % 4;

      if (!(path as any).points) (path as any).points = [];
      let points = (path as any).points;
      points.unshift({ ...this.smoothPointer });

      while (points.length > this.totalPointsArray[pointsIndex]) {
        points.pop();
      }

      if (points.length > 1) {
        let d = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) {
          d += ` L ${points[i].x} ${points[i].y}`;
        }
        path.setAttribute('d', d);
      }
    });

    requestAnimationFrame(() => this.updatePath());
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
