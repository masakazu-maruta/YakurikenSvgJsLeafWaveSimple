const leafNumber = 13;
var container = document.getElementById('container');
let Leafs = Array.from(container.children);

//アニメーションのコード
const startAnimation = () => {
    requestAnimationFrame(animation);
}

const firstTime = Date.now();
const dirRight = true, dirLeft = false;
const duration = Math.PI * 0;
const animation = () => {
    let currentTime = Date.now();
    wave(dirRight, duration, currentTime);
    requestAnimationFrame(animation);
}


const wave = (direction, duration, currentTime) => {
    for (let i = 0; i < leafNumber; i++) {
        const leaf = Leafs[i];
        const xPos = nextX(i, currentTime, direction, leaf);
        const yPos = nextY(duration, leaf, container, xPos);
        leaf.style.transform = `translateX(${xPos}px)`;
        leaf.style.transform += `translateY(${yPos}px)`;
    }
}

const spaceBetween = 160;
const waveSpeed = 0.25;
const nextX = (index, currentTime, direction, leaf) => {
    const leafDestination = leafNumber * spaceBetween;
    const firstPos = index * spaceBetween;
    const offset = ((currentTime - firstTime) * waveSpeed);
    if (direction == dirRight) {
        return (firstPos + offset) % (leafDestination) - leaf.getBoundingClientRect().width;
    } else {
        let nextX = (firstPos - offset) % leafDestination;
        if (nextX < 0) nextX += leafDestination;
        return nextX - leaf.getBoundingClientRect().width;
    }
}

const nextY = (duration, leaf, container, xPos) => {
    const xAxis = container.getBoundingClientRect().height / 2 - leaf.getBoundingClientRect().height / 2;
    const radian = (xPos / container.getBoundingClientRect().width) * Math.PI * 2 + duration;
    const offset = Math.sin(radian) * xAxis;
    return xAxis + offset;
}

startAnimation();