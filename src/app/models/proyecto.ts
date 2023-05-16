export class Proyecto {
    id:number;
    idPersona:number;
    nombre:string;
    descripcion:string;
    fechaRealizacion:string;

    constructor(id:number=0, idPersona:number=0, nombre:string="", descripcion:string="", fechaRealizacion:string="") {
        this.id = id;
        this.idPersona = idPersona;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaRealizacion = fechaRealizacion;
    }
}
