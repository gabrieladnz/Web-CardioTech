import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prontuarios',
  templateUrl: './prontuarios.component.html',
  styleUrls: ['./prontuarios.component.css']
})
export class ProntuariosComponent {

  showModal: boolean = false;
  formCadastro: boolean = false;

  formPaciente!: FormGroup;

  constructor (private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.formPaciente = this.formBuilder.group({
      nome: [''],
      dataNasci: [''],
      sexo: [''],
      estadoCivil: [''],
      cpf: [''],
      rg: [''],
      orgaoEmissor: [''],
      uf: [''],
      celular: [''],
      outroNumero: [''],
      cep: [''],
      endereco: [''],
      bairro: [''],
      numero: [''],
      complemento: ['']
    })
  }


  abrirForm(){
    console.log("Modal dados dos pacientes aberto")
    this.showModal = !this.showModal
  }

  fecharForm(){
    this.showModal = false;
    this.formCadastro = false;
  }

  abrirFormCadastro(){
    console.log("Modal cadastro aberto")
    this.formCadastro = !this.formCadastro;
  }

  cadastrarPaciente(){
    this.formCadastro = !this.formCadastro;
  }
}
