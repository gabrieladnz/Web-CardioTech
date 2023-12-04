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

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      idade: ['', Validators.required],
      sexo: ['', Validators.required],
      colesterol: ['', Validators.required],
      eletrocardiograma: ['', Validators.required],
      frequenciaCardiacaMax: ['', Validators.required],
      pressaoArterial: ['', Validators.required],
      dorNoPeito: ['', Validators.required],
    });
  }

  openModal(): boolean {
    console.log('Valor form: ', this.formulario.value);
    return (this.modal = true);
  }

  closeModal(): boolean {
    return (this.modal = false);
  }
}
