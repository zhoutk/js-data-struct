/***************************************************************************
 > File Name        : index.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-09-18 10:44
 ***************************************************************************/

var LinkedList = require('./LinkedList');
var DList = require('./DoubleLinkedList');
var llist = new LinkedList();
var dlist = new DList();

llist.insert("5");
llist.insert("6","5");
llist.add("7");
llist.remove("6");

llist.display();


dlist.add("4");
dlist.insert("8");
dlist.add("5");
dlist.insert("6","4");

dlist.dispReverse();



