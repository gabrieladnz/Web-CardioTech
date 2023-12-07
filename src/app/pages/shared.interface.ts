export interface Paciente {
  idPaciente: number;
  nomeCompleto: string;
  dataNascimento: Date;
  sexo: string;
  rg: string;
  cpf: string;
  orgaoEmissor: string;
  UF: string;
  estadoCivil: string;
  celular: string;
  endereco: string;
  cep: string;
  bairro: string;
  numero: string;
  complemento: string;
  foto: string;
}

export interface Medico {
  idMedico: number;
  crm: string;
  nomeCompleto: string;
  email: string;
  foto: string;
}

export interface Clinica {
  idClinica: number;
  nome: string;
  endereco: string;
  cep: string;
  cidade: string;
  estado: string;
  telefone: string;
  email: string;
  cnpj: string;
  medico: Medico
}

export interface Agendamento {
  filter(arg0: () => boolean): Agendamento[];
  idAgendamento: number;
  data: Date;
  motivo: string;
  faltou: boolean;
  atendido: boolean;
  paciente: Paciente;
  medico: Medico;
  clinica: Clinica;
}

export interface Faltas {
  idAgendamento: number;
  data: Date;
  motivo: string;
  faltou: boolean;
  paciente: Paciente;
}

export interface Atendimento {
  idAgendamento: number;
  atendido: boolean;
  paciente: Paciente;
}

export interface Resposta {
  Token: string;
  Medico: Medico;
}


