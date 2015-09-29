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

    BSTree.prototype.find = function(data){
        var currNode = this.root;
        while(currNode != null){
            if(currNode.data == data){
                return currNode;
            }
            else if(data < currNode.data){
                currNode = currNode.left;
            }
            else{
                currNode = currNode.right;
            }
        }
        return null;
    };

    BSTree.prototype.getMin = function(){
        var currNode = this.root;
        while(currNode.left != null){
            currNode = currNode.left;
        }
        return currNode.show();
    };

    BSTree.prototype.getMax = function(){
        var currNode = this.root;
        while(currNode.right != null){
            currNode = currNode.right;
        }
        return currNode.show();
    };

    BSTree.prototype.postOrder = function(node){
        if(node != null){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show());
        }
    };

    BSTree.prototype.preOrder = function(node){
        if(node != null){
            console.log(node.show());
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    };

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
