import { Component, input, output } from '@angular/core';
@Component({
 selector: 'app-modal',
 standalone: true,
 templateUrl: './modal.component.html',
 styleUrl: './modal.component.css',
 host: { '(document:keydown.escape)': 'cerrar.emit()' }, // Esc cierra
})
export class ModalComponent {
 titulo = input<string>('');
 cerrar = output<void>();
}