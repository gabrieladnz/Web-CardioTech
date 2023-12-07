import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Agendamento, Atendimento, Faltas, Medico, Paciente, Resposta } from 'src/app/pages/shared.interface';
import { environment } from 'src/environments/environment';
import moment from 'moment';

const API = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})

export class RequestService {

  private informacoesMedico: Medico | null = null;

  constructor(private httpClient: HttpClient) { }

  // LOGIN

  login(crm: string, senha: string): Observable<Resposta> {
    const body = { crm, senha };
    return this.httpClient.post<Resposta>(`${API}/Medicos/login/`, body).pipe(
      tap(resposta => {
        this.salvarToken(resposta?.Token);
        // console.log('Informações do médico após login:', resposta);
      })
    );
  }

    // salvar o token
  private salvarToken(token: string | undefined): void {
    if (token) {
      localStorage.setItem('token', token);
    }
  }

  armazenarInfoMedico(medico: Medico) {
    console.log("oi", this.informacoesMedico)
    this.informacoesMedico = medico;
  }

    // obter o token
  obterToken(): string | null {
    return localStorage.getItem('token');
  }

  obterInfoMedico(): Medico | null {
    return this.informacoesMedico;
  }

    //limpar o token/Sair da conta
  logout(): void {
    localStorage.removeItem('token');
  }

  // PACIENTES

  cadastrarPaciente(paciente: Paciente): Observable<Paciente> {
    return this.httpClient.post<Paciente>(`${API}/Pacientes/cadastrarPaciente/`, paciente);
  }

  pegarPacientes():Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(`${API}/Pacientes/listarPaciente/`);
  }

  pegarPacientesPorId(id: number):Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(`${API}/Pacientes/listarPaciente/${id}`);
  }

  listarTotalPacientes(): Observable<any> {
    return this.httpClient.get(`${API}/Pacientes/totalPacientes/`)
  }

  // MEDICOS

  pegarMedicosPorId(id: number):Observable<Medico[]>{
    return this.httpClient.get<Medico[]>(`${API}/Medicos/listarMedico/${id}`);
  }





  // CLÍNICA




  // AGENDAMENTO

  agendarConsulta(agendamento: Agendamento): Observable<Agendamento> {
    return this.httpClient.post<Agendamento>(`${API}/Agendamentos/agendarConsulta/`, agendamento);
  }

  mostrarAgendamento(): Observable<Agendamento[]> {
    return this.httpClient.get<Agendamento[]>(`${API}/Agendamentos/listarAgendamento/`)
  }

  mostrarAgendamentoPorId(id: number): Observable<Agendamento> {
    return this.httpClient.get<Agendamento>(`${API}/Agendamentos/listarAgendamento/${id}`);
  }

  mostrarPacientesFaltantes(): Observable<Faltas[]> {
    return this.httpClient.get<Faltas[]>(`${API}Agendamentos/listarPacientesFaltantes/`);
  }

  mostrarPacientesAtendidos(): Observable<Atendimento[]>{
    return this.httpClient.get<Atendimento[]>(`${API}Agendamentos/listarPacientesAtendido/`)
  }






  }

