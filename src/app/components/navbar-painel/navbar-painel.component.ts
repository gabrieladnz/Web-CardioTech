import { Component } from '@angular/core';
import { RequestService } from 'src/app/core/request/request.service';
import { Medico } from 'src/app/pages/shared.interface';
@Component({
  selector: 'app-navbar-painel',
  templateUrl: './navbar-painel.component.html',
  styleUrls: ['./navbar-painel.component.css']
})
export class NavbarPainelComponent {

  modal: boolean = false;
  medico: Medico[] = [];
  constructor (private service: RequestService) {}

  ngOnInit(){
    this.mostrarMedico()
  }

  openModal(){
    console.log('clicado')
    this.modal = !this.modal;
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
