
export class Tecnologia {
    private _idTecnologia: number;
    private _idPersona: number;
    private _nombreTecnologia: string;
    private _nombrePersona: string;
    private _nivel: number;

    constructor(idTecnologia:number=0, idPersona:number=0, nombreTecnologia:string="", nombrePersona:string="", nivel:number=0) {
        this._idTecnologia = idTecnologia;
        this._idPersona = idPersona;
        this._nombreTecnologia = nombreTecnologia;
        this._nombrePersona = nombrePersona;
        this._nivel = nivel;
    }

    get idTecnologia(): number {
        return this._idTecnologia;
    }
    set idTecnologia(idTecnologia) {
        this._idTecnologia = idTecnologia;
    }

    get idPersona(): number {
        return this._idPersona;
    }
    set idPersona(idPersona) {
        this._idPersona = idPersona;
    }

    get nombreTecnologia(): string {
        return this._nombreTecnologia;
    }
    set nombreTecnologia(nombreTecnologia) {
        this._nombreTecnologia = nombreTecnologia;
    }

    get nombrePersona(): string {
        return this._nombrePersona;
    }
    set nombrePersona(nombrePersona) {
        this._nombrePersona = nombrePersona;
    }

    get nivel(): number {
        return this._nivel;
    }
    set nivel(nivel) {
        this._nivel = nivel;
    }
}
