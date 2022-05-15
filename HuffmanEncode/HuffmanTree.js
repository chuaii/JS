'use strict'
let HuffNode=require('./HuffNode.js');

class HuffmanTree{
    #_root;
    #_treeArray;
    #_treeSet;
    #_weight;
    #_huffmanCode="";

    constructor(treeArray) {
        this.#_treeArray=treeArray;
        this.#_treeSet=new Array(this.#_treeArray.length);
    }

    //------------------------------------------------------
    // Method: initTree
    // PURPOSE: initialize huffman tree by given Node array
    // PARAMETERS: non
    // Returns: non
    //------------------------------------------------------
    initTree(){
        for (let i = 0; i < this.#_treeSet.length; i++) {
            let char=this.#_treeArray[i].char;
            let weight=this.#_treeArray[i].weight;
            this.#_treeSet[i]=new HuffNode(char, weight, null, null);
        }
    }

    //------------------------------------------------------
    // Method: buildTree
    // PURPOSE: build to whole tree using huffman logic
    // PARAMETERS: non
    // Returns: non
    //------------------------------------------------------
    buildTree(){
        while (this.#_treeSet.length>1) {
            this.descSort(this.#_treeSet);

            let tree1=this.lowestTree();
            let tree2=this.lowestTree();
            let parentTree=this.combineTree(tree1, tree2);

            this.#_treeSet.push(parentTree);
        }
        this.#_root=this.#_treeSet[0];
    }

    //------------------------------------------------------
    // Method: lowestTree
    // PURPOSE: find the tree with lowest value in tree set
    // PARAMETERS: non
    // Returns: lowest weight tree
    //------------------------------------------------------
    lowestTree(){
        let tree;
        if (this.#_treeSet.length>0) {
            tree= this.#_treeSet[this.#_treeSet.length-1];
            this.#_treeSet.length--;
        }
        return tree;
    }

    //------------------------------------------------------
    // Method: descSort
    // PURPOSE: descending sort of tree set array, depends on priority of weight and character
    // PARAMETERS: tree Node array
    // Returns: non
    //------------------------------------------------------
    descSort(treeSet){
        let tempTree;

        for (let i = 0; i < treeSet.length-1; i++) {
            for (let j = i+1; j < treeSet.length; j++) {
                if (treeSet[i].getWeight()<treeSet[j].getWeight()){
                    tempTree=treeSet[i];
                    treeSet[i]=treeSet[j];
                    treeSet[j]=tempTree;
                }else if (treeSet[i].getWeight()===treeSet[j].getWeight()){
                    if (treeSet[i].getChar()<treeSet[j].getChar()){
                        tempTree=treeSet[i];
                        treeSet[i]=treeSet[j];
                        treeSet[j]=tempTree;
                    }
                }
            }
        }
    }

    //------------------------------------------------------
    // Method: combineTree
    // PURPOSE: combine two child trees to a bigger parent tree
    // PARAMETERS: two child trees
    // Returns: new parent tree
    //------------------------------------------------------
    combineTree(left, right){
        let lowerChar=left.getChar();
        let newWeight=left.getWeight()+right.getWeight();

        if (left.getChar()>right.getChar()){
            lowerChar=right.getChar();
        }

        let newTree=new HuffNode(lowerChar, newWeight, left, right);
        newTree.setLeft(left);
        newTree.setRight(right);

        return newTree;
    }

    //------------------------------------------------------
    // Method: compareTo
    // PURPOSE: compare attributes of other tree with current tree
    // PARAMETERS: other tree
    // Returns: -1, 0, or 1
    //------------------------------------------------------
    compareTo(otherTree){
        let result;
        if (this.#_root.getWeight()<otherTree.getWeight()){
            result=-1;
        }else if (this.#_root.getWeight()===otherTree.getWeight()){
            if (this.#_root.getChar()<otherTree.getChar()){
                result=-1;
            }else if (this.#_root.getChar()===otherTree.getChar()) {
                result = 0;
            }else {
                result=1;
            }
        }else {
            result=1;
        }
        return result;
    }

    //------------------------------------------------------
    // Method: getHuffCode
    // PURPOSE: get Huffman code
    // PARAMETERS: non
    // Returns: Huffman code
    //------------------------------------------------------
    getHuffCode(){
        console.log("\nHuffman code of each character below:")
        this.inOrderTraverse(this.#_root, "");
        return this.#_huffmanCode;
    }

    //------------------------------------------------------
    // Method: inOrderTraverse
    // PURPOSE: encode for each character to Huffman code
    // PARAMETERS: root of tree
    // Returns: non
    //------------------------------------------------------
    inOrderTraverse(root, huffCode){
        if (root!=null){
            if (root.isLeaf()){
                let char=root.getChar();
                if (char==="\n"){
                    char="\\n";
                }
                console.log(char+"\t\t"+huffCode);
                this.#_huffmanCode+=huffCode;
            }else {
                this.inOrderTraverse(root.getLeft(), huffCode+"0 ");
                this.inOrderTraverse(root.getRight(), huffCode+"1 ");
            }
        }
    }

}

module.exports = HuffmanTree;
