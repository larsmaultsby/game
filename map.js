//** Start Map **//

var map = function(obj){
    var that = this;
    this.map = [];
    var config = {
        size:10
    };
    
    if(obj){
        for(var p in obj){
        config[p] = obj[p];
    }
    }
    this.init = function(){
        build();
        that.map = newMap;
        buildGui(that); 
        // that.map[0][0].display = 1;
        //that.display();
    };
    this.placeEntity = function(ent){
        that.goTo(ent,ent.location.x,ent.location.y);
    };
    
    this.display = function(){
        var mapString = '';
        that.map.forEach(function(e,i){
            e.forEach(function(x){
                mapString += x.display;
            });
            mapString += '\n';
        });
        //console.log(mapString);
        
        
    };
    
    this.terrain = {
        grass : ['gatherFood']
    }    

    this.goTo = function(e,x,y){
        for(var i = 0;i<that.map[e.location.x][e.location.y].entity.length;i++){
            if(that.map[e.location.x][e.location.y].entity[i].id == e.id){
                that.map[e.location.x][e.location.y].entity.splice(i,1);
            }
        }
        if(that.map[e.location.x][e.location.y].entity.length >= 1){
            
        }else{
            that.map[e.location.x][e.location.y].display = 0;
        }
        that.map[e.location.x + x][e.location.y + y].display = 1;
        that.map[e.location.x + x][e.location.y + y].entity.push(e);
        e.location.x += x;
        e.location.y += y;
        that.display(that);
            if(that.map[e.location.x][e.location.y].entity.length > 0){
                for(var i = 0;i<that.map[e.location.x][e.location.y].entity.length;i++){
                    console.log('There is a ' + that.map[e.location.x][e.location.y].entity[i].name + ' here') 
                }
            };
        that.updateMap();
        console.log(that.terrain)
        return that.terrain[that.map[e.location.x][e.location.y].terrain];
        };
    
    
    function build(){
        console.log('building');
        var temp = [];
        for(var i = 0; i < config.size; i++){
            var subTemp = [];
           for(var j = 0; j < config.size; j++){
               subTemp.push({
                   display:0,
                   entity: [],
                   terrain:'grass'
               });
           }
            temp.push(subTemp);
        }
        //Placeholder Monster - hidden until found
        temp[2][0].entity.push({
            name: 'Monster'
        });
        that.map = temp;
    };
    this.updateMap = function(){
        buildGui(that); 
    };
      
    
  this.init();  
};


//** Testing functions **//

var template = '';
template += '00000000000000000000000000000000000000000000000000'
template += '00000000000000000000000000000000000000000000000000'
template += '00000000000000000000000000000000000000000000000000'
template += '00000000000000000000000000000000000000000000000000'
template += '00000000000000000000000000000000000000000000000000'
template += '00000000000000@@@@@@@@@@00000000000000000000000000'
template += '00000000000000@@@@@@@@@@00000000000000000000000000'
template += '00000000000000000000000000000000000000000000000000'
template += '000000000000000########000000000000000000000000000'
template += '0000000000000000000000#000000000000000000000000000'
template += '000000000000000#000000#000000000000000000000000000'
template += '000000000000000########000000000000000000000000000'
template += '00000000000000000000000000000000000000000000000000'
template += '00000000000000000000000000000000000000000000000000'
template += '00000000000000000000000000000000000000000000000000'
template += '00000000000000000000000000000000000000000000000000'
template += '00000000000000000000000000000000000000000000000000'
template += '00000000000000000000000000000000000000000000000000'
template += '00000000000000000000000000000000000000000000000000'


var newMap = [];
var tempRow = [];
for(var i = 1;i <= template.length; i++){
    if(i%50 != 0){
        var currentTerrain = '';
        switch(template[i-1]){
            case '0' : currentTerrain = 'grass';break;
            case '@' : currentTerrain = 'water';break;
            case '#' : currentTerrain = 'building';break;
        }
        tempRow.push({terrain:currentTerrain,entity:[]})
    }else{
        newMap.push(tempRow);
        tempRow = [];
    }
}





