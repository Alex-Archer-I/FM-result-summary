import data from './data';

setTimeout(() => {
    for (const item of data) {
        document.documentElement.style.setProperty(`--width-${item.category.toLowerCase()}`, `${item.score}%`);
        document.querySelector(`.${item.category.toLowerCase()}-item .item-total`).textContent = item.score;
    };
}, 100);

setTimeout(() => {
    document.documentElement.style.setProperty(`--opacity`, '1');
}, 1000);