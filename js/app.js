/// variable
const menu = ['house', 'animal', 'plant', 'people', 'machine', 'transport', 'clothes', 'landcape', 'cartoon'];
const imgArr = ['https://image.shutterstock.com/image-vector/cartoon-white-brick-wall-texture-260nw-1379193254.jpg'];
const house = ['https://i.pinimg.com/originals/34/30/2d/34302d7a184289404e2dff1f55ade1a5.jpg',
'https://cdn2.vectorstock.com/i/1000x1000/83/06/funny-house-cartoon-vector-618306.jpg',
'https://www.nicepng.com/png/detail/238-2384015_house-cartoon-drawing-cottage-house-cartoon-png.png',
'https://en.pimg.jp/036/927/788/1/36927788.jpg',
'https://www.pngitem.com/pimgs/m/3-32178_house-cartoon-log-cabin-cartoon-house-transparent-background.png',
'https://en.pimg.jp/036/927/788/1/36927788.jpg',
'https://p7.hiclipart.com/preview/723/859/673/house-royalty-free-cartoon-house.jpg',
'https://www.pngkey.com/png/detail/61-619052_house-cartoon-png-cartoon-house-transparent-png.png',
];

/////// function
const createMenu = () => {
    const $container = $('<div>').addClass('container');
    $('.body-game').append($container);
    for (let i = 0; i < menu.length; i++) {
        const $div = $('<div>')
            .addClass('square')
            .append($('<p>').html(menu[i]));
        $('.container').append($div);
    }
    $('.square').on('click', craeteLevel1);
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
            $div.append($('<img>')
                .addClass('item')
                .attr('src', 'https://image.shutterstock.com/image-vector/cartoon-white-brick-wall-texture-260nw-1379193254.jpg'));
        }
        $('.container').append($div);
    }
}
//////////////////eventhandler
const craeteLevel1 = () => {
    clearMenu('Level 1');
    addItem(2, 2);
    $('.next').on('click', createLevel2)
}

const backToMenu = () => {
    $('.body-game').empty();
    createMenu();
}

const createLevel2 = () => {
    clearMenu('Level 2');
    addItem(2, 3);
    $('.next').on('click', createLevel3);
}


const createLevel3 = () => {
    clearMenu('Level 3');
    addItem(2, 3);
    addItem(1, 2);
    $('.next').on('click', createLevel4);
}

const createLevel4 = () => {
    clearMenu('Level 4');
    addItem(3, 3);
    addItem(1, 1);
    $('.next').on('click', createLevel5);
}

const createLevel5 = () => {
    clearMenu('Level 5');
    addItem(4, 3);
    $('.next').on('click', createLevel6);
}

const createLevel6 = () => {
    clearMenu('Level 6');
    addItem(3, 4);
    addItem(1, 2);
    $('.next').on('click', createLevel7);
}

const createLevel7 = () => {
    clearMenu('Level 7');
    addItem(4, 4);
}
////////////////////////
$(() => {
    createMenu();
})