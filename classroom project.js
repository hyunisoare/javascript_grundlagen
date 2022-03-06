const grades = [12, 19, 10, 4, 15, 9];

function getNumberOfGrades(grades) {
    //TODO: return the number of grades
    return grades.length;
}
console.log(getNumberOfGrades(grades));

function getSumGrades(grades) {
    //TODO: return the sum of all the grades
    let sum = 0;
    grades.forEach((grade)=>{
        sum += grade;
    });
    return sum;
}
console.log(getSumGrades(grades));

function getAverageValue (grades) {
    //TODO: return the average value of all grades (sum of all grades divided
    // by the total number of grades)
    return getSumGrades(grades) / grades.length;
}
console.log(getAverageValue(grades));

function getPassingGrades(grades) {
    //TODO: return all passing grades (10 and above)
    return grades.filter((grade)=>{
        return grade >= 10;
    });
}
console.log(getPassingGrades(grades));

function getFailingGrades(grades) {
    //TODO: return all failing grades (9 and below)
    return grades.filter((grade)=>{
        return grade <= 9;
    });
}
console.log(getFailingGrades(grades));

function getRaisedGrades(grades) {
    //TODO: return all the grades raised by 1 
    // (no grade should exceed 20)
    return grades.map((grade)=>{
        if (grade + 1 > 20) {
            return 20;
        }
        return grade + 1;
    });
}
console.log(getRaisedGrades(grades));