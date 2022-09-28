const { subtle } = require('crypto');
const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component{
    render(){
        const {books} = this.props;
        console.log(books);
            return(
                <DefaultLayout title = {"Books Dashboard"}>
                    
                    <nav>
                        <a href={'/books/new'}>Add New Book</a>
                    </nav>

                    <ul>
                    {books.map((book, i) => {
                        return (
                        <li key = {i}>
                           <img src= {book.imageUrl} alt="" className='bimg' />
                           <br></br>
                            <a href = {`/books/${book.id}`}> {book.title}</a> 
                             <p>by {book.author} </p>
                             <p>
                             Paperback {book.price}
                             </p>

                            <br></br>
                            <p>
                            {book.isAvailable ? "Available Online" : "Not Available Online"}
                            </p>

                            <div class="btn">
                            {/* -----------EDIT */}
                            <form action = {`/books/${book._id}/edit`} > 
                                <input type = 'submit' value = 'Edit Book' ></input>
                                
                            </form>
                            {/* -----------DELETE */}
            
                            <form action = {`/books/${book._id}?_method=DELETE`} method = "POST"> 
                                <input type = 'submit' id='delete' value = 'Delete Book' ></input>
                                
                            </form>
                            </div>
                        </li>)
                    })}
                    </ul>
                </DefaultLayout>
        )
    }
}
module.exports = Index