export function rubricExcellent(score) {
    score = Number(score)

    if (score > 8){
        return "Excellent";
    }

    if (score >= 5){
        return "Pass";
    } 

        return "Fail";
}