function Calculator(a ,b){
    this.a = a;
    this.b = b;
}
    Calculator.prototype.add=function (){
        return this.a + this.b;
    }
    Calculator.prototype.sub=function(){
        return this.a - this.b ;
    }
    Calculator.prototype.mult=function() {
        return this.a * this.b;
    }
    Calculator.prototype.log = function(){
        console.log("The sum of" +" "+ this.a + " " + " + " + this.b + " = " + this.add());
        console.log("The sub of" +" "+ this.a + " " + " - " + this.b + " = " + this.sub());
        console.log("The mult of" +" "+ this.a + " " + " * " + this.b + " = " + this.mult());
    }

var c1 = new Calculator (10,5);

var logFunc = c1.log;
logFunc.call(c1);

console.log('------------------------------------------------------------')

var c2 = new Calculator (12,6);

var logFunc = c2.log;
logFunc.call(c2);