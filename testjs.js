function aObject(){
	var priv=0;
	function privMethod(){
		return 1;
	}

	 this.pubmethod=function(){
		priv++;
		console.log(priv);
		console.log(privMethod());
	}

}
var car = new aObject();
car.pubmethod();