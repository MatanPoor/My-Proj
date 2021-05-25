import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  keyWordA:string='';
  keyWordB:string='';
  results : number []=[];
  resAdd:string='';
  resSub:string='';
  resMult:string='';
  toView:boolean = false;


    setKeyWordA(value : string){
        this.keyWordA = value;
    }
    setKeyWordB(value : string){
        this.keyWordB = value;
    }

  add(a:number,b:number){
    return (a+b).toString();
  }
  substract(a:number , b:number){
    return (a-b).toString();
  }
  multiplayer(a:number , b:number){
    return (a*b).toString();
  }

  calcRes(){
   this.resAdd= this.add(Number(this.keyWordA),Number(this.keyWordB))
   this.resSub= this.substract(Number(this.keyWordA),Number(this.keyWordB))
   this.resMult= this.multiplayer(Number(this.keyWordA),Number(this.keyWordB))
    this.toView = true;
  }


}
