import { Component } from '@angular/core';
import { RequestService } from 'src/app/core/request/request.service';
import { ActivatedRoute } from '@angular/router';
import { Agendamento, Medico, Paciente } from '../shared.interface';

@Component({
  selector: 'app-painel-central',
  templateUrl: './painel-central.component.html',
  styleUrls: ['./painel-central.component.css']
})
export class PainelCentralComponent {

  totalPacientes: number = 0
  agendamentos: Agendamento[] = []
  idAgendamento: number = 0;
  paciente: Paciente[] = []
  medico: Medico | null = null;
  today: Date = new Date();
  mostrarApenasDoDia: boolean = false;


  constructor ( private service: RequestService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.carregarTotalPacientes()
    this.listarConsultas()
    this.mostrarPacientes()
    this.mostrarAgendamentoPorId();
    console.log(this.mostrarPacientes())
    console.log("oi", this.medico)
    this.medico = this.service.obterInfoMedico();
  }

  carregarTotalPacientes(): void {
    this.service.listarTotalPacientes().subscribe(
      (response) => {
        this.totalPacientes = response['Total de pacientes'];
        console.log('Total de Pacientes:', this.totalPacientes);
      },
      (error) => {
        console.error('Erro ao carregar o total de pacientes:', error);
      }
    );
  }

  listarConsultas(){
    this.service.mostrarAgendamento().subscribe(
      (agendamento) => {
        this.agendamentos =  agendamento;
        console.log("Lista de Agendamentos: ", agendamento)
      },
      (error) => {
        console.error("Erro ao listar agendamentos", error)
      }
      );
  }

  mostrarAgendamentoPorId(){
    this.service.mostrarAgendamentoPorId(this.idAgendamento).subscribe(
      (agendamento) =>{
        this.agendamentos = agendamento.filter(() => this.isSameDay(new Date(agendamento.data), this.today));
        console.log('IdAgendamento: ', agendamento.idAgendamento)
      },
      (error) => {
        console.log("Erro ao pegar Agendamento por id ", error)
      }
      );
  }

  // Filtra agendamento por dia
  filtrarPorDia(): void {
    this.mostrarApenasDoDia = true;
    this.listarConsultas();
  }

   // Função para verificar se duas datas são do mesmo dia
   isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
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



  // mostrarMedico(){
  //   this.service.pegarMedicosPorId(idMedico).subscribe(
  //     (medicos: Medico[]) => {
  //       // Assuma que o serviço retorna um array, mas você pode ajustar conforme necessário
  //       this.medicos = medicos;
  //       if (medicos.length > 0) {
  //         console.log('Informações detalhadas do médico:', this.medicos[0]);
  //       } else {
  //         console.error('Médico não encontrado.');
  //       }
  //     },
  //     (error) => {
  //       console.error('Erro ao obter informações detalhadas do médico:', error);
  //     }
  //   );
  // }



  }
}
