var imagelist = {
    a: ['CHAIN PAPER.png', 'MENTAL HEALTH.png', 'PODIUM.png', 'ROBOT ARM FOLDER.png'],
    aindex: 0
}

async function next(classname) {
    var element = document.querySelector(`.${classname}`);
    //element.classList.add('transition')
    if (imagelist['aindex'] === imagelist[classname].length - 1) {
        var nextindex = 0;
    } else {
        var nextindex = imagelist['aindex'] + 1;
    }
    element.style.backgroundImage = `url('./${imagelist[classname][nextindex]}')`
    imagelist['aindex'] = nextindex
    //element.classList.remove('transition')
}