import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import {Welcome} from "../welcome/welcome";
import {HomePage} from "../home/home";

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  user = {} as User;

  constructor(private navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController, private ofAuth: AngularFireAuth) {
    this.user.email = this.navParams.get('email');
  }

  signup() {

    if (this.user.password && this.user.passwordRetyped) {

      if (this.user.password !== this.user.passwordRetyped) {
        let alert = this.alertCtrl.create({
          title: 'Erro !',
          message: 'As senhas não conferem, por favor digite-as novamente !',
          buttons: ['Confirmar']
        });
        alert.present();
        return;
      }

      if (this.user.password.length < 6) {
        let alert = this.alertCtrl.create({
          title: 'Erro !',
          message: 'A senha deve conter no mínimo 6 dígitos !',
          buttons: ['Confirmar']
        });
        alert.present();
        return;
      }

      // Firebase Signup Code
      this.ofAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(auth => {
          // Could do something with the Auth-Response
          let alert = this.alertCtrl.create({
            title: 'Bem-vindo ao Meu Bulário!',
            message: 'Usuário cadastrado com sucesso !',
            buttons: ['Confirmar']
          });
          alert.present();
          this.navCtrl.setRoot(HomePage);
        })
        .catch(err => {
          // Handle error
          if (err.code == "auth/invalid-email") {
            let alert = this.alertCtrl.create({
              title: 'Erro',
              message: 'Endereço de e-mail inválido !',
              buttons: ['Confirmar']
            });
            alert.present();
            return;
          }
          let alert = this.alertCtrl.create({
            title: 'Error',
            message: err.message,
            buttons: ['Confirmar']
          });
          alert.present();
          return;
        });
    }else{
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Todos os campos são obrigatórios!',
        buttons: ['Confirmar']
      });
      alert.present();
      return;
    }
  }

  voltar(){
    this.navCtrl.push(Welcome);
  }
}
