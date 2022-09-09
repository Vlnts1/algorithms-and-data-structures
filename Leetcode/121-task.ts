// 121. Best Time to Buy and Sell Stock

const prices = [7,1,5,3,6,4];

const maxProfit = (prices: number[]): number => {
    let buyPrice: number = prices[0]
    let sellPrice: number = 0
    
    for (let i = 1; i < prices.length; i++) {
        buyPrice = Math.max(buyPrice, prices[i] - sellPrice);
        sellPrice = Math.min(sellPrice, prices[i]);
    }
    
    return buyPrice;
};