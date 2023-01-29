// complexity O(n)
function numberToWords(num: number): string {
    if(num == 0) return "Zero";
    const to19 = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']; 
    const to9 = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight', 'Nine']
    const toTens = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy','Eighty', 'Ninety']
    const places = ['', 'Thousand', 'Million', 'Billion']

    let place = Math.floor(Math.log10(num) + 1)
    place = place % 3 != 0 ? place + 3 - (place % 3) : place
    let answer = ""

    for(;place > 0; place = place - 3){
        let current = Math.floor( (num % (10**place)) /(10**(place - 3)))
        let hundreds = Math.floor(current/100), tens = Math.floor((current % 100)/10), ones = current % 10
        
        answer += hundreds ? to9[hundreds-1]+" Hundred " : ''
        if(tens == 1){
            answer += to19[ones] + " "
        }else{
            if(tens) answer += toTens[tens -2] + " "
            answer += ones ? to9[ones - 1] + " " : ""
        }

        if(hundreds || tens || ones) answer += places[place / 3 - 1] + " "
    
    }
    return answer.trimEnd();
};
