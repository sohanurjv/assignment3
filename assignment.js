// feetToMile
function feetToMile(feet){
    if(feet < 0){
        return "negative number doesn't support";
    }
    // var mile = feet * 0.000189394; (another calculation)
    var mile = feet / 5280;
    // var fixedMile = mile.toFixed(2);anoter way to fixed the number
    return mile.toFixed(2);
}
var jhankarVaiResultMile = feetToMile(-10000);
console.log("jhankar vai apnar Mile value is:", jhankarVaiResultMile);



// woodCalculator
function woodCalculator(chair, table, khat){
    const isValid = (value) => {
        if(value < 0 || value == undefined){
           return 0;
        }
        else{
            return value;
        }
    }

    var chairWoodAmount = isValid(chair) * 1;
    var tableWoodAmount = isValid(table) * 3;
    var khatWoodAmount = isValid(khat) * 5;
    var totalWoodAmount = chairWoodAmount + tableWoodAmount + khatWoodAmount;
    return totalWoodAmount;
}
var jhankarVaiOrder = woodCalculator(2, 2, 2);
console.log("Jhankar vai er kath lagbe total:", jhankarVaiOrder, "cm^3");

// brickCalculator
 function brickCalculator(numberOfFloors){
     if(numberOfFloors <1 || numberOfFloors == undefined){
         return "insert the right value";
     }
     else{
        if(numberOfFloors <= 10){
            return numberOfFloors*15*1000;
        }
        else if(numberOfFloors > 10 && numberOfFloors <=20){
            return (10*15*1000) + ((numberOfFloors - 10)*12*1000);
        }
        else{
            return (10*15*1000) + (10*12*1000) + ((numberOfFloors-20)*10*1000);
        }
     }
 }
 var buildingSize = brickCalculator(21);
 console.log('jhankar vai , brick lagbe :', buildingSize);



// tinyFriend
function tinyFriend(friendList){
    if(friendList.length == 0){
        return 'The array is empty !';
    }
    else{
        var shortestName = friendList[0];
        for(var i=1; i<friendList.length; i++){
            if(friendList[i].length < shortestName.length){
                shortestName = friendList[i];
            }
        }
        return shortestName;        
    }  
}
var shortestName = tinyFriend(['abdul', 'kim', 'jack']);
console.log("jhankar vai er tiny friend:", shortestName);
 