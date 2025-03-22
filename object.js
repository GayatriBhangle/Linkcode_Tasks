let student = {
    name: "Gayatri",
    age: 20,
    Address: {
        city: "Pune",
        pinCode: 411015
    },
    College: "PICT",
    hobbies: ["Dancing", "Coding", "Reading"]
}

// Accessing object properties
console.log(student.name);      // Gayatri
console.log(student.Address);      // city: 'Pune' 
console.log(student.Address.city);  // Pune
console.log(student.hobbies[1]);    // Coding

// Modifying object properties
student.hobbies[2] = "Trecking";
console.log(student.hobbies);      // [ 'Dancing', 'Coding', 'Trecking' ]

// Adding new property
student.isRankHolder = true;
console.log(student);

// output

// {
//     name: 'Gayatri',
//     age: 20,
//     Address: { city: 'Pune', pinCode: 411015 },
//     College: 'PICT',
//     hobbies: [ 'Dancing', 'Coding', 'Trecking' ],
//     isRankHolder: true
//   }
