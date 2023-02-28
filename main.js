const persons = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
  ];

//map
  const map1 = persons.map((persons) =>  persons.name);
  console.log({map1})
  const map2 = persons.map((persons) =>  persons.height);
  console.log({map2})
  const map3 = persons.map((persons) => ({
    name: persons.name,
    height:persons.height,
  }));
  console.log({map3})

  const map4 = persons.map((persons) =>  persons.name.split(" ")[0]);
  console.log({map4})

  //reduce

  let mapMethod = persons.map((persons) => parseInt(persons.mass));
  let reducemethod = mapMethod.reduce(function(acc,total){
    return acc + total;
  })
console.log({ reduceHeight})

let mapEye = persons.map((persons) => persons.eye_color);
let reduceEye = mapEye.reduce((acc,value) => acc + value);
console.log(reduceEye.length);
let mapName = persons.map((persons) =>persons.name);
let reduceName = mapName.reduce((acc,value) =>acc + value); 
console.log(reduceName.Length);

//filter

let filterMethod = persons.filter((item) => parseInt(item.mass)> 100);
console.log(filterMethod);
let filterMethod2 = persons.filter((item) =>item.height <= 200);
console.log(filterMethod2);
let filterMethod3 = persons.filter((item) =>item.gender == "male");
console.log(filterMethod3);
let filterMethood4 = persons.filter((item) =>item.gender == "female")
console.log(filterMethod4);
  
  