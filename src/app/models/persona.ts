
export class Persona {
    id:number;
    nombre:string;
    apellido:string;
    edad:number;
    pais:string;
    ciudad:string;
    ocupacion:string;
    descripcion:string;

    constructor(id:number=0, nombre:string="", apellido:string="", edad:number=0,  pais:string="", ciudad:string="", ocupacion:string="", descripcion:string="") {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.pais = pais;
        this.ciudad = ciudad;
        this.ocupacion = ocupacion;
        this.descripcion = descripcion;
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
    getPais():string {
        return this.pais;
    }
    getCiudad():string {
        return this.ciudad;
    }
    getOcupacion():string {
        return this.ocupacion;
    }
}
