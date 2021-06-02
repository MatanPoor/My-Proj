import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './component/title/title.component';
import { SummaryComponent } from './component/summary/summary.component';
import { QuestionPresenterComponent } from './component/question-presenter/question-presenter.component';
import { QuizOverComponent } from './component/quiz-over/quiz-over.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    QuestionPresenterComponent,
    QuizOverComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
