export default function calcultePercentage(option_votes: number, total_votes: number): number {
// verifico si recibo params 
if(!option_votes && !total_votes) NaN 
    if(total_votes === 0) return total_votes // return 0
    return (option_votes / total_votes) * 100 
}