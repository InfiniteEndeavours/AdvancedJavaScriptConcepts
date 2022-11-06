let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
        results: { maths: 90, english: 75, cad: 87 },
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
        results: { science: 93, english: 80, art: 95 },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
        results: { science: 63, maths: 87, art: 95 },
    }
];

// Copies the subjects array from the first student object
let subjects = [...students[0].subjects];

// Copies item (array) passed into function, then appends val (value) to end of array.
const update = (item, val) => [...item, val];
let updatedSubjects = update(subjects, 'Electronics');

// Checks that original arrays (students and subjects) haven't been updated by the function
console.log(students[0].subjects);
console.log(subjects);
console.log(updatedSubjects);