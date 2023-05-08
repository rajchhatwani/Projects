function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function Display() { }

Display.prototype.add = (Book) => {
    tableBody = document.getElementById("tableBody");
    let uiString = `
    <tr>
    <td>${Book.title}</td>
    <td>${Book.author}</td>
    <td>${Book.pages}</td>
    </tr>`;
    tableBody.innerHTML += uiString;
}

Display.prototype.clear = function () {
    let LibraryInput = document.getElementById("LibraryInput");
    LibraryInput.reset();
}
let LibraryInput = document.getElementById("LibraryInput");

LibraryInput.addEventListener("submit", LibrarySubmit);

function LibrarySubmit(e) {
    e.preventDefault();
    let title = document.getElementById("tlt").value;
    let author = document.getElementById("aut").value;
    let pages = document.getElementById("pgs").value;

    let book = new Book(title, author, pages);
    console.log(book);

    let display = new Display();
    display.add(book);
    display.clear();
}
