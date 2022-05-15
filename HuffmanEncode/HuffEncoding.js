'use strict'
let Dictionary=require('./Dictionary.js');
let HuffmanTree=require('./HuffmanTree.js');
let fs=require('fs');


class HuffEncoding{
    #_inputFile;
    #_dictionary;
    #_treeArray;
    #_huffTree;

    constructor(file) {
        this.#_inputFile=file;
        this.#_dictionary=new Dictionary();
    }

    //------------------------------------------------------
    // Method: encode
    // PURPOSE: process whole thing of encoding file, including read from input, create huffman tree, and encode
    // PARAMETERS: non
    // Returns: non
    //------------------------------------------------------
    encode(){
        this.readFile();
        this.#_huffTree.initTree();
        this.#_huffTree.buildTree();
        fs.appendFileSync("output.txt", this.#_huffTree.getHuffCode()+"\n");
    }

    //------------------------------------------------------
    // Method: readFile
    // PURPOSE: read the input file and process initial data
    // PARAMETERS: non
    // Returns: non
    //------------------------------------------------------
    readFile(){
        // let fs=require('fs');
        let contents=fs.readFileSync(this.#_inputFile, "utf8");
        let charArr=contents.split("");
        let length=charArr.length;
        let char;
        let obj={};

        for (let i = 0; i < length; i++) {
            char=charArr[i];

            if (obj[char]>0){
                obj[char]++;
            }else {
                obj[char]=1;
            }
        }

        let arraySize=0;
        for (char in obj){
            arraySize++;
        }
        this.#_treeArray=new Array(arraySize);

        let index=0;
        for (char in obj){
            let weight=obj[char]/length;
            this.#_dictionary.put(char, weight);
            this.#_treeArray[index]={char, weight};
            index++;
        }
        this.#_huffTree=new HuffmanTree(this.#_treeArray);

        console.log("Character\tWeight");
        for (let i = 0; i < this.#_treeArray.length; i++) {
            let character=this.#_treeArray[i].char;
            if (character==="\n"){
                character="\\n";
            }
            console.log(character+"\t\t"+this.#_treeArray[i].weight);
        }
    }

}

let huffman=new HuffEncoding("hamlet.txt");
huffman.encode();