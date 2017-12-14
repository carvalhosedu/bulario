import { ReceitaProvider } from './../../providers/receita/receita';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';

@Component({
  selector: 'page-receita-edit',
  templateUrl: 'receita-edit.html',
})
export class ReceitaEditPage {

  title: string;
  form: FormGroup;
  receita: any;
  bulas: any = [];

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: ReceitaProvider,
    private toast: ToastController) {

    // maneira 1
    this.receita = this.navParams.data.receita || { };
    
    let bulasRef = firebase.database().ref('/bulas');

    bulasRef.on('value', bulas => {
      console.log("bulas", bulas);
      bulas.forEach( bula => {
        this.bulas.push(bula.val());
        return false;
      });
    });
    

    this.createForm();

    // // maneira 2
    // this.receita = { };
    // this.createForm();

    // if (this.navParams.data.key) {
    //   const subscribe = this.provider.get(this.navParams.data.key).subscribe((c: any) => {
    //     subscribe.unsubscribe();

    //     this.receita = c;
    //     this.createForm();
    //   })
    // }

    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.receita ? 'Alterando receita' : 'Nova receita';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.receita.key],
      problema: [this.receita.problema, Validators.required],
      bula: [this.receita.bula, Validators.required],
      horario: [this.receita.horario, Validators.required],
      quantidade: [this.receita.quantidade, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Receita salva com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar a receita.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }

}
