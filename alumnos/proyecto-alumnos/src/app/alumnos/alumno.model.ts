export interface Alumno {
 id: string;
 nombre: string;
 usuario: string;
 email: string;
 curso: string;
}
// Lo que rellena el formulario: todo menos el id
export type DatosAlumno = Omit<Alumno, 'id'>;
