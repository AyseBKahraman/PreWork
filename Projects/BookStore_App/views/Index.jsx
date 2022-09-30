const { subtle } = require('crypto');
const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component{
    render(){
        const {books} = this.props;
        console.log(books);
        return(
            <DefaultLayout title = {"Books Dashboard"}>
                
                <nav id="indexBack">
                    <a href={'/'} className="backSection">
                        <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" /> Back
                    </a>
                    <a href ={'/books/new'}>Add New Book</a>
                </nav>
                <ul>
                    {books.map((book, i) => {
                        return (
                            <li key = {i}>
                                <div className='start'>
                                    <span className='align'>
                                        <img src= {book.imageUrl} alt="" className='bimg' />
                                        <br></br>
                                        <a className='title' href = {`/books/${book.id}`}> {book.title}</a> 
                                    </span>
                                    <p>by {book.author} </p>
                                    <p>Paperback {book.price}</p>
                                    <p>Number of Copy: {book.copy}</p>
                                </div>
                                
                                <div className='end'>
                                    <p>{book.isAvailable ? "Available Online" : "Not Available Online"}</p>
                                    <div className="btn">
                                        {/* -----------EDIT */}
                                        <form action = {`/books/${book._id}/edit`} > 
                                            <input type = 'submit' value = 'Edit Book' ></input>
                                        </form>
                                        {/* -----------DELETE */}

                                        <form action = {`/books/${book._id}?_method=DELETE`} method = "POST"> 
                                            <input type = 'submit' id='delete' value = 'Delete Book' ></input>
                                        </form>
                                    </div>
                                </div>
                            </li>  
                        )
                    })}
                </ul>
            </DefaultLayout>
        )
    }
}
module.exports = Index