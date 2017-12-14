import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { CaseiroProvider } from './../../providers/caseiro/caseiro';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-remedio-caseiro',
  templateUrl: 'remedio-caseiro.html',
})
export class RemedioCaseiroPage {

  title: string;
  form: FormGroup;
  caseiro: any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: CaseiroProvider,
    private toast: ToastController) {

    this.caseiro = this.navParams.data.caseiro || { };
    this.createForm();

    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.caseiro ? 'Alterando receita caseira' : 'Nova receita caseira';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.caseiro.key],
      problema: [this.caseiro.problema, Validators.required],
      ingredientes: [this.caseiro.ingredientes, Validators.required],
    });
  }

 onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Receita caseira salva com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar a receita caseira.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }

}
