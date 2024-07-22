// var validStrings = function(n) {
  
    //empty arr for res
    let validStringList = [];
    
    function findValidStrings(currentString, targetLength){// function with string and length in parameters
        
        //base case if its = to target length push it to array and return
        if(currentString.length === targetLength){
            validStringList.push(currentString)
            return
        }
    
    
        let char = currentString[currentString.length-1]// variable that is equal to last character in the string
            
    
        if(char == "0"){//if the laset character is a 0 only at 1     
            findValidStrings(currentString + "1", targetLength)
        } else {    
            findValidStrings(currentString + "1", targetLength)
            findValidStrings(currentString + "0", targetLength)   
        }
        
        // otherwise recurevely call 1 and 0
    }
    
    findValidStrings("0", n)
    findValidStrings("1", n) // call the function seperately for 0 and 1
    //returing the array
    return validStringList
};