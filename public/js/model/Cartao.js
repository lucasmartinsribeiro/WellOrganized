class Cartao{
    _id;
    _descricaoTarefa;
    _status;
    
    constructor(id, descricaoTarefa, status){
        this.id = id;
        this.descricaoTarefa = descricaoTarefa;
        this.status = status;
    }

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    get descricaoTarefa() {
        return this._descricaoTarefa;
    }
    set descricaoTarefa(value) {
        this._descricaoTarefa = value;
    }

    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }

}