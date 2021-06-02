import { Output } from '@angular/core';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Question } from 'src/app/Model/question';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {

  @Input()
  question! : Question;

 @Output() //event
  userSelect = new EventEmitter<string>();

  userAnsewerSelect(answer:string){
    this.userSelect.emit(answer);
  }

  ngOnInit(): void {
  }

  

}
