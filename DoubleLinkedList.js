/***************************************************************************
 > File Name        : DoubleLinkedList.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-09-25 12:05
 ***************************************************************************/

(function(){
    "use strict";
    var Node = require("./lib/DoubleNode");

    function DoubleLinkedList(){
        this._head = new Node("This is Head Node.");
        this._size = 0;
    }

    DoubleLinkedList.prototype.getHead = function(){
        return this._head;
    };

    DoubleLinkedList.prototype.isEmpty = function(){
        return this._size === 0;
    };

    DoubleLinkedList.prototype.size = function(){
        return this._size;
    };

    DoubleLinkedList.prototype.findLast = function(){
        var currNode = this.getHead();
        while(currNode.next){
            currNode = currNode.next;
        }
        return currNode;
    };

    DoubleLinkedList.prototype.add = function(item){
        if(item == null)
            return null;
        this.insert(item);
    };

    DoubleLinkedList.prototype.remove = function(item){
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
            this._size--;
        }
    };

    DoubleLinkedList.prototype.find = function(item){
        if(item == null)
            return null;
        var currNode = this.getHead();
        while(currNode && currNode.element !== item){
            currNode = currNode.next;
        }
        return currNode;
    };

    DoubleLinkedList.prototype.insert = function(newElement, item){
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
        this._size++;
    };

    DoubleLinkedList.prototype.dispReverse = function(){
        var currNode = this.findLast();
        while(currNode != this.getHead()){
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    };

    DoubleLinkedList.prototype.display = function(){
        var currNode = this.getHead().next;
        while(currNode){
            console.log(currNode.element);
            currNode = currNode.next;
        }
    };

    module.exports = DoubleLinkedList;
})();



















