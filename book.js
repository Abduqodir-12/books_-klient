let bookInfo = document.querySelector('.bookInfo');
let bookName = document.querySelector('.bookName');

let bookId = localStorage.getItem("bookId")
const getId = async () => {
    const res = await fetch(`http://localhost:4001/book/${bookId}`)
    const data = await res.json()
    let book = data.book;
    bookName.textContent = book.title
    bookInfo.innerHTML = `
        <div>
          <a class="btn btn-info" href="./index.html"><</a>
        </div>
        <img class="imgBook me-4 ms-2" src="http://localhost:4001/${book.image}" alt="img">
        <div>
          <h2 class="headingAuthor"><span class="text-danger">Author</span>: ${book.author}</h2>
          <h2 class="headingDesc mt-3"><span class="text-info">desc</span>: ${book.desc}</h2>
          <h2 class="headingPrice text-success">Price: ${book.price}</h2>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
          </svg>: ${book.views}</p>
            <p class="d-flex align-items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
          </svg> ${book.createdAdd.slice(0,10)}</p>
        </div>
    `
}

if(bookId) {
    getId()
}