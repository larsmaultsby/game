var time = function(){
	var that = this;
	this.hour = 0;
	this.startTime = function(){
		that.ticking = setInterval(function(){
			if(that.hour == 24){
				that.hour = 0;
			}
			that.tick();
			
		},10000);
	};
	this.stopTime = function(){
		clearInterval(that.ticking);
	}
	this.tickFn = [];
	this.tick = function(){
		that.hour++;
		that.tickFn.forEach(function(v){
			v.call(that);
		})
	};
	this.addTick = function(fn){
		that.tickFn.push(fn);
	}
	this.removeTick = function(fn){
		for(var i = 0; i < that.tickFn.length; i++){
			if(that.tickFn[i].name == fn.name){
				that.tickFn.splice(i,1);
				break;
			}
		}
	}
	this.isDay = function(){
		if((5 < that.hour) && (that.hour < 19)){
			return true;
		}else{
			return false;
		}
	};

	this.displayTime = function(){
		if(that.hour == 6){
			console.log('The sun begins to rise');
		}
		if(that.hour == 19){
			console.log('The sun begins to set');
		}
		if(that.isDay()){
			console.log('It is day')
		}else{
			console.log('It is night')
		}
	}
	this.init = function(){
		that.startTime();
		that.addTick(that.displayTime);
	};
	this.init();
};
