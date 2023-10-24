const spaceRange = document.querySelector('.calculator__range');
const spaceSize = document.querySelector('.calculator__text-bold');
spaceRange.addEventListener('input', () => {
    let percent = Math.round(((spaceRange.clientWidth / 100 * (spaceRange.value - 18)) / spaceRange.clientWidth) * 100);
    
    console.log(percent);
    spaceSize.textContent = `${spaceRange.value}`+'м';
    spaceSize.insertAdjacentHTML('beforeend', '<sup class="calculator__text-above">2</sup>');
    spaceRange.style.background = `linear-gradient(to right, #BE69D5 ${percent + '%'}, #BAF1FF ${(100 - percent) +'%'})`;
})