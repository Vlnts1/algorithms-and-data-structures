// 121. Best Time to Buy and Sell Stock

const prices = [7,1,5,3,6,4];

const maxProfit = (prices: number[]): number => {
    let minPrice: number = prices[0]
    let profit: number = 0
    
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        profit = Math.max(profit, prices[i] - minPrice);
    }
    return profit;
};

// O(n)