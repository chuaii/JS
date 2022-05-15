'use strict'

class HuffNode{
    #_char;
    #_weight;
    #_left;
    #_right;
    #_huffCode;

    constructor(char, weight, left, right) {
        this.#_char=char;
        this.#_weight=weight;
        this.#_left=left;
        this.#_right=right;
    }

    getLeft(){
        return this.#_left;
    }
    getRight(){
        return this.#_right;
    }
    setLeft(left){
        this.#_left=left;
    }
    setRight(right){
        this.#_right=right;
    }
    getChar(){
        return this.#_char;
    }
    getWeight(){
        return this.#_weight;
    }

    //------------------------------------------------------
    // Method: isLeaf
    // PURPOSE: check whether this root is a leaf
    // PARAMETERS: non
    // Returns: true or false
    //------------------------------------------------------
    isLeaf(){
        return this.#_left==null && this.#_right==null;
    }

}

module.exports = HuffNode;


