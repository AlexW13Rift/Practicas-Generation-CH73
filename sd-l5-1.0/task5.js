export function rubricPassFail(score) {
    score = Number(score)

    if (score >=5){
        return "Pass";
    }
        return "Fail";
}