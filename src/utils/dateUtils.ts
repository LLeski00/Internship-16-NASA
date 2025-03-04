function createRecentDateString(): string {
    const recentDate: Date = new Date();
    recentDate.setDate(recentDate.getDate() - 20);
    return recentDate.toISOString().split("T")[0];
}

function getDateString(date: Date): string {
    return date.toISOString().split("T")[0];
}

function isDateStringValid(dateString: string): boolean {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
}

function getDateFromNow(days: number): Date {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
}

export {
    createRecentDateString,
    getDateString,
    isDateStringValid,
    getDateFromNow,
};
