const { subtle } = require('crypto');
const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component{
    render(){
        
            return(
                <DefaultLayout title = {"Golden Books"}>
                    
                    <nav>
                        <a href={'/books'}>Book</a>
                        <img src="https://www.freeiconspng.com/thumbs/book-icon/open-book-icon-icon--open-book-2-svg-12.png" alt="" />
                    </nav>

                    <nav>
                        <a href={'/ebooks'}>EBook</a>
                        <img src="https://www.freeiconspng.com/uploads/ipad-tablet-png-26.png" />
                        
                    </nav>

                    <nav>
                        <a href={'/games'}>Games</a>
                        <img src="https://www.freeiconspng.com/uploads/game-controller-icon-png-10.png" />
                    </nav>

                    <nav>
                        <a href={'/gifts'}>Gifts</a>
                        <img src="https://www.freeiconspng.com/uploads/gift-box-icon-9.png"/>
                    </nav>

                    <nav>
                        <a href={'/movies'}>Movies</a>
                        <img src="https://www.freeiconspng.com/uploads/dark-movies-folder-material-images-5.png" width="350" alt="Dark Movies Folder Material Images" />
                    </nav>

                    
                </DefaultLayout>
        )
    }
}
module.exports = Index