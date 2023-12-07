import { LoginService } from './../login/login.service';
import { Component } from '@angular/core';
import { RequestService } from 'src/app/core/request/request.service';
import { ActivatedRoute } from '@angular/router';
import { Agendamento, Atendimento, Faltas, Medico, Paciente } from '../shared.interface';

@Component({
  selector: 'app-painel-central',
  templateUrl: './painel-central.component.html',
  styleUrls: ['./painel-central.component.css']
})
export class PainelCentralComponent {

  totalPacientes: number = 0
  agendamentos: Agendamento[] = [];
  faltas: Faltas[] = []
  atendidos: Atendimento[] = []
  idAgendamento: number = 0;
  idMedico: number = 4;
  paciente: Paciente[] = []
  medico: Medico[] = [];
  today: Date = new Date();
  mostrarApenasDoDia: boolean = false;


  constructor ( private service: RequestService, private LoginService: LoginService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.carregarTotalPacientes()
    this.listarConsultas()
    this.mostrarPacientes()
    this.mostrarPacientesAtendidos()
    this.mostrarPacientesFaltantes()
    this.mostrarMedico()


    // this.mostrarAgendamentoPorId();
    // console.log(this.mostrarPacientes())
    // console.log("oi", this.medico)
    // this.medico = this.service.obterInfoMedico();
  }

  // PACIENTES

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

  // AGENDAS

  listarConsultas(){
    this.service.mostrarAgendamento().subscribe(
      (agenda) => {
        this.agendamentos =  agenda;
        console.log("Lista de Agendamentos: ", agenda)
      },
      (error) => {
        console.error("Erro ao listar agendamentos", error)
      }
      );
  }

  mostrarPacientesFaltantes(){
    this.service.mostrarPacientesFaltantes().subscribe(
      (falta) => {
        this.faltas = falta
        console.log('Pacientes que faltaram a consulta marcada: ', falta)
      },
      (error) =>{
        console.error('Erro ao buscar pacientes que faltaram a consulta', error)
      }
    )
  }

  mostrarPacientesAtendidos(){
    this.service.mostrarPacientesAtendidos().subscribe(
      (atendidos) => {
        this.atendidos = atendidos
        console.log('Pacientes que foram atendidos: ', atendidos)
      },
      (error) => {
        console.error('Erro ao buscar pacientes atendidos', error)
      }
    )
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

  // MÉDICOS
  mostrarMedico(){
    this.service.pegarMedicosPorId(4).subscribe(
      (medicos) => {
        // Assuma que o serviço retorna um array, mas você pode ajustar conforme necessário
        this.medico = medicos;
        if (medicos.length > 0) {
          console.log('Informações detalhadas do médico:', medicos);
        } else {
          console.error('Médico não encontrado.');
        }
      },
      (error) => {
        console.error('Erro ao obter informações detalhadas do médico:', error);
      }
    );
  }


}
