
export class Tecnologia {
    idTecnologia:number;
    idPersona:number;
    nombreTecnologia:string;
    nombrePersona:string;
    nivel:number;

    constructor(idTecnologia:number=0, idPersona:number=0, nombreTecnologia:string="", nombrePersona:string="", nivel:number=0) {
        this.idTecnologia = idTecnologia;
        this.idPersona = idPersona;
        this.nombreTecnologia = nombreTecnologia;
        this.nombrePersona = nombrePersona;
        this.nivel = nivel;
    }
}
