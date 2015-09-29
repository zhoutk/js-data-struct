/***************************************************************************
 > File Name        : BSTree.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-09-29 18:38
 ***************************************************************************/

(function(){
    "use strict";
    var Node = require("./lib/BSTNode");

    function BSTree(){
        this.root = null;
    }

    BSTree.prototype.inOrder = function(node){
        if(node != null){
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    };

    BSTree.prototype.insert = function(data){
        var node = new Node(data, null, null);
        if(this.root == null){
            this.root = node;
        }
        else{
            var currNode = this.root;
            var parent;
            while(true){
                parent = currNode;
                if(data < currNode.data){
                    currNode = currNode.left;
                    if(currNode == null){
                        parent.left = node;
                        break;
                    }
                }
                else{
                    currNode = currNode.right;
                    if(currNode == null){
                        parent.right = node;
                        break;
                    }
                }
            }
        }
    };

    module.exports = BSTree;
})();
