
const { subtle } = require('crypto');
const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Indexgame extends React.Component{
    render(){
        const {games} = this.props;
        console.log(games);
        return(
            <DefaultLayout title = {"Game Dashboard"}>
                <nav id="indexBack">
                    <a href={'/'} className="backSection">
                        <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
                    </a>
                    <a href={'/games/newgame'}>Add New Game</a>
                </nav>
                <ul>
                    {games.map((game, i) => {
                        return (
                            <li key = {i}>
                                <div className='start'>
                                    <span className='align'>
                                        <img src= {game.imageUrl} alt="" className='bimg' />
                                        <br></br>
                                        <a className='title' href = {`/games/${game.id}`}> {game.name}</a> 
                                    </span>
                                    <p>by {game.producer} </p>
                                    <p>Price {game.price}</p>
                                </div>
                                <div className='end'>
                                    <p>{game.isAvailable ? "Available Online" : "Not Available Online"}</p>
                                    <div className="btn">
                                        {/* -----------EDIT */}
                                        <form action = {`/games/${game._id}/editgame`} > 
                                            <input type = 'submit' value = 'Edit Game' ></input>
                                        </form>
                                        {/* -----------DELETE */}
                                        <form action = {`/games/${game._id}/deletegame`} > 
                                            <input type = 'submit' id='delete' value = 'Delete Game' ></input>
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
module.exports = Indexgame