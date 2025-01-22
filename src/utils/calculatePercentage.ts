export default function calcultePercentage(option_votes: number, other_votes: number): number {
    if(option_votes == 0) {
        return 0
    } else if(other_votes == 0) {
        return 100;
    } else {
        return ((option_votes / other_votes) * 100) / (option_votes + other_votes);
    }
}