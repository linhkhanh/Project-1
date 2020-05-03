const menu = ['Basic', 'Timer', '2 Players'];
const wall = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX///8AAAD8/PxFQ0RAPj83NTbMzMympqbw8PAfHR7GxsYoJif39/fg4OBRT1BdW1wxLzCzs7Pk5OTW1tYrKSqXl5dLSUozMTI6ODnAwMC4uLhiYGFxb3BeXF1oZmesrKzq6uqIiIifn58bGRp8enuOjo6Afn9tbW11dXUVFRVUVFSMiosQDQ4hISEkHyEqJicZEhQ6wo9zAAAWH0lEQVR4nO2deXukqBbGo6C44gquhYKCFrVkvv+nu6Rn5s6kb6fbSqcqVffJ769eSuUInPMeNp+eboYdjXFRuK6bCYEIIdkgRFvk+e1KcEWivEVSqZkjlBkTi2+4KAvIDlqMZ4UXfXYR348du2SpGR/iH/9/1La821vHHfJuW7APIop5xRZe2G/94M//iFuuj6f57Z/dK7EqQTZu/LFXEABJ/EA16TU7iwUX9S/bxVYtHsTGnJfW/EbX+xnuYqXDnbsd05fsJtmfoPu+63N+1O+89GYE+mj5ynt6r98IqIXu2OdEQTL51u4dDfRfFBg392mjXSjHOlWp+N3i2VnCf+8lXQXPXfYncPJx8QE3y1fa3JvHER2bTmV47KJ398B/sO2nISH3EziMRWO/p7gsw6n8sGIVJXm/u/poInlKu25fTf7pA7tPYc3jx93tN7CNf68x7hMK9934kXdGFriPhip9qnRf9iClH+wcMkvfg7uZLUhmDkJ8Sj88nR325KNveTkcY76yLgzTY/PBt7afbII/+qYXM+w7sHZa188nfo37t/qTQ7/APewV08Cv6vEaD7Bb+BEK4t00e1ZhvAO03jnXedfGU/uf6FAL42TW8NBDlU7Xe9NBerVb/4qxToQ4YKWEhusVn6PRJ2kbm9akXfp17VlaXbMljf4neRummVjk0mGV7q/r07PdpwR+hLteimTtGKjZlZ/1Ke10nHTYd8mQ1GlpXTssF+Xt22mkS4AZxdqpoM+u7s9bee0n/A/CagnjgEMYHpP26m3IxreewrEpIWjAPEnC8IRu8PTsmuHoR0iKDs5Q4ZBihwc3eGBU3Va85ZNwTBisQ39RkN/EzRFwS29qL0nCTutOm7x+l7Y3eWZs3bISG6vrGJRK89RP6Y0emqgbPchgO+tMElEnlDr0mN3oqYV/owcZAr9ZUaUU6ELYTeOtHqtv4dH+hCdr23dUlSzUmN9MMvL6Vk+KfCRJdxC+2HVlKm712KfcupV0G0LFKEtITXCtrXdFe9uODJe6/wW951mXYzsOZoAlrO50knaX32BEa7KjAIBuGC+6kMy3CYlBlw4QJnNfcgzT4dLLY5KGpT/VMAThVKlLpvpdeZtmSjQjYGFEh+K47y4N98N0hLROQFimSYhP2uq3mxh1t7GQdrxv524Bde/v1/Gia6PlGJ5OYVivdRcyffId3eN4Y2ZiP60Xt5j3MO7njLSJDlOo4XSZ4vfwKQTAcegMYA18DCuNHb19UYPsb9ER3ZIVMwV9gvcUhhc0G/upSFMIU1iVIAUAOj6ASxL6zi4cNtZim9wi+PaMtf0EnBWeHKe75J2OXeAN9dGHCfD9U12e6PTSZDswWRvVSoxvUId2rZaunmjY1yk8XxIr7PVFwXrrca1Ch/ZJHZ6nqvbNvfy93jYMktc3GP6O9/2a+ECfZq06/5LJmCyxv02IoxprZ6moCRo09c+lA9Op3hjL2Q2caeZzoVg3p/VCIbxgdm+Ef6ufjC6dBiHcrxCWZ2Nidf4DjJtustwgR5Q1GcSMd3WSJim9QEbxfzz9i1JI/Q4AHp7P9Dmlvu9sG4+UN0jVOk2GlQO4KhMOp+3jpB79x0nk5c5Jkor6ZXk2IQND/+xvS2+b6w8qRpAkEitWG90GgLV9jV3w76GAOUxA4uwrf6qm8Fw7/rO/bvKSxfVH3DyMKa5pHaYpnepw3Hwh/3f7io5qcrAywo1XMPXrxJ+6TS8rvr6FMa2ArrqjU5Wn1MebnbcLx3//lbHkVK0l05WDuxOA1NlvyjOL64/VFDTpQNfVpu/Uu/SwOQBL+uqnoqSdccUQmniB/fJkpM4mC93r98OM6R1mS52Ufni+IL/vX8eV2Kp7jOvQSU9lmVamzR/VlrcVXH/xiQB1itcaTCF2zv7mNxqx73SZVUufGUVTTn6Vhtj3J7ZFcjbXb6US77SeO02r2jj7zW90hN+JEStJagVTkO6wafDJFKbLljpE17fwkNAQLrCvnBqm581rXYL5u+zBmpOlBxqH0KnDEPrhtKns6Cprdl4hTf6D6dkEsPM5PfvWec5y769Fkj+pBPL9UMAfy4Ih3FVATRinxsJtk6zi+ikwdwB2nqfp+Tn1n9Pn59A4QotylbU/HXCZv9eTFu6BpPPRYSF3QpNMbZuVINfXpaqsS7+Eu7Mx8Tl1nk9+GaZTCUufzihzizz6kaH294p53CcU95g6fgWo0TSnydmU24rx90341SOsFJzOZ6d6TktgkrvKP4W1UZeh6Uylnxo/1AsUfD+GWnwvDVbSpxWGIIETPYWhnqZtTktePz+MgkHjNK310rFZa6fWTJep/210yZ/C53ICyeJMXS/a/J89d6R+7ZLscKFggSGltDyFTmfez6aBZXu9yRSCHUXe2CCe6HRfQVBXMNHOsQLQWG7SPT/0TccKjxasYbeKphiNha8121NjrTBJMOyqxDE20tIim0ZqvBtOsBkieyyIqmgHgYN7YWLkyX9+9v3KVLKpmWcH7yo6/WEB6iSvF9/ZmiEJEgB3nZPgKQTTxiVVxe0mSf5hjDOhQGoU9PE4Tb4JI05S+8Y5ptP0x/n57HRn7Fiv331D83opIS7FhCvfSDZrY8nd282v/Q95QDDQ1AiUsDQuBKc0SVKgofNSqcn8qoq8UJwyLMuJmZzij0SX1tYBLfHZG2m8vGgRkjvW6crkfQw7TGRN/to72PYOE9zDxafdMUycurTkT9XCv7j9sqE3sOOAsYNwxx+WW84Mhf1u2bUAnnemSW+eUYpvNLu2CfvNUkvNhPG+lSIcd2XlH/HmbUTLQ2xtF5YkknY+O6ie49qvtk8MjOCaBfsY7CdUG9HjCJwq5YgdNXFz+3Cd+IxYcSktAAvlc+3IRANqQspxe9eK0vvYIvRTXIZRL+ewByutQR36xwuqJbj2Mt0PoKhXxOQKOiX2NfHLjQNsf3H3G6BNDTo7AokiCSP7TnYn37pEZjb1vexFfJO81JxzNnRKlod550zW4ZLL609UbNvwtKZQMQT4SpU0Kt26aNVmi69Wsg9ihF2xiPmQkL7HK3P8kFxiYATuvRfa2iED5kyifsYlhlun0/6G3I0k/SGmsvSpb2UgITfpP0xN3nzZ4HW8cRr882BQDWJALxtp/RqYOKgvutzejdcp10dhc0fMGeEZZj1jSRhal60ascU9JRU/QlpcJ4R0AO76OcHhSzpxCcF6N/vyf4BJowKr27FFHBRIAeuO/v6yZcX2E/jUXaS/whg4AU4WnAFdryumvr+/MHa715+s+C2CCRJ0oAgkjoNrUPrhRXMP9lNxmVe6Oa4FkBjEgYKkpwCc0o2rLv5Ls2li8fMYoUTdwIjuX5Y+0aqkeLzoBvnxs8fXfgGmc7rrsewTWFYhpBBcWCPqvhN7m5e867o+TZZlCcMO0uOF8rLdNDX8WdhPErJh7magNKNpBxynvzB0xzdau/5emokJTdTaS5L0DOBnfeGCn/g2c03vxgMkWRvRgbnfMdVTx7/wuJnxTk7geROxrvMS0RB2KjGC1HHC4iL1le/uPKGIq2TlgxL1yhg9wdrBlxnopXceJ2zM5ABFadqn6GpQT+DC9Uy7+x6YsZ+ET7Kk5lrjWUNnSZ3Lklhb3nvGlFuKuIrspJrrGsCwvOyoSG++7YT2O+BWK1rVqxnTkDqVv58vulzqe59nii0iMiWSAdcVxI4/nbbu/flGM9/PYXRvMIPDLMsuUCvrd6AMpwtyPJMwfbd24w6JjyEg4blve0gSBv3yopMzRnbvTfTlZJcSszaBB6dbIMP+1m0/3yju4hi6X9D1BzUPYj1UXQgdOF2ymyeqrn+QyG8TV+vstiggK5NGzKTWBfsw7eU2ZzT8HgLMsnGVUIrIpMJ1ur3Z2SK7/xq07WRaAhkornngYJ+eLtBr5KIJm88iTmHfZ5xLwoajPkFn+3hnducp718Ems946NeVU4qp7+hx65Xx9yve75ShmweinB5C7DsOhGxzvXT3nU/8FzmLAiE6J5XGZV2Fm+f+CnH/XuYbqxKxuxwYSxUAcCo3ZxXbdxl9MitSQYwPbAU7BcPj5sm/5tNPY91ItEjeGDkqMayZc95vHm7Rj1KFHtUZoSpJwjLFsAq35rLu3Se9fxNRTiSALKGTE+J9tXWuqbv/jOIvCivjByQBmxU8VRt3FprL3nEQzCdR+AKRQSTS1GQFWbhRsw33PvT0D0VJMsbXWh0kLetuo4URu+u57FcElmpBmqTGmzLtOBt3KbrwUTzpy1nxXRY6zALhAnels7EOmzufrf83yAECKGIZV+rDM063Wdg+iCR9AcG+YVxYTKdO6fgbF3ih8bql+kiIQwqpe7x24VyydKOFN9h492GoVRVIv5x3BuZ1pc4mC6PbnBH6MfAKIwCSHmLK+r7aZmGePJKFL4u7HKXLKgR1ctz2caT8FgckfRTcBzOHwPEdyLAzgU1f4PLu4FMdmznUqpdSU12XNa7KbZ/D8+57EfBrUMkW3O0wTXqwg+W0aQO2d9ns2+fSWk5YJQ4AHWMMhvvuV98ZzYMGdRdtTfhk7AAJotYuwbCspzrF6cwUGTIDIkQQk3NIsnDq71OwcGF+/MJjDCN+hx0HjV7ZgqQUwyDZsq7qMCAkUFBEb+9QfBz+NOHHG0m/+OKLL7744osvvvjiE/j/16bj6D3QYOGlxKiHVlpBC/SijeMHWJV3EZ67KpzWMIEhBLUThkfrtIqheMh89we4s7NqgFeT7dcpCAENdQgmyzpa5SqC8eGrc1xDxgkT2eL3rIM1oNAJLb/r+bxbGaAWfMyhi/9SpCdFOGm4pJD1lCUJBNWu/Xuy3raLFSd987huNgKUyZ43pJ0ZnhWAyrHgy6KFf5nkNf3xkcZJXzECsBB4aATisjN+JoVH+oP6ilx6wcrFeyKiSdLMQ6NnDKhadZfs5RuOJTje5MsjH4zdYSdToliKGQKsuoNVvT3FO54esKWi/Yp6JNXAMrBOFPjL+KZys5/GS/fOfj4eXLlWQd/yQ7ebU3iGP9dseflYHtV+OoBDQ3p5cA8QE0zg6VerEIa7Pvnif4nrLuOonhXn7KBVcvzlvJJ990cIvYZQ0g6HtRcZmxMOUvrrvKJJblCuDyOmCs2Kkb5fOxU6AG9YGButjxQVRYgk6/sZ9rUmJThtOitveKCgGFHAXFL3HZWSJDtn2tTFilt86OiDKADtDkJxltLEKBu9bdmoBx9lkffLCaV+h1Um5sVhALOt36JBjyNs5iPWsyain0NMe+hsvOwRjrb8iwq+nOg1I5zAZJmdrcvTH2Jf5Te8KdQ7Tg8m1FPnMIdbdxNGF35K8fOILUcxpMQqaQe13m8dqIjYo8gaz3Jezvbq1mVmaw82n/IULY9ioW2Fjt4tQ8dVv+DjbqukjtaHWSRssX7pZvJyBF2XnDafuRPNj1KHT7rUh3VgO4b7Dp83p0XRA2zC/wuEj51cE7gCjMtUb7XQqx7GwsLyMWIOTqiJiNPmr4V7jyNMPT90ZD91oKNMp9PWco93fW7Za9Y9XncnSPo66eDm76E3y1UL9aEERzBj7Ced1tjZvEX2gTZ2vZy+U68UThRU7LT52BY+XrFEH81YrkozUKca+iXcdk30OMnTCwpgjQ8a0yScjuOmS+L7PgHye2J/Luc6WUx/TE/bBmD4eNUSfTioUhhSLfGc1Om44YLsgfbmfcPWQLO5rkIn+f5jTz9mfRhB8zdjOIWshxVOJ3j+dekD9Fij+i94vp8yWSdp6Pi/zC/s3S2K9LG8nEj2R4UxcFL/tP/FePa4+Wuf98Uo06k+Awgnn/400ff4w3XCb5h+FR/OlvPyGdWfTj555DEN/JNowNrU4en4xt47237KN21tu2PsJnX+OJZvhoyHOXTnJ9h52x39kPyoL0bygVcMvaLZORSg75tjhHT++DX4N2PG0t2h+KcivYB3w/+NeU/fXOtYZJryIQgKNwgCjv7vlpp+w2vQy3bKJn9wB/rFF1988cUXX3w7S8D+80QBO7KDcYzHuHDbyM1zE+m9IB7zoCg8O/KiyPO8p2jzN4/vhWh0vadxdKPAtfN4NNYUuRvHgVvwLIpnFBUBcqN4QFmOFtHmblZ4rhtHd6zi7Jc6sKOnwB2iIbBbkudZ7GZSGjMUR0UjBjSghSi3kdYSjTLIxoFnKBaYNK47jsHgjhl34yHOA1PZ3n3tdou8uCiyolVuLJCRnY2Ym4Yjr+2l3crWCG1phGjTzEq0RbaIOBIyyNXQxO46IxeNORtEHCBjvh6CdRjyvMhj07zvwUw79sToSlO0oulkxptGGAtVELQklgrHqOMkC0QRF2iQS+M26yyjvFvydpaZuYS7LXYbJkThCu4GKxkAWd3R3GWMhciD2Gs+MwEZI1dIMrSSxNah0GQgcSPEmgVFM8iIr2vDGsS9QRRtbl4Cau0Yta3rtjwehqyN26UNuBoz2g6CkNZteDHMLQ8C1q+mXbuNIC4pG3OF9xl1GdmmsAMXplXOXpvFSxsPARGuMKkfKYRbmLpITNE9YRpoodpi5nGuiBLNEHityMwv8ZDR1W5rErxYKBFBLRt4EYvlYDxvXhTxqJLBHdyicYubN1mPCOMmZlkQQWMpngbiDoNsgjWO3dYdo2CQBWo4LQrjRKKVCIYCd1kZyWVQDHxtC2I6Hx2eMnDIORdZYzpoMxOSN0INsSuG1R0KtbTmTya2DEOR3Xg8ALWmJiDLMwKHQYymbJm3ECQCuzCmBm42BMOwW/MANTLQxodGT4UcGhMU4yFbk9GOlbt0xdMApdfhTHCyDHHfxvHKdVM0hLOMmDabIRK5bubuiiG/7Tk3LRq8eCWmY/E2do2vaD1bouwo7UzEQiFjJg8U9sY4ZohnMXG9gszkKSCeMX4Xj5loCfLGbB+4TEbBwmWbqyB3pVLI3I8IrwgymWdq9Aqe0ziwbx8s46QLTFDIhiwL8sIdVRPgwXTOeOialsig3fGoINlq6tLNmtzOQBY3Tby6mrtDxoe9m7VDHy89KRqKmiwwzbJdWZbF3sDJSKRaFhMkvTyQvZd/hkON2iJ2B+FGSD5lIkJBATqvEbJd3Eyg1t25RscEhWd8pPE79rBkqFDN0kgSEFPtSxG37pwzY3eLuPknEmQEKdOM7UxmGTJxpPWiwm0CV4joE+NiZHuNFxgZ5sbdIY4z15Q2VrxAqnHtYtCxy5EcsmhVDfKCwfwlGExLXXHhBi3yXMZisSokiiyYM248r4gZbzIu3aDxjOBrgjz67DEro9Vsu4g8JMaWDLlbxEQWmTbCs0C8aZdsNA3PKLdhHIQSTKChKEgQE9Hk3rIjOWLIRNBCMCN+xll4q8jGxjRoo5TMje9FqRpZGnm2SRQie8zbwgtE3jZ5i1ATGDljzCEmPBivlJsQmhvX4ebtix0LF4MYvKL1imIojDhtY89cPTaxF5uq++y6exPj9UbjGfKXlmt8i1E4cdEUlKxLPriuCeUvA8KD5w0yE0Hr5lmRF63JpSJv/PaO7kGNbuDPcppemo9j/qLMi1jmQT56nhu7xoPkT7axZ7RNtjja0XjF6voPxpf2A/Lp6skAAAAASUVORK5CYII=';
const backgroundImg = 'https://image.freepik.com/free-photo/green-grass-leaf-plant-wood-fence-background_35658-96.jpg';
const imageArr = [];
let twoComparingImages = [];
class Level {
    constructor(level, name) {
        this.level = level;
        this.name = name
    }
}
localStorage.setItem('Level 1', 'true');
//////////////////////////////
const game = {
    App: {
        shuffleArr: (arr) => {
            arr.sort(() => {
                return .5 - Math.random()
            })
        },
        createArr: (boxes) => {
            game.App.shuffleArr(imageArr);
            const subArr = [];
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < boxes / 2; j++) {
                    subArr.push(imageArr[j]);
                }
            }
            game.App.shuffleArr(subArr);
            return subArr;
        }
    },
    UI: {
        createHomePage: () => {
            const $div = $('<div>').addClass('total');
            $('body').append($div);

            const $modal = $('<div>').addClass('modal');
            const $modalContent = $('<div>').addClass('modal-content');
            $modalContent.append($('<span>').addClass('close').html('&times;'));
            const $content = $('<div>').addClass('lister-box');
            $modalContent.append($content);
            $modal.append($modalContent);

            const $menu = $('<div>').addClass('menu');
            const $statistical = basicGame.UI.createButton('&#127760;', 'statis');
            $($div).append($modal, $menu, $statistical);

            for (let item of menu) {
                let $item = basicGame.UI.createButton(item, 'item');
                $menu.append($item);
            }
            $('.item').on('click', (event) => {
                $('audio#pop')[0].play();
                game.Eventhandler.onClickItem(event)
            })
            $('.statis').on('click', game.Eventhandler.onClickStatis);
            $('span').on('click', timerGame.Eventhandler.onClickHide);
        },
        displayStatis: () => {
            const $title = $('<div>').addClass('lister-row');
            $title.append($('<p>').html('Player'), $('<p>').html('Score'));
            $('.lister-box').append($title);
        }
    },
    Eventhandler: {
        onClickItem: (event) => {
            if ($(event.currentTarget).children().eq(0).html() === "Basic") {
                basicGame.Eventhandler.onClickPlayGame();
            } else if ($(event.currentTarget).children().eq(0).html() === "Timer") {
                timerGame.Eventhandler.onClickPlayGame();
            } else if ($(event.currentTarget).children().eq(0).html() === "2 Players") {
                twoPlayers.Eventhandler.onClickPlayGame();
            }
        },
        onClickStatis: () => {
            if (!timerGame.players) {
                game.UI.displayStatis();
            } else {
                timerGame.App.sortScore();
                $('.lister-box').empty();

                game.UI.displayStatis();
                for (let item of timerGame.players) {
                    for (let key in item) {
                        const $div = $('<div>').addClass('lister-row');
                        $div.append($('<p>').html(`${key}: `), $('<p>').html(item[key]));
                        $('.lister-box').append($div);
                    }
                }
            }
            $('.modal').show();
        },
        onCLickSound: () => {
            debugger
            if ($('.sound').html() === '🔈') {
                $('.sound').html('&#128263;');
                $('audio#pop')[0].pause();
            } else if ($('.sound').html() === '🔇') {
                $('.sound').html('&#128264;');
                $('audio#pop')[0].play();
            }
        }
    }
}
///////////////////////////////Basic Game
const basicGame = {
    levelArr: [],
    App: {
        level: {
            level1: new Level(() => { basicGame.UI.createLevel('Level 1', 2, 2, 0, 0, game.App.createArr(4), basicGame.App.level.level2) }, true),
            level2: new Level(() => { basicGame.UI.createLevel('Level 2', 2, 3, 0, 0, game.App.createArr(6), basicGame.App.level.level3) }),
            level3: new Level(() => { basicGame.UI.createLevel('Level 3', 2, 3, 1, 2, game.App.createArr(8), basicGame.App.level.level4) }),
            level4: new Level(() => { basicGame.UI.createLevel('Level 4', 2, 4, 1, 2, game.App.createArr(10), basicGame.App.level.level5) }),
            level5: new Level(() => { basicGame.UI.createLevel('Level 5', 3, 4, 0, 0, game.App.createArr(12), basicGame.App.level.level6) }),
            level6: new Level(() => { basicGame.UI.createLevel('Level 6', 3, 4, 1, 2, game.App.createArr(14), basicGame.App.level.level7) }),
            level7: new Level(() => { basicGame.UI.createLevel('Level 7', 4, 4, 0, 0, game.App.createArr(16), basicGame.App.level.level8) }),
            level8: new Level(() => { basicGame.UI.createLevel('Level 8', 4, 4, 1, 2, game.App.createArr(18), basicGame.App.level.level9) }),
            level9: new Level(() => { basicGame.UI.createLevel('Level 9', 5, 4, 0, 0, game.App.createArr(20), basicGame.App.level.level10) }),
            level10: new Level(() => { basicGame.UI.createLevel('Level 10', 5, 4, 1, 2, game.App.createArr(22), basicGame.App.level.level11) }),
            level11: new Level(() => { basicGame.UI.createLevel('Level 11', 6, 4, 0, 0, game.App.createArr(24), basicGame.App.level.level12) }),
            level12: new Level(() => { basicGame.UI.createLevel('Level 12', 6, 4, 1, 2, game.App.createArr(26), basicGame.Eventhandler.onClickHome) })
        },
        compareTwoImages: (click, arr, nextLevel) => {
            if (twoComparingImages.length === 2) {
                if (basicGame.App.isSameImage()) {
                    basicGame.App.sameImage();
                } else {
                    setTimeout(() => {
                        basicGame.App.differentImage();
                    }, '600')
                }
            }
            basicGame.App.completeLevel(click, arr, nextLevel);
        },
        isSameImage: () => {
            return $(twoComparingImages[0]).attr('src') === $(twoComparingImages[1]).attr('src')
        },
        sameImage: () => {
            $('audio#correct')[0].play();
            $(twoComparingImages[0]).css('opacity', '0.1');
            $(twoComparingImages[0]).css('-webkit-animation', 'shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both');
            $(twoComparingImages[1]).css('opacity', '0.1');
            $(twoComparingImages[1]).css('-webkit-animation', 'shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both');
            twoComparingImages = [];
        },
        differentImage: () => {
            $('audio#wrong')[0].play()
            $(twoComparingImages[0]).attr('src', wall);
            $(twoComparingImages[1]).attr('src', wall);
            twoComparingImages = [];
        },
        completeLevel: (click, arr, nextLevel) => {
            if (basicGame.App.meetCompleteLevelCondition()) {
                if (click === arr.length) {
                    $('.result').children().eq(0).html('&#9734; &#9734; &#9734; Complete Level');
                } else if (click >= arr.length * 2) {
                    $('.result').children().eq(0).html('&#9734; Complete Level')
                } else {
                    $('.result').children().eq(0).html('&#9734; &#9734; Complete Level')
                }
                $('.result').css('-webkit-animation', 'swirl-in-fwd 0.6s ease-out both');
                $('.next').css('opacity', '1');
                $('.retry').css('opacity', '1');
                localStorage.setItem(nextLevel.name, 'true');
            }
        },
        meetCompleteLevelCondition: () => {
            const $boxs = $('.box');
            let result = true;
            for (let i = 0; i < $boxs.length; i++) {
                result = result && basicGame.App.isOpacity($boxs.eq(i));
            }
            return result
        },
        isOpacity: (item) => {
            return item.css('opacity') === '0.1';
        },
        setIdForBoxes: () => {
            const $img = $('.box');
            for (let i = 0; i < $img.length; i++) {
                $img.eq(i).attr('id', i)
            }
            $('.box').on('mouseenter', () => {
                $('audio#enter')[0].play();
            })
        },
        setNameOfLevel: () => {
            let i = 0;
            for (let item in basicGame.App.level) {
                basicGame.App.level[item].name = basicGame.levelArr[i];
                i++
            }
        },
        activateNextLevel: () => {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (localStorage.getItem(key) === 'true') {
                    const $level = $('.list-level');
                    for (let i = 0; i < $level.length; i++) {
                        if ($level.eq(i).children().eq(0).html() === key) {
                            $level.eq(i).css('opacity', '1');
                        }
                    }
                }
            }
        }
    },
    UI: {
        list: () => {
            $('.total').remove();

            basicGame.UI.createListLevel();
            basicGame.App.setNameOfLevel();
            $('.home').on('click', basicGame.Eventhandler.onClickHome);
            basicGame.App.activateNextLevel();
            $('.list-level').on('click', (event) => {
                let nameLevel = $(event.currentTarget).children().eq(0).html();
                for (let item in basicGame.App.level) {
                    if (nameLevel === basicGame.App.level[item].name) {
                        if (localStorage.getItem(nameLevel) === 'true') {
                            basicGame.App.level[item].level();
                            return;
                        }
                    }
                }
            })
        },
        createListLevel: () => {
            const $listContainer = $('<div>').addClass('list-container');
            const $home = basicGame.UI.createButton('Home', 'home');
            const $list = $('<div>').addClass('list');
            for (let i = 1; i <= 12; i++) {
                const $level = basicGame.UI.createButton(`Level ${i}`, 'list-level');
                $list.append($level);
                basicGame.levelArr.push(`Level ${i}`);
            }
            $($listContainer).append($home, $list);
            $('body').append($listContainer);
        },
        createButton: (name, cl) => {
            const $button = $('<div>')
                .addClass(cl)
                .append($('<p>').html(name));
            return $button
        },
        createLevel: (level, row1, box1, row2, box2, arr, nextLevel) => {
            let clickAgain = 0;
            let click = 0;
            $('.list-container').remove();
            $('body').css('background-image', `url(${backgroundImg})`);
            $('body').append($('<div>').addClass('container'));
            basicGame.UI.createLayoutGame(level);
            basicGame.UI.createBoxs(row1, box1, row2, box2, arr);

            $('.box').on('click', (event) => {
                if ($(event.currentTarget).attr('src') === wall) {
                    click++;
                    $('.click').children().eq(0).html(`? ${click}`);
                    basicGame.Eventhandler.onClickDisplayImg(event, arr, click, nextLevel)
                }
            });
            $('.home').on('click', basicGame.Eventhandler.onClickHome);
            $('.again').on('click', () => {
                while (clickAgain < 1) {
                    basicGame.Eventhandler.onClickAgain(arr);
                    clickAgain++;
                }
            });
            $('.next').on('click', () => {
                basicGame.Eventhandler.onClickNext(nextLevel);
            });
            $('.retry').on('click', () => {
                click = 0;
                basicGame.Eventhandler.onClickRetry(arr);
            });
        },
        createLayoutGame: (level) => {
            const $title = basicGame.UI.createButton(level, 'title');
            const $game = $('<div>').addClass('game');
            const $left = $('<div>').addClass('left');
            const $right = $('<div>').addClass('right');
            const $center = $('<div>').addClass('center');
            $game.append($left, $center, $right);

            const $home = basicGame.UI.createButton('Home', 'home');
            const $again = basicGame.UI.createButton('Again', 'again');
            const $click = basicGame.UI.createButton('?', 'click');
            $left.append($home, $again, $click);

            const $board = $('<div>').addClass('board');
            $center.append($board);

            const $result = basicGame.UI.createButton('', 'result');
            const $next = basicGame.UI.createButton('&#9193; Next', 'next');
            const $retry = basicGame.UI.createButton('&#127744; Retry', 'retry');
            $right.append($result, $next, $retry);
            $('.container').append($title, $game);
        },
        createBoxs: (row1, box1, row2, box2, arr) => {
            basicGame.UI.addBox(row1, box1);
            basicGame.UI.addBox(row2, box2);
            $('.box').removeAttr('style');
            basicGame.App.setIdForBoxes();
            basicGame.UI.setImg(arr);
            basicGame.UI.turnOverImage();
        },
        addBox: (row, box) => {
            for (let i = 0; i < row; i++) {
                const $row = $('<div>').addClass('row');
                for (let j = 0; j < box; j++) {
                    const $box = $('<img>').addClass('box');
                    $row.append($box);
                }
                $('.board').append($row);
            }
        },
        setImg: (arr) => {
            const $img = $('.box');
            for (let i = 0; i < $img.length; i++) {
                $img.eq(i)
                    .removeAttr('style')
                    .attr('src', arr[i]);
            }
        },
        turnOverImage: () => {
            setTimeout(() => {
                $('.box').attr('src', wall)
            }, '5000')
        },
    },
    Eventhandler: {
        onClickPlayGame: () => {
            basicGame.UI.list();
        },
        onClickHome: () => {
            $('body').removeAttr('style');
            $('.list-container').remove();
            $('.container').remove();
            twoPlayers.currentPlayer = 'Player 1';
            game.UI.createHomePage();
        },
        onClickDisplayImg: (event, arr, click, nextLevel) => {
            const $target = $(event.currentTarget);
            const index = $target.attr('id');
            $target.attr('src', arr[index])

            if (twoComparingImages.length < 2) {
                twoComparingImages.push(event.currentTarget)
            }
            basicGame.App.compareTwoImages(click, arr, nextLevel);
        },
        onClickAgain: (arr) => {
            const boxes = $('.box').filter((index, element) => {
                return $(element).attr('src') === wall
            })
            for (let i = 0; i < boxes.length; i++) {
                let index = boxes.eq(i).attr('id');
                boxes.eq(i).attr('src', arr[index]);
            }
            setTimeout(() => {
                for (let i = 0; i < boxes.length; i++) {
                    boxes.eq(i).attr('src', wall)
                }
            }, '5000')
        },
        onClickNext: (nextLevel) => {
            if ($('.result').children().eq(0).html()) {
                $('.container').remove();
                nextLevel.level();
            }
        },
        onClickRetry: (arr) => {
            if ($('.result').children().eq(0).html()) {
                $('.box').remove('style');
                basicGame.UI.setImg(arr);
                basicGame.UI.turnOverImage();
                $('.click').children().eq(0).html('?');
                $('.result').children().eq(0).html('');
            }
        }
    }
};

