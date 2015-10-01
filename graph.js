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
        this._vertex_marked = [];
        this._edgeTo = [];          //保存可达路径
    }

    Graph.prototype.initMarked = function(){
        for(var i = 0; i< this.vertexs; i++){
            this._vertex_marked[i] = false;
        }
    };

    Graph.prototype.pathTo = function(v){
        var start = 0;
        this.bfs(start);
        if(!this.hasPathTo(v)){
            return null;
        }
        var path = [];
        for(var i = v; i != start; i = this._edgeTo[i]){
            path.push(i);
        }
        path.push(start);
        var rs = "";
        while(path.length > 0){
            if(path.length > 1){
                rs += path.pop() + "-";
            }
            else{
                rs += path.pop();
            }
        }
        return rs;
    };

    Graph.prototype.hasPathTo = function(v){
        return this._vertex_marked[v];
    };

    //广度优化遍历,并生成可达路径,为计算无权最短路径提供数据
    Graph.prototype.bfs = function(v){
        this.initMarked();
        var queue = [];
        this._vertex_marked[v] = true;
        queue.push(v);
        while(queue.length > 0){
            var cur = queue.shift();
            console.log("Visited vertex: " + cur);
            for(var w in this.adj[cur]){
                if(!this._vertex_marked[this.adj[cur][w]]) {
                    this._edgeTo[this.adj[cur][w]] = cur;
                    this._vertex_marked[this.adj[cur][w]] = true;
                    queue.push(this.adj[cur][w]);
                }
            }
        }
    };

    //深度优先遍历
    Graph.prototype.dfs = function(v){
        if(arguments[1] == undefined){
            this.initMarked();
        }
        this._vertex_marked[v] = true;
        console.log("Visited vertex: " + v);
        for(var w in this.adj[v]){
            if(!this._vertex_marked[this.adj[v][w]]){
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
