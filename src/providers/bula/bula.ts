import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class BulaProvider {
private PATH = 'bula/';

 constructor(private db: AngularFireDatabase) {
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('bula'))
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

 save(bula: any) {
    return new Promise((resolve, reject) => {
      if (bula.key) {
        this.db.list(this.PATH)
          .update(bula.key, { problema: bula.problema, bula: bula.bula,
            horario: bula.horario, quantidade: bula.quantidade })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ problema: bula.problema, bula: bula.bula,
            horario: bula.horario, quantidade: bula.quantidade })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}