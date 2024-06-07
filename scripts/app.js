import data from './data';

for (const item of data) {
    document.documentElement.style.setProperty(`--width-${item.category.toLowerCase()}`, `${item.score}%`);
    document.querySelector(`.${item.category.toLowerCase()}-item .item-total`).textContent = item.score;
};

setTimeout(() => {
    document.documentElement.style.setProperty(`--opacity`, '1');
}, 1000);