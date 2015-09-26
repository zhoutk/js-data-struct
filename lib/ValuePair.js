/***************************************************************************
 > File Name        : ValuePair.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-09-26 17:59
 ***************************************************************************/

(function(){
    "use strict";

    function ValuePair(key, value){
        this.key = key;
        this.value = value;
    }

    ValuePair.prototype.toString = function(){
        return "[" + this.key + ":" + this.value + "]";
    };

    module.exports = ValuePair;

})();
