import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { User } from './user'
import { environment } from 'src/environments/environment';

// const API = environment

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
}
