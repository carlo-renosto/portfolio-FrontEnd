
export class Educacion {
    private _id: number;
    private _idInstitucion: number;
    private _idPersona: number;
    private _nombreInstitucion: string;
    private _nombreCarrera: string;
    private _añoInicio: number;
    private _añoFin: number;
    private _estado: boolean;
    private _estadoS: string;

    constructor(id:number=0, idInstitucion:number=0, idPersona:number=0, nombreInstitucion:string="", nombreCarrera:string="", añoInicio:number=0, añoFin:number=0, estado:boolean=false) { 
        this._id = id;
        this._idInstitucion = idInstitucion;
        this._idPersona = idPersona;
        this._nombreInstitucion = nombreInstitucion; 
        this._nombreCarrera = nombreCarrera;
        this._añoInicio = añoInicio;
        this._añoFin = añoFin;
        this._estado = estado;
        this._estadoS = estado ? "Completado" : "En curso";
    }

    get id(): number {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }

    get idInstitucion(): number {
        return this._idInstitucion;
    }
    set idInstitucion(idInstitucion) {
        this._idInstitucion = idInstitucion;
    }

    get idPersona(): number {
        return this._idPersona;
    }
    set idPersona(idPersona) {
        this._idPersona = idPersona;
    }

    get nombreInstitucion(): string {
        return this._nombreInstitucion;
    }
    set nombreInstitucion(nombreInstitucion) {
        this._nombreInstitucion = nombreInstitucion;
    }

    get nombreCarrera(): string {
        return this._nombreCarrera;
    }
    set nombreCarrera(nombreCarrera) {
        this._nombreCarrera = nombreCarrera;
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

    get estado(): boolean {
        return this._estado;
    }
    set estado(estado) {
        this._estado = estado;
    }

    get estadoS(): string {
        return this._estadoS;
    }
    set estadoS(estadoS) {
        this._estadoS = estadoS;
    }
}
