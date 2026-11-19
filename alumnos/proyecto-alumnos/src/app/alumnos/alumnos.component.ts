import { Component, signal } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
@Component({
 selector: 'app-alumnos',
 standalone: true,
 imports: [ModalComponent, NuevoAlumnoComponent, ListaAlumnosComponent],
 templateUrl: './alumnos.component.html',
 styleUrl: './alumnos.component.css',
})
export class AlumnosComponent {
 modalAltaAbierto = signal(false);
 abrirAlta() { this.modalAltaAbierto.set(true); }
 cerrarAlta() { this.modalAltaAbierto.set(false); }
}
