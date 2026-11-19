import { Component, computed, inject, signal } from '@angular/core';
import { AlumnoService } from '../alumno.service';
import { ItemAlumnoComponent } from './item-alumno/item-alumno.component';
@Component({
 selector: 'app-lista-alumnos',
 standalone: true,
 imports: [ItemAlumnoComponent],
 templateUrl: './lista-alumnos.component.html',
 styleUrl: './lista-alumnos.component.css',
})
export class ListaAlumnosComponent {
 private servicio = inject(AlumnoService);
 private texto = signal('');
 alumnos = computed(() =>
 this.servicio.todosLosAlumnos()
 .filter(a => a.nombre.toLowerCase().includes(this.texto().toLowerCase()))
 );
 onBuscar(t: string) { this.texto.set(t); }
}
