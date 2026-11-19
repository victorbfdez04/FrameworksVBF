import { Component, inject, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AlumnoService } from '../alumno.service';
import { DatosAlumno } from '../alumno.model';
@Component({
 selector: 'app-nuevo-alumno',
 standalone: true,
 imports: [FormsModule],
 templateUrl: './nuevo-alumno.component.html',
 styleUrl: './nuevo-alumno.component.css',
})
export class NuevoAlumnoComponent {
 private servicio = inject(AlumnoService);
 guardado = output<void>();
 cancelado = output<void>();
 datos: DatosAlumno = { nombre: '', usuario: '', email: '', curso: '' };
 onGuardar(f: NgForm) {
 if (f.invalid) return;
 this.servicio.agregarAlumno({ ...this.datos }); // copia
 f.resetForm();
 this.guardado.emit();
 }
}
