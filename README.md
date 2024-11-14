# Library Management System

A JavaScript-based Library Management System that allows users to manage a collection of books, including adding, removing, searching, and filtering books by various criteria. This project demonstrates the use of JavaScript array methods such as `reduce()`, `filter()`, and `find()`, and provides a simple text-based interface for user interaction.

## Features

- **Add a Book**: Collect information about a new book and add it to the library.
- **Remove a Book**: Remove a book from the library by its title.
- **Find a Book**: Search for a specific book by its title.
- **List Books by Author**: Display all books written by a specific author.
- **List All Genres**: Show all unique genres in the library collection.
- **Calculate Total Pages**: Calculate the total number of pages of all books in the library.
- **Filter Books by Year**: Display books published in a specific year.
- **Average Page Count by Genre**: Calculate the average page count for books in a specific genre.
- **Display All Books**: View all books currently in the library.

## Usage

1. Load the `library-management-system.js` file into a JavaScript console or a compatible environment.
2. Run the `displayMenu()` function to start the menu and interact with the library management system.
3. Follow the on-screen prompts to manage your library.

## Code Overview

### Library Data Structure

The `library` array stores all book objects. Each book object contains the following properties:
- `title` (string): Title of the book.
- `author` (string): Author of the book.
- `genre` (string): Genre of the book.
- `year` (number): Publication year.
- `pages` (number): Number of pages.

### Functions

- **addBook()**: Prompts the user for book details and adds the book to the library.
- **removeBook(library, title)**: Removes a book by its title using `findIndex()`.
- **findBook(library, title)**: Finds a book by its title using `find()`.
- **authorBooks(library, author)**: Lists all books by a specified author using `filter()`.
- **genres(library)**: Lists all genres by iterating over the books.
- **totalPages(library)**: Calculates the total pages in the library using `reduce()`.
- **bookByYear(library, year)**: Filters books by the publication year using `filter()`.
- **avgPageCount(library, genre)**: Calculates the average page count for a specified genre using `filter()` and `reduce()`.
- **displayMenu()**: Shows a menu and allows users to select an option to interact with the library.

## Acknowledgments

- Inspired by common library management systems.
- Built as a hands-on JavaScript project to practice array methods and basic UI design.
