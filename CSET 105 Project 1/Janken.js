const rps = () =>{
    let userScore = 0;
    let cpuScore = 0;
    let round = 0;
    let table = document.getElementById("score");

    const gameStart = () => {
        const rockButton = document.querySelector('.rock');
        const paperButton = document.querySelector('.paper');
        const scissorButton = document.querySelector('.scissor');
        const playerOptions = [rockButton, paperButton, scissorButton];
        const cpuOptions = ['rock', 'paper', 'scissor'];

        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
                const virtualChoice = Math.floor(Math.random()*3);
                const cpuChoice = cpuOptions[virtualChoice];
                
                console.log(cpuChoice);
            })
        })
    }



    const winner = (player,computer) => {
        
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            let row = table.insertRow(-1);

            let c1 = row.insertCell(0);
            let c2 = row.insertCell(1);
            let c3 = row.insertCell(2);
    
            c1.innerText = userScore;
            c2.innerText = cpuScore;
            c3.innerText = round;
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                cpuScore++;
                round++;

                let row = table.insertRow(-1);

                let c1 = row.insertCell(0);
                let c2 = row.insertCell(1);
                let c3 = row.insertCell(2);
        
                c1.innerText = userScore;
                c2.innerText = cpuScore;
                c3.innerText = round;
            }
            else{
                userScore++;
                round++;

                let row = table.insertRow(-1);

                let c1 = row.insertCell(0);
                let c2 = row.insertCell(1);
                let c3 = row.insertCell(2);
        
                c1.innerText = userScore;
                c2.innerText = cpuScore;
                c3.innerText = round;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                cpuScore++;
                round++;

                let row = table.insertRow(-1);

                let c1 = row.insertCell(0);
                let c2 = row.insertCell(1);
                let c3 = row.insertCell(2);
        
                c1.innerText = userScore;
                c2.innerText = cpuScore;
                c3.innerText = round;
            }else{
                userScore++;
                round++;

                let row = table.insertRow(-1);

                let c1 = row.insertCell(0);
                let c2 = row.insertCell(1);
                let c3 = row.insertCell(2);
        
                c1.innerText = userScore;
                c2.innerText = cpuScore;
                c3.innerText = round;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                cpuScore++;
                round++;

                let row = table.insertRow(-1);

                let c1 = row.insertCell(0);
                let c2 = row.insertCell(1);
                let c3 = row.insertCell(2);
        
                c1.innerText = userScore;
                c2.innerText = cpuScore;
                c3.innerText = round;
            }else{
                userScore++;
                round++;

                let row = table.insertRow(-1);

                let c1 = row.insertCell(0);
                let c2 = row.insertCell(1);
                let c3 = row.insertCell(2);
        
                c1.innerText = userScore;
                c2.innerText = cpuScore;
                c3.innerText = round;
            }
        }
    }

    gameStart();
    
}

    rps();