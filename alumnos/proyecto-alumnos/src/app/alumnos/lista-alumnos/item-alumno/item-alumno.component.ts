import { Component, inject, input, signal } from '@angular/core';
import { Alumno } from '../../alumno.model';
import { AlumnoService } from '../../alumno.service';
import { ModalComponent } from '../../../modal/modal.component';
import { DetalleAlumnoComponent } from '../detalle-alumno/detalle-alumno.component';
@Component({
 selector: 'app-item-alumno',
 standalone: true,
 imports: [ModalComponent, DetalleAlumnoComponent],
 templateUrl: './item-alumno.component.html',
 styleUrl: './item-alumno.component.css',
})
export class ItemAlumnoComponent {
 private servicio = inject(AlumnoService);
 alumno = input.required<Alumno>();
 modalAbierto = signal(false);
 abrirModal() { this.modalAbierto.set(true); }
 cerrarModal() { this.modalAbierto.set(false); }
 onEliminar() { this.servicio.eliminarAlumno(this.alumno().id); }
}