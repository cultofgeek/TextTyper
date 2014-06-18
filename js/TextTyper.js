
function TextTyper(str, target, speed) {
	this.str = str;  //the user-defined string
	this.target = target; //the target DOM element's name
	this.speed = speed;  //The time interval to use for rendering text
	this.len = this.str.length; //The string length 
	this.counter = 0;  
	this.tracker = 0;
	this.lastCount = 0;
	this.typoText = "_"; //the precursor
}

TextTyper.prototype.render = function(){
	var me = this;  //need a local reference to this for setInterval;
	me.typeInterval = setInterval(function(){me.genText();}, me.speed);
}

TextTyper.prototype.stop = function(){
	clearInterval(this.typeInterval);
}

TextTyper.prototype.genText = function(){

	if (this.tracker >= this.len) {	
		this.stop();
		$(this.target).text(this.str);
	} 
	else {
		this.typoText = "";
		
		for (var i=0; i<this.tracker; i++){
			this.typoText += this.str.charAt(i);
		}

		this.typoText+="_";
		this.counter++;

		if (this.counter >= (2 + this.lastCount)){
			this.tracker++;
			this.lastCount = this.counter;
		}

		$(this.target).text(this.typoText);
	}
}