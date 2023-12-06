import { Component } from '@angular/core';
import { RequestService } from 'src/app/core/request/request.service';
import { ActivatedRoute } from '@angular/router';
import { Medico } from '../shared.interface';

@Component({
  selector: 'app-painel-central',
  templateUrl: './painel-central.component.html',
  styleUrls: ['./painel-central.component.css']
})
export class PainelCentralComponent {

  totalPacientes: number = 0
  medico: Medico | null = null;


  constructor ( private service: RequestService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.carregarTotalPacientes()
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
