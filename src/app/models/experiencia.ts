
export class Experiencia {
    idInstitucion:number;
    idPersona:number;
    puesto:string;
    añoInicio:number;
    añoFin:number;

    constructor(idInstitucion:number=0, idPersona:number=0, puesto:string="", añoInicio:number=0, añoFin:number=0) {
        this.idInstitucion = idInstitucion;
        this.idPersona = idPersona;
        this.puesto = puesto;
        this.añoInicio = añoInicio;
        this.añoFin = añoFin;
    }
}
