/***************************************************************************
 > File Name        : hashtable.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-09-26 18:29
 ***************************************************************************/

(function(){

    "use strict";

    var ValuePair = require("./lib/ValuePair");
    var LinkedList = require("./LinkedList");

    function Hashtable(){
        this.table = Object.create(null);
        this._size = 0;
    }

    Hashtable.prototype.isEmpty = function(){
        return this._size === 0;
    };

    Hashtable.prototype.size = function(){
        return this._size;
    };

    Hashtable.prototype.remove = function(key){
        var index = hashCode(key);

        if(this.table[index] == null){
            return false;
        }else{
            var currNode = this.table[index].head;
            while(currNode.next){
                currNode = currNode.next;
                if(currNode.element.key == key){
                    this.table[index].remove(currNode.element);
                    return true;
                }
            }
            return false;
        }
    };

    Hashtable.prototype.get = function(key){
        var index = hashCode(key);

        if(this.table[index] == null){
            return null;
        }else{
            var currNode = this.table[index].head;
            while(currNode.next){
                currNode = currNode.next;
                if(currNode.element.key == key){
                    return currNode.element;
                }
            }
            return null;
        }
    };

    Hashtable.prototype.put = function(key, value){
        var index = hashCode(key);

        if(this.table[index] == null){
            this.table[index] = new LinkedList();
        }

        var currNode = this.table[index].head;
        while(currNode.next){                       //key若已经存在,修改value值为新值
            currNode = currNode.next;
            if(currNode.element.key == key){
                currNode.element.value = value;
                break;
            }
        }

        if(currNode.next == null && currNode.element.value != value){                  //key不存在,加入新值.注意边界值
            this.table[index].add(new ValuePair(key,value));
            this._size++;
        }

        return this;
    };

    Hashtable.prototype.display = function(){
        for(var key in this.table){
            var currNode = this.table[key].head;
            while(currNode.next){
                currNode = currNode.next;
                console.log(currNode.element.toString());
            }
        }
    };


    /*********************** Utility Functions ********************************/

    function hashCode(key) {                //霍纳算法,质数取37
        var hashValue = 6011;
        for (var i = 0; i < key.length; i++) {
            hashValue = hashValue * 37 + key.charCodeAt(i);
        }
        return hashValue % 1019;
    }

    module.exports = Hashtable;

})();
