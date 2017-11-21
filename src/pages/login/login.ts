import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import {Welcome} from "../welcome/welcome";
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  user = {} as User;
  public mesError = false;

  constructor(private ofAuth: AngularFireAuth,
              public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User){
    this.ofAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(auth => {
        // Do custom things with auth
        this.navCtrl.setRoot(TabsPage);
      })
      .catch(err => {
        // Handle error
        document.getElementById('msgError').style.display='block';
        return;
      });
  }

  voltar(){
    this.navCtrl.push(Welcome);
  }
}
