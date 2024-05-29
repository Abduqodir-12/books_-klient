let bookList = document.querySelector('.bookList');
let createBook = document.querySelector('.createBook');
let searchForm = document.querySelector('.searchForm');

let books = []

bookList.innerHTML = `Please wait...`

let showBooks = () => {
    let result = "";
    books.length > 0 ? books.reverse().forEach(book => {
        result = result + `
            <div class="cardArray card" style="width: 18rem;">
                <a class="linkJs" onclick="saveId('${book.id}')" href="./book.html">
                    <img height="400" src="http://localhost:4001/${book.image}" class="card-img-top" alt="${book.title}">
                    <h5 class="nameJs">Name: ${book.title}</h5>
                </a>
            </div>
        `
    }) : result = "Hali kitoblar mavjut emas"
    bookList.innerHTML = result;
}

let getBooks = async () => {
    try {
        let res = await fetch("http://localhost:4001/book", {method: "get"})
        let data = await res.json()
        books = data.books
        showBooks()
    } catch (error) {
        console.log(error);
    }
}
getBooks()

if(createBook) {
    createBook.onsubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData(e.target)
            const res = await fetch("http://localhost:4001/book", {method: 'post', body: formData})
            const data = await res.json()
            alert(data.message);
            createBook.reset()
            getBooks()
        } catch (error) {
            console.log(error);
        }
    }
}

searchForm.onsubmit = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData(e.target);
        const query = new URLSearchParams(formData).toString();
        const res = await fetch(`http://localhost:4001/search?${query}`, { method: 'get' });
        const data = await res.json();
        books = data.books;
        showBooks();
        searchForm.reset();
    } catch (error) {
        console.error(error);
    }
};

let saveId = (id) => {
    localStorage.setItem('bookId', id)
}