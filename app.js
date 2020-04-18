const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
const capJP = intro.querySelector('h2.jp');
const capKR = intro.querySelector('h2.kr');
// END OF PAGE
const section = document.querySelector('section'); 
const endText = section.querySelector('h1');

// SCROLL MAGIC

const playTime = 90000;

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: playTime, // 90sec
    triggerElemnt: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

// VIDEO ANIMATION

let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;
let verticalPos = 0;

scene.on('update', e => {
    // console.log('e', e);
    scrollPos = e.scrollPos / 1000; // 90sec
})

let src = './sample.mp3';
let audio = new Audio(src);
// audio.play();

let currentSec = 0;
let lastSec = 0;

const caption = [
    {
        timeFrom: 7500,
        timeTo: 16000,
        jp: 'まっさらな世界何を君は描く？',
        kr: '새로운 세계 무엇을 너는 그릴까?'
    },
    {
        timeFrom: 29000,
        timeTo: 33000,
        jp: '偶然の再会は突然に',
        kr: '우연스러운 재회는 갑작스럽게'
    },
    {
        timeFrom: 33500,
        timeTo: 36900,
        jp: 'ほつれた糸紡いでいく',
        kr: '흐트러진 실을 엮어 나가'
    },
    {
        timeFrom: 37000,
        timeTo: 41000,
        jp: '運命の采配は悪戯に',
        kr: '운명의 지휘봉은 장난스럽게'
    },
    {
        timeFrom: 42000,
        timeTo: 45000,
        jp: '白紙の頁めくりめく',
        kr: '백지의 페이지를 넘기고 넘겨서'
    },
    {
        timeFrom: 46000,
        timeTo: 50000,
        jp: 'ああ生まれ変わるたびに',
        kr: '아아 다시 태어날 때마다'
    },
    {
        timeFrom: 50001,
        timeTo: 58000,
        jp: '重ねたぬくもりを探してる',
        kr: '겹쳐 온 따스함을 찾고 있어'
    },
    {
        timeFrom: 58500,
        timeTo:  61900,
        jp: '君と出逢い、君と往く',
        kr: '너와 만나고, 너와 떠나는'
    },
    {
        timeFrom: 62000,
        timeTo: 65000,
        jp: 'ハッピーエンドのその先で',
        kr: '해피 엔드의 그 끝에서'
    },
    {
        timeFrom: 65100,
        timeTo: 69000,
        jp: 'ありきたりで、けれど愛しい',
        kr: '흔히 있지만, 그래도 사랑스러운'
    },
    {
        timeFrom: 69500,
        timeTo: 71000,
        jp: '日々を過ごしたいよ',
        kr: '나날을 보내고 싶어'
    },
    {
        timeFrom: 71500,
        timeTo: 73000,
        jp: '君と笑い、君と泣く',
        kr: '너와 웃고, 너와 우는'
    },
    {
        timeFrom: 73100,
        timeTo: 78000,
        jp: 'バッドエンドのその先で',
        kr: '배드 엔드의 그 끝에서'
    },
    {
        timeFrom: 78100,
        timeTo: 81900,
        jp: '何度でも君の手を',
        kr: '몇 번이고 너의 손을'
    },
    {
        timeFrom: 82000,
        timeTo: 87000,
        jp: '握りしめるから',
        kr: '꽉 잡을 테니까'
    }
]

setInterval(() => {
    delay += (scrollPos - delay) * accelAmount;
    // console.log(scrollPos, delay);
    // video.currentTime = scrollPos;
    if (!video.ended) {
        window.scrollTo(0, video.currentTime * 1000);

        const currentCaption = caption.filter(i => i.timeFrom <= video.currentTime * 1000 && video.currentTime * 1000 < i.timeTo)
        if (currentCaption.length > 0) {
            console.log('cap', currentCaption[0]);
            capJP.textContent = currentCaption[0].jp;
            capKR.textContent = currentCaption[0].kr;
        } else {
            capJP.textContent = '';
            capKR.textContent = '';
        }
    }
}, 1000 / 24)

// setInterval(() => {
//     if (verticalPos < playTime) {
//         currentSec = Math.floor(verticalPos / 10000);
//         if (currentSec != lastSec) {
//             audio.currentTime = video.currentTime;
//             lastSec = currentSec;
//             console.log(`sync sound ${verticalPos} / ${scrollPos}`)
//         }
//         window.scrollTo(0, verticalPos);
//         verticalPos +=  1000 / 24;
//         // console.log('verticalPos', verticalPos)
//     }
// }, 1000 / 24)