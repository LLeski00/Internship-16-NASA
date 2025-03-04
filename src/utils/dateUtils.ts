function createRecentDateString(): string {
    const recentDate: Date = new Date();
    recentDate.setDate(recentDate.getDate() - 20);
    return recentDate.toISOString().split("T")[0];
}

function getDateString(date: Date): string {
    return date.toISOString().split("T")[0];
}

const isDateStringValid = (dateString: string): boolean => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
};

export { createRecentDateString, getDateString, isDateStringValid };
