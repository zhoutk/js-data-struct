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

    BSTree.prototype.remove = function(data){
        if(this.root == null)
            return false;
        var currNode = this.root;
        var parent = null;
        //注意边界值，如果被删除的是根结点,循环是不进入的,parent为null
        while(currNode != null && currNode.data != data) {
            parent = currNode;
            if(data < currNode.data){
                currNode = currNode.left;
            }else{
                currNode = currNode.right;
            }
        }
        if(currNode == null){
            return false;
        }
        if(currNode.left == null || currNode.right == null){
            if(parent == null){                 //处理边界值,但左右子树同时存在时,不会出问题
                this.root = currNode.left == null ? currNode.right : currNode.left;
            }
            else if(parent.left == currNode){
                parent.left = currNode.left == null ? currNode.right : currNode.left;
            }
            else{
                parent.right = currNode.left == null ? currNode.right : currNode.left;
            }
        }else{
            var mid = currNode.right;
            parent = currNode;
            while(mid.left != null){
                parent = mid;
                mid = mid.left;
            }
            currNode.data = mid.data;
            if(parent.left == mid){
                parent.left = mid.right;
            }
            else{
                parent.right = mid.right;
            }
        }
        return true;
    };

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
        return currNode.data;
    };

    BSTree.prototype.getMax = function(){
        var currNode = this.root;
        while(currNode.right != null){
            currNode = currNode.right;
        }
        return currNode.data;
    };

    BSTree.prototype.postOrder = function(node){
        if(node != null){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }
    };

    BSTree.prototype.preOrder = function(node){
        if(node != null){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    };

    BSTree.prototype.inOrder = function(node){
        if(node != null){
            this.inOrder(node.left);
            console.log(node.data);
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
