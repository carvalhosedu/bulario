import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { ReceitaProvider, Receita } from '../../providers/receita/receita'
import { EditReceitaPage } from '../edit-receita/edit-receita';



/**
 * Generated class for the ReceitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html',
})
export class ReceitaPage {

  receitas: any[] = [];
  onlyInactives: boolean = false;
  searchText: string = null;

  constructor(public navCtrl: NavController, private toast: ToastController, private receitaProvider: ReceitaProvider) { }

  ionViewDidEnter() {
    this.getAllReceitas();
  }

  getAllReceitas() {
    this.receitaProvider.getAll(!this.onlyInactives, this.searchText)
      .then((result: any[]) => {
        if(result!=undefined)
        this.receitas = result;
      });
  }

  addReceita() {
    this.navCtrl.push(EditReceitaPage);
  }

  editReceita(id: number) {
    this.navCtrl.push(EditReceitaPage, { id: id });
  }

  removeReceita(receita: Receita) {
    this.receitaProvider.remove(receita.id)
      .then(() => {
        // Removendo do array de receitas
        var index = this.receitas.indexOf(receita);
        this.receitas.splice(index, 1);
        this.toast.create({ message: 'Receita removida.', duration: 3000, position: 'botton' }).present();
      })
  }

  filterReceitas(ev: any) {
    this.getAllReceitas();
  }

}
