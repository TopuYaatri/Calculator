
const numbers = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9','-'] ;
const operators = ["add", "sub", "div", "multi", "sqr"] ;

var inp = '';
var inps = '';
var act = '';
var rslt = 0;

function createInput(key){
    
                                                                    // inp is input1 in here got the inputs of input1 in inp
    if ( numbers.includes(key) && act === '' && inps === '' ) {
           
                                                                    // i have checked if the +/- sign is given more than once
        if (key === "-" && inp.length >= 1){
            
            document.getElementById("res").innerHTML = inp;

        }else if ( inp.length > 20 ){

            document.getElementById("res").innerHTML = inp;

        } else{

            inp = inp.concat(key);
            document.getElementById("res").innerHTML = inp;
        }

                                                                    /* if the there is input1 and "sqr" is pressed we
                                                                    have received the result instantly, 
                                                                    otherwis it is assigned to act*/
    }else if ( operators.includes(key) && inp !== '' && inps === '' ) {
                
            if (key === "sqr"){

                rslt = Math.sqrt(parseFloat(inp));

                document.getElementById("res").innerHTML = rslt;
                inp = rslt;
                rslt = 0 ;
                             
    
            }else {
                act = key;
                   
            }
                                                                                        // here input 2 is recerived in inps
    }else if ( numbers.includes(key) && act !== '' && inp !== '' && inp.length < 22 ){
                                                                                        // same checking of +/- sign
            if (key === "-" && inps.length >= 1){

                    document.getElementById("res").innerHTML = inps;
    
            }else if ( inps.length > 20 ){

                document.getElementById("res").innerHTML = inps;
    
            }else {

                    inps = inps.concat(key);
                    document.getElementById("res").innerHTML = inps;
            }
                                                                         /*  if "=" is passed the calculation is done here, at 
                                                                         he end i have assigned result to input1 that is inp*/

    }else if (key === '=' && act !== '' && inp !== '' && inps !== '' ){
    
        if ( act === 'add'){
            
            rslt = parseFloat(inp) + parseFloat(inps);

        }else if (act === 'sub'){
            
            rslt = parseFloat(inp) - parseFloat(inps);
            document.getElementById("res").innerHTML = inp;
            
        }else if (act === 'multi'){
            
            rslt = parseFloat(inp) * parseFloat(inps);
                
        }else if (act === 'div'){
            
            rslt = parseFloat(inp) / parseFloat(inps);
                    
        }else {

            document.getElementById("res").innerHTML = "something is wrong";
        }

            document.getElementById("res").innerHTML = rslt ;
                               
            inp = rslt ;
            rslt = 0 ;
            inps = "" ;
            act = "" ;                  
    
                                                                                    // this section is for multiple operations
    }else if (operators.includes(key) && act !== '' && inp !== '' && inps !== '' ){

    
        if ( act === 'add'){
            
            rslt = parseFloat(inp) + parseFloat(inps);
           

        }else if (act === 'sub'){
            
            rslt = parseFloat(inp) - parseFloat(inps);
        
        }else if (act === 'multi'){
            
            rslt = parseFloat(inp) * parseFloat(inps);
            
        }else if (act === 'div'){
            
            rslt = parseFloat(inp) / parseFloat(inps);
                
        }else {
            
            document.getElementById("res").innerHTML = "something is wrong";

        }

            document.getElementById("res").innerHTML = rslt ;
                           
            inp = rslt ;
            rslt = 0 ;
            inps = "" ;
            act = key ;     
    
                                                                        // this is to clear the values or resetting the values
    }else {
            inp = '' ;
            inps = '' ;
            act = '' ; 
            rslt = 0 ;
            document.getElementById("res").innerHTML = rslt ;    
    }
                            

}
