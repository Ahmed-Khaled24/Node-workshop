const student = {
	name: "Ahmed",
	age: 20,
	grade: "A",
	major: "CSE",
    GPA: 5.0,
};

for (const property in student) {
	console.log(`${property}: ${student[property]}`);
}
