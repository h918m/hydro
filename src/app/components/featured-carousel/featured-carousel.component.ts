import { Component, Input } from '@angular/core';

interface Slide {
  url: string;
  title: string;
}

@Component({
  selector: 'app-featured-carousel',
  standalone: true,
  imports: [],
  templateUrl: './featured-carousel.component.html',
  styleUrl: './featured-carousel.component.css',
})
export class FeaturedCarouselComponent {
  @Input() slides!: Slide[];
  currentIndex: number = 0;
  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }
  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;
  
    this.currentIndex = newIndex;
  }
  
  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
  
    this.currentIndex = newIndex;
  }
  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }
}
