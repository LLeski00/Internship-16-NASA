function createRecentDateString(): string {
    const recentDate: Date = new Date();
    recentDate.setDate(recentDate.getDate() - 20);
    return recentDate.toISOString().split("T")[0];
}

function getDateString(date: Date): string {
    return date.toISOString().split("T")[0];
}

export { createRecentDateString, getDateString };
