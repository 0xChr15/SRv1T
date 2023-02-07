//Function to implement data retention policy
function implementRetentionPolicy(data, retentionPeriod) {
//Iterate through the data and check each data point's timestamp
    for (let i = 0; i < data.length; i++) {
        let dataPoint = data[i];
//Check if the data point's timestamp is older than the retention period
        if (Date.now() - dataPoint.timestamp > retentionPeriod) {
//If older, delete the data point from the data array
            data.splice(i, 1);
        }
    }
//Return the updated data
    return data;
}