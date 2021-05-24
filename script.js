let Button = document.querySelectorAll('button')
let span = document.querySelectorAll('span')
let selectScore = document.querySelector('select')

let p1 = {
    score :0,
    button: document.querySelectorAll('button')[0],
    span: document.querySelectorAll('span')[0]
}
let p2 = {
    score :0,
    button: document.querySelectorAll('button')[1],
    span: document.querySelectorAll('span')[1]
}

let winningScore = 5 + 1;
let isGameOver = false

function updates(player,oponent){
    if(!isGameOver){
        player.span.textContent = player.score++;
            if(player.score === winningScore){
                isGameOver = true;
                player.span.classList.add('green')
                oponent.span.classList.add('red')
                player.button.disabled = true;
                oponent.button.disabled = true;
    
            }
        }      
}

function reset(){
    p1.score = 0;
    p2.score = 0;
    isGameOver = false;
    p1.span.textContent = '0';
    p2.span.textContent = '0';
    p1.span.classList.remove('red','green')
    p2.span.classList.remove('green','red')
    p1.button.disabled = false;
    p2.button.disabled = false;
}


Button[0].addEventListener('click',function(){
  updates(p1,p2)
})

Button[1].addEventListener('click',function(){
    updates(p2,p1)

})
Button[2].addEventListener('click',reset)

selectScore.addEventListener('change',function(){
 winningScore = parseInt(selectScore.value) + 1;
 reset()
})
