
export class User {
    private _id: number;
    private _nombre: string;
    private _contra: string;
    private _esAdmin: boolean;

    constructor(id:number=0, nombre:string="", contra:string="", esAdmin:boolean=false) {
        this._id = id;
        this._nombre = nombre;
        this._contra = contra;
        this._esAdmin = esAdmin;
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

    get contra(): string {
        return this._contra;
    }
    set contra(contra) {
        this._contra = contra;
    }

    get esAdmin(): boolean {
        return this._esAdmin;
    }
    set esAdmin(esAdmin) {
        this._esAdmin = esAdmin;
    }
}
