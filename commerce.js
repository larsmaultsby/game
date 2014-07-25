// //var commerce = function(){
	//player.prototype.actions = {};
	player.prototype.gatherFood = function(){
		var that = this;
		var count = 3;
		console.log(that.actions);
		console.log(that.actions)
		function gatherFood(){
			count--;
			if(count == 0){
				that.inventory.food = that.inventory.food || 0;
				that.inventory.food += 3;
				console.log('you gathered food: x' +that.inventory.food)
				this.removeTick(this);
			}
		}
		this.time.addTick(gatherFood);
	};

// //}

// //var commerce = function(){
// 	//player.prototype.actions = {};
// 	//map.terrain.grass = ['gatherFood']
// 	player.prototype.gatherFood = function(){
// 		var that = this;
// 		var count = 3;
		
// 		function gatherFood(){
// 			count--;
// 			if(count == 0){
// 				that.inventory.food = that.inventory.food || 0;
// 				that.inventory.food += 3;
// 				console.log('you gathered food: x' +that.inventory.food)
// 				theTime.removeTick(this);
// 			}
// 		}
// 		theTime.addTick(gatherFood);
// 	};

// //}