
class Student {
    constructor (studentName, phoneNumber, age) {
    this.studentName = studentName;
    this.phoneNumber = phoneNumber;
    this.age = age;
    this.hobbies = []; }
    setHobbies (hobbies) {
    this.hobbies = hobbies; }
    getHobbies () {
    return this.hobbies; }
    greetings () {
    return `Hello, my name is ${this.studentName} and I am ${this.age} of age.`}
}

const studentsList = [
    {
        studentName: 'Sharleen',
        phoneNumber: '9547658787',
        age: 25,
        hobbies: ['books'],
    },
    {
        studentName: 'Della',
        phoneNumber: '4127658787',
        age: 25,
        hobbies: ['books'],
    },
    {
        studentName: 'Ryana',
        phoneNumber: '6967658787',
        age: 34,
        hobbies: ['books'],
    },
    {
        studentName: 'Lydia',
        phoneNumber: '4447658787',
        age: 35,
        hobbies: ['footbal'],
    },
    {
        studentName: 'Mikey',
        phoneNumber: '2227658787',
        age: 25,
        hobbies: ['socker'],
    },
    {
        studentName: 'Chester',
        phoneNumber: '5557658787',
        age: 56,
        hobbies: ['it'],
    },
     {
        studentName: 'Danette',
        phoneNumber: '3037658787',
        age: 45,
        hobbies: ['it'],
    },
        {
        studentName: 'Adalyn',
        phoneNumber: '7657658787',
        age: 37,
        hobbies: ['fishing'],
    },
    {
        studentName: 'Johnnie',
        phoneNumber: '2557658787',
        age: 32,
        hobbies: ['ski'],
    },
    {
        studentName: 'Natille',
        phoneNumber: '1087658787',
        age: 73,
        hobbies: ['snowboard'],
    },
]

    let allStudents = [];

    for (let i = 0; i < studentsList.length; i++) {
    let student = new Student(studentsList[i].studentName, studentsList[i].phoneNumber, studentsList[i].age);
    student.setHobbies(studentsList[i].hobbies);
    allStudents[allStudents.length] = student;}

    console.log(allStudents);
    console.log('Student Message: ' + allStudents[5].greetings());

    for (let i = 0; i < allStudents.length; i++){
    if (allStudents[i].getHobbies().includes('music') || allStudents[i].getHobbies().includes('book')) {
     console.log(allStudents[i].greetings())}
}

