export function convertTimestampsToStringDate(seconds: number): string {
    /**
     * Multiplied by 1000 so that the argument is in milliseconds, not seconds
     */
    const date = new Date(seconds * 1000);
    return date.toLocaleDateString();
}
