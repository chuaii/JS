'use strict'
let Node=require('./Node.js');

class LinkedList{
    #_top;

    constructor() {
        this.#_top=null;
    }

    insert(data){
        this.#_top=new Node(data, this.#_top);
    }

    findKey(data){
        let key=null;
        let curr=this.#_top;

        while (curr!==null){
            if (curr.getData().equals(data)){
                key= curr.getData();
                break;
            }
            curr=curr.getNext();
        }
        return key;
    }

    isEmptyList(){
        return this.#_top===null;
    }

}

module.exports = LinkedList;
