
export class Persona {
    id:number;
    nombre:string;
    apellido:string;
    edad:number;
    ocupacion:string;

    constructor(id:number=0, nombre:string="", apellido:string="", edad:number=0, ocupacion:string="") {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ocupacion = ocupacion;
    }

    getId():number {
        return this.id;
    }
    getNombre():string {
        return this.nombre;
    }
    getApellido():string {
        return this.apellido;
    }
    getEdad():number {
        return this.edad;
    }
    getOcupacion():string {
        return this.ocupacion;
    }
}
