import { Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {


  page = {}

  constructor() {
    this.page = {
      titre: "<h1>Carrosserie Ferrari Maserati tesla dans le Grand Est</h1>",
      contenu: [
        {
          type: "text",
          contenu: "La Carrosserie Anneau Du Rhin effectue tous les travaux de carrosserie sur Ferrari, Maserati et Tesla dans le Bas-Rhin. <br><br>Nous mettons un point d’honneur à vous offrir une prestation de haute qualité pour votre voiture, quel que soit le modèle. D’ailleurs, dès lors qu’un nouveau modèle est mis sur le marché, nos techniciens y sont formés directement au siège de la marque italienne, ceci afin de répondre à vos attentes.",
        },
        {
          type: "separator",
        },
        {
          type: "textimage",
          contenu: "Nos points forts <br><br>Les points forts qui font de nous des experts à part entière sont nos capacités à répondre précisément à votre demande. <br><br>Nous sommes réactifs, nous respectons les délais et manipulons votre voiture avec expertise et savoir-faire.<br><br>Grâce à des formations de pointe, nous sommes vos interlocuteurs privilégiés pour intervenir sur les voitures de luxe, y compris sur les anciens modèles, et notamment sur les carrosseries de Ferrari, Maserati et Tesla dans le Bas-Rhin.",
          image: "https://www.carrosserie-anneau-du-rhin.fr/wp-content/uploads/2021/11/carrosserie-10-1.jpg"
        },
        {
          type: "images",
          images: [{ src: "https://www.carrosserie-anneau-du-rhin.fr/wp-content/uploads/2021/11/carrosserie-01-400x284.jpg" }, { src: "https://www.carrosserie-anneau-du-rhin.fr/wp-content/uploads/2021/11/carrosserie-11-400x284.jpg" }, { src: "https://www.carrosserie-anneau-du-rhin.fr/wp-content/uploads/2021/11/carrosserie-15-400x284.jpg" }],
        },
        {
          type: "textimage",
          contenu: "Un centre agréé pour la réparation <br><br>En tant que garagiste agréé, l’Anneau Du Rhin intervient dans le cadre de votre contrat d’assistance Ferrari. L’entretien et les réparations s’effectuent dans le respect des normes de carrosserie imposées par la marque.<br><br>Ainsi, vous pouvez nous confier votre véhicule en toute sérénité tout en vous assurant qu’il bénéficiera de toute l’expertise nécessaire pour l’entretien de la carrosserie Ferrari, Maserati et Tesla dans le Bas-Rhin.",
          image: "https://www.carrosserie-anneau-du-rhin.fr/wp-content/uploads/2021/11/carrosserie-12.jpg"
        },

      ]
    }
  }


}
