import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestService } from 'src/app/core/request/request.service';
import { Paciente } from '../shared.interface';


@Component({
  selector: 'app-prontuarios',
  templateUrl: './prontuarios.component.html',
  styleUrls: ['./prontuarios.component.css']
})
export class ProntuariosComponent {

  showModal: boolean = false;
  formCadastro: boolean = false;
  formPaciente!: FormGroup;
  paciente: Paciente[] = [];

  constructor (private formBuilder: FormBuilder, private service: RequestService) {}

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
    });

    this.mostrarPacientes()
  }

  mostrarPacientes(){
    this.service.pegarPacientes().subscribe(
      (pacientes) => {
        this.paciente = pacientes;
        console.log("Pacientes: ", pacientes)
      },
      (error) => {
        console.log("Não há pacientes cadastrados", error)
      }
    );
  }


  abrirForm(paciente: Paciente){
    this.showModal = !this.showModal

    this.formPaciente = this.formBuilder.group({
      nome: [paciente.nomeCompleto],
      dataNasci: [paciente.dataNascimento],
      sexo: [paciente.sexo],
      estadoCivil: [paciente.estadoCivil],
      cpf: [paciente.cpf],
      rg: [paciente.rg],
      orgaoEmissor: [paciente.orgaoEmissor],
      uf: [paciente.UF],
      celular: [paciente.celular],
      outroNumero: [''],
      cep: [paciente.cep],
      endereco: [paciente.endereco],
      bairro: [paciente.bairro],
      numero: [paciente.numero],
      complemento: [paciente.complemento]
    });
    console.log(`Modal do paciente ${paciente.nomeCompleto} aberto`)
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

  // formatarData(data: Date){
  //   const datas = moment(data);

  //   datas.format('dd/MM/YYYY')
  //   console.log(datas)
  //   return datas;
  // }
}
