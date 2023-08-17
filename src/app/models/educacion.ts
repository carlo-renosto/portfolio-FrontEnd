
export class Educacion {
    id:number;
    idInstitucion:number;
    idPersona:number;
    nombreInstitucion:string;
    nombreCarrera:string;
    añoInicio:number;
    añoFin:number;
    estado:boolean;

    constructor(id:number=0, idInstitucion:number=0, idPersona:number=0, nombreInstitucion:string="", nombreCarrera:string="", añoInicio:number=0, añoFin:number=0, estado:boolean=false) { 
        this.id = id;
        this.idInstitucion = idInstitucion;
        this.idPersona = idPersona;
        this.nombreInstitucion = nombreInstitucion; 
        this.nombreCarrera = nombreCarrera;
        this.añoInicio = añoInicio;
        this.añoFin = añoFin;
        this.estado = estado;
    }
}
