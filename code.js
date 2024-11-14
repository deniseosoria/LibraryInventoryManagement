//Create an array to store book objects
const library = [
  {
    title: "look",
    author: "luca",
    genre: "romance",
    year: 2000,
    pages: 400,
  },
  {
    title: "never again",
    author: "luca",
    genre: "romance",
    year: 2009,
    pages: 300,
  },
  {
    title: "come back",
    author: "luca",
    genre: "romance",
    year: 2012,
    pages: 450,
  },
  {
    title: "afro-futurism",
    author: "luca",
    genre: "sci-fi",
    year: 2010,
    pages: 350,
  },
  {
    title: "don't look",
    author: "brooke",
    genre: "thriller",
    year: 2005,
    pages: 280,
  },
  {
    title: "into the wilderness",
    author: "sofia",
    genre: "fantasy",
    year: 2023,
    pages: 420,
  },
  {
    title: "you and i",
    author: "yani",
    genre: "romance",
    year: 2020,
    pages: 500,
  },
];

//Functions to Manage the Library:

//1. Add book
//Create a function that adds a book oject with the collected information and adds it to the library array.
function addBook() {
  //Collect details of the book.
  const title = prompt("Enter the title of the book: ");
  const author = prompt("Enter the author of the book: ");
  const genre = prompt("Enter the genre of the book: ");
  const year = parseInt(prompt("Enter the year of the book: "), 10);
  const pages = parseInt(prompt("Enter number of pages of the book: "), 10);

  //Create an object with the book details.
  const book = { title, author, genre, year, pages };

  //Add book object to the library array with collection of book objects.
  library.push(book);

  const addMore = prompt("Do you want to add another book? (yes/no): ");

  if (addMore.toLowerCase() === "yes") {
    addBook(); // Recursively call the function if they say yes.
  } else {
    console.log("Book collection complete.");
    console.table(library);
  }

  return book;
}

//2. Remove a book by title. Use findIndex().
function removeBook(library, title) {
  const index = library.findIndex((book) => book.title === title);
  if (index !== -1) {
    library.splice(index, 1); //Remove one item at the found index.
    console.log(`Book titled "${title}" has been removed.`);
  } else {
    console.log(`No book titled "${title}" found.`);
  }
}

//3. Fink a book by title. Use find().
function findBook(library, title) {
  const book = library.find((book) => book.title === title);
  if (book) {
    console.log("Book found:", book);
  } else {
    console.log(`No book titled "${title}" found.`);
  }
}

//4. List all books by a Specific Author. Use filter().
function authorBooks(library, author) {
  const booksByAuthor = library.filter((book) => book.author === author);
  if (booksByAuthor.length > 0) {
    console.table(booksByAuthor);
  } else {
    console.log(`No books by author "${author}" found.`);
  }
}

//5. List all genres in the library.
function genres(library) {
  library.forEach((book) => console.log(book.genre));
}

//6. Calculate the total pages in the library. Use reduce().
function totalPages(library) {
  if (!library || library.length === 0) {
    console.log("Library is empty.");
    return 0;
  }
  let total = library.reduce((total, book) => total + book.pages, 0);
  console.log("Total Pages:", total);
  return total;
}

//7. Filter Books by publication year. Use filter().
function bookByYear(library, year) {
  if (!library || library.length === 0) {
    console.log("Library is empty.");
    return [];
  }
  year = parseInt(year, 10); // Ensure year is a number
  let filteredBooks = library.filter((book) => book.year === year);

  if (filteredBooks.length > 0) {
    console.log("Books published in " + year + ":");
    console.table(filteredBooks); // Display filtered books in a table format
  } else {
    console.log("No books found published in " + year + ".");
  }
  
  return filteredBooks;
}

//8. Show Average Page Count of books by genre. Use reduce().
function avgPageCount(library, genre) {
  if (!library || library.length === 0) {
    console.log("Library is empty.");
    return 0;
  }
  let filteredBooks = library.filter((book) => book.genre === genre);
  if (filteredBooks.length === 0) {
    console.log(`No books found in genre: ${genre}`);
    return 0;
  }
  let sum = filteredBooks.reduce((total, book) => total + book.pages, 0);
  let average = sum / filteredBooks.length;
  console.log(`Average Page Count in genre ${genre}:`, average);
  return average;
}

//Build a loop that displays a menu of options.
function displayMenu() {
  //User Menu and Action Selectors:
  alert(
    "Menu Options: " +
      "\n1. Add a book." +
      "\n2. Delete a book." +
      "\n3. Search for a book." +
      "\n4. List books by author." +
      "\n5. List all genres of books" +
      "\n6. Calculate total pages." +
      "\n7. Books published by year." +
      "\n8. Show average page count of books in a genre." +
      "\n9. Display all Library Books."
  );

  //Prompt the user to select an option and call the corresponding function.
  let choice = parseInt(prompt("Enter a number to start: "), 10);

  switch (choice) {
    case 1:
      addBook();
      break;
    case 2:
      const titleToDelete = prompt("Enter title of book: ");
      removeBook(library, titleToDelete);
      break;
    case 3:
      const titleToFind = prompt("Enter title of book: ");
      findBook(library, titleToFind);
      break;
    case 4:
      const authorToFind = prompt("Enter name of author: ");
      authorBooks(library, authorToFind);
      break;
    case 5:
      genres(library);
      break;
    case 6:
      totalPages(library);
      break;
    case 7:
      const yearToFind = prompt("Enter published year: ");
      bookByYear(library, yearToFind);
      break;
    case 8:
      const genreToFind = prompt("Enter genre: ");
      avgPageCount(library, genreToFind);
      break;
    case 9:
      console.table(library);
      break;
    default:
      console.log("Invaild number. Please enter number between 1-8.");
  }

  //Allow the user to continue selectig options until they choose to exit.
  const nextOption = prompt("Do you want select another option? (yes/no): ");

  if (nextOption.toLowerCase() === "yes") {
    displayMenu();
  } else {
    console.log("All done!");
    console.table(library);
  }
}

displayMenu();
