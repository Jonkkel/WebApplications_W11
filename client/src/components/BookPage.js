import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BookPage() {
    const {id} = useParams();
    const [book, setBook] = useState("");
    const [author, setAuthor] = useState("");
    const [pages, setPages] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() =>{
        fetch("/book/" + id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }})
        .then(response => response.json())
        .then(data => {
            setStatus(data.status);
            setBook(data.name);
            setAuthor(data.author);
            setPages(data.pages);
            
        })
    },[] )
    if(status){
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
    }else{
        return(
            <h1>404: this is not the webpage you are looking for</h1>
        )
    }
    
}
export default BookPage;