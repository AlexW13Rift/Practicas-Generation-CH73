export function ageCalculator(year, month, day) {
    const today = new Date();

    const AYear = today.getFullYear();
    const AMonth = today.getMonth();
    const ADay = today.getDate();

    let age = AYear - year;

    if (AMonth < month || (AMonth === month && ADay < day)) {
        age--;
    }

    return age;
}