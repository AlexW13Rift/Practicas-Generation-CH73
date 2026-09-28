export function rubricPerfect(score) {
    score = Number(score)

    if (score === 11){
        return "Perfect";
    }
    
    if (score > 8){
        return "Excellent";
    }

    if (score >= 5){
        return "Pass";
    } 

        return "Fail";
}