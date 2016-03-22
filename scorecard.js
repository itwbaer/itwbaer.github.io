function Scorecard(){

	this.kept = [
	{key: "ones", val: 0},
	{key: "twos", val: 0},
	{key: "threes", val: 0},
	{key: "fours", val: 0},
	{key: "fives", val: 0},
	{key: "sixes", val: 0},
	{key: "threeOfAKind", val: 0},
	{key: "fourOfAKind", val: 0},
	{key: "fullHouse", val: 0},
	{key: "smallStraight", val: 0},
	{key: "largeStraight", val: 0},
	{key: "yahtzee", val: 0},
	{key: "chance", val: 0},
	];
	
	this.lowerStart = 6;
	
	this.scored = [
	{key: "ones", val: false},
	{key: "twos", val: false},
	{key: "threes", val: false},
	{key: "fours", val: false},
	{key: "fives", val: false},
	{key: "sixes", val: false},
	{key: "threeOfAKind", val: false},
	{key: "fourOfAKind", val: false},
	{key: "fullHouse", val: false},
	{key: "smallStraight", val: false},
	{key: "largeStraight", val: false},
	{key: "yahtzee", val: false},
	{key: "chance", val: false},
	];
	
}

Scorecard.prototype.getScore = function(id){
	
	for(var i = 0; i < this.kept.length; i++){
		var cell = this.kept[i];
		
		if(cell.key == id){		
			return this.kept[i].val;
		}
	}
}

Scorecard.prototype.isKept = function(id){
	for(var i = 0; i < this.scored.length; i++){
		var cell = this.scored[i];
		
		if(cell.key == id){		
			return this.scored[i].val;
		}
	}
}

Scorecard.prototype.keep = function(id, val){
	for(var i = 0; i < this.kept.length; i++){
		var cell = this.kept[i];
		
		if(cell.key == id){		
			this.kept[i].val = val;
			this.scored[i].val = true;
		}
	}
	
}

Scorecard.prototype.numsTotal = function(){
	var total = 0;
	
	for(var i = 0; i < this.lowerStart; i++){
		total += this.kept[i].val;
		
	}
	
	return total;
}

Scorecard.prototype.bonus = function(){
	if(this.numsTotal() >= 63 ){
		return 35;
	}
	else{
		return 0;
	}
}

Scorecard.prototype.upperSection = function(){
	return this.numsTotal() + this.bonus();
}

Scorecard.prototype.lowerSection = function(){
	var total = 0;
	
	for(var i = this.lowerStart; i < this.kept.length; i++){
		total += this.kept[i].val;
		
	}
	
	return total;
}

Scorecard.prototype.grandTotal = function(){
	return this.upperSection() + this.lowerSection();
}

Scorecard.prototype.isFilled = function(){
	for(var i = 0; i < this.scored.length; i++){
		if(!this.scored[i].val){
			return false;
		}
		
	}

	return true;
}