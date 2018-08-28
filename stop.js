var AWS = require('aws-sdk');

module.exports = (instanceId) => {
    var ec2 = new AWS.EC2();
    var today = new Date();
    var params = {
      InstanceIds: [instanceId]
    };
	console.log(params);
	
    ec2.stopInstances(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
};