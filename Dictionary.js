/***************************************************************************
 > File Name        : Dictionary.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-09-25 19:58
 ***************************************************************************/

(function(){
    "use strict";

    function Dictionary(){
        this._size = 0;
        this.datastore = Object.create(null);
    }

    Dictionary.prototype.isEmpty = function(){
        return this._size === 0;
    };

    Dictionary.prototype.size = function(){
        return this._size;
    };

    Dictionary.prototype.clear = function(){
        for(var key in this.datastore){
            delete this.datastore[key];
        }
        this._size = 0;
    };

    Dictionary.prototype.add = function(key, value){
        this.datastore[key] = value;
        this._size++;
    };

    Dictionary.prototype.find = function(key){
        return this.datastore[key];
    };

    Dictionary.prototype.count = function(){
        var n = 0;
        for(var key in this.datastore){
            n++;
        }
        return n;
    };

    Dictionary.prototype.remove = function(key){
        delete this.datastore[key];
        this._size--;
    };

    Dictionary.prototype.showAll = function(){
        for(var key in this.datastore){
            console.log(key + "->" + this.datastore[key]);
        }
    };

    module.exports = Dictionary;
})();






