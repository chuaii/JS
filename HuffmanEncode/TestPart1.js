'use strict'
let assert=require('assert');
let Dictionary=require('./Dictionary.js');


main();

function main(){
    testEmpty();
    testOneElement();
    testContainStr();
    testContainNum();
    testPutInSameStr();
    testPutInSameNum();
}

function testEmpty() {
    let d=new Dictionary();

    assert(d.isEmpty());
    console.log("Test pass");
}

function testOneElement(){
    let d=new Dictionary();

    d.put("a", 3);
    assert(!d.isEmpty());
    console.log("Test pass");
}

function testContainStr() {
    let d=new Dictionary();
    d.put("a", 3);
    d.put("b", "33");
    d.put("\n", "33");
    d.put(" ", "33");

    assert(d.contains("a"));
    assert(d.contains("b"));
    assert(d.contains("\n"));
    assert(d.contains(" "));
    assert(!d.contains("c"));
    console.log("Test pass");
}

function testContainNum() {
    let d=new Dictionary();

    d.put(3, 3);
    d.put(33, "a");

    assert(d.contains(3));
    assert(d.contains(33));
    console.log("Test pass");
}

function testPutInSameStr() {
    let d=new Dictionary();

    d.put("a", 3);
    assert(d.get("a")===3);

    d.put("a", 33);
    assert(d.get("a")===33);

    d.put("a", "333");
    assert(d.get("a")==="333");

    console.log("Test pass");
}

function testPutInSameNum() {
    let d=new Dictionary();
    d.put(3, "a");
    assert(d.get(3)==="a");

    d.put(3, 33);
    assert(d.get(3)===33);

    d.put(3, "3a");
    assert(d.get(3)==="3a");

    console.log("Test pass");
}
