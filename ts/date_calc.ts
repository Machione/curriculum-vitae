function readable_time_diff(begin_ts: number, end_ts: number): string {
    const diff_ms = Math.abs(begin_ts - end_ts);
    
    const one_year_ms = 1000 * 60 * 60 * 24 * 365.2425;
    const diff_years = Math.floor(diff_ms / one_year_ms);
    
    const remaining_diff_ms = diff_ms - (diff_years * one_year_ms);
    const one_month_ms = 1000 * 60 * 60 * 24 * (365.2425 / 12);
    const diff_months = Math.floor(remaining_diff_ms / one_month_ms);
    
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
        if (diff_months > 1){
            diff += "s";
        }
    }
    
    return diff
}

const durations = document.getElementsByClassName("calc-duration");
for (let i = 0; i < durations.length; i++) {
    const this_duration = durations[i] as HTMLElement;
    if (!this_duration.textContent){
        continue;
    }
    const ts_s = this_duration.textContent.split(/–|--/);
    
    const begin_date = Date.parse(ts_s[0]);
    
    if (ts_s.length < 2) {
        var end_date = Date.now();
    } else {
        var end_date = Date.parse(ts_s[1])
    }
    
    const time_diff = readable_time_diff(begin_date, end_date);
    this_duration.textContent = "(" + time_diff + ")";
}