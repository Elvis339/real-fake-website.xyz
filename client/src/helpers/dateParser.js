export const dateParser = ({ start_date, end_date }) => {
    const start = start_date.slice(0, 10).replace(/\-/g, '/');
    let end = "";
    if (!end_date) {
        end = "Present";
    } else {
        end = end_date.slice(0, 10).replace(/\-/g, '/');
    }

    return `${start} - ${end}`;
};