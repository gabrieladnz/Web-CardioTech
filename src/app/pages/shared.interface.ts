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

export interface Resposta {
  Token: string;
  Medico: Medico;
}


