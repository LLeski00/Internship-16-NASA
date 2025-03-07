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

export { getDateString, isDateStringValid, getDateWithOffset };
