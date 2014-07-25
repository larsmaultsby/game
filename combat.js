
function fight(a,b){
    if(a.location.x == b.location.x && a.location.y == b.location.y){
    while(a.alive && b.alive){
        b.health -= calculateDamage(a,b);
        b.stats.def += (Math.random()/2);
        a.stats.str += (Math.random()/2);
        
        a.health -= calculateDamage(b,a)
        a.stats.def += (Math.random()/2);
        b.stats.str += (Math.random()/2);
    
        if(a.health < 0){
            a.alive = false;
        }
        if(b.health < 0){
            b.alive = false;
        }
    }
    
    console.log(a,b)
    }
}
function calculateDamage(atk,def){
   var damage = Math.floor(Math.random() * atk.stats.atk + atk.stats.str) - def.stats.def;
   console.log(atk.name + ' dealt ' + damage + ' damage to ' + def.name);
   if(damage < 0) return 1;
   return damage;
}
  
  
  function exp(c,d){
        if(d >= c){
            Math.random() * Math.abs(c-d);
        }else{
        return Math.random() / (c-d)
        }
            
        };  
    //fight(ent1,ent2);
