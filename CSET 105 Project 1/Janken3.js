let userScore = 0;
let cpuScore = 0;
let round = 0;

function rps(i)
{
    const cpuOptions = ['rock', 'paper', 'scissor'];
    const virtualChoice = Math.floor(Math.random()*3);

    let player = i;
    let computer = cpuOptions[virtualChoice];

    console.log(computer + " Is the computer choice");
    console.log(player + " is the player choice");


    let table = document.getElementById("score");

    if(player === computer){
        let row = table.insertRow(-1);

        let c1 = row.insertCell(0);
        let c2 = row.insertCell(1);
        let c3 = row.insertCell(2);

        round++;

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