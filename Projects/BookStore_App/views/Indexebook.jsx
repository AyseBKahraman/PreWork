
const { subtle } = require('crypto');
const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Indexebook extends React.Component{
    render(){
        const {ebooks} = this.props;
        console.log(ebooks);
        return(
            <DefaultLayout title = {"Ebooks Dashboard"}>
                <nav id="indexBack">
                    <a href={'/'} className="backSection">
                        <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
                    </a>
                    <a href={'/ebooks/newebook'}>Add New Ebook</a>
                </nav>
                <ul>
                    {ebooks.map((ebook, i) => {
                        return (
                            <li key = {i}>
                                <div className='start'>
                                    <span className='align'>
                                        <img src= {ebook.imageUrl} alt="" className='bimg' />
                                        <br></br>
                                        <a className='title' href = {`/ebooks/${ebook.id}`}> {ebook.title}</a> 
                                    </span>
                                    <p>by {ebook.author} </p>
                                    <p>Price {ebook.price}</p>
                                    <p>Number of Copy: {ebook.copy}</p>
                                </div>

                                <div className='end'>
                                    <p>{ebook.isAvailable ? "Available Online" : "Not Available Online"}</p>
                                    <div className="btn">
                                        {/* -----------EDIT */}
                                        <form action = {`/ebooks/${ebook._id}/editebook`} > 
                                            <input type = 'submit' value = 'Edit EBook' ></input>
                                        </form>
                                        {/* -----------DELETE */}
                                        <form action = {`/ebooks/${ebook._id}/deleteebook`} > 
                                            <input type = 'submit' id='delete' value = 'Delete EBook' ></input>
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
module.exports = Indexebook