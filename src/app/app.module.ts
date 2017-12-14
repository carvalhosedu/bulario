import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { ReceitaProvider } from '../providers/receita/receita';
import { ReceitaPage } from "../pages/receita/receita";
import { ReceitaEditPage } from "../pages/receita-edit/receita-edit";
import { CaseiroProvider } from '../providers/caseiro/caseiro';
import { BulaProvider } from '../providers/bula/bula';
import { CaseiroPage } from "../pages/caseiro/caseiro";
import { BulaPage } from "../pages/bula/bula";
import { BulaEditPage } from "../pages/bula-edit/bula-edit";
import { RemedioCaseiroPage } from "../pages/remedio-caseiro/remedio-caseiro";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    RemedioCaseiroPage,
    CaseiroPage,
    HomePage,
    Welcome,
    Login,
    Signup,
    BulaPage,
    BulaEditPage,
    ReceitaPage,
    ReceitaEditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    RemedioCaseiroPage,
    CaseiroPage,
    HomePage,
    Welcome,
    Login,
    Signup,
    BulaPage,
    BulaEditPage,
    ReceitaPage,
    ReceitaEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReceitaProvider,
    CaseiroProvider,
    BulaProvider
  ]
})
export class AppModule {}
