const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript',
      age: 42
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML',
      age: 44
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS',
      age: 22
    },
  ];
  let ageObjects = students.map(obj => ({name: obj.name, id: obj.id, age: obj.age}));
  console.log(ageObjects);