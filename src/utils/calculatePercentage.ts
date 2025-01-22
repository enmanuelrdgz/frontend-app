export default function calcultePercentage(total_votes: number, option_votes: number): number {
    return total_votes == 0 ? 0 : ((option_votes / total_votes) * 100);
}