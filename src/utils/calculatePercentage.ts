export default function calcultePercentage(option_votes: number, total_votes: number): number {
    if(total_votes === 0) return total_votes 
    return (option_votes / total_votes) * 100 
}