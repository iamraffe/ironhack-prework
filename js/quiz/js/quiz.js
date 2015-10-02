var user = {}
var responses = []

function greeting(){
    var name = prompt("Greetings, what's your name?");
    user.name = name;
    alert("Nice to meet you "+name+"! Ready for some Harry Potter Trivia?");
}

function firstQuestion(){
    var userResponse = prompt('Is Harry Potter known as "The Boy Who Lived"? (Yes or No)');

    if(userResponse.toLowerCase() === 'yes'){
        userResponse = true;
    }
    else if(userResponse.toLowerCase() === 'no'){
        userResponse = false;
    }
    else{
        alert("C'mon "+ user.name +", simple Yes or No here...");
        return firstQuestion();
    }
    responses.push(userResponse);
}

function secondQuestion(){
    var userResponse = prompt('What is the real name of He-Who-Must-Not-Be-Named: Tom Riddle, Harry Potter, Ron Weasley or Neville Longbottom?');

    switch(userResponse.toLowerCase()){
        case "tom riddle":
            userResponse = true;
            break;
        case "harry potter":
        case "ron weasley":
        case "neville longbottom":
            userResponse = false;
            break;
        default:
            alert("You know you didn't choose an acceptable option,"+ user.name +". Try again!");
            return secondQuestion();
            break;
    }

    responses.push(userResponse);
}

function thirdQuestion(){
    var userResponse = prompt('What house did Cedric Diggory belong to: Gryffindor, Hufflepuff, Ravenclaw or Slytherin?');

    switch(userResponse.toLowerCase()){
        case "hufflepuff":
            userResponse = true;
            break;
        case "gryffindor":
        case "ravenclaw":
        case "slytherin":
            userResponse = false;
            break;
        default:
            alert("You know you didn't choose an acceptable option,"+ user.name +". Try again!");
            return thirdQuestion();
            break;
    }

    responses.push(userResponse);
}

function fourthQuestion(){
    var userResponse = prompt('Is Dobby a free elf? (Yes or No)');

    if(userResponse.toLowerCase() === 'yes'){
        userResponse = true;
    }
    else if(userResponse.toLowerCase() === 'no'){
        userResponse = false;
    }
    else{
        alert("C'mon "+ user.name +", simple Yes or No here...");
        return firstQuestion();
    }
    responses.push(userResponse);
}

function fifthQuestion(){
    var userResponse = prompt('How many kids are in the Weasley family: 4, 7, 9, 5?');

    switch(userResponse.toLowerCase()){
        case "7":
            userResponse = true;
            break;
        case "4":
        case "9":
        case "5":
            userResponse = false;
            break;
        default:
            alert("You know you didn't choose an acceptable option,"+ user.name +". Try again!");
            return thirdQuestion();
            break;
    }

    responses.push(userResponse);
}

function evaluate(responsesArray){
    var correctAnswers = 0, incorrectAnswers = 0;
    for(var i = 0; i < responsesArray.length; i++){
        if(responsesArray[i]){
            correctAnswers++;
        }
        else{
            incorrectAnswers++;
        }
    }
    user.correctAnswers = correctAnswers;
    user.incorrectAnswers = incorrectAnswers;

    showResults();
}

function showResults(){
    console.log(user);
    alert(JSON.stringify(user));
}

greeting();

firstQuestion();

secondQuestion();

thirdQuestion();

fourthQuestion();

fifthQuestion();

evaluate(responses);