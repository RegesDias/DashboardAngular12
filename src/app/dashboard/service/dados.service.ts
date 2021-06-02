import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['março', 49],
    ['Abril', 35],
    ['Maio', 36],
    ['Junho', 63],
    ['Julho', 93],
    ['Agosto', 38],
    ['setembro', 34],
    ['Outubro', 22],
    ['Novembro', 77],
    ['Desembro', 92]
  ];

  constructor() { }

  obterDados(): Observable<any>{
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    })
  }
}
