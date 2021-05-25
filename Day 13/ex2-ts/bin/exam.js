"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam() {
        this.questionArr = [];
    }
    Exam.prototype.addQuestion = function (question) {
        this.questionArr.push(question);
    };
    Exam.prototype.print = function () {
        var _this = this;
        this.questionArr.forEach(function (element) {
            console.log(element.caption);
            _this.questionArr.forEach(function (elemen) {
                console.log(element.answers);
            });
            console.log('----------------------------');
        });
    };
    Exam.prototype.grade = function (answers) {
        var score = 0;
        var index = 0;
        this.questionArr.forEach(function (element) {
            if (typeof (element.caption) !== 'undefined') {
                if (element.correctIndex === answers[index]) {
                    score++;
                }
            }
            index++;
        });
        return score / this.questionArr.length * 100;
    };
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=exam.js.map