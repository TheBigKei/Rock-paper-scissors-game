const counter = createCounter();

function game(playerChoice){ //Game start
    let computerChoice = Math.floor(Math.random() * 3);
    let score_matches;
    let result;
    let choices = ['Rock', 'Paper', 'Scissors'];
    computerChoice = choices[computerChoice];
    result = compare(playerChoice, computerChoice);

    if(playerChoice != computerChoice){
        document.getElementById("choices").innerText = `You choose ${playerChoice} and computer choose ${computerChoice}`;
    }

    else
    {
        document.getElementById("choices").innerText = `You choose ${playerChoice} and computer also choose ${computerChoice}`;
    }

    switch (result) {
        case true:
            document.getElementById("status").innerText = 'And the result is...\n\nYou win!';
            break;
        case false:
            document.getElementById("status").innerText = 'And the result is...\n\nYou lose!';
            break;
        case null:
            document.getElementById("status").innerText = 'And the result is...\n\nDraw';
            break;
    }

    score_matches = counter(result);

    document.getElementById("matches").innerText = score_matches[0];
    document.getElementById("playerScore").innerText = score_matches[1][0];
    document.getElementById("computerScore").innerText = score_matches[1][1];
}

function compare(choice1, choice2){ //true=win false=lose null=draw
    if(choice1===choice2){
        return null;
    }

    else{
        let choicesObj = {  //Rules
        'Rock': {'Scissors': true, 'Paper': false},
        'Scissors': {'Rock' : false, 'Paper': true},
        'Paper' : {'Rock': true, 'Scissors': false}
    }
    return choicesObj[choice1][choice2];
    }
}

function createCounter(){
    let matches_score = [0,[0,0]];
        function counter (result) {
        matches_score[0]++;
        if (result === true) { //Win
            matches_score[1][0]++;
        } 
        else if (result === false) { //Lose
            matches_score[1][1]++;
        }
        else if (result !== true && result !== false && result !== null){ //Refresh the game
            matches_score = [0,[0,0]];
            let p = document.querySelectorAll('[data-clear="0"]');

            p.forEach(p => {
                p.innerHTML = 0;
            });

            p = document.querySelectorAll('[data-clear="true"]');
            p.forEach(p => {
                p.innerHTML = '';
            });
        }
        return matches_score;
}
 return counter;
}

