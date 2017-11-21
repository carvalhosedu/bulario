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

  constructor(private ofAuth: AngularFireAuth,
              public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User){
    try {
      const result = this.ofAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result) {
        this.navCtrl.setRoot(TabsPage);
      }
    }
    catch (e){
      console.error(e);
    }
  }
  voltar(){
    this.navCtrl.push(Welcome);
  }
}
