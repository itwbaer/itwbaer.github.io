//this is the Dice class
function Dice(id){
	this.canvasRef = document.getElementById(id);
	this.width = document.getElementById(id).width;
	this.height = document.getElementById(id).height;
	this.val = 0;
	this.locked = false;
	
}

Dice.prototype.toggle = function(){
	if(this.locked){
		this.locked = false;
	}
	else{
		this.locked = true;
	}
}

Dice.prototype.unlock = function(){
	this.locked = false;
}

Dice.prototype.lock = function(){
	this.locked = true;
}

Dice.prototype.gridify = function(){
	var ctx = dice.getContext("2d");

	ctx.moveTo(this.width/3,0);
	ctx.lineTo(this.width/3,this.height);
	ctx.stroke();

	ctx.moveTo(2*this.width/3,0);
	ctx.lineTo(2*this.width/3,this.height);
	ctx.stroke();

	ctx.moveTo(0,this.height/3);
	ctx.lineTo(this.width,this.height/3);
	ctx.stroke();

	ctx.moveTo(x,2*this.height/3);
	ctx.lineTo(this.width,2*this.height/3);
	ctx.stroke();

}

Dice.prototype.clear = function(){
	var ctx = this.canvasRef.getContext("2d");
	ctx.clearRect(0, 0, this.width, this.height);
}

Dice.prototype.drawOne = function(){
	drawMiddle(this.canvasRef);
}

Dice.prototype.drawTwo = function(){
	drawTopLeft(this.canvasRef);
	drawBottomRight(this.canvasRef);
}

Dice.prototype.drawThree = function(){
	drawTopLeft(this.canvasRef);
	drawMiddle(this.canvasRef);
	drawBottomRight(this.canvasRef);
}

Dice.prototype.drawFour = function(){
	drawTopLeft(this.canvasRef);
	drawBottomLeft(this.canvasRef);
	drawTopRight(this.canvasRef);
	drawBottomRight(this.canvasRef);
}

Dice.prototype.drawFive = function(){
	drawTopLeft(this.canvasRef);
	drawBottomLeft(this.canvasRef);
	drawMiddle(this.canvasRef);
	drawTopRight(this.canvasRef);
	drawBottomRight(this.canvasRef);
}

Dice.prototype.drawSix = function(){
	drawTopLeft(this.canvasRef);
	drawMiddleLeft(this.canvasRef);
	drawBottomLeft(this.canvasRef);
	drawTopRight(this.canvasRef);
	drawMiddleRight(this.canvasRef);
	drawBottomRight(this.canvasRef);
}

Dice.prototype.roll = function(){
	var val = Math.floor((Math.random() * 6) + 1);

	switch(val){
		case 1:
			this.drawOne();
			break;
		case 2:
			this.drawTwo();
			break;
		case 3:
			this.drawThree();
			break;
		case 4:
			this.drawFour();
			break;
		case 5:
			this.drawFive();
			break;
		case 6:
			this.drawSix();
			break;
	}

	this.val = val;
}
