import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cms_frontend';

  controleur = {
    "afficherLoginOnMenu": true
  }

  public updateMenu() {
    if (sessionStorage.getItem("id")) {
      this.controleur.afficherLoginOnMenu = false
    }
  }

}
