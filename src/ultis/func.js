export const handleNumber = (number) => {
    if (number > 1e6) {
        return `${Math.round((number * 10) / 1e6) / 10}M`;
    }
    if (number > 1e3) {
        return `${Math.round((number * 10) / 1e3) / 10}K`;
    }
    return Math.round(number);
};
