const books = [];
let editingIndex = -1;

// ADD BOOK
function addBook() {
  const bookName = document.getElementById("bookName").value.trim();
  const authorName = document.getElementById("authorName").value.trim();
  const bookDescription = document
    .getElementById("bookDescription")
    .value.trim();
  const pagesNumber = Number(document.getElementById("pagesNumber").value);

  // Validate inputs
  if (
    !bookName ||
    !authorName ||
    !bookDescription ||
    !Number.isInteger(pagesNumber) ||
    pagesNumber <= 0
  ) {
    alert("Please fill in all fields correctly.");
    return;
  }

  // Create book object
  const book = {
    name: bookName,
    authorName: authorName,
    bookDescription: bookDescription,
    pagesNumber: pagesNumber,
  };

  // Check whether adding or updating
  if (editingIndex === -1) {
    books.push(book);
  } else {
    books[editingIndex] = book;
    editingIndex = -1;
  }

  showBooks();
  clearInputs();
}

// DISPLAY BOOKS
function showBooks() {
  const booksDiv = document.getElementById("books");

  // Clear existing content
  booksDiv.replaceChildren();

  books.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "book-card";

    const title = document.createElement("h2");
    title.textContent = `Book Number: ${index + 1}`;

    const name = document.createElement("p");
    name.textContent = `Book Name: ${book.name}`;

    const author = document.createElement("p");
    author.textContent = `Author Name: ${book.authorName}`;

    const description = document.createElement("p");
    description.textContent = `Description: ${book.bookDescription}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pagesNumber}`;

    // EDIT BUTTON
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editBook(index);

    // DELETE BUTTON
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteBook(index);

    card.append(
      title,
      name,
      author,
      description,
      pages,
      editButton,
      deleteButton,
    );

    booksDiv.appendChild(card);
  });
}

// EDIT BOOK
function editBook(index) {
  const book = books[index];

  if (!book) return;

  document.getElementById("bookName").value = book.name;
  document.getElementById("authorName").value = book.authorName;
  document.getElementById("bookDescription").value = book.bookDescription;
  document.getElementById("pagesNumber").value = book.pagesNumber;

  editingIndex = index;

  document.getElementById("submitBtn").textContent = "Update Book";
}

// DELETE BOOK
function deleteBook(index) {
  const confirmDelete = confirm("Are you sure you want to delete this book?");

  if (confirmDelete) {
    books.splice(index, 1);

    // Reset editing if the edited book was deleted
    if (editingIndex === index) {
      editingIndex = -1;
      clearInputs();
    } else if (editingIndex > index) {
      editingIndex--;
    }

    showBooks();
  }
}

// CLEAR INPUTS
function clearInputs() {
  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";
  document.getElementById("bookDescription").value = "";
  document.getElementById("pagesNumber").value = "";

  editingIndex = -1;

  document.getElementById("submitBtn").textContent = "Add Book";
}

// FORM SUBMISSION
document
  .getElementById("bookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });
