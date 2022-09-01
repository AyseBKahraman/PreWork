/*
How to begin: 
Create a new HTML/CSS/JS and complete the following in your .js file
Make a radio Object.Give it a property called stations and make the value an array of station objects
Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
Song object should have two properties: title and artist
Create a method on your radio object that changes the station randomly. 
When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)
*/

const radio = {
    stations:
    [
        station1 = {
            name: "the big 98",
            playlist : [
                song1 = {
                    title: "half of my hometown ",
                    artist: "kelsea ballerini"
                },
                song2 = {
                    title: "a ",
                    artist: "kelsea ballerini"
                }
            ]
        },
        station2 = {
            name: "KFI",
            playlist : [
                song1 = {
                    title: "all about that bass ",
                    artist: "maghan trainor"
                },
                song2 = {
                    title: "b ",
                    artist: "kelsea ballerini"
                }
            ]
        },
        station3 = {
            name: "alt 98.7",
            playlist : [
                song1 = {
                    title: "c ",
                    artist: "kelsea ballerini"
                },
                song2 = {
                    title: " wish i knew you",
                    artist: "the revivalists"
                }
            ]
        }
    ] 
    
}

let stationNum = 0
const randomStations = (radio) => {
    const keys = Object.keys(radio.stations);
    stationNum =  keys[Math.floor(Math.random() * keys.length)]; 
    return stationNum
}
randomStations(radio)



const randomSong = (radio) => {
     const keys = Object.keys(radio.stations[stationNum].playlist);
     const songNum = keys[Math.floor(Math.random() * keys.length)];
     return radio.stations[stationNum].playlist[songNum] 
}
randomSong(radio)

console.log("Now Playing:" +  randomSong(radio).title + " by " + randomSong(radio).artist)


        