const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const h2 = document.querySelector('h2');
const allBtns = document.querySelectorAll('.btn');

noBtn.addEventListener('click',changePosition);
yesBtn.addEventListener('click',function(){
    for (let i = 0; i < allBtns.length; i++) {
        allBtns[i].style.display = 'none';  
    }
    h2.innerText = `I knew it :3`
})


function changePosition() {
    let randLeft = getNonZeroRandomNumber();
    let randTop = getNonZeroRandomNumber();
    noBtn.style.top = `${randTop}%`;
    noBtn.style.left = `${randLeft}%`;
    console.log(randLeft,randTop)
}

function getNonZeroRandomNumber(){
    var random = Math.floor(Math.random()*199) - 99;
    if(random==0) return getNonZeroRandomNumber();
    return random;
}