/***************************************************************************
 > File Name        : DoubleLinkedList.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-09-25 12:05
 ***************************************************************************/

"use strict";

function Node(element){
    this.element = element;
    this.next = null;
    this.previous = null;
}

function DoubleLinkedList(){
    this.head = new Node("This is Head Node.");
    this.find = find;
    this.insert = insert;
    this.add = add;
    this.remove = remove;
    this.display = display;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}

function dispReverse(){
    var currNode = this.findLast();
    while(currNode != this.head){
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}

function findLast(){
    var currNode = this.head;
    while(currNode.next){
        currNode = currNode.next;
    }
    return currNode;
}

function add(item){
    if(item == null)
        return null;
    this.insert(item);
}

function remove (item){
    if(item) {
        var node = this.find(item);
        if(node == null)
            return ;
        if (node.next === null) {
            node.previous.next = null;
            node.previous = null;
        } else{
            node.previous.next = node.next;
            node.next.previous = node.previous;
            node.next = null;
            node.previous = null;
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
        newNode.previous = last;
        last.next = newNode;
    }
    else{
        newNode.next = finder.next;
        newNode.previous = finder;
        finder.next.previous = newNode;
        finder.next = newNode;
    }
}

module.exports = DoubleLinkedList;

