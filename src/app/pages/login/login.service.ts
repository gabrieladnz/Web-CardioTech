import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { User } from './user'
import { environment } from 'src/environments/environment';

// const API = environment

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private infoLoginSubject = new Subject<any>();


  constructor(private httpClient: HttpClient) { }


 // Método para enviar informações de login para outros componentes
 enviarInfoLogin(infoLogin: any) {
  this.infoLoginSubject.next(infoLogin);
}

// Método para obter informações de login como um observable para outros components
obterInfoLogin() {
  return this.infoLoginSubject.asObservable();
}

}
