
export class User {
    id:number;
    nombre:string;
    contra:string;
    esAdmin:boolean;

    constructor(id:number=0, nombre:string="", contra:string="", esAdmin:boolean=false) {
        this.id = id;
        this.nombre = nombre;
        this.contra = contra;
        this.esAdmin = esAdmin;
    }

    getId():number {
        return this.id;
    }
    getNombre():string {
        return this.nombre;
    }
    getContra():string {
        return this.contra;
    }
    admin():boolean {
        return this.esAdmin;
    }
}
