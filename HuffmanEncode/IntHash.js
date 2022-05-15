'use strict'
let Hashable=require('./Hashable.js');

class IntHash extends Hashable{
    #_value;

    constructor(key) {
        super(key);
    }

    hashVal() {
        return this.key;
    }

    equals(x) {
        let result=false;
        if (x instanceof IntHash){
            if (this.key===x.key){
                result= true;
            }
        }
        return result;
    }

    setValue(v){
        this.#_value=v;
    }

    getValue(){
        return this.#_value;
    }

}

module.exports = IntHash;
