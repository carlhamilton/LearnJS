var beginningScenarios = ["You wake up in the hospital. It is eerily quiet. You tiptoe to the door and peak out.", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "Desperate times call for desperate measures. You see a small convenience store ahead and decide to loot it for treasures."];



function randomNumber(range){
    
   return  Math.round( Math.random() * range );
}

alert(beginningScenarios[randomNumber(beginningScenarios.length -1 ) ] );

var weaponlist = ["shovel ","crossbow ","baseball bat ","rubber chicken "];

var weapon = weaponlist[ randomNumber(weaponlist.length -1 ) ];

alert("As it is a zombie apocoloypse, you decide to search for a weapon first. After surveying your surroundings you notice and grab a " + weapon + ".");

alert("Suddenly a zombie bursts through the door! You ready your " + weapon + "and advance towards the zombie.");

var survival = randomNumber(2);

if(survival === 0){
    alert("The zombie has bitten you which means you will die and turn into a zombie and want brains, yum yum!!!");
}
else if(survival > 0){
    alert("You kill the zombie with your " + weapon + "well done, you win.");
}