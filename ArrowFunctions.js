let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths', 'english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];
/**
 * Takes the points for given subject from each student,
 * Adds to a cumlative total and a sum,
 * then divides the total by the sum of results.
 */
const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    // For each itm (object) in arr (array)
    for(let itm of arr) {
        // If subject is in itm.results (arr.object.results)
      if(subject in itm.results) {
        // Add points from subject in results array to total
        // Below dot notation is same as students[0].results.math (subject name is passed in from function)
        allPoints += itm.results[subject];
        sum+=1;
      }
    }
    return allPoints / sum;
};

let averageMarks = averagePoints(students, 'english');
console.log(averageMarks);



