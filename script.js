function wrapedBoxes(size) {
    const container = document.getElementById('container');
    for (let i = 0; i < size * size; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${100 / size}%`;
        box.style.height = `${100 / size}%`;
        container.appendChild(box);
        
    
    }
}wrapedBoxes(5);