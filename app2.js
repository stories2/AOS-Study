const misaka = document.querySelector('div.misaka');
const character = document.querySelector('.character');
const elec1 = misaka.querySelector('.elec1');
const elec2 = misaka.querySelector('.elec2');
const elec3 = misaka.querySelector('.elec3');
const elec4 = misaka.querySelector('.elec4');

let delay = 0;
let accelAmount = 0.1;
let scrollPos = 0;

const animFrame = [
    // {
    //     timeFrom: 0,
    //     timeTo: 4000,
    //     ele: misaka
    // },
    {
        timeFrom: 0,
        timeTo: 10000,
        type: 1,
        ele: character
    },
    {
        timeFrom: 500,
        timeTo: 3999,
        type: 2,
        ele: elec1
    },
    {
        timeFrom: 1500,
        timeTo: 4499,
        type: 2,
        ele: elec2
    },
    {
        timeFrom: 2000,
        timeTo: 5499,
        type: 2,
        ele: elec3
    },
    {
        timeFrom: 2500,
        timeTo: 10000,
        type: 2,
        ele: elec4
    }
]

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 5500, 
    triggerElemnt: misaka,
    triggerHook: 0
})
.addIndicators()
.setPin(misaka)
.addTo(controller);

scene.on('update', e => {
    // console.log('e', e);
    scrollPos = e.scrollPos
})

let currentAnim = [];
setInterval(() => {
    delay += (scrollPos - delay) * accelAmount;

    // console.log(`scroll ${scrollPos} delay ${delay}`)

    currentAnim = animFrame.filter(i => i.timeFrom <= delay && delay < i.timeTo)

    animFrame.forEach(anim => {
        anim.ele.style.display = 'none';
    })
    if (currentAnim.length > 0) {
        currentAnim.forEach(anim => {
            anim.ele.style.display = 'block';

            if (anim.type === 2) {
                anim.ele.style.opacity = (delay - anim.timeFrom) / (anim.timeTo - anim.timeFrom)
            }
            anim.ele.style.backgroundPosition = `center ${10 - 7.5 * Math.sin(delay / 5500 * 30)}px`;
            // if (anim.type === 1) {
            //     // anim.ele.style.backgroundPositionY = 0 + (-1000 + delay) / 30
            //     anim.ele.style.backgroundPosition = `center ${0 + (-4000 + delay) / 30}px`;
            // }
        })
    }
}, 1000 / 60)