var player = function(name,time, map){
    var that = this; 
    this.hero = true;
    this.name = name;
    this.alive = true;
    this.health = 100;
    this.time = time;
    this.stats =  {
        str: 1,
        atk:1,
        def: 0,
        luck: 5,
        exp:{
            combat:1
        }
    };
    this.inventory = {

    };
    this.actions = {

    }
    this.revive = function(){
        that.health = 100;
        that.alive = true;
    };
    this.reset = function(){
        that.health = 100;
        that.alive = true;
        that.stats =  {
        str: 1,
        atk:1,
        def: 0,
        luck: 5
    }
    }
    this.location = {
        x:0,
        y:0
    };

    this.move = function(d){
        var oldLoc = that.location;
        var x = 0, y = 0;
        switch(d){
            case 'n' : x = -1; break;
            case 'e' : y = 1; break;
            case 's' : x = 1; break;
            case 'w' : y = -1; break;
        }
        try{
            console.log('x',that.location.x,x);
            console.log('y',that.location.y,y);
            that.availableFn = map.goTo(that,x,y);
            buildActions();
            console.log(that.availableFn)
        }catch(err){
            console.log('Map error');
            that.location = oldLoc;
        }
    };
    function buildActions(){
        for(var i = 0;i<that.availableFn.length;i++){
            var button = document.createElement('button');
            button.innerHTML = that.availableFn[i];
            button.onclick = that[that.availableFn[i]].bind(that);
           document.querySelector('.actions').appendChild(button)
        }
    }
    this.look = function(){
        
    }
    this.init = function(){
        that.id = Math.floor(Math.random()*1000 + 1);
        map.placeEntity(that)
        
    };
    this.init(); 
        
};

