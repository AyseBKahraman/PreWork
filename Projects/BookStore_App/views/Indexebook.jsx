
const { subtle } = require('crypto');
const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Indexebook extends React.Component{
    render(){
        const {ebooks} = this.props;
        console.log(ebooks);
            return(
                <DefaultLayout title = {"Ebooks Dashboard"}>
                    
                    <nav>
                        <a href={'/ebooks/new'}>Add New Ebook</a>
                    </nav>

                    <ul>
                    {ebooks.map((ebook, i) => {
                        return (
                        <li key = {i}>
                           <img src= {ebook.imageUrl} alt="" className='bimg' />
                           <br></br>
                            <a href = {`/ebooks/${ebook.id}`}> {ebook.title}</a> 
                             <p>by {ebook.author} </p>
                             <p>
                             Paperback {ebook.price}
                             </p>

                            <br></br>
                            <p>
                            {ebook.isAvailable ? "Available Online" : "Not Available Online"}
                            </p>

                            <div class="btn">
                            {/* -----------EDIT */}
                            <form action = {`/ebooks/${ebook._id}/edit`} > 
                                <input type = 'submit' value = 'Edit EBook' ></input>
                                
                            </form>
                            {/* -----------DELETE */}
            
                            <form action = {`/ebooks/${ebook._id}?_method=DELETE`} method = "POST"> 
                                <input type = 'submit' id='delete' value = 'Delete EBook' ></input>
                                
                            </form>
                            </div>
                        </li>)
                    })}
                    </ul>
                </DefaultLayout>
        )
    }
}
module.exports = Indexebook