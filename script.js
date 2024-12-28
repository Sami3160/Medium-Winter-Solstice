let northern_hemisphere=document.getElementById('northern-hemisphere')
let southern_hemisphere=document.getElementById('southern-hemisphere')
let earth=document.getElementById('earth')
function handleToggle(){
    
    if (northern_hemisphere.classList.contains('hide')) {
        earth.animate(
            [
                { transform: 'rotate(180deg) ',  },
                {  offset: 0.3 },
                { transform: 'rotate(360deg)',  }
                
            ], {duration:1000,iterations:1,fill: 'forwards',easing: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)'}
        )
        // earth.style.rotate=180
        
        // document.getElementById('earth').style.animation="rotate180 1s 2; "
        southern_hemisphere.classList.remove('show');
        southern_hemisphere.classList.add('hide');
        setTimeout(()=>{
            earth.classList.add('showNorth')
            northern_hemisphere.classList.remove('hide');
            northern_hemisphere.classList.remove('actualHide')
            southern_hemisphere.classList.add('actualHide')
            northern_hemisphere.classList.add('show');
        },301)


    } else {
        earth.animate(
            [
                { transform: 'rotate(0deg) ',  },
                {  offset: 0.3 },
                { transform: 'rotate(180deg)',  }
                
            ], {duration:1000,iterations:1,fill: 'forwards',easing: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)'}
        )
        northern_hemisphere.classList.remove('show');
        northern_hemisphere.classList.add('hide');
        setTimeout(()=>{
            northern_hemisphere.classList.add('actualHide')
            southern_hemisphere.classList.remove('hide');
            southern_hemisphere.classList.remove('actualHide');
            southern_hemisphere.classList.add('show');
        },301)
    }
}


const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
let currentIndex = 0;

function updateCarousel(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    updateCarousel(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    updateCarousel(currentIndex);
});