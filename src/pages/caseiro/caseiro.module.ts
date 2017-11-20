import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaseiroPage } from './caseiro';

@NgModule({
  declarations: [
    CaseiroPage,
  ],
  imports: [
    IonicPageModule.forChild(CaseiroPage),
  ],
})
export class CaseiroPageModule {}
