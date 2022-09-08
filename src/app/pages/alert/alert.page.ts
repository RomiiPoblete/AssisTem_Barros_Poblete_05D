import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  //Aquí se definen los parametros

  handlerMessage='';
  roleMessage='';

  constructor(private alertController: AlertController,
              private menuController: MenuController) {}

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

//metodo que muestra un mensaje con boton ok
  async Saludo() {
    const alert = await this.alertController.create({
      header: 'Saludo',
      subHeader: 'Bienvenido a mi página',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

//metodo que muestra mensaje con 2 botones de accion
  async Consulta() {
    const alert = await this.alertController.create({
      header: 'Quieres ir salir?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => { 
            this.handlerMessage = 'El usuario no quiere salir';
          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'El usuario quiere salir';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

//metodo que ingresa datos
  async Inputs() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus datos',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Nickname (max 8 caracteres)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'Algo sobre ti...',
        },
      ],
    });

    await alert.present();
  }
}
