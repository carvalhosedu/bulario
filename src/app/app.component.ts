import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Welcome } from '../pages/welcome/welcome';
import { DatabaseProvider } from '../providers/database/database';
import {AngularFireAuth} from "angularfire2/auth";
import {Login} from "../pages/login/login";
import {TabsPage} from "../pages/tabs/tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Welcome;

  constructor(platform: Platform, private afAuth: AngularFireAuth, statusBar: StatusBar, splashScreen: SplashScreen, database : DatabaseProvider) {
    database.createDatabase();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
    this.afAuth.authState.subscribe(auth => {
      if(!auth)
        this.rootPage = Welcome;
      else
        this.rootPage = TabsPage;
    });
  }
}
