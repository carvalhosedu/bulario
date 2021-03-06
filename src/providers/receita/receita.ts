import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ReceitaProvider {

  private PATH = 'receitas/';

  constructor(private db: AngularFireDatabase) {
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('problema'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }

  save(receita: any) {
    return new Promise((resolve, reject) => {
      if (receita.key) {
        this.db.list(this.PATH)
          .update(receita.key, { problema: receita.problema, bula: receita.bula,
            horario: receita.horario, quantidade: receita.quantidade })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ problema: receita.problema, bula: receita.bula,
            horario: receita.horario, quantidade: receita.quantidade })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
