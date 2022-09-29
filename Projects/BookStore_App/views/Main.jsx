const { subtle } = require('crypto');
const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component{
    render(){
        return(
            <DefaultLayout title = {"Main Dasboard"} >
                <div class="navigation">
                    <nav className='each'>
                        <a href={'/books'}>
                        <img id="icon" src="https://www.freeiconspng.com/thumbs/book-icon/open-book-icon-icon--open-book-2-svg-12.png" alt="" /> </a>
                        <a href={'/books'}>Book</a>
                    </nav>

                    <nav className='each'>
                        <a href={'/ebooks'}>
                        <img src="https://www.freeiconspng.com/uploads/ipad-tablet-png-26.png" /> </a>
                        <a href={'/ebooks'}>EBook</a>
                    </nav>

                    <nav className='each'>
                        <a href={'/games'}>
                        <img src="https://www.freeiconspng.com/uploads/game-controller-icon-png-10.png" /> </a>
                        <a href={'/games'}>Games</a>
                    </nav>

                    <nav className='each'>
                        <a href={'/gifts'}>
                        <img src="https://www.freeiconspng.com/uploads/gift-box-icon-9.png"/> </a>
                        <a href={'/gifts'}>Gifts</a>
                    </nav>

                    <nav className='each'>
                    <a href={'/movies'}>
                        <img src="https://www.freeiconspng.com/uploads/dark-movies-folder-material-images-5.png" /> </a>
                    <a href={'/movies'}>Movies</a>
                    </nav>
                </div>          
            </DefaultLayout>
        )
    }
}
module.exports = Index