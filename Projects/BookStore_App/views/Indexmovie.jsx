
const { subtle } = require('crypto');
const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Indexmovie extends React.Component{
    render(){
        const {movies} = this.props;
        console.log(movies);
        return(
            <DefaultLayout title = {"Movie Dashboard"}>
                <nav id="indexBack">
                    <a href={'/'} className="backSection">
                        <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
                    </a>
                    <a href={'/movies/newmovie'}>Add New Movie</a>
                </nav>
                <ul>
                    {movies.map((movie, i) => {
                        return (
                            <li key = {i}>
                                <div className='start'>
                                    <span className='align'>
                                        <img src= {movie.imageUrl} alt="" className='bimg' />
                                        <br></br>
                                        <a className='title' href = {`/movies/${movie.id}`}> {movie.title}</a> 
                                    </span>
                                    <p>by {movie.director} </p>
                                    <p>Price {movie.price}</p>
                                </div>

                                <div className='end'>
                                    <p>{movie.isAvailable ? "Available Online" : "Not Available Online"} </p>
                                    <div className="btn">
                                        {/* -----------EDIT */}
                                        <form action = {`/movies/${movie._id}/editmovie`} > 
                                            <input type = 'submit' value = 'Edit Movie' ></input>
                                        </form>
                                        {/* -----------DELETE */}
                                        <form action = {`/movies/${movie._id}?_method=DELETE`} method = "POST"> 
                                            <input type = 'submit' id='delete' value = 'Delete Movie' ></input>
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
module.exports = Indexmovie