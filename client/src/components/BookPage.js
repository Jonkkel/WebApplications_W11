import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BookPage() {
  const {id} = useParams();
  const [book, setBook] = useState("");
    const [author, setAuthor] = useState("");
    const [pages, setPages] = useState("");

    useEffect(() =>{
        fetch("/book/" + id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }})
        .then(response => response.json())
        .then(data => {
            setBook(data.name);
            setAuthor(data.author);
            setPages(data.pages);
        })
    },[] )

  return (
    <div>
        <div>{book}</div>
        <br></br>
        <div>{author}</div>
        <br></br>
        <div>{pages}</div>
        <br></br>
    </div>
  )
}
export default BookPage;