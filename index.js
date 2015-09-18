/***************************************************************************
 > File Name        : index.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-09-18 10:44
 ***************************************************************************/

var LinkedList = require('./LinkedList');
var llist = new LinkedList();

llist.insert("5");
llist.insert("8");
llist.insert("6","5");
llist.add("7");
llist.remove("6");

llist.insert("9");
llist.insert("6","5");
llist.display();
