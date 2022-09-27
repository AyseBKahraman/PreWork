const { subtle } = require('crypto');
const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component{
    render(){
        const {books} = this.props;
        console.log(books);
            return(
                <DefaultLayout title = {"Books Dashboard"}>
                    <ul>
                    {books.map((book, i) => {
                        return (
                        <li key = {i}>
                           <img src= {book.imageUrl} alt="" />
                           <br></br>
                            <a href = {`/books/${book.id}`}> {book.title}</a> has a GPA of {book.author}<br>
                            </br> 

                            {book.isPassing ? "And is eligible to graduate" : "And is not eligible to graduate"}

                            {/* -----------EDIT */}
                                <br></br>
                             <a href = {`books/${book._id}/edit`}> Edit Book</a>

                            {/* -----------DELETE */}
            
                            <form action = {`/books/${book._id}?_method=DELETE`} method = "POST"> 
                                <input type = 'submit' value = 'DELETE'></input>
                                
                            </form>
                        </li>)
                    })}
                    </ul>
                </DefaultLayout>
        )
    }
}
module.exports = Index