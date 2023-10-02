const value = getStudentIdsSum(students);
const marks = [1,5,2];

marks.forEach(element => {
    sum = sum + element;
});

console.log(sum);

console.log(marks.reduce((a, b) => a+b));