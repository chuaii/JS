'use strict'
let HashTable=require('./HashTable.js');
let IntHash=require('./IntHash.js');
let StringHash=require('./StringHash.js');


class Dictionary{
    #_hashTable;

    constructor() {
        this.#_hashTable=new HashTable(100);
    }

    //------------------------------------------------------
    // Method: put
    // PURPOSE: put key with its value to a hash position in a dictionary
    // PARAMETERS: key and value
    // Returns: non
    //------------------------------------------------------
    put(k, v){
        let keyHash;
        if (typeof k ==="number"){
            keyHash= new IntHash(k);
            this.#_hashTable.add(keyHash);
            this.#_hashTable.setKeyVal(keyHash, v);

        }else if (typeof k ==="string"){
            keyHash= new StringHash(k);
            this.#_hashTable.add(keyHash);
            this.#_hashTable.setKeyVal(keyHash, v);

        }else {
            throw new Error("Invalid character")
        }
    }

    //------------------------------------------------------
    // Method: get
    // PURPOSE: find the key, and get its value
    // PARAMETERS: key
    // Returns: value
    //------------------------------------------------------
    get(k){
        let keyHash;
        let value;

        if (typeof k ==="number") {
            keyHash=new IntHash(k);
        }else if (typeof k ==="string") {
            keyHash=new StringHash(k);
        }

        if (this.contains(k)){
            value=this.#_hashTable.getVal(keyHash);
        }else {
            value="Undefined value";
        }
        return value;
    }

    //------------------------------------------------------
    // Method: contains
    // PURPOSE: check whether this key is inside dictionary
    // PARAMETERS: key
    // Returns: true or false
    //------------------------------------------------------
    contains(k){
        let keyHash;
        if (typeof k ==="number") {
            keyHash=new IntHash(k);
        }else if (typeof k ==="string") {
            keyHash=new StringHash(k);
        }
        return this.#_hashTable.containKey(keyHash);
    }

    //------------------------------------------------------
    // Method: isEmpty
    // PURPOSE: check whether the dictionary is empty
    // PARAMETERS: non
    // Returns: true or false
    //------------------------------------------------------
    isEmpty(){
        return this.#_hashTable.isEmptyTable();
    }

}

module.exports = Dictionary;

