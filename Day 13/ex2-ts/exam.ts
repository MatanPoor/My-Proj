import { question } from "./Question";
export class Exam  {
    private questionArr : question[] = [];

    addQuestion(question:question):void{
        this.questionArr.push(question);
    }
    print():void{
        this.questionArr.forEach(element => {
            console.log(element.caption);
            this.questionArr.forEach(elemen =>{
                console.log(element.answers);
            })
            console.log('----------------------------')
        });
    }
    grade(answers: number[]): number{
        let score=0;
        let index = 0;
        this.questionArr.forEach(element => {
           if(typeof(element.caption) !== 'undefined'){
                if(element.correctIndex === answers[index]){
                    score ++;
                }
            }
            index ++;
        });
        return score / this.questionArr.length * 100;
    }

}