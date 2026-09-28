export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    returnAge() {
        const A = new Date();

        const AYear = A.getFullYear();
        const AMonth = A.getMonth();
        const ADay = A.getDate();

        let age = AYear - this.year;

        if (AMonth < this.month || (AMonth === this.month && ADay < this.day)) {
            age--;
        }

        return this.name + " is " + age + " today!";
    }
}