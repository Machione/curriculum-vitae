function readable_time_diff(begin_ts, end_ts) {
    var diff_ms = Math.abs(begin_ts - end_ts);
    var one_year_ms = 1000 * 60 * 60 * 24 * 365.2425;
    var diff_years = Math.floor(diff_ms / one_year_ms);
    var remaining_diff_ms = diff_ms - (diff_years * one_year_ms);
    var one_month_ms = 1000 * 60 * 60 * 24 * (365.2425 / 12);
    var diff_months = Math.floor(remaining_diff_ms / one_month_ms);
    var diff = "";
    if (diff_years > 0) {
        diff += diff_years.toString() + " year";
        if (diff_years > 1) {
            diff += "s";
        }
        if (diff_months > 0) {
            diff += ", ";
        }
    }
    if (diff_months > 0) {
        diff += diff_months.toString() + " month";
        if (diff_months > 1) {
            diff += "s";
        }
    }
    return diff;
}
var durations = document.getElementsByClassName("calc-duration");
for (var i = 0; i < durations.length; i++) {
    var this_duration = durations[i];
    if (!this_duration.textContent) {
        continue;
    }
    var ts_s = this_duration.textContent.split(/–|--/);
    var begin_date = Date.parse(ts_s[0]);
    if (ts_s.length < 2) {
        var end_date = Date.now();
    }
    else {
        var end_date = Date.parse(ts_s[1]);
    }
    var time_diff = readable_time_diff(begin_date, end_date);
    this_duration.textContent = "(" + time_diff + ")";
}
