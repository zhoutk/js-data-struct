/***************************************************************************
 > File Name        : graph.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-10-01 08:56
 ***************************************************************************/

(function(){
    "use strict";
    function Graph(v){
        this.vertexs = v;
        this.edges = 0;
        this.adj = Object.create(null);
        this._marked = [];
    }

    Graph.prototype.initMarked = function(){
        for(var i = 0; i< this.vertexs; i++){
            this._marked[i] = false;
        }
    };

    Graph.prototype.dfs = function(v){
        if(arguments[1] == undefined){
            this.initMarked();
        }
        this._marked[v] = true;
        console.log("Visited vertex: " + v);
        for(var w in this.adj[v]){
            if(!this._marked[this.adj[v][w]]){
                this.dfs(this.adj[v][w],1);
            }
        }
    };

    Graph.prototype.display = function(){
        for(var i = 0; i < this.vertexs; i++){
            if(this.adj[i] == null){
                console.log(i + " --> This vertex is isolate.")
            }else{
                console.log(i + " --> " + this.adj[i].join(" "))
            }
        }
    };

    Graph.prototype.addEdge = function(v, w){
        if(this.adj[v] == null){
            this.adj[v] = [];
        }
        this.adj[v].push(w);
        if(this.adj[w] == null){
            this.adj[w] = [];
        }
        this.adj[w].push(v);
        this.edges++;
    };

    module.exports = Graph;
})();
