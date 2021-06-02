import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/Model/question';

@Component({
  selector: 'app-quiz-over',
  templateUrl: './quiz-over.component.html',
  styleUrls: ['./quiz-over.component.css']
})
export class QuizOverComponent implements OnInit {

@Input()
score! : number;



  constructor() { }

  ngOnInit(): void {
  }

}
