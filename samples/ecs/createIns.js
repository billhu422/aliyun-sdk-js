var ALY = require('../../index.js');
var config = require('../../config');
var ecs = new ALY.ECS({
    accessKeyId: config.aliyun.SecretId,
    secretAccessKey: config.aliyun.SecretKey,
    endpoint: 'https://ecs-cn-hangzhou.aliyuncs.com',
    apiVersion: '2014-05-26'
  }
);

var params = {
    Action:'CreateInstance',
    RegionId: 'cn-beijing',
    ZoneId:'cn-beijing-a',
    ImageId:'ubuntu_14_0405_32_40G_alibase_20170711.vhd',
    InstanceType:'ecs.n1.small',
    SecurityGroupId:'sg-2ze154uz0tzd17r2zlj4',
}
ecs.createInstance(params, function(err, res) {
    if(err){
          console.log(err);
    }else{
        console.log(JSON.stringify(res,4,4));
    }
});