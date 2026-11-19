import { Injectable, signal } from '@angular/core';
import { Alumno, DatosAlumno } from './alumno.model';
@Injectable({ providedIn: 'root' })
export class AlumnoService {
 private alumnos = signal<Alumno[]>([
 { id: '1', nombre: 'Ana', usuario: 'ana', email: 'a@m.com', curso: '2DAW' },
 { id: '2', nombre: 'Luis', usuario: 'luis', email: 'l@m.com', curso: '1DAW' },
 ]);
 todosLosAlumnos = this.alumnos.asReadonly();
 agregarAlumno(d: DatosAlumno) {
 this.alumnos.update(v => [...v, { ...d, id: Math.random().toString() }]);
 }
 actualizarAlumno(id: string, c: Partial<DatosAlumno>) {
 this.alumnos.update(v => v.map(a => a.id === id ? { ...a, ...c } : a));
 }
 eliminarAlumno(id: string) {
 this.alumnos.update(v => v.filter(a => a.id !== id));
 }
}
