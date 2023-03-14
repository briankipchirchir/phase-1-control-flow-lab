function scuberGreetingForFeet(distance){
    let result
    if(distance<=400){
        result='This one is on me!'
    }
    else if(distance>2000&&distance<2500){
        result= 'I will gladly take your thirty bucks.'

    }
    else if(distance>2500){
        result='No can do.'
    }
    return result

}
function ternaryCheckCity(city){
    let ans
    if(city=='NYC'){
        ans='Ok, sounds good.'
    }
    else{
        ans='No go.'
    }
    return ans
}
function switconcharafromtip(tip){
    let ans
    let tip
    if(tip=='generous'){
        ans="Thank you so much."
    }
    else if(tip=='not as generous'){
        ans="Thank you."
    }
    else{
        ans="Bye."
    }
    return ans
}