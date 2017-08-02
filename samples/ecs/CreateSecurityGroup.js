var ALY = require('../../index.js');
var config = require('../../config');
var ecs = new ALY.ECS({
    accessKeyId: config.aliyun.SecretId,
    secretAccessKey: config.aliyun.SecretKey,
    endpoint: 'https://ecs.aliyuncs.com',
    apiVersion: '2014-05-26'
  }
);

/*
ecs.describeDisks({
  RegionId: 'cn-beijing'
}, function(err, res) {
  console.log(err, res);
});

ecs.describeInstanceTypes({
}, function(err, res) {
  console.log(err, res);
});
*/

ecs.createSecurityGroup({
  RegionId: 'cn-beijing',
    SecurityGroupName:'xxx'
}, function(err, res) {
  //console.log(err, res);
  console.log(JSON.stringify(res,4,4));
});