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
      titre: "Carrosserie Ferrari Maserati tesla dans le Grand Est",
      contenu: [
        {
          type: "text",
          "contenu": "<h2>La Carrosserie Anneau Du Rhin effectue tous les travaux de carrosserie sur <strong>Ferrari, Maserati et Tesla </strong>dans le Bas-Rhin. </h2><p><br></p><p>Nous mettons un point d’honneur à vous offrir une prestation de haute qualité pour votre voiture, quel que soit le modèle. D’ailleurs, dès lors qu’un nouveau modèle est mis sur le marché, nos techniciens y sont formés directement au siège de la marque italienne, ceci afin de répondre à vos attentes.</p>"
        },
        {
          type: "separator",
        },
        {
          type: "textimage",
          "contenu": "<p><strong class=\"ql-size-large\" style=\"color: rgb(230, 0, 0);\">Nos points forts</strong></p><p><br></p><p>Les points forts qui font de nous des experts à part entière sont nos capacités à répondre précisément à votre demande.</p><p><br></p><p><strong>Nous sommes réactifs, nous respectons les délais</strong> et manipulons votre voiture avec expertise et savoir-faire.</p><p><br></p><p>Grâce à des formations de pointe, nous sommes vos interlocuteurs privilégiés pour intervenir sur les voitures de luxe, y compris sur les anciens modèles, et notamment sur les <strong>carrosseries de Ferrari, Maserati et Tesla dans le Bas-Rhin.</strong></p>",
          image: "https://www.carrosserie-anneau-du-rhin.fr/wp-content/uploads/2021/11/carrosserie-10-1.jpg"
        },
        {
          type: "images",
          images: [{ src: "https://www.carrosserie-anneau-du-rhin.fr/wp-content/uploads/2021/11/carrosserie-01-400x284.jpg" }, { src: "https://www.carrosserie-anneau-du-rhin.fr/wp-content/uploads/2021/11/carrosserie-11-400x284.jpg" }, { src: "https://www.carrosserie-anneau-du-rhin.fr/wp-content/uploads/2021/11/carrosserie-15-400x284.jpg" }, { src: "https://www.carrosserie-anneau-du-rhin.fr/wp-content/uploads/2021/11/carrosserie-09-400x284.jpg" }],
        },
        {
          type: "textimage",
          "contenu": "<p><strong class=\"ql-size-large\" style=\"color: rgb(230, 0, 0);\">Un centre agréé pour la réparation </strong></p><p><br></p><p>En tant que garagiste agréé, l’Anneau Du Rhin intervient dans le cadre de<strong> votre contrat d’assistance Ferrari</strong>. L’entretien et<span style=\"color: rgb(230, 0, 0);\"> les réparations</span> s’effectuent dans le respect des normes de carrosserie imposées par la marque.</p><p><br></p><p>Ainsi, vous pouvez nous confier votre véhicule en toute sérénité tout en vous assurant qu’il bénéficiera de toute l’expertise nécessaire pour l’entretien de <strong>la carrosserie Ferrari, Maserati et Tesla dans le Bas-Rhin.</strong></p>",
          image: "https://www.carrosserie-anneau-du-rhin.fr/wp-content/uploads/2021/11/carrosserie-12.jpg"
        },
      ]
    }
  }


}
