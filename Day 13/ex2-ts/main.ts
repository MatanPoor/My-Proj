import { Exam } from "./Exam";
import { question } from "./Question";

let exam = new Exam();
exam.addQuestion({
    caption: 'what do you get if you mix red and yellow',
    answers:[
        'pink',
        'Orange',
        'Green',
        'White'
    ],
    correctIndex:1
});

exam.addQuestion({
    caption: 'what do you get if you mix blue and yellow',
    answers:[
        'pink',
        'Orange',
        'Green',
        'White'
    ],
    correctIndex:3
});

exam.addQuestion({
    caption: 'what do you get if you mix green and magenta',
    answers:[
        'ichs',
        'Brown',
        'Green',
        'White'
    ],
    correctIndex:2
});

exam.print();

let ans1 = [0,1,2,3];
let ans2 = [3,2,1,0];
let ans3 = [1,3,2,3,4,4,4]

console.log(ans1);
console.log(exam.grade(ans1));

console.log(ans2);
console.log(exam.grade(ans2));

console.log(ans3);
console.log(exam.grade(ans3));