document.querySelector('.header-img').addEventListener('click', ()=>{
    let toPlayAudio = document.querySelector('#header-img').classList.toggle('header-img-dancing-anime');
    document.querySelector('#musicIcon').classList.toggle('musicIcon-oudMusic-anime');
    document.querySelector('#musicIcon2').classList.toggle('musicIcon2-oudMusic-anime');
    console.log(toPlayAudio);
    if(toPlayAudio) {
        document.querySelector('#audioPlayer').play();
    } else if (!toPlayAudio){
        document.querySelector('#audioPlayer').pause();
    }
})

function musicIcon() {
    var navBar = document.getElementById("nav-bar");
    if (navBar.className === "top-nav") {
        navBar.className += " responsive";
        document.querySelector('a.icon').classList.add('.x-icon-font');
        document.querySelector('i').classList.add('fa-x')
        document.querySelector('i').classList.remove('fa-music')
    } else {
        navBar.className = "top-nav";
        document.querySelector('a.icon').classList.remove('.x-icon-font')
        document.querySelector('i').classList.remove('fa-x')
        document.querySelector('i').classList.add('fa-music')
    }
  }
