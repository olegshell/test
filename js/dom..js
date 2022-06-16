let age = 18;

let a ={
    name: 'Oleg',
    protocol: 'HTTP',
    maxStudentCount: true,
    students:['ivan', 'andrey', 'faridt'],
    classroom: {
        teacher: {
            name: 'wew',
            age: 18,
        }
    }
}

let b = {...a};
b.name='Sasha'
b.maxStudentCount=false;



console.log(b.name)
console.log(a.name)
console.log(b.maxStudentCount)