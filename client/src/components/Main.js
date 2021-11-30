import {useState } from "react";

function Main() {
    const [book, setBook] = useState("");
    const [author, setAuthor] = useState("");
    const [pages, setPages] = useState("");

    const submit = e => {
        e.preventDefault();
        fetch('/api/book/', {
            method: 'POST',
            body: JSON.stringify({ "name": book, "author": author, "pages": pages}),
            headers: { 'Content-Type': 'application/json' },
          })
            .then(response => response.json())
            .then(data => setBook(data))
    }
  

    // console.log(listItems)
    return (
        <div>
            <form onSubmit={submit}>
                <div>Book name &nbsp;
                    <input type="string" id="name" onChange={(e) => setBook(e.target.value)} value={book}></input>
                </div>
                <br></br>
                <div>Author &nbsp;
                    <input type="string" id="author" onChange={(e) => setAuthor(e.target.value)} value={author}></input>
                </div>
                <br></br>
                <div>Page amount &nbsp;
                    <input type="number" id="pages" onChange={(e) => setPages(e.target.value)} value={pages}></input>
                </div>
                <br></br>
                <input type="submit" id="submit"></input>
            </form>
        </div>
    );
  }
  
  
export default Main;