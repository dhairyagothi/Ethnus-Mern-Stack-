document.getElementById('calcBtn').onclick = function() {
    let dob = document.getElementById('dob').value;
    if (!dob) {
        alert("Please select your birth date");
        return;
    }
    let today = new Date();
    let birth = new Date(dob);

    if (birth > today) {
        document.getElementById('years').textContent = "??";
        document.getElementById('months').textContent = "??";
        document.getElementById('days').textContent = "??";
        return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;
        // Get days in previous month
        let prevMonth = today.getMonth() === 0 ? 11 : today.getMonth() - 1;
        let prevMonthYear = today.getMonth() === 0 ? today.getFullYear() - 1 : today.getFullYear();
        let daysInPrevMonth = new Date(prevMonthYear, prevMonth + 1, 0).getDate();
        days += daysInPrevMonth;
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    if (years < 0) {
        document.getElementById('years').textContent = "0";
        document.getElementById('months').textContent = "0";
        document.getElementById('days').textContent = "0";
        return;
    }

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
}