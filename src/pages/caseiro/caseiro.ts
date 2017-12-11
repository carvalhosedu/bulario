import { CaseiroProvider } from './../../providers/caseiro/caseiro';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-caseiro',
  templateUrl: 'caseiro.html',
})

export class CaseiroPage {

  caseiros: Observable<any>;

  constructor(public navCtrl: NavController, private provider: CaseiroProvider,
              private toast: ToastController) {

    this.caseiros = this.provider.getAll();
  }

  novaCaseiro() {
    this.navCtrl.push('RemedioCaseiroPage');
  }

  editCaseiro(caseiro: any) {
    // Maneira 1
    this.navCtrl.push('RemedioCaseiroPage', { caseiro: caseiro });

    // Maneira 2
    // this.navCtrl.push('RemedioCaseiroPage', { key: caseiro.key });
  }

   removeCaseiro(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Receita caseira removida com sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover a receita caseira.', duration: 3000 }).present();
        });
    }
  }

}

