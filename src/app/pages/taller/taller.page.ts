import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.page.html',
  styleUrls: ['./taller.page.scss'],
})
export class TallerPage implements OnInit {

  handlerMessage='';
  roleMessage='';

  constructor(private alertController: AlertController,
              private menuController: MenuController){ }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');

  }

  async IngresoDatos() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus datos',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'Ingrese su dirección',
        },
      ],
    });

    await alert.present();
  }

}
