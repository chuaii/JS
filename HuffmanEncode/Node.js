'use strict'

class Node{
    #_data;
    #_next;

    constructor(data, next) {
        this.#_data=data;
        this.#_next=next;
    }

    getData(){
        return this.#_data;
    }

    getNext(){
        return this.#_next;
    }

    set setNext(next){
        this.#_next=next;
    }
}

module.exports = Node;