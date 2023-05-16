
export class Educacion {
    id:number;
    idInstitucion:number;
    idPersona:number;
    nombreCarrera:string;
    añoInicio:number;
    añoFin:number;
    estado:boolean;

    constructor(id:number=0, idInstitucion:number=0, idPersona:number=0, nombreCarrera:string="", añoInicio:number=0, añoFin:number=0, estado:boolean=false) { 
        this.id = id;
        this.idInstitucion = idInstitucion;
        this.idPersona = idPersona;
        this.nombreCarrera = nombreCarrera;
        this.añoInicio = añoInicio;
        this.añoFin = añoFin;
        this.estado = estado;
    }
}
