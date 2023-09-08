export class Proyecto {
    private _id: number;
    private _idPersona: number;
    private _nombre: string;
    private _descripcion: string;
    private _fechaRealizacion: string;

    constructor(id:number=0, idPersona:number=0, nombre:string="", descripcion:string="", fechaRealizacion:string="") {
        this._id = id;
        this._idPersona = idPersona;
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._fechaRealizacion = fechaRealizacion;
    }

    get id(): number {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }

    get idPersona(): number {
        return this._idPersona;
    }
    set idPersona(idPersona) {
        this._idPersona = idPersona;
    }

    get nombre(): string {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get descripcion(): string {
        return this._descripcion;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    get fechaRealizacion(): string {
        return this._fechaRealizacion;
    }
    set fechaRealizacion(fechaRealizacion) {
        this._fechaRealizacion = fechaRealizacion;
    }
}
