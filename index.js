const play=document.getElementById('play')
const music=document.querySelector('audio')
const img=document.querySelector('img')
const title=document.getElementById('title')
const artist=document.getElementById('artist')
const next=document.getElementById('next')
const prev=document.getElementById('prev')

const songs=[
    {
    name:'dev-1',
    title:'FORGET THE WORLD',
    artist:'Afrojack'
    },
    {
        name:'dev-2',
        title:'TITANIUM',
        artist:'David'
    },
    
    {
        name:'dev-3',
        title:'SANCTUARY',
        artist:'Gareth'
    }
]

let isPlaying=false;

// play functionality
function playMusic()
{
    isPlaying=true;
    music.play()
    play.classList.replace('fa-play','fa-pause')
    img.classList.add('anime')
}

// for pause functionality
function pauseMusic()
{
    isPlaying=false;
    music.pause()
    play.classList.replace('fa-pause','fa-play')
    img.classList.remove('anime')
}

play.addEventListener('click',function()
{
    isPlaying?pauseMusic():playMusic()
})


// next music
function loadSong(songs)
{
    title.textContent=songs.title
    artist.textContent=songs.artist
    music.src="music/"+songs.name+'.mp3'
    img.src='images/'+songs.name+".jpg"
}

songIndex=0;

function nextSong()
{
    // songIndex++;  //issue with this is will not loop the playlist,so to do that
    songIndex=(songIndex+1)%songs.length;
    loadSong(songs[songIndex])
    playMusic();
}

function prevSong()
{
    songIndex=(songIndex-1+songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener('click',nextSong)
prev.addEventListener('click',prevSong)