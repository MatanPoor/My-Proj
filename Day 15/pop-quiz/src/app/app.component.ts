import { Component } from '@angular/core';
import { Question } from './Model/question';
import { Questions } from './Model/questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  summary : Question [];
  currentQuestion: Question ; 
  currentQuestionIndex: number ;
  isQuizOver: boolean ;
  answerCounter: number;
  maxLength: number = Questions.length;
  score: number 

  constructor() {
    this.currentQuestionIndex = 0;
    this.currentQuestion = Questions[this.currentQuestionIndex];
    this.summary = [];
    this.isQuizOver = false;
    this.answerCounter = 0;
    this.score =0;
  }

  SelectedAnswer(answer:string){

    if(this.isQuizOver != true)
    this.currentQuestion.userAnswer=this.currentQuestion.answers.indexOf(answer);

    if(this.currentQuestion.correctAnswer === this.currentQuestion.userAnswer){
       this.answerCounter++;
    }

    this.summary.push(this.currentQuestion);

    this.currentQuestionIndex++;
    this.currentQuestion = Questions[this.currentQuestionIndex];

    if(this.currentQuestion == null)
    this.isQuizOver=true;
  }
  
  CalcPoints():number{

    return (this.answerCounter / this.maxLength) * 100
  }
  
  
  

}

