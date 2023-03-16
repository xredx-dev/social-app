import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {
  constructor(private fb: FormBuilder
  ) {
    this.formNuevoUsuario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      genero: ['', [Validators.required]],
    });
  }
  generos: string[] = ['Masculino', 'Femenino'];
  formNuevoUsuario: FormGroup;

  onSubmit() {
    console.log('submit');
    console.log(this.formNuevoUsuario.value);
    event?.preventDefault();
  }

  getFormato(component: string) {
    let formato: string = 'form-control';

    if (
      this.formNuevoUsuario.get(component)?.invalid &&
      this.formNuevoUsuario.get(component)?.touched
    ) {
      formato = 'form control is-invalid';
    } else if (
      this.formNuevoUsuario.get(component)?.valid &&
      this.formNuevoUsuario.get(component)?.touched
    ) {
      formato = 'form control is-invalid';
    }

    return formato;
  }

  getError(component: string) {
    let message: string = '';
    let length: string = '';

    if (this.formNuevoUsuario.get(component)?.hasError('required')) {
      message = 'Este campo es requerido';
    } else if (this.formNuevoUsuario.get(component)?.hasError('minlength')) {
      length =
        this.formNuevoUsuario.get(component)?.errors?.['minlength']?.['requiredLength'];
      message = `El campo debe tener al menos ${length} caracteres`;
    } else if (this.formNuevoUsuario.get(component)?.hasError('email')) {
      message = 'Correo invalido, verifique si esta bien escrito';
    }

    console.log(message);
    return message;
  }

}
