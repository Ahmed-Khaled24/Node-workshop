const libraryBooks = [
	{ title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic Fiction" },
	{ title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic Fiction" },
	{ title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Fantasy" },
];

for (const book of libraryBooks) {
	console.log(`Title: ${book.title}`);
	console.log(`Author: ${book.author}`);
	console.log(`Genre: ${book.genre}`);
	console.log("---");
}
