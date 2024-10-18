import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-editeur-page',
  templateUrl: './page-editeur-page.component.html',
  styleUrls: ['./page-editeur-page.component.css']
})
export class PageEditeurPageComponent {

  @Input() page: any;
  @Input() index: number = -1;
  @Input() contenu: any

  monterParagraphe(content: any) {
    const index = this.page.contenu.indexOf(content);
    this.page.contenu.splice(index - 1, 0, this.page.contenu.splice(index, 1)[0]);
  }

  descendreParagraphe(content: any) {
    const index = this.page.contenu.indexOf(content);
    this.page.contenu.splice(index + 1, 0, this.page.contenu.splice(index, 1)[0]);
  }

  supprimerParagraphe(content: any) {
    const index = this.page.contenu.indexOf(content);
    this.page.contenu.splice(index, 1);
  }

}
