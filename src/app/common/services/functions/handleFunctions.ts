import { HttpHeaders } from '@angular/common/http';

export class handleFunction {
    private headerPost: HttpHeaders;
    public yearNames = [];
    public days = [];
    private date = new Date();
    private monthNames = [];
    genaratemonthNames() {
        return this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
    }

    generateYears() {
        for (let i = 0; i < 100; i++) {
            this.yearNames.push(this.date.getFullYear() + i)
        } return this.yearNames;
    }
    generateDays() {
        for (let i = 1; i < 32; i++) { this.days.push(i); } return this.days;
    }

    getMonthNumber(month) {
        if (month == "January") return 1;
        if (month == "February") return 2;
        if (month == "March") return 3;
        if (month == "April") return 4;
        if (month == "May") return 5;
        if (month == "June") return 6;
        if (month == "July") return 7;
        if (month == "August") return 8;
        if (month == "September") return 9;
        if (month == "October") return 10;
        if (month == "November") return 11;
        if (month == "December") return 12;
    }

    getDate(day, monthno, year) {
        if (day < 10 && day > 0) {
            if (monthno < 10 && monthno > 0) { return year + "-0" + monthno + "-0" + day; }
            else { return year + "-" + monthno + "-0" + day; }
        }
        else {
            if (monthno < 10 && monthno > 0) { return year + "-0" + monthno + "-" + day; }
            else { return year + "-" + monthno + "-" + day; }
        }
    }
    createHeader() {
        this.headerPost = new HttpHeaders();
        this.headerPost.append('Content-Type', 'application/x-www-form-urlencoded');
    }
}
