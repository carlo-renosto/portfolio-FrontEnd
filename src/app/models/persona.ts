
export class Persona {
    private _id: number;
    private _nombre: string;
    private _apellido: string;
    private _edad: number;
    private _pais: string;
    private _ciudad: string;
    private _ocupacion: string;
    private _descripcion: string;

    constructor(id:number=0, nombre:string="", apellido:string="", edad:number=0,  pais:string="", ciudad:string="", ocupacion:string="", descripcion:string="") {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._pais = pais;
        this._ciudad = ciudad;
        this._ocupacion = ocupacion;
        this._descripcion = descripcion;
    }

    get id(): number {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get nombre(): string {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido(): string {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }

    get edad(): number {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }

    get pais(): string {
        return this._pais;
    }
    set pais(pais) {
        this._pais = pais;
    }

    get ciudad(): string {
        return this._ciudad;
    }
    set ciudad(ciudad) {
        this._ciudad = ciudad;
    }

    get ocupacion(): string {
        return this._ocupacion;
    }
    set ocupacion(ocupacion) {
        this._ocupacion = ocupacion;
    }

    get descripcion(): string {
        return this._descripcion;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
}
