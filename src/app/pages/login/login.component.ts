import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/core/request/request.service';
import { Medico, Resposta } from '../shared.interface';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPass: boolean = false;
  respostaLogin!: Resposta;
  public formLogin!: FormGroup


  constructor(private formBuilder: FormBuilder, private service: RequestService, private router: Router, private loginService: LoginService) {

  }

  public ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      crm: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login(){
    const { crm, senha } = this.formLogin.value
    this.service.login(crm, senha).subscribe(
      (login) =>{
        this.respostaLogin = login;
        this.router.navigate(['/painel-central']);
        this.loginService.enviarInfoLogin(login)
        console.log('Login realizado!', login)
      },
      (error) => {
        console.log("Erro ao realizar login: ", error)
      }
      )
  }

  logout(){
    this.service.logout();
    console.log('Logout feito! Volte sempre!');
  }

  onSubmit(){
    this.login()
  }



}
