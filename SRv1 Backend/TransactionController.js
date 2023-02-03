const web3 = require('Web3');
web3(new web3.providers.HttpProvider('https://mainnet.infura.io/v3/694c66f1db7e43ab8dc446432e989054'));

async function retrieveTransactionsFromBlock(blockNumbers) {
    try {
        // Iterating through the block numbers
        for(let i = 0; i < blockNumbers.length; i++) {
            const blockNumber = blockNumbers[i]
            // Use the web3.eth.getBlock() method to get the block data
            const block = await web3.eth.getBlock(blockNumber, true);
            console.log(`Block data: ${JSON.stringify(block)}`);
        
            // Iterate through the transactions and extract the necessary information
            for (let i = 0; i < block.transactions.length; i++) {
                const tx = block.transactions[i];

                // Extract the transaction ID
                const txid = tx.hash;
                // Extract the transaction amount in Ether
                const valueEth = web3.utils.fromWei(tx.value, 'ether');
                // Extract the transaction amount in USD
                const valueUsd = valueEth * (await getEthToUsdRate());
                // Extract the timestamp
                const timestamp = block.timestamp;
                // Extract the from and to address
                const from = tx.from;
                const to = tx.to;
                console.log(`Transaction ID: ${txid}`);
                console.log(`Transaction amount: ${valueEth} ether, ${valueUsd} USD`);
                console.log(`Timestamp: ${timestamp}`);
                console.log(`From: ${from}`);
                console.log(`To: ${to}`);
            }
        }
    } catch (err) {
        console.log(err);
    }
}

// Function to get the current Ether to USD conversion rate
async function getEthToUsdRate() {
    // Replace this with a call to an API or service that provides the conversion rate
    return 200;
}

retrieveTransactionsFromBlock([16439622, 16439623]);