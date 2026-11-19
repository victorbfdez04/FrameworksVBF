import { Component, signal, inject, computed } from '@angular/core';

import { ItemTareaComponent } from './item-tarea/item-tarea.component';
import { TareaService } from '../../tareas.service';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css',
  imports: [ItemTareaComponent],
})
export class ListaTareasComponent {
  private filtroSeleccionado = signal<string>('todas');
  private tareasServicio = inject(TareaService);

  onCambiarFiltroTareas(filtro: string) {
    this.filtroSeleccionado.set(filtro);
  }

  // tareas es un signal computado: se vuelve a calcular cada vez que cambia
  // el filtro seleccionado o la lista de tareas del servicio (solo lectura).
  tareas = computed(() => {
    switch (this.filtroSeleccionado()) {
      case 'todas':
        return this.tareasServicio.todasLasTareas(); // lleva paréntesis porque es un signal
      case 'abierta':
        return this.tareasServicio.todasLasTareas().filter((tarea) => tarea.estado === 'ABIERTA');
      case 'en-progreso':
        return this.tareasServicio.todasLasTareas().filter((tarea) => tarea.estado === 'EN_PROGRESO');
      case 'completada':
        return this.tareasServicio.todasLasTareas().filter((tarea) => tarea.estado === 'COMPLETADA');
      default:
        return this.tareasServicio.todasLasTareas();
    }
  });
}