function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
  
 
  function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }
  
  Book.prototype.getBookInfo = function() {
    return `Title: ${this.title}\nAuthor: ${this.author.name}\nGenre: ${this.genre}\nPrice: $${this.price}`;
  };
  
  
  const author1 = new Author("J.K. Rowling", 1965, "British");
  const author2 = new Author("George Orwell", 1903, "British");
  
  
  const book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 19.99);
  const book2 = new Book("1984", author2, "Dystopian", 14.99);
  

  console.log("Book 1 Details:\n" + book1.getBookInfo());
  console.log("\nBook 2 Details:\n" + book2.getBookInfo());
  