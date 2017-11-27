import { ReceitaProvider } from './../../providers/receita/receita';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html',
})
export class ReceitaPage {

  receitas: Observable<any>;

  constructor(public navCtrl: NavController, private provider: ReceitaProvider,
              private toast: ToastController) {

    this.receitas = this.provider.getAll();
  }

  novaReceita() {
    this.navCtrl.push('ReceitaEditPage');
  }

  editReceita(receita: any) {
    // Maneira 1
    this.navCtrl.push('ReceitaEditPage', { receita: receita });

    // Maneira 2
    // this.navCtrl.push('ReceitaEditPage', { key: receita.key });
  }

  removeReceita(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Receita removida com sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover a receita.', duration: 3000 }).present();
        });
    }
  }

}
