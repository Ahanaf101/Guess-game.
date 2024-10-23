let PlayerOne = document.querySelector(".PlayerOne")
let PlayerOneInput = document.querySelector(".PlayerOneInput")
let PlayerOneBttn = document.querySelector(".PlayerOneBttn")
let PlayerOenError = document.querySelector(".PlayerOneError")
let PlayerTwo = document.querySelector(".PlayerTwo")
let PlayerTwoInput = document.querySelector(".PlayerTwoInput")
let PlayerTwoBttn = document.querySelector(".PlayerTwoBttn")
let PlayerTwoError = document.querySelector(".PlayerTwoError")
let PlayerOneNumber
let trial =3
PlayerOneBttn.addEventListener("click",()=>{
    if(PlayerOneInput.value){
        if(PlayerOneInput.value - 10){
           if(PlayerOneInput.value >=0 && PlayerOneInput.value <10){
            PlayerOneNumber = PlayerOneInput.value
            console.log(PlayerOneNumber);
            PlayerOne.style.display = "none"
            PlayerTwo.style.display = "block"
            
           }else{
            PlayerOenError.innerHTML = "Enter number between 0-10 dear."
           }
        }else{
            PlayerOenError.innerHTML = "Enter a number, other wise you can't win the game honey."
        }
    }else{
        PlayerOenError.innerHTML = "Enter a value Sweethert."
    }
})

PlayerTwoBttn.addEventListener("click",()=>{
    if(PlayerTwoInput.value){
        if(PlayerTwoInput.value - 10){
            if(PlayerTwoInput.value >=0 && PlayerOneInput.value <10){
                if(PlayerOneNumber===PlayerTwoInput.value){
                    PlayerTwoError.innerHTML= "Congratulation honey.I know that, my half can do it."
                }else{
                    trial--
                    PlayerTwoError.innerHTML= "you can try"+ trial
                    if(trial === 0){
                        PlayerTwoError.innerHTML = "Oh honey ,you lose it . But don't be upset.We will play agin, and I belive  you will win . "
                    }
                }
            }else{
                PlayerTwoError.innerHTML = "Don't tell me,you forgot that rule to.Ok no more mistake,last warning enter number between 0-9.All the best sweethert"
            }
        }else{
            PlayerTwoError.innerHTML = "You forgot ? What you told me.Please enter a number,I will not remind you again ."
        }
    }else{
        PlayerTwoError.innerHTML = "Enter a value dear"
    }
})