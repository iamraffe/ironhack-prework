var myRover = {name: "Wall-e", position: [0,0], direction: 'N'}, myOtherRover = {name: "Eva", position: [0,0], direction: 'N'};

var obstacles = [
          {
            "name": "Crater",
            "position": [0,6]
          },
          {
            "name": "Alien",
            "position": [3,3]
          },
          {
            "name": "Spaceship",
            "position": [4,8]
          }
];

function obstacleFree(x,y){
  for(var i = 0; i < obstacles.length; i++){
    if(obstacles[i].position[0] === x && obstacles[i].position[1] === y){
      return obstacles[i];
    }
  }
  if(myRover.position[0] == x && myRover.position[1] == y){
    return myRover;
  }
  else if(myOtherRover.position[0] == x && myOtherRover.position[1] == y){
    return myOtherRover;
  }
  return true;
}

function askForRover(){
  var userResponse = prompt('Which rover do you want to move? Wall-e (Type: Walle) or Eva (Type: Eva) [Type "Exit" to close app]');
  switch(userResponse.toLowerCase()){
    case "walle":
      askForDirections(myRover);
      break;
    case "eva":
      askForDirections(myOtherRover);
      break;
    case "exit":
      break;
    default:
      alert("Invalid input bro => Type walle or eva");
      askForRover();
      break;
  }

}

function askForDirections(rover){
    var userResponse = prompt('Which direction do you want to take the Rover? N, S, E, W');
    var directions = ['n','s','e','w']
    if(directions.indexOf(userResponse.toLowerCase()) != -1){
      rover.direction = userResponse.toUpperCase();
      askForCommands(rover);
    }
    else{
      alert("Invalid input bro");
      askForDirections(rover);
    }
}

function askForCommands(rover){
    var userResponse = '';
    while(userResponse.toLowerCase() !== 'no'){
      userResponse = prompt('Do you want to move the Rover? (Yes or No)');
      if(userResponse.toLowerCase() === 'yes'){
        var userCommands = prompt('Please provide the commands you wish the rover execute. F (go forward), B (go back), R (turn right), L (turn left)');
        for(var i = 0; i < userCommands.length; i++){
          moveRover(rover, userCommands[i].toUpperCase());
        }
        console.log(rover.name +" Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
        return askForCommands(rover);
      }
      else if(userResponse.toLowerCase() !== 'no'){
          alert("C'mon , simple Yes or No here...");
          return askForCommands(rover);
      }
    }
    askForRover();
}

function moveRover(rover, userCommand) {
  switch(userCommand) {
    case 'F':
      goForward(rover);
      break;
    case 'B':
      goBackward(rover);
      break;
    case 'R':
      goRight(rover);
      break;
    case 'L':
      goLeft(rover);
      break;
  };
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      if(rover.position[0] == 10){
        rover.position[0] = 0;
      }
      else{
        var obstacle = obstacleFree(rover.position[0]+1, rover.position[1]);
        if(obstacle === true){
          rover.position[0]++;
        }
        else{
          console.log("Rover says: 'I can't go to: [" + (rover.position[0]+1) +", "+ rover.position[1] + "]'. There is an " + obstacle.name + " there!");
        }
      }
      break;
    case 'E':
      if(rover.position[1] == 10){
        rover.position[1] = 0;
      }
      else{
        var obstacle = obstacleFree(rover.position[0], rover.position[1]+1);
        if(obstacle === true){
          rover.position[1]++;
        }
        else{
          console.log("Rover says: 'I can't go to: [" + rover.position[0] +", "+ (rover.position[1]+1) + "]'. There is an " + obstacle.name + " there!");
        }
      }
      break;
    case 'S':
      if(rover.position[0] == 0){
        rover.position[0] = 10;
      }
      else{
        var obstacle = obstacleFree(rover.position[0]-1, rover.position[1]);
        if(obstacle === true){
          rover.position[0]--;
        }
        else{
          console.log("Rover says: 'I can't go to: [" + (rover.position[0]-1) +", "+ rover.position[1] + "]'. There is an " + obstacle.name + " there!");
        }
      }
      break;
    case 'W':
      if(rover.position[1] == 0){
        rover.position[1] = 10;
      }
      else{
        var obstacle = obstacleFree(rover.position[0], rover.position[1]-1);
        if(obstacle === true){
          rover.position[1]--;
        }
        else{
          console.log("Rover says: 'I can't go to: [" + rover.position[0] +", "+ (rover.position[1]-1) + "]'. There is an " + obstacle.name + " there!");
        }
      }
      break;
  };
}

function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      if(rover.position[0] == 0){
        rover.position[0] = 10;
      }
      else{
        var obstacle = obstacleFree(rover.position[0]-1, rover.position[1]);
        if(obstacle === true){
          rover.position[0]--;
        }
        else{
          console.log("Rover says: 'I can't go to: [" + (rover.position[0]-1) +", "+ rover.position[1] + "]'. There is an " + obstacle.name + " there!");
        }
      }
      break;
    case 'E':
      if(rover.position[1] == 0){
        rover.position[1] = 10;
      }
      else{
        var obstacle = obstacleFree(rover.position[0], rover.position[1]-1);
        if(obstacle === true){
          rover.position[1]--;
        }
        else{
          console.log("Rover says: 'I can't go to: [" + rover.position[0] +", "+ (rover.position[1]-1) + "]'. There is an " + obstacle.name + " there!");
        }
      }
      break;
    case 'S':
      if(rover.position[0] == 10){
        rover.position[0] = 0;
      }
      else{
        var obstacle = obstacleFree(rover.position[0]+1, rover.position[1]);
        if(obstacle === true){
          rover.position[0]++;
        }
        else{
          console.log("Rover says: 'I can't go to: [" + (rover.position[0]+1) +", "+ rover.position[1] + "]'. There is an " + obstacle.name + " there!");
        }
      }
      break;
    case 'W':
      if(rover.position[1] == 10){
        rover.position[1] = 0;
      }
      else{
        var obstacle = obstacleFree(rover.position[0], rover.position[1]+1);
        if(obstacle === true){
          rover.position[1]++;
        }
        else{
          console.log("Rover says: 'I can't go to: [" + rover.position[0] +", "+ (rover.position[1]+1) + "]'. There is an " + obstacle.name + " there!");
        }
      }
      break;
  };
}

function goRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  };
}

function goLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  };
}

askForRover();
console.log('Goodbye!');
