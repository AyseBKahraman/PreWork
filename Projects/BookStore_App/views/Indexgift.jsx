
const { subtle } = require('crypto');
const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Indexgift extends React.Component{
    render(){
        const {gifts} = this.props;
        console.log(gifts);
        return(
            <DefaultLayout title = {"Gift Dashboard"}>
                <nav id="indexBack">
                    <a href={'/'} className="backSection">
                        <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
                    </a>
                    <a href={'/gifts/newgift'}>Add New Gift</a>
                </nav>
                <ul>
                    {gifts.map((gift, i) => {
                        return (
                            <li key = {i}>
                                <div className='start'>
                                    <span>
                                        <img src= {gift.imageUrl} alt="" className='bimg' />
                                        <br></br>
                                        <a className='title' href = {`/gifts/${gift.id}`}> {gift.name}</a> 
                                    </span>
                                    <p>by {gift.producer} </p>
                                    <p>Paperback {gift.price}</p>
                                </div>

                                <div className='end'>
                                    <p>{gift.isAvailable ? "Available Online" : "Not Available Online"}</p>
                                    <div className="btn">
                                        {/* -----------EDIT */}
                                        <form action = {`/gifts/${gift._id}/editgift`} > 
                                            <input type = 'submit' value = 'Edit Gift' ></input>
                                        </form>
                                        {/* -----------DELETE */}
                                        <form action = {`/gifts/${gift._id}/deletegift`} > 
                                            <input type = 'submit' id='delete' value = 'Delete Gift' ></input>
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
module.exports = Indexgift