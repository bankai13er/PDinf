// Находим единственную кнопку с классом .b
const infoBtn = document.querySelector('.b');
const habBtn = document.querySelector('.j');
const startBtn = document.querySelector('.c');
const whatBtn = document.querySelector('.i');
const hab1Btn = document.querySelector('.v');
const hab2Btn = document.querySelector('.y');
const part2Btn = document.querySelector('.h');
const hab3Btn = document.querySelector('.L');

// При клике сразу перекидываем на main2.html
if (infoBtn) {
    infoBtn.addEventListener('click', function() {
        window.location.href = 'main2.html';
    });
}

if (habBtn) {
    startBtn.addEventListener('click', function() {
        window.location.href='index.html'
    });
}

if (startBtn) {
    startBtn.addEventListener('click', function() {
        window.location.href = 'main3.html';
    });
}

if (hab1Btn) {
    hab1Btn.addEventListener('click', function() {
        window.location.href='index.html'
    });
}

if (hab2Btn) {
    hab2Btn.addEventListener('click', function() {
        window.location.href='index.html'
    });
}

if (whatBtn) {
    whatBtn.addEventListener('click', function() {
        window.location.href = 'main4.html';
    });
}

if (part2Btn) {
    part2Btn.addEventListener('click', function() {
        window.location.href = 'main5.html';
    });
}

if (hab3Btn) {
    hab3Btn.addEventListener('click', function() {
        window.location.href='index.html'
    });
}



