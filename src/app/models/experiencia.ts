
export class Experiencia {
    private _idInstitucion: number;
    private _idPersona: number;
    private _puesto: string;
    private _añoInicio: number;
    private _añoFin: number;

    constructor(idInstitucion:number=0, idPersona:number=0, puesto:string="", añoInicio:number=0, añoFin:number=0) {
        this._idInstitucion = idInstitucion;
        this._idPersona = idPersona;
        this._puesto = puesto;
        this._añoInicio = añoInicio;
        this._añoFin = añoFin;
    }

    get idInstitucion(): number {
        return this._idInstitucion;
    }
    set idInstitucion(idInstitucion: number) {
        this._idInstitucion = idInstitucion;
    }

    get idPersona(): number {
        return this._idPersona;
    }
    set idPersona(idPersona: number) {
        this._idPersona = idPersona;
    }

    get puesto(): string {
        return this._puesto;
    }
    set puesto(puesto: string) {
        this._puesto = puesto;
    }

    get añoInicio(): number {
        return this._añoInicio;
    }
    set añoInicio(añoInicio) {
        this._añoInicio = añoInicio;
    }

    get añoFin(): number {
        return this._añoFin;
    }
    set añoFin(añoFin) {
        this._añoFin = añoFin;
    }
}
