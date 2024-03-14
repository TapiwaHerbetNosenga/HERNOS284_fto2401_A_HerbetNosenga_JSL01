function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = "Valid Syntax";
    
if (input.startsWith("pet_" ) && input.includes(" ") !== true){

    if(!isNaN(input[4]) && !isNaN(input[5]) && !isNaN(input[6]) && !isNaN(input[7])){
        let i = 8;
        while(i<input.length){

            if( /^[a-zA-Z]+$/.test(input[i]) === false){
                 result = "Invalid Syntax";
                 break;
            }
            else{
                i++;
            }
        }    
    }
    else{
        result = "Invalid Syntax";
    }
    
}
else{
    result = "Invalid Syntax";
}
    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}