///////////////////Timer Game///////////////////
const timerGame = {
    score: 0,
    intervalTimer: undefined,
    userName: '',
    players: JSON.parse(localStorage.getItem('players')),
    App: {
        level: {
            level1: () => { timerGame.UI.createLevel('Level 1', 2, 3, 0, 0, game.App.createArr(6), timerGame.App.level.level2, 1) },
            level2: () => { timerGame.UI.createLevel('Level 2', 2, 3, 1, 2, game.App.createArr(8), timerGame.App.level.level3, 1.5) },
            level3: () => { timerGame.UI.createLevel('Level 3', 2, 4, 1, 2, game.App.createArr(10), timerGame.App.level.level4, 1.5) },
            level4: () => { timerGame.UI.createLevel('Level 4', 3, 4, 0, 0, game.App.createArr(12), timerGame.App.level.level5, 1.5) },
            level5: () => { timerGame.UI.createLevel('Level 5', 3, 4, 1, 2, game.App.createArr(14), timerGame.App.level.level6, 2) },
            level6: () => { timerGame.UI.createLevel('Level 6', 4, 4, 0, 0, game.App.createArr(16), timerGame.App.level.level7, 2) },
            level7: () => { timerGame.UI.createLevel('Level 7', 4, 4, 1, 2, game.App.createArr(18), timerGame.App.level.level8, 2) },
            level8: () => { timerGame.UI.createLevel('Level 8', 5, 4, 0, 0, game.App.createArr(20), timerGame.App.level.level9, 2.5) },
            level9: () => { timerGame.UI.createLevel('Level 9', 5, 4, 1, 2, game.App.createArr(22), timerGame.App.level.level10, 2.5) },
            level10: () => { timerGame.UI.createLevel('Level 10', 6, 4, 0, 0, game.App.createArr(24), timerGame.App.lastLevel, 2.5) }
        },
        compareTwoImages: (nextLevel) => {
            if (twoComparingImages.length === 2) {
                if (basicGame.App.isSameImage()) {
                    basicGame.App.sameImage();
                    timerGame.score += 100;
                    $('.score').effect("shake")
                        .children().eq(0).html(`Score: ${timerGame.score}`);

                } else {
                    setTimeout(() => {
                        basicGame.App.differentImage();
                    }, '600')
                }
            }
            timerGame.App.completeLevel(nextLevel);
        },
        completeLevel: (nextLevel) => {
            if (basicGame.App.meetCompleteLevelCondition()) {
                $('.container').remove();
                nextLevel();
            }
        },
        setTimer: (timer, arr, minus) => {
            return setInterval(() => {
                timer -= minus;
                $('.progress').css('width', `${timer * 1.5}%`);
                if (timer <= 0) {
                    timerGame.App.completeGame(arr);
                }
            }, '1000');
        },
        completeGame: (arr) => {
            timerGame.App.setComplete();
            basicGame.UI.setImg(arr);
            if (!timerGame.userName) {
                timerGame.players.push({ player: timerGame.score });
            } else {
                timerGame.players.push({ [timerGame.userName]: timerGame.score });
            }
            localStorage.setItem('players', JSON.stringify(timerGame.players));
        },
        resetTimer: (timer, arr, minus) => {
            if (!timerGame.intervalTimer) {
                timerGame.intervalTimer = timerGame.App.setTimer(timer, arr, minus);
            } else {
                clearInterval(timerGame.intervalTimer);
                timerGame.intervalTimer = timerGame.App.setTimer(timer, arr, minus);
            }
        },
        setComplete: () => {
            clearInterval(timerGame.intervalTimer);
            if (!localStorage.getItem('maxScore')) localStorage.setItem('maxScore', timerGame.score);

            if (localStorage.getItem('maxScore') < timerGame.score) localStorage.setItem('maxScore', timerGame.score);
            $('.max').children().eq(0).html(`&#127894; Max Score: ${localStorage.getItem('maxScore')}`);

            $('.content')
                .html(`Congratulation ${timerGame.userName}!!! <br>
                    Your score is ${timerGame.score}. <br>
                    Max score is ${localStorage.getItem('maxScore')}`);
            $('.modal').show();
        },
        lastLevel: () => {
            const $home = basicGame.UI.createButton('Home', 'home');

            const $modal = $('<div>').addClass('modal');
            const $modalContent = $('<div>').addClass('modal-content');
            $modalContent.append($('<span>').addClass('close').html('&times;'));
            const $content = $('<p>').addClass('content').html('');
            $modalContent.append($content);
            $modal.append($modalContent, $home);

            $('body').append($modal);

            timerGame.App.setComplete();
            $('span').on('click', timerGame.Eventhandler.onClickHide);
            $('.home').on('click', timerGame.Eventhandler.onClickHome);
        },

        findmaxScore: () => {
            let max = 0;
            for (let item of timerGame.players) {
                if (max < Object.values(item)[0]) max = Object.values(item)[0];
            }
            localStorage.setItem('maxScore', max);
        },
        sortScore: () => {
            timerGame.players.sort((a, b) => {
                return Object.values(b)[0] - Object.values(a)[0];
            })
        }
    },
    UI: {
        createLevel: (level, row1, box1, row2, box2, arr, nextLevel, minus) => {
            localStorage.getItem('players') ? timerGame.players = JSON.parse(localStorage.getItem('players')) : timerGame.players = [];
            timerGame.App.findmaxScore();
            let timer = 65;
            let clickAgain = 0;
            $('.total').remove();

            timerGame.UI.createLayoutGame(level);
            basicGame.UI.createBoxs(row1, box1, row2, box2, arr);
            timerGame.App.resetTimer(timer, arr, minus);

            if (!timerGame.userName) {
                $('.hi').css('display', 'none')
            }
            $('.submit').on('click', timerGame.Eventhandler.onClickSubmit);
            $('.box').on('click', (event) => {
                if ($(event.currentTarget).attr('src') === wall) {
                    timerGame.Eventhandler.onClickDisplayImg(event, arr, nextLevel)
                }
            });
            $('.home').on('click', timerGame.Eventhandler.onClickHome);
            $('.again').on('click', () => {
                while (clickAgain < 1) {
                    basicGame.Eventhandler.onClickAgain(arr);
                    clickAgain++;
                }
            });
            $('span').on('click', timerGame.Eventhandler.onClickHide);
        },
        createLayoutGame: (level) => {
            $('body').append($('<div>').addClass('container'));

            const $modal = $('<div>').addClass('modal');
            const $modalContent = $('<div>').addClass('modal-content');
            $modalContent.append($('<span>').addClass('close').html('&times;'));
            const $content = $('<p>').addClass('content').html('');
            $modalContent.append($content);
            $modal.append($modalContent);

            const $top = $('<div>').addClass('top');
            const $level = basicGame.UI.createButton(level, 'level');
            const $name = $('<div>').addClass('name');
            $name.append($('<label>').html('Name: '),
                $('<input>').addClass('input'),
                $('<button>').html('Submit').addClass('submit'));
            const $sayHi = basicGame.UI.createButton(`&#9996; Hi ${timerGame.userName}. Good luck!`, 'hi')
            $top.append($name, $level, $sayHi);

            const $game = $('<div>').addClass('game');
            const $left = $('<div>').addClass('left');
            const $right = $('<div>').addClass('right');
            const $center = $('<div>').addClass('center');
            $game.append($left, $center, $right);

            const $home = basicGame.UI.createButton('Home', 'home');
            const $again = basicGame.UI.createButton('Again', 'again');
            $left.append($home, $again);

            const $time = $('<div>');
            const $timerTitle = basicGame.UI.createButton('&#9200; &nbsp;', 'timerTitle');
            const $timerBar = $('<div>').addClass('timer-bar');
            const $progress = $('<div>').addClass('progress');
            $timerBar.append($progress);
            $time.append($timerTitle, $timerBar);
            const $board = $('<div>').addClass('board');
            $center.append($time, $board);

            const $score = basicGame.UI.createButton(`Score: ${timerGame.score}`, 'score');
            const $maxScore = basicGame.UI.createButton(`&#127894; Max Score: ${localStorage.getItem('maxScore')}`, 'max');
            $right.append($score, $maxScore);
            $('.container').append($modal, $top, $game);
        }
    },
    Eventhandler: {
        onClickPlayGame: () => {
            timerGame.App.level.level1();
        },
        onClickDisplayImg: (event, arr, nextLevel) => {
            const $target = $(event.currentTarget);
            const index = $target.attr('id');
            $target.attr('src', arr[index])

            if (twoComparingImages.length < 2) {
                twoComparingImages.push(event.currentTarget)
            }
            timerGame.App.compareTwoImages(nextLevel);
        },
        onClickSubmit: () => {
            timerGame.userName = $('.input').val();
            $('.hi').show()
                .children()
                .eq(0)
                .html(`&#9996; Hi ${timerGame.userName}. Good luck!`);
        },
        onClickHome: () => {
            clearInterval(timerGame.intervalTimer);
            timerGame.userName = '';
            timerGame.score = 0;
            $('.container').remove();
            game.UI.createHomePage();
        },
        onClickHide: () => {
            $('.modal').hide();
        }
    }
}

////////////2 Players/////////////////
const twoPlayers = {
    player1: {
        name: 'Player 1',
        score: 0,
    },
    player2: {
        name: 'Player 2',
        score: 0,
    },
    currentPlayer: 'Player 1',
    App: {
        game: () => { twoPlayers.UI.createGame(4, 8, game.App.createArr(32)) },
        compareTwoImages: () => {
            if (twoComparingImages.length === 2) {
                if (twoPlayers.currentPlayer === 'Player 1') {
                    twoPlayers.App.player1Turn();
                } else {
                    twoPlayers.App.player2Turn();
                }
            }
            twoPlayers.App.completeGame();
        },
        player1Turn: () => {
            if (basicGame.App.isSameImage()) {
                basicGame.App.sameImage();
                twoPlayers.player1.score += 100;
                twoPlayers.UI.setPlayer1();
                twoPlayers.currentPlayer = 'Player 2';
            } else {
                setTimeout(() => {
                    basicGame.App.differentImage();
                    twoPlayers.UI.setPlayer1();
                    twoPlayers.currentPlayer = 'Player 2';
                }, '600')
            }
        },
        player2Turn: () => {
            if (basicGame.App.isSameImage()) {
                basicGame.App.sameImage();
                twoPlayers.player2.score += 100;
                twoPlayers.UI.setPlayer2();
                twoPlayers.currentPlayer = 'Player 1';
            } else {
                setTimeout(() => {
                    basicGame.App.differentImage();
                    twoPlayers.UI.setPlayer2();
                    twoPlayers.currentPlayer = 'Player 1';
                }, '600')
            }
        },
        completeGame: () => {
            if (basicGame.App.meetCompleteLevelCondition()) {
                if (twoPlayers.player1.score > twoPlayers.player2.score) {
                    $('.modal').show();
                    $('.content').html(`&#127942; &#127942; &#127942; ${twoPlayers.player1.name} win!!!`);
                } else if (twoPlayers.player1.score < twoPlayers.player2.score) {
                    $('.modal').show();
                    $('.content').html(`&#127942; &#127942; &#127942; ${twoPlayers.player2.name} win!!!`);
                } else {
                    $('.modal').show();
                    $('.content').html(`&#128080; Draw &#128080;!!!`);
                }
                $('.retry').css('opacity', '1');
                $('.retry').css('-webkit-animation', 'vibrate-1 0.3s linear infinite both');
            }
        },
        resetGame: () => {
            return twoPlayers.player1.score = 0,
                twoPlayers.player2.score = 0,
                twoPlayers.player1.name = 'Player 1',
                twoPlayers.player2.name = 'Player 2',
                twoPlayers.currentTarget = 'Player 1'
        },
        setRetryGame: () => {
            return twoPlayers.player1.score = 0,
                twoPlayers.player2.score = 0,
                twoPlayers.currentTarget = 'Player 1',
                $('.player-1').children().eq(0).html(`&#128037; ${twoPlayers.player1.name}: ${twoPlayers.player1.score}`),
                $('.player-2').children().eq(0).html(`&#128044; ${twoPlayers.player2.name}: ${twoPlayers.player2.score}`)
        }
    },
    UI: {
        createGame: (row, box, arr) => {
            twoPlayers.App.resetGame();

            $('.total').remove();
            $('body').append($('<div>').addClass('container'));
            twoPlayers.UI.createLayoutGame();

            $('.submit').on('click', () => {
                twoPlayers.Eventhandler.onClickSubmit(row, box, arr)
            });

            $('.home').on('click', basicGame.Eventhandler.onClickHome);
            $('.retry').on('click', () => {
                twoPlayers.Eventhandler.onClickRetry(arr);
            })
            $('span').on('click', timerGame.Eventhandler.onClickHide);
        },
        createLayoutGame: () => {
            const $modal = $('<div>').addClass('modal');
            const $modalContent = $('<div>').addClass('modal-content');
            $modalContent.append($('<span>').addClass('close').html('&times;'));
            const $content = $('<p>').addClass('content').html('');
            $modalContent.append($content);
            $modal.append($modalContent);

            const $top = $('<div>').addClass('top');
            const $home = basicGame.UI.createButton('Home', 'home');
            const $retry = basicGame.UI.createButton('Retry', 'retry');

            const $name = $('<div>').addClass('name-2')
            $name.append($('<label>').html('Name: '),
                $('<input>').addClass('input'),
                $('<button>').html('Submit').addClass('submit'));
            $top.append($home, $name, $retry);

            const $notice = basicGame.UI.createButton(`${twoPlayers.player1.name}'s turn`, 'notice');
            const $player = $('<div>').addClass('player');
            const $player1 = basicGame.UI.createButton(`&#128037; ${twoPlayers.player1.name}: ${twoPlayers.player1.score}`, 'player-1');
            const $vs = basicGame.UI.createButton('VS', 'vs');
            const $player2 = basicGame.UI.createButton(`&#128044; ${twoPlayers.player2.name}: ${twoPlayers.player2.score}`, 'player-2');
            $player.append($player1, $vs, $player2);

            const $board = $('<div>').addClass('board');
            $('.container').append($modal, $top, $player, $notice, $board);
        },
        createBoxs: (row, box, arr) => {
            basicGame.UI.addBox(row, box);
            $('.box').removeAttr('style');
            basicGame.App.setIdForBoxes();
            basicGame.UI.setImg(arr);
            basicGame.UI.turnOverImage();
        },
        setPlayer1: () => {
            return $('.player-1').children().eq(0).html(`&#128037; ${twoPlayers.player1.name}: ${twoPlayers.player1.score}`),
                $('.notice').show()
                    .children().eq(0).html(`${twoPlayers.player2.name} 's turn`),
                setTimeout(() => {
                    $('.notice').hide();
                }, '1000')
        },
        setPlayer2: () => {
            return $('.player-2').children().eq(0).html(`&#128044; ${twoPlayers.player2.name}: ${twoPlayers.player2.score}`),
                $('.notice').show()
                    .children().eq(0).html(`${twoPlayers.player1.name} 's turn`),
                setTimeout(() => {
                    $('.notice').hide();
                }, '1000')
        }
    },
    Eventhandler: {
        onClickPlayGame: () => {
            twoPlayers.App.game();
        },
        onClickSubmit: (row, box, arr) => {
            const name = $('.input').val()
            if (twoPlayers.currentPlayer === 'Player 1') {
                twoPlayers.player1.name = name;
                twoPlayers.UI.setPlayer1();
                twoPlayers.currentPlayer = 'Player 2';
            } else {
                twoPlayers.player2.name = name;
                twoPlayers.UI.setPlayer2();
                twoPlayers.currentPlayer = 'Player 1';
                $('.board').empty();
                twoPlayers.UI.createBoxs(row, box, arr);
                $('.box').on('click', (event) => {
                    if ($(event.currentTarget).attr('src') === wall) {
                        twoPlayers.Eventhandler.onClickDisplayImg(event, arr)
                    }
                });
            }
        },
        onClickDisplayImg: (event, arr) => {
            const $target = $(event.currentTarget);
            const index = $target.attr('id');
            $target.attr('src', arr[index]);
            if (twoComparingImages.length < 2) {
                twoComparingImages.push(event.currentTarget)
            }
            twoPlayers.App.compareTwoImages(arr);
        },
        onClickRetry: (arr) => {
            if (basicGame.App.meetCompleteLevelCondition()) {
                $('.box').remove('style');
                basicGame.UI.setImg(arr);
                basicGame.UI.turnOverImage();
                twoPlayers.App.setRetryGame();
                $('.retry').remove('style');
            }
        }
    }
}


$(() => {
    $('.sound').on('click', game.Eventhandler.onCLickSound);
    game.UI.createHomePage();
    const promise = $.ajax({
        url: 'https://picsum.photos/v2/list?page=2&limit=100'
    });

    promise.then(
        (data) => {
            for (let item of data) {
                const url = `https://picsum.photos/id/${item.id}/150`
                imageArr.push(url)
            }
        },
        () => {
            console.log('bad request');
        }
    );
})