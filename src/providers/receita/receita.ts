import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

/*
  Generated class for the ReceitaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReceitaProvider {

  constructor(private dbProvider: DatabaseProvider) { }

  public insert(receita: Receita) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'insert into receita (problema, bula, horario, quantidade) values (?, ?, ?, ?)';
        let data = [receita.problema, receita.bula, receita.horario, receita.quantidade];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public update(receita: Receita) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'update receita set problema = ?, bula = ?, horario = ?, quantidade = ? where id = ?';
        let data = [receita.problema, receita.bula, receita.horario, receita.quantidade, receita.id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public remove(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'delete from receita where id = ?';
        let data = [id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public get(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from receita where id = ?';
        let data = [id];

        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let item = data.rows.item(0);
              let receita = new Receita();
              receita.id = item.id;
              receita.problema = item.name;
              receita.bula = item.price;
              receita.horario = item.duedate;
              receita.quantidade = item.active;

              return receita;
            }

            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getAll(active: boolean, name: string = null) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'SELECT * FROM Receita';
        // var data: any[] = [active ? 1 : 0];

        return db.executeSql(sql,[])
          .then((data: any) => {
            if (data.rows.length > 0) {
              let receitas: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var receita = data.rows.item(i);
                receitas.push(receita);
              }
              return receitas;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
}

export class Receita {
  id: number;
  problema: string;
  bula: string;
  horario: string;
  quantidade: number;
}
