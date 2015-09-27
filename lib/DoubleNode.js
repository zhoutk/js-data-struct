/***************************************************************************
 > File Name        : DoubleNode.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-09-27 17:03
 ***************************************************************************/

(function(){
    "use strict";

    function Node(element){
        this.element = element;
        this.next = null;
        this.previous = null;
    }

    module.exports = Node;
})();
