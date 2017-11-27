import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceitaEditPage } from './receita-edit';

@NgModule({
  declarations: [
    ReceitaEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceitaEditPage),
  ],
})
export class ReceitaEditPageModule {}
