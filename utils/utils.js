const sortByStartDateDesc = (obj) => {
    let newObj = { ...obj }
    let dates = [];
    for (const i in newObj) {
        newObj[i].start_date = newObj[i].slice(0, newObj[i].start_date.length - 19);
        if (newObj[i].end_date) {
            newObj[i].end_date = newObj[i].end_date.slice(0, newObj[i].end_date.length - 19);
        } else {
            newObj[i].end_date = "Present";
        }
        dates.push(newObj[i])
    }
    return dates.sort((a, b) => parseInt(b.start_date) - parseInt(a.start_date));
}

module.exports = {
    sortByStartDateDesc,
};
