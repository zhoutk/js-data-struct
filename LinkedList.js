/***************************************************************************
 > File Name        : LinkedList.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-09-18 10:23
 ***************************************************************************/

"use strict";

function Node(element){
    this.element = element;
    this.next = null;
}

function LinkedList(){
    this.head = new Node("This is Head Node.");
    this.find = find;
    this.findPre = findPre;
    this.insert = insert;
    this.add = add;
    this.remove = remove;
    this.display = display;
    this.findLast = findLast;
}

function findLast(){
    var currNode = this.head;
    while(currNode.next){
        currNode = currNode.next;
    }
    return currNode;
}

function add(item){
    this.insert(item);
}

function findPre(item){
    var currNode = this.head;
    while(currNode.next !== null && currNode.next.element !== item){
        currNode = currNode.next;
    }
    return currNode;
}

function remove (item){
    if(item) {
        var preNode = this.findPre(item);
        if(preNode == null)
            return ;
        if (preNode.next !== null) {
            preNode.next = preNode.next.next;
            preNode.next.next = null;
        }
    }
}

function display(){
    var currNode = this.head.next;
    while(currNode){
        console.log(currNode.element);
        currNode = currNode.next;
    }
}

function find(item){
    if(item == null)
        return null;
    var currNode = this.head;
    while(currNode && currNode.element !== item){
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item){
    var newNode = new Node(newElement);
    var finder = item ? this.find(item) : null;
    if(!finder){
        var last = this.findLast();
        last.next = newNode;
    }
    else{
        newNode.next = finder.next;
        finder.next = newNode;
    }
}

module.exports = LinkedList;
