"use-strict";
/*eslint-disable*/

let student1={studentId:"s101",quizanswers:[1, 1, 2,4]};
let student1={studentId:"s102",quizanswers: [2, 1, 2,2]};
let student1={studentId:"s103",quizanswers:  [3, 1, 3,4] };
const key=[3,1,2,4];
const quize=[];
quize.push(student1);
quize.push(student2);
quize.push(student3);
function  gradeQuiz(quizeArr,keyArr){
    const report={};
    for(const elements of quizeArr){
        const score=scoreQuize(student.quizanswers,keyArr);
        report[student.studentId]=score;
    }
    return report;
}
function scoreQuize(stuAnswers,key){
    return 10;
}
console.log();