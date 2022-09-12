var day = 15;
var month = 3;
var year = 2023;
var allDays = null;
var leapYear = null;

if (year % 4 === 0) {
    leapYear = true;
}
if (month === 1) {
    allDays = day;
} else if (month === 2) {
    allDays = day + 31;
} else if (month === 3) {
    allDays = day + 59;
    if (leapYear) {
        ++allDays;
    }
} else if (month === 4) {
    allDays = day + 89;
    if (leapYear) {
        ++allDays;
    }
} else if (month === 5) {
    allDays = day + 120;
    if (leapYear) {
        ++allDays;
    }
} else if (month === 6) {
    allDays = day + 150;
    if (leapYear) {
        ++allDays;
    }
} else if (month === 7) {
    allDays = day + 181;
    if (leapYear) {
        ++allDays;
    }
} else if (month === 8) {
    allDays = day + 212;
    if (leapYear) {
        ++allDays;
    }
} else if (month === 9) {
    allDays = day + 242;
    if (leapYear) {
        ++allDays;
    }
} else if (month === 10) {
    allDays = day + 273;
    if (leapYear) {
        ++allDays;
    }
} else if (month === 11) {
    allDays = day + 303;
    if (leapYear) {
        ++allDays;
    }
} else if (month === 12) {
    allDays = day + 334;
    if (leapYear) {
        ++allDays;
    }
}
console.log(allDays)