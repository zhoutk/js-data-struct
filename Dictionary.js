/***************************************************************************
 > File Name        : Dictionary.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-09-25 19:58
 ***************************************************************************/

function Dictionary(){
    this.length = 0;
    this.datastore = Object.create(null);
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function clear(){
    for(var key in this.datastore){
        delete this.datastore[key];
    }
    this.length = 0;
}

function count(){
    var n = 0;
    for(var key in this.datastore){
        n++;
    }
    return n;
}

function add(key, value){
    this.datastore[key] = value;
    this.length++;
}

function find(key){
    return this.datastore[key];
}

function remove(key){
    delete this.datastore[key];
    this.length--;
}

function showAll(){
    for(var key in this.datastore){
       console.log(key + "->" + this.datastore[key]);
    }
}

module.exports = Dictionary;
