import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-ia',
  templateUrl: './home-ia.component.html',
  styleUrls: ['./home-ia.component.css'],
})
export class HomeIAComponent implements OnInit {
  modal: boolean = false;
  showModal: boolean = false;
  public formulario!: FormGroup;
  public exibirLoading = false;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      idade: ['', Validators.required],
      sexo: ['', Validators.required],
      colesterol: ['', Validators.required],
      eletrocardiograma: ['', Validators.required],
      frequenciaCardiacaMax: ['', Validators.required],
      pressaoArterial: ['', Validators.required],
      dorNoPeito: ['', Validators.required],
      nivelAcucar: ['', Validators.required],
      SLP: ['', Validators.required],
      talassemia: ['', Validators.required]
    });
  }

  /**
   * Abre um modal contendo o diagnóstico gerado pela IA dos exames do paciente.
   * @returns
   */
  public gerarDiagnostico(): boolean {
    this.exibirLoading = true;
    setTimeout(() => {
      console.log('Valor form: ', this.formulario.value);
      this.modal = true;
      this.exibirLoading = false;
    }, 4000);

    return false;
  }

  closeModal(): boolean {
    return (this.modal = false);
  }
}
