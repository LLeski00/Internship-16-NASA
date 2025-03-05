function getDateString(date: Date): string {
    return date.toISOString().split("T")[0];
}

function isDateStringValid(dateString: string): boolean {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
}

function getDateWithOffset(date: Date, days: number): Date {
    const offsetDate = new Date(date);
    offsetDate.setDate(offsetDate.getDate() + days);
    return offsetDate;
}

function getDifferenceInDaysFromTwoDates(date1: Date, date2: Date): number {
    const diff = Math.abs(date1.getTime() - date2.getTime());
    const days = Math.ceil(diff / (1000 * 3600 * 24));
    return days;
}

export {
    getDateString,
    isDateStringValid,
    getDateWithOffset,
    getDifferenceInDaysFromTwoDates,
};
