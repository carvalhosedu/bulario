import { BulaProvider } from './../../providers/bula/bula';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { BulaEditPage } from "../bula-edit/bula-edit";

@Component({
  selector: 'page-bula',
  templateUrl: 'bula.html',
})
export class BulaPage {

  bulas: Observable<any>;

  constructor(public navCtrl: NavController, private provider: BulaProvider,
              private toast: ToastController) {

    this.bulas = this.provider.getAll();
  }

  novaBula() {
    this.navCtrl.push(BulaEditPage);
  }

  editBula(bula: any) {
    // Maneira 1
    this.navCtrl.push(BulaEditPage, {bula: bula });

    // Maneira 2
    // this.navCtrl.push('BulaEditPage', { key: bula.key });
  }

  removeBula(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Bula removida com sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover a bula.', duration: 3000 }).present();
        });
    }
  }

}
