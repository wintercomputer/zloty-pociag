const images = document.querySelectorAll('img');

images.forEach(element => {
    
    element.addEventListener('click', () => {

        element.className += ' fullScreen'
    });
});

addEventListener('click', (event) => {

    let target = event.target;

    if (target.tagName.toUpperCase() !== 'IMG') {


        let fullElement = document.getElementsByClassName('fullScreen');
    
        for (let item of fullElement) {
    
            item.className -= ' fullScreen'
        }
    }
});