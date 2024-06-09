
# Book Application

Welcome to the Book Application project repository! This repository contains a frontend application developed using React.js framework. The application allows users to browse through a collection of books fetched from a provided API and view detailed information about each book.

## Project Overview

The Book Application consists of the following pages:

1. **Books Page**: This page displays a list of all books available in the collection. Each book is represented as a clickable link leading to its details page.
2. **Book Details Page**: This page presents detailed information about a selected book, including its title, ISBN, page count, and authors.

## Technology Stack

- **Frontend Framework**: React.js
- **Routing**: React Router
- **Styling**: CSS
- **API Testing**: Postman

## Getting Started

To run the Book Application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm or yarn:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

4. Start the development server:

   ```
   npm start
   ```

   or

   ```
   yarn start
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## API Integration

The application fetches data from the provided API endpoints:

- **GET /Books**: Fetches the list of all books.
- **GET /Books/id**: Fetches details of a specific book by its ID.

Ensure you have Postman installed to test these APIs and familiarize yourself with the API responses.

## Project Structure

Book-Application/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── BookDetails.js
│   │   ├── BookList.js
│   │   ├── LoadingSpinner.js
│   │   └── ...
│   ├── pages/
│   │   ├── BooksPage.js
│   │   ├── BookDetailsPage.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── api.js
├── .gitignore
├── package.json
├── README.md
└── ...


## Additional Notes

- Error handling and loading states are implemented to provide a seamless user experience.
- The application follows responsive design principles to ensure compatibility with various screen sizes.

![Book Application Screenshot](https://github.com/jagrutishinde03/Book-Application/blob/main/public/1.png)
![Book Application Screenshot](https://github.com/jagrutishinde03/Book-Application/blob/main/public/2.png)
![Book Application Screenshot](https://github.com/jagrutishinde03/Book-Application/blob/main/public/3.png)
![Book Application Screenshot](https://github.com/jagrutishinde03/Book-Application/blob/main/public/4.png)

## Author

Jagruti Shinde



Feel free to reach out if you have any questions or need further assistance. Happy coding!

