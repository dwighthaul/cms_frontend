import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-page-display',
  templateUrl: './page-display.component.html',
  styleUrls: ['./page-display.component.css']
})
export class PageDisplayComponent {

  currentIndex = 0;


  constructor(public sanitizer: DomSanitizer) {
    this.startCarousel();

  }

  @Input() page: any


  startCarousel() {
    setInterval(() => {

      var images = this.page.contenu.find((contenu: any) => { return contenu.type === "images" })
      if (images) {
        this.currentIndex = (this.currentIndex + 1) % images.images.length;

      }

    }, 3000); // Change every 3 seconds
  }
}
