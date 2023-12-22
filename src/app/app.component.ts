import { Component } from '@angular/core';
import { Contact } from './models/Contact';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulaire-Massarra-ab';
  contact : Contact = new Contact(0,"","","","Work","","");
  listContacts: Array<Contact> = new Array<Contact>();
  onSubmit() {
    // Logique de soumission du formulaire ici
    //console.log('Formulaire soumis avec succès', this.contact);
    if (this.contact.lastName || this.contact.firstName|| this.contact.email) {
      alert("Ajouter avec succés")
      this.listContacts.push(this.contact);
    this.contact=new Contact(0,"","","","Work","","");
    } else {
      alert("Vérifier les champs requis")
    }
  }

  }

