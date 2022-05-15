'use strict'

class Hashable{
    #_key;

    constructor(key) {
        if (this.constructor!==Hashable){
            this.#_key=key;
        }else {
            throw new Error("Never create abstract class");
        }
    }

    //------------------------------------------------------
    // Method: hashVal
    // PURPOSE: calculate key's hash value
    // PARAMETERS: non
    // Returns: hash value
    //------------------------------------------------------
    hashVal(){
        throw new Error("Missing hashVal method");
    }

    //------------------------------------------------------
    // Method: equals
    // PURPOSE: check two hashables' instance is equal
    // PARAMETERS: a hashable
    // Returns: true or false
    //------------------------------------------------------
    equals(x){
        throw new Error("Missing equals method");
    }

    //------------------------------------------------------
    // Method: key
    // PURPOSE: return key
    // PARAMETERS: non
    // Returns: key
    //------------------------------------------------------
    get key(){
        return this.#_key;
    }

}

module.exports = Hashable;
