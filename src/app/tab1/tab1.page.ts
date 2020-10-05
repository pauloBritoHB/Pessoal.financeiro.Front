import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  public mensagem = 'pagina1';

  constructor(private alertCtrl: AlertController) {

  }

  public async depositar() {
    const alert = await this.alertCtrl.create({
      header: 'Depositar',
      message: 'Informar valor de entrada',
      inputs: [
        {
          name: 'quantiadde',
          placeholder: 'quantidade',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'CANCELA',
          role: 'calcel',
          handler: () => { }
        },
        {
          text: 'CONFIRMAR ',
          role: 'calcel',
          handler: data => {
            const valor: any = parseFloat(data.quantiadde);
            console.log(valor);
          }
        }
      ]
    });
    await alert.present();
  }

  public async retirar() {
    const alert = await this.alertCtrl.create({
      header: 'Depositar',
      message: 'Informar valor de retirada',
      inputs: [
        {
          name: 'quantiadde',
          placeholder: 'quantidade',
          type: 'number'
        },
        {
          name: 'descricao',
          placeholder: 'descrição',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'CANCELA',
          role: 'calcel',
          handler: () => { }
        },
        {
          text: 'CONFIRMAR ',
          role: 'calcel',
          handler: data => {
            const valor: any = parseFloat(data.quantiadde);
            const descrição: any = data.descricao;
            console.log(valor, descrição);
          }
        }
      ]
    });
    await alert.present();
  }


}
