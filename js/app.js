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


/////// function logic 
const App = {
    createArr: (arr, items) => {
        const subArr = [];
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < items / 2; j++) {
                subArr.push(arr[j]);
            }
        }
        return subArr;
    },
    createLevel: (level, row1, item1, row2, item2, arr, nextLevel) => {
        UI.clearMenu(level);
        UI.addItem(row1, item1);
        UI.addItem(row2, item2);
        UI.setBackgroundOfItem(arr);
        UI.turnOverImg();

        $('.item').on('click', EventHandler.onLCickDisplayFaceUp);
        $('.again').on('click', () => {
            EventHandler.onClickSeeImagesAgain(arr);
        });
        $('.next').on('click', () => {
            EventHandler.onClickGoToNextLevel(nextLevel)
        })
    }
}
//////////////UI
const UI = {
    createMenu: () => {
        const $container = $('<div>').addClass('container');
        $('.body-game').append($container);
        for (let i = 0; i < menu.length; i++) {
            const $div = $('<div>')
                .addClass('square')
                .append($('<p>').html(menu[i]));
            $('.container').append($div);
        }
        $('.square').on('click', level1.level);
    },
    clearMenu: (level) => {
        $('.body-game').empty();
        UI.createNav(level);
        $('.body-game').append($('<div>').addClass('container'));
        $('.home').on('click', EventHandler.onClickBackToMenu);
    },
    createNav: (level) => {
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
    },
    addItem: (row, num) => {
        for (let i = 0; i < row; i++) {
            const $div = $('<div>').addClass('row');
            for (let j = 0; j < num; j++) {
                $div.append($('<div>')
                    .addClass('item'))
            }
            $('.container').append($div);
        }
    },
    setBackgroundOfItem: (arr) => {
        const $item = $('.item');
        for (let i = 0; i < $item.length; i++) {
            $item.eq(i)
                .css('background-image', `url(${arr[i]})`)
                .attr('id', i)
        }
    },
    turnOverImg: () => {
        setTimeout(() => {
            $('.item').css('background-image', `url(${wall})`)
        }, 3000)
    }
}
//////////////////eventhandler
const EventHandler = {
    onClickBackToMenu: () => {
        $('.body-game').empty();
        UI.createMenu();
    },
    onClickSeeImagesAgain: (arr) => {
        UI.setBackgroundOfItem(arr);
        UI.turnOverImg();
    },
    onClickGoToNextLevel: (nextLevel) => {
        nextLevel()
    },
    onLCickDisplayFaceUp: (event) => {
        const $target = $(event.currentTarget);
        let index = $target.attr('id');
        let h2 = $('h2').html();

        if (h2 === 'Level 1') {
            $target.css('background-image', `url(${level1.arr[index]})`);
        } else if (h2 === 'Level 2') {
            $target.css('background-image', `url(${level2.arr[index]})`);
        } else if (h2 === 'Level 3') {
            $target.css('background-image', `url(${level3.arr[index]})`);
        } else if (h2 === 'Level 4') {
            $target.css('background-image', `url(${level4.arr[index]})`);
        } else if (h2 === 'Level 5') {
            $target.css('background-image', `url(${level5.arr[index]})`);
        } else if (h2 === 'Level 6') {
            $target.css('background-image', `url(${level6.arr[index]})`);
        } else {
            $target.css('background-image', `url(${level7.arr[index]})`);
        }
    }
}
///////////////////////
class Level {
    constructor(arr, level) {
        this.arr = arr,
        this.level = level
    }
}
let level1 = new Level(App.createArr(house, 4), () => {
    App.createLevel('Level 1', 2, 2, 0, 0, App.createArr(house, 4), level2.level);
} );
let level2 = new Level(App.createArr(house, 6), () => {
    App.createLevel('Level 2', 2, 3, 0, 0, App.createArr(house, 6), level3.level)
});
let level3 = new Level(App.createArr(house, 8), () => {
    App.createLevel('Level 3', 2, 3, 1, 2, App.createArr(house, 8), level4.level)
});
let level4 = new Level(App.createArr(house, 10), () => {
    App.createLevel('Level 4', 3, 3, 1, 1, App.createArr(house, 10), level5.level)
});
let level5 = new Level(App.createArr(house, 12), () => {
    App.createLevel('Level 5', 3, 4, 0, 0, App.createArr(house, 12), level6.level)
});
let level6 = new Level(App.createArr(house, 14), () => {
    App.createLevel('Level 6', 3, 4, 1, 2, App.createArr(house, 14), level7.level)
});
let level7 = new Level(App.createArr(house, 16), () => {
    App.createLevel('Level 7', 4, 4, 0, 0, App.createArr(house, 16), EventHandler.onClickBackToMenu)
})

////////////////////////
$(() => {
    UI.createMenu();
})