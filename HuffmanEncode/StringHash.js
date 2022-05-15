'use strict'
let Hashable=require('./Hashable.js');

class StringHash extends Hashable{
    #_value;

    constructor(key) {
        super(key);
    }

    hashVal() {
        let prime=59;
        let hashValue=0;
        let p=0;
        let power=this.key.length;

        for (let i = 0; i < this.key.length; i++) {
            power--;
            p=Math.pow(prime, power);
            hashValue+=this.key.charCodeAt(i)*p;
        }
        return hashValue;
    }

    equals(x) {
        let result=false;
        if (x instanceof StringHash){
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

module.exports = StringHash;
