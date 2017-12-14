import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import {Welcome} from "../welcome/welcome";
import {HomePage} from "../home/home";
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  user = {} as User;

  constructor(private ofAuth: AngularFireAuth,
              public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User){

    if (this.user.password && this.user.email) {
      this.ofAuth.auth.signInWithEmailAndPassword(user.email, user.password)
        .then(auth => {
          // Do custom things with auth
          this.navCtrl.setRoot(HomePage);
        })
        .catch(err => {
          // Handle error
          document.getElementById('msgError').style.display = 'block';
          return;
        });
    }else{
      document.getElementById('msgError').style.display = 'block';
      return;
    }
  }

  voltar(){
    this.navCtrl.push(Welcome);
  }
}
