'use strict'

let LinkedList=require("./LinkedList.js");

class HashTable{
    #_hashArray;
    #_size;

    constructor(size) {
        this.#_hashArray=new Array(size);
        this.#_size=size;

        for (let i = 0; i < size; i++) {
            this.#_hashArray[i]=new LinkedList();
        }
    }

    //------------------------------------------------------
    // Method: hash
    // PURPOSE: calculate hash value of key
    // PARAMETERS: key
    // Returns: hash value
    //------------------------------------------------------
    hash(key){
        return (key.hashVal()) % (this.#_size);
    }

    //------------------------------------------------------
    // Method: add
    // PURPOSE: add key in its hash position as a linked list
    // PARAMETERS: non
    // Returns: non
    //------------------------------------------------------
    add(key){
        if ("hashVal" in key && "equals" in key){
            let index=this.hash(key);
            this.#_hashArray[index].insert(key);
        }else {
            throw new Error("Not in abstract");
        }
    }

    //------------------------------------------------------
    // Method: getVal
    // PURPOSE: get value in hash table by given key
    // PARAMETERS: key
    // Returns: value
    //------------------------------------------------------
    getVal(key){
        let value;
        if ("hashVal" in key && "equals" in key){
            let index=this.hash(key);
            value=this.#_hashArray[index].findKey(key).getValue();
        }else {
            throw new Error("Not in abstract");
        }
        return value;
    }

    //------------------------------------------------------
    // Method: setKeyVal
    // PURPOSE: set the value in given key
    // PARAMETERS: key and value
    // Returns: non
    //------------------------------------------------------
    setKeyVal(key, v){
        if ("hashVal" in key && "equals" in key){
            let index=this.hash(key);
            this.#_hashArray[index].findKey(key).setValue(v);
        }else {
            throw new Error("Not in abstract");
        }
    }

    //------------------------------------------------------
    // Method: containKey
    // PURPOSE: check whether this key is inside hash table
    // PARAMETERS: key
    // Returns: true or false
    //------------------------------------------------------
    containKey(key){
        let isContained=false;

        if ("hashVal" in key && "equals" in key){
            let index=this.hash(key);
            isContained=this.#_hashArray[index].findKey(key);
            if (isContained!==null){
                isContained=true;
            }
        }else {
            throw new Error("Not in abstract");
        }
        return isContained;
    }

    //------------------------------------------------------
    // Method: isEmptyTable
    // PURPOSE: check whether the hash table is empty
    // PARAMETERS: non
    // Returns: true or false
    //------------------------------------------------------
    isEmptyTable(){
        let result=true;

        for (let i = 0; i < this.#_size && result; i++) {
            if (!this.#_hashArray[i].isEmptyList()){
                result=false;
            }
        }
        return result;
    }

}

module.exports = HashTable;