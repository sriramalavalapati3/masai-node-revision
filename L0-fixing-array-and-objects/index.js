const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {
    if (!book.title || !book.author || !book.year) {
      console.log("Book information is incomplete.");

      return;
    }

    if (
            typeof book.title !== "string" ||
            typeof book.author !== "string" ||
            typeof book.year !== "number"
        ) {
            console.log("Book information is invalid.");
            return;
        }

    const existing = this.findBookByTitle(book.title);
    if (existing) {
      console.log(`Book with the title "${book.title}" already exists.`);
      return;
    }
    this.books.push(book);
  },

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Book "${title}" removed successfully.`);
            return;
        } else {
            console.log(`Book "${title}" not found.`);
            return;
        }
  },
};

library.addBook({ title:"my life", author: "George Orwell", year: 1949 });

console.log(library.books.length);
console.log(library.books);
console.log(library.findBookByTitle("The Hobbit"));
library.removeBook("The Hobbit ");
console.log(library.books.length);