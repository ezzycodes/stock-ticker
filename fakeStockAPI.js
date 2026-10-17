export function getStockData() {
    const now = new Date().toLocaleTimeString() 
    
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: (Math.random()*4).toFixed(2),   /* return a random number between 0 and 3 to two decimal places */ 
        time: now    /* return a timestamp in this format: hh/mm/ss */
    }
}
  