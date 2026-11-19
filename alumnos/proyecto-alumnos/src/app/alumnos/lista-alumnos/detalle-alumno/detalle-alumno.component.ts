import { Component, OnInit, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alumno, DatosAlumno } from '../../alumno.model';
import { AlumnoService } from '../../alumno.service';
@Component({
 selector: 'app-detalle-alumno',
 standalone: true,
 imports: [FormsModule],
 templateUrl: './detalle-alumno.component.html',
 styleUrl: './detalle-alumno.component.css',
})
export class DetalleAlumnoComponent implements OnInit {
 private servicio = inject(AlumnoService);
 alumno = input.required<Alumno>();
 cerrar = output<void>();
 datos: DatosAlumno = { nombre: '', usuario: '', email: '', curso: '' };
 ngOnInit() {
 const a = this.alumno(); // copia de trabajo
 this.datos = { nombre: a.nombre, usuario: a.usuario, email: a.email, curso: a.curso };
 }
 onGuardar() {
 this.servicio.actualizarAlumno(this.alumno().id, this.datos);
 this.cerrar.emit();
 }
 onEliminar() {
 this.servicio.eliminarAlumno(this.alumno().id);
 this.cerrar.emit();
 }
}