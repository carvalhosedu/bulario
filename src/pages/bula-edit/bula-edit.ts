import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { BulaProvider } from './../../providers/bula/bula';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-bula-edit',
  templateUrl: 'bula-edit.html',
})
export class BulaEditPage {

  title: string;
  form: FormGroup;
  bula: any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: BulaProvider,
    private toast: ToastController) {

    this.bula = this.navParams.data.bula || { };
    this.createForm();

    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.bula ? 'Alterando bula' : 'Nova bula';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.bula.key],
      remedio: [this.bula.remedio, Validators.required],
      descricao: [this.bula.descricao, Validators.required],
      quantidade: [this.bula.quantidade, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Bula salva com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar a bula.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }


}
