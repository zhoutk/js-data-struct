/***************************************************************************
 > File Name        : LinkedList.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-09-18 10:23
 ***************************************************************************/

(function(){
    "use strict";

    var Node = require("./lib/Node");

    function LinkedList(){
        this._head = new Node("This is Head Node.");
    }

    LinkedList.prototype.getHead = function(){
        return this._head;
    };

    LinkedList.prototype.display = function(){
        var currNode = this.head.next;
        while(currNode){
            console.log(currNode.element);
            currNode = currNode.next;
        }
    };

    LinkedList.prototype.remove = function(item){
        if(item) {
            var preNode = this.findPre(item);
            if(preNode == null)
                return ;
            if (preNode.next !== null) {
                preNode.next = preNode.next.next;
            }
        }
    };

    LinkedList.prototype.add = function(item){
        this.insert(item);
    };

    LinkedList.prototype.insert = function(newElement, item){
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
    };

    /*********************** Utility Functions ********************************/

    LinkedList.prototype.findLast = function(){
        var currNode = this.getHead();
        while(currNode.next){
            currNode = currNode.next;
        }
        return currNode;
    };

    LinkedList.prototype.findPre = function(item){
        var currNode = this.getHead();
        while(currNode.next !== null && currNode.next.element !== item){
            currNode = currNode.next;
        }
        return currNode;
    };

    LinkedList.prototype.find = function(item){
        if(item == null)
            return null;
        var currNode = this.getHead();
        while(currNode && currNode.element !== item){
            currNode = currNode.next;
        }
        return currNode;
    };

    module.exports = LinkedList;
})();









