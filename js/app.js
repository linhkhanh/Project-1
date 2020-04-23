/// variable
const menu = ['house', 'animal', 'plant', 'people', 'machine', 'transport', 'clothes', 'landcape', 'cartoon'];
const wall = 'https://image.shutterstock.com/image-vector/cartoon-white-brick-wall-texture-260nw-1379193254.jpg';
const house = ['https://i.pinimg.com/originals/34/30/2d/34302d7a184289404e2dff1f55ade1a5.jpg',
    'https://cdn2.vectorstock.com/i/1000x1000/83/06/funny-house-cartoon-vector-618306.jpg',
    'https://www.nicepng.com/png/detail/238-2384015_house-cartoon-drawing-cottage-house-cartoon-png.png',
    'https://i7.pngguru.com/preview/1009/80/1010/house-cartoon-building-yard.jpg',
    'https://www.pngitem.com/pimgs/m/3-32178_house-cartoon-log-cabin-cartoon-house-transparent-background.png',
    'https://en.pimg.jp/036/927/788/1/36927788.jpg',
    'https://p7.hiclipart.com/preview/723/859/673/house-royalty-free-cartoon-house.jpg',
    'https://www.pngkey.com/png/detail/61-619052_house-cartoon-png-cartoon-house-transparent-png.png',
];

/////function create array

const createArr = (arr, items) => {
    const subArr = [];
    for(let i = 0; i < 2; i++) {
        for(let j = 0; j < items/2; j++) {
            subArr.push(arr[j]);
        }
    }
    return subArr;
}
const houseLv1 = createArr(house, 4);
const houseLv2 = createArr(house, 6);
const houseLv3 = createArr(house, 8);
const houseLv4 = createArr(house, 10);
const houseLv5 = createArr(house, 12);
const houseLv6 = createArr(house, 14);
const houseLv7 = createArr(house, 16);

/////// function logic 

const createMenu = () => {
    const $container = $('<div>').addClass('container');
    $('.body-game').append($container);
    for (let i = 0; i < menu.length; i++) {
        const $div = $('<div>')
            .addClass('square')
            .append($('<p>').html(menu[i]));
        $('.container').append($div);
    }
    $('.square').on('click', createLevel1);
}

const clearMenu = (level) => {
    $('.body-game').empty();
    createNav(level);
    $('.body-game').append($('<div>').addClass('container'));
    $('.home').on('click', backToMenu);
}

const createNav = (level) => {
    $('.body-game').append($('<h2>').html(level));
    const $div = $('<div>').addClass('result')
    const $left = $('<div>').addClass('left');
    const $right = $('<div>').addClass('right');
    $div.append($left, $right);
    $left.append($('<button>')
        .html('home')
        .addClass('home'),
        $('<p>')
            .addClass('again')
            .html('again'),
        $('<p>')
            .addClass('quantity')
            .html('?')
    );
    $right.append($('<button>')
        .html('Next')
        .addClass('next'),
        $('<button>')
            .html('Retry')
            .addClass('retry'));
    $('.body-game').append($div);
}

const addItem = (row, num) => {
    for (let i = 0; i < row; i++) {
        const $div = $('<div>').addClass('row');
        for (let j = 0; j < num; j++) {
            $div.append($('<div>')
                .addClass('item'))
        }
        $('.container').append($div);
    }
}

const setBackgroundOfItem = (arr) => {
    const $item = $('.item');
    for (let i = 0; i < $item.length; i++) {
        $item.eq(i)
        .css('background-image', `url(${arr[i]})`)
        .attr('id', i)
    }
}

const turnOverImg = () => {
    setTimeout(() => {
        $('.item').css('background-image', `url(${wall})`)
    }, 3000)
}

const displayFaceUp = (event) => {
    const $target = $(event.currentTarget);
    let index = $target.attr('id');
    let h2 = $('h2').html();

    if (h2 === 'Level 1') {
        $target.css('background-image', `url(${houseLv1[index]})`);
    } else if (h2 === 'Level 2') {
        $target.css('background-image', `url(${houseLv2[index]})`);
    } else if (h2 === 'Level 3') {
        $target.css('background-image', `url(${houseLv3[index]})`);
    } else if (h2 === 'Level 4') {
        $target.css('background-image', `url(${houseLv4[index]})`);
    } else if (h2 === 'Level 5') {
        $target.css('background-image', `url(${houseLv5[index]})`);
    } else if (h2 === 'Level 6') {
        $target.css('background-image', `url(${houseLv6[index]})`);
    } else {
        $target.css('background-image', `url(${houseLv7[index]})`);
    }  
}
//////////////////eventhandler
const createLevel1 = () => {
    clearMenu('Level 1');
    addItem(2, 2);
    setBackgroundOfItem(houseLv1);
    turnOverImg();

    $('.item').on('click', displayFaceUp);
    $('.next').on('click', createLevel2);

    $('.again').on('click', () => {
        setBackgroundOfItem(houseLv1);
        turnOverImg();
    });
}

const backToMenu = () => {
    $('.body-game').empty();
    createMenu();
}

const createLevel2 = () => {
    clearMenu('Level 2');
    addItem(2, 3);
    setBackgroundOfItem(houseLv2);
    turnOverImg();

    $('.item').on('click', displayFaceUp);
    $('.next').on('click', createLevel3);

    $('.again').on('click', () => {
        setBackgroundOfItem(houseLv2);
        turnOverImg();
    });
}


const createLevel3 = () => {
    clearMenu('Level 3');
    addItem(2, 3);
    addItem(1, 2);
    setBackgroundOfItem(houseLv3);
    turnOverImg();

    $('.item').on('click', displayFaceUp);
    $('.next').on('click', createLevel4);

    $('.again').on('click', () => {
        setBackgroundOfItem(houseLv3);
        turnOverImg();
    });
}

const createLevel4 = () => {
    clearMenu('Level 4');
    addItem(3, 3);
    addItem(1, 1);
    setBackgroundOfItem(houseLv4);
    turnOverImg();

    $('.item').on('click', displayFaceUp);
    $('.next').on('click', createLevel5);

    $('.again').on('click', () => {
        setBackgroundOfItem(houseLv4);
        turnOverImg();
    });
}

const createLevel5 = () => {
    clearMenu('Level 5');
    addItem(4, 3);
    setBackgroundOfItem(houseLv5);
    turnOverImg();

    $('.item').on('click', displayFaceUp);
    $('.next').on('click', createLevel6);

    $('.again').on('click', () => {
        setBackgroundOfItem(houseLv5);
        turnOverImg();
    });
}

const createLevel6 = () => {
    clearMenu('Level 6');
    addItem(3, 4);
    addItem(1, 2);
    setBackgroundOfItem(houseLv6);
    turnOverImg();

    $('.item').on('click', displayFaceUp);
    $('.next').on('click', createLevel7);

    $('.again').on('click', () => {
        setBackgroundOfItem(houseLv6);
        turnOverImg();
    });
}

const createLevel7 = () => {
    clearMenu('Level 7');
    addItem(4, 4);
    setBackgroundOfItem(houseLv7);
    turnOverImg();

    $('.item').on('click', displayFaceUp);
    $('.again').on('click', () => {
        setBackgroundOfItem(houseLv7);
        turnOverImg();
    });
}

//img///

////////////////////////
$(() => {
    createMenu();
})