import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ReceitaProvider, Receita } from '../../providers/receita/receita';

/**
 * Generated class for the EditReceitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-receita',
  templateUrl: 'edit-receita.html',
})
export class EditReceitaPage {

  model: Receita;
  categories: any[];

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private receitaProvider: ReceitaProvider) {

    this.model = new Receita();

    if (this.navParams.data.id) {
      this.receitaProvider.get(this.navParams.data.id)
        .then((result: any) => {
          this.model = result;
        })
    }
  }

  save() {
    this.saveReceita()
      .then(() => {
        this.toast.create({ message: 'Receita salva.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar a receita.', duration: 3000, position: 'botton' }).present();
      });
  }

  private saveReceita() {
    if (this.model.id) {
      return this.receitaProvider.update(this.model);
    } else {
      return this.receitaProvider.insert(this.model);
    }
  }

}
