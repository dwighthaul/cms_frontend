import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.css']
})
export class PageEditorComponent {

  types = [{
    value: "images",
    name: "Images",
    format: {
      images: []
    }
  }, {
    value: "textimage",
    name: "Texte + Image",
    format: {
      contenu: "",
      image: ""
    }
  },
  {
    value: "text",
    name: "Text",
    format: {
      contenu: ""
    }
  },
  ]

  ajouterUneImage(contenu: any) {
    contenu.images.push({ src: "" });
  }

  typePageAAjouter: string | undefined;


  @Input() page: any;


  ajouterUnParagraphe() {

    var type = this.types.find((i) => { return (this.typePageAAjouter != undefined && (i.value == this.typePageAAjouter)) })

    if (!type) {
      return
    }

    this.page.contenu.push({
      type: this.typePageAAjouter,
      ...type?.format

    });
  }

  // TODO : Supprimer
  supprimerParagraphe(content: any) {
    const index = this.page.contenu.indexOf(content);
    this.page.contenu.splice(index, 1);
  }

  supprimerLien(contenu: any, image: any) {
    const index = contenu.images.indexOf(image);
    contenu.images.splice(index, 1);


  }


}
