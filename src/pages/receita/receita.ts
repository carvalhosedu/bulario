import { ReceitaProvider } from './../../providers/receita/receita';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { ReceitaEditPage } from "../receita-edit/receita-edit";

@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html',
})
export class ReceitaPage {

  public receitaList: Array<any>;
  public loadedReceitaList: Array<any>;
  public receitaRef: firebase.database.Reference;
  receitas: Observable<any>;

  constructor(public navCtrl: NavController, private provider: ReceitaProvider,
              private toast: ToastController) {

    this.receitas = this.provider.getAll()
    this.receitaRef = firebase.database().ref('/receitas');

    this.receitaRef.on('value', receitaList => {
      let receitas = [];
      
      receitaList.forEach( receita => {
        var newObj = receita.val();
        newObj['key'] = receita.key;
        receitas.push(newObj);
        return false;
      });

      this.receitaList = receitas;
      this.loadedReceitaList = receitas;
    });
  }

  initializeItems(): void {
    this.receitaList = this.loadedReceitaList;
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;


    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    this.receitaList = this.receitaList.filter((v) => {
      if(v.problema && q) {
        if (v.problema.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(q, this.receitaList.length);

  }

  novaReceita() {
    this.navCtrl.push(ReceitaEditPage);
  }

  editReceita(receita: any) {
    // Maneira 1
    this.navCtrl.push(ReceitaEditPage, { receita: receita });

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
