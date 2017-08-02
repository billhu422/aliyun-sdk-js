var ALY = require('../../index.js');
var config = require('../../config');
var ecs = new ALY.ECS({
    accessKeyId: config.aliyun.SecretId,
    secretAccessKey: config.aliyun.SecretKey,
    endpoint: 'https://ecs.aliyuncs.com',
    apiVersion: '2014-05-26'
  }
);

ecs.describeInstanceTypes({
  //RegionId: 'cn-beijing'
}, function(err, res) {
  //console.log(err, res);
  console.log(JSON.stringify(res,4,4));
});

/*{
    "InstanceTypes": {
        "InstanceType": [
            {
                "CpuCoreCount": 1,
                "InstanceTypeFamily": "ecs.t1",
                "InstanceTypeId": "ecs.t1.xsmall",
                "GPUSpec": "",
                "MemorySize": 0.5,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 1,
                "InstanceTypeFamily": "ecs.t1",
                "InstanceTypeId": "ecs.t1.small",
                "GPUSpec": "",
                "MemorySize": 1,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.s2",
                "InstanceTypeId": "ecs.s2.small",
                "GPUSpec": "",
                "MemorySize": 2,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.s3",
                "InstanceTypeId": "ecs.s3.medium",
                "GPUSpec": "",
                "MemorySize": 4,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.c1",
                "InstanceTypeId": "ecs.c1.small",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.c2",
                "InstanceTypeId": "ecs.c2.medium",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 1,
                "InstanceTypeFamily": "ecs.s1",
                "InstanceTypeId": "ecs.s1.small",
                "GPUSpec": "",
                "MemorySize": 2,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.s2",
                "InstanceTypeId": "ecs.s2.large",
                "GPUSpec": "",
                "MemorySize": 4,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.s3",
                "InstanceTypeId": "ecs.s3.large",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.c1",
                "InstanceTypeId": "ecs.c1.large",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.c2",
                "InstanceTypeId": "ecs.c2.large",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 1,
                "InstanceTypeFamily": "ecs.s1",
                "InstanceTypeId": "ecs.s1.medium",
                "GPUSpec": "",
                "MemorySize": 4,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.s2",
                "InstanceTypeId": "ecs.s2.xlarge",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.m1",
                "InstanceTypeId": "ecs.m1.medium",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.m1",
                "InstanceTypeId": "ecs.m1.xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.c2",
                "InstanceTypeId": "ecs.c2.xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 1,
                "InstanceTypeFamily": "ecs.s1",
                "InstanceTypeId": "ecs.s1.large",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.s2",
                "InstanceTypeId": "ecs.s2.2xlarge",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.m2",
                "InstanceTypeId": "ecs.m2.medium",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.m2",
                "InstanceTypeId": "ecs.m2.xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 1,
                "InstanceTypeFamily": "ecs.n1",
                "InstanceTypeId": "ecs.n1.tiny",
                "GPUSpec": "",
                "MemorySize": 1,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 1,
                "InstanceTypeFamily": "ecs.n1",
                "InstanceTypeId": "ecs.n1.small",
                "GPUSpec": "",
                "MemorySize": 2,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.n1",
                "InstanceTypeId": "ecs.n1.medium",
                "GPUSpec": "",
                "MemorySize": 4,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.n1",
                "InstanceTypeId": "ecs.n1.large",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.n1",
                "InstanceTypeId": "ecs.n1.xlarge",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.n1",
                "InstanceTypeId": "ecs.n1.3xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.n1",
                "InstanceTypeId": "ecs.n1.7xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 1,
                "InstanceTypeFamily": "ecs.n2",
                "InstanceTypeId": "ecs.n2.small",
                "GPUSpec": "",
                "MemorySize": 4,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.n2",
                "InstanceTypeId": "ecs.n2.medium",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.n2",
                "InstanceTypeId": "ecs.n2.large",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.n2",
                "InstanceTypeId": "ecs.n2.xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.n2",
                "InstanceTypeId": "ecs.n2.3xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.n2",
                "InstanceTypeId": "ecs.n2.7xlarge",
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 1,
                "InstanceTypeFamily": "ecs.e3",
                "InstanceTypeId": "ecs.e3.small",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.e3",
                "InstanceTypeId": "ecs.e3.medium",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.e3",
                "InstanceTypeId": "ecs.e3.large",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.e3",
                "InstanceTypeId": "ecs.e3.xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.e3",
                "InstanceTypeId": "ecs.e3.3xlarge",
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.e3",
                "InstanceTypeId": "ecs.e3.7xlarge",
                "GPUSpec": "",
                "MemorySize": 256,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.sn1",
                "InstanceTypeId": "ecs.sn1.medium",
                "GPUSpec": "",
                "MemorySize": 4,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.sn2",
                "InstanceTypeId": "ecs.sn2.medium",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.sn1",
                "InstanceTypeId": "ecs.sn1.large",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.sn1",
                "InstanceTypeId": "ecs.sn1.xlarge",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.sn1",
                "InstanceTypeId": "ecs.sn1.3xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.sn1",
                "InstanceTypeId": "ecs.sn1.7xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.sn2",
                "InstanceTypeId": "ecs.sn2.large",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.sn2",
                "InstanceTypeId": "ecs.sn2.xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.sn2",
                "InstanceTypeId": "ecs.sn2.3xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.sn2",
                "InstanceTypeId": "ecs.sn2.7xlarge",
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 1,
                "InstanceTypeFamily": "ecs.n4",
                "InstanceTypeId": "ecs.n4.small",
                "GPUSpec": "",
                "MemorySize": 2,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.n4",
                "InstanceTypeId": "ecs.n4.large",
                "GPUSpec": "",
                "MemorySize": 4,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.n4",
                "InstanceTypeId": "ecs.n4.xlarge",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.n4",
                "InstanceTypeId": "ecs.n4.2xlarge",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.n4",
                "InstanceTypeId": "ecs.n4.4xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.n4",
                "InstanceTypeId": "ecs.n4.8xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 1,
                "InstanceTypeFamily": "ecs.mn4",
                "InstanceTypeId": "ecs.mn4.small",
                "GPUSpec": "",
                "MemorySize": 4,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.mn4",
                "InstanceTypeId": "ecs.mn4.large",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.mn4",
                "InstanceTypeId": "ecs.mn4.xlarge",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.mn4",
                "InstanceTypeId": "ecs.mn4.2xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.mn4",
                "InstanceTypeId": "ecs.mn4.4xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.mn4",
                "InstanceTypeId": "ecs.mn4.8xlarge",
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 1,
                "InstanceTypeFamily": "ecs.xn4",
                "InstanceTypeId": "ecs.xn4.small",
                "GPUSpec": "",
                "MemorySize": 1,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.e4",
                "InstanceTypeId": "ecs.e4.large",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.e4",
                "InstanceTypeId": "ecs.e4.xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.e4",
                "InstanceTypeId": "ecs.e4.2xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.e4",
                "InstanceTypeId": "ecs.e4.4xlarge",
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 12,
                "InstanceTypeFamily": "ecs.gn3",
                "InstanceTypeId": "ecs.gn3.2xlarge",
                "LocalStorageCapacity": 350,
                "GPUSpec": "NVidia K2",
                "MemorySize": 24,
                "GPUAmount": 1,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "CpuCoreCount": 56,
                "InstanceTypeFamily": "ecs.sn2",
                "InstanceTypeId": "ecs.sn2.13xlarge",
                "GPUSpec": "",
                "MemorySize": 224,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 1,
                "InstanceTypeFamily": "ecs.e4",
                "InstanceTypeId": "ecs.e4.small",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.se1",
                "InstanceTypeId": "ecs.se1.large",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.se1",
                "InstanceTypeId": "ecs.se1.xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.se1",
                "InstanceTypeId": "ecs.se1.2xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.se1",
                "InstanceTypeId": "ecs.se1.4xlarge",
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.se1",
                "InstanceTypeId": "ecs.se1.8xlarge",
                "GPUSpec": "",
                "MemorySize": 256,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 56,
                "InstanceTypeFamily": "ecs.se1",
                "InstanceTypeId": "ecs.se1.14xlarge",
                "GPUSpec": "",
                "MemorySize": 480,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.ga1",
                "InstanceTypeId": "ecs.ga1.4xlarge",
                "LocalStorageCapacity": 350,
                "GPUSpec": "AMD S7150",
                "MemorySize": 40,
                "GPUAmount": 1,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.ga1",
                "InstanceTypeId": "ecs.ga1.8xlarge",
                "LocalStorageCapacity": 700,
                "GPUSpec": "AMD S7150",
                "MemorySize": 80,
                "GPUAmount": 2,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 56,
                "InstanceTypeFamily": "ecs.ga1",
                "InstanceTypeId": "ecs.ga1.14xlarge",
                "LocalStorageCapacity": 1400,
                "GPUSpec": "AMD S7150",
                "MemorySize": 160,
                "GPUAmount": 4,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.gn4",
                "InstanceTypeId": "ecs.gn4.8xlarge",
                "GPUSpec": "NVIDIA M40",
                "MemorySize": 48,
                "GPUAmount": 1,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 56,
                "InstanceTypeFamily": "ecs.gn4",
                "InstanceTypeId": "ecs.gn4.14xlarge",
                "GPUSpec": "NVIDIA M40",
                "MemorySize": 96,
                "GPUAmount": 2,
                "LocalStorageCategory": ""
            },
            {
                "LocalStorageAmount": 2,
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.i1",
                "InstanceTypeId": "ecs.i1.xlarge",
                "LocalStorageCapacity": 104,
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 2,
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.i1",
                "InstanceTypeId": "ecs.i1.2xlarge",
                "LocalStorageCapacity": 208,
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 2,
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.i1",
                "InstanceTypeId": "ecs.i1.4xlarge",
                "LocalStorageCapacity": 416,
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 2,
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.i1",
                "InstanceTypeId": "ecs.i1.8xlarge",
                "LocalStorageCapacity": 832,
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 2,
                "CpuCoreCount": 56,
                "InstanceTypeFamily": "ecs.i1",
                "InstanceTypeId": "ecs.i1.14xlarge",
                "LocalStorageCapacity": 1456,
                "GPUSpec": "",
                "MemorySize": 224,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.cm4",
                "InstanceTypeId": "ecs.cm4.xlarge",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.cm4",
                "InstanceTypeId": "ecs.cm4.2xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.cm4",
                "InstanceTypeId": "ecs.cm4.4xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.ce4",
                "InstanceTypeId": "ecs.ce4.xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.c4",
                "InstanceTypeId": "ecs.c4.xlarge",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.c4",
                "InstanceTypeId": "ecs.c4.2xlarge",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.c4",
                "InstanceTypeId": "ecs.c4.4xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 24,
                "InstanceTypeFamily": "ecs.cm4",
                "InstanceTypeId": "ecs.cm4.6xlarge",
                "GPUSpec": "",
                "MemorySize": 96,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.n5",
                "InstanceTypeId": "ecs.n5.large",
                "GPUSpec": "",
                "MemorySize": 4,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.n5",
                "InstanceTypeId": "ecs.n5.xlarge",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.n5",
                "InstanceTypeId": "ecs.n5.2xlarge",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.n5",
                "InstanceTypeId": "ecs.n5.4xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.n5",
                "InstanceTypeId": "ecs.n5.8xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 64,
                "InstanceTypeFamily": "ecs.n5",
                "InstanceTypeId": "ecs.n5.16xlarge",
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.sc1",
                "InstanceTypeId": "ecs.sc1.4xlarge",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "LocalStorageAmount": 4,
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.d1",
                "InstanceTypeId": "ecs.d1.2xlarge",
                "LocalStorageCapacity": 5500,
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_hdd_pro"
            },
            {
                "LocalStorageAmount": 8,
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.d1",
                "InstanceTypeId": "ecs.d1.4xlarge",
                "LocalStorageCapacity": 5500,
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_hdd_pro"
            },
            {
                "LocalStorageAmount": 12,
                "CpuCoreCount": 24,
                "InstanceTypeFamily": "ecs.d1",
                "InstanceTypeId": "ecs.d1.6xlarge",
                "LocalStorageCapacity": 5500,
                "GPUSpec": "",
                "MemorySize": 96,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_hdd_pro"
            },
            {
                "LocalStorageAmount": 16,
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.d1",
                "InstanceTypeId": "ecs.d1.8xlarge",
                "LocalStorageCapacity": 5500,
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_hdd_pro"
            },
            {
                "LocalStorageAmount": 28,
                "CpuCoreCount": 56,
                "InstanceTypeFamily": "ecs.d1",
                "InstanceTypeId": "ecs.d1.14xlarge",
                "LocalStorageCapacity": 5500,
                "GPUSpec": "",
                "MemorySize": 224,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_hdd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.ga1",
                "InstanceTypeId": "ecs.ga1.2xlarge",
                "LocalStorageCapacity": 175,
                "GPUSpec": "AMD S7150/2",
                "MemorySize": 20,
                "GPUAmount": 1,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.ga1",
                "InstanceTypeId": "ecs.ga1.xlarge",
                "LocalStorageCapacity": 87,
                "GPUSpec": "AMD S7150/4",
                "MemorySize": 10,
                "GPUAmount": 1,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.sn1ne",
                "InstanceTypeId": "ecs.sn1ne.large",
                "GPUSpec": "",
                "MemorySize": 4,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.sn1ne",
                "InstanceTypeId": "ecs.sn1ne.xlarge",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.sn1ne",
                "InstanceTypeId": "ecs.sn1ne.2xlarge",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.sn1ne",
                "InstanceTypeId": "ecs.sn1ne.4xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.sn1ne",
                "InstanceTypeId": "ecs.sn1ne.8xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.sn2ne",
                "InstanceTypeId": "ecs.sn2ne.large",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.sn2ne",
                "InstanceTypeId": "ecs.sn2ne.xlarge",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.sn2ne",
                "InstanceTypeId": "ecs.sn2ne.2xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.sn2ne",
                "InstanceTypeId": "ecs.sn2ne.4xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.sn2ne",
                "InstanceTypeId": "ecs.sn2ne.8xlarge",
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 56,
                "InstanceTypeFamily": "ecs.sn2ne",
                "InstanceTypeId": "ecs.sn2ne.14xlarge",
                "GPUSpec": "",
                "MemorySize": 224,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.se1ne",
                "InstanceTypeId": "ecs.se1ne.large",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.se1ne",
                "InstanceTypeId": "ecs.se1ne.xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.se1ne",
                "InstanceTypeId": "ecs.se1ne.2xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.se1ne",
                "InstanceTypeId": "ecs.se1ne.4xlarge",
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.se1ne",
                "InstanceTypeId": "ecs.se1ne.8xlarge",
                "GPUSpec": "",
                "MemorySize": 256,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 56,
                "InstanceTypeFamily": "ecs.se1ne",
                "InstanceTypeId": "ecs.se1ne.14xlarge",
                "GPUSpec": "",
                "MemorySize": 480,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "LocalStorageAmount": 2,
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.i1",
                "InstanceTypeId": "ecs.i1-c10d1.8xlarge",
                "LocalStorageCapacity": 1456,
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 2,
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.i1",
                "InstanceTypeId": "ecs.i1-c5d1.4xlarge",
                "LocalStorageCapacity": 1456,
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.f1",
                "InstanceTypeId": "ecs.f1-c4f1.xlarge",
                "LocalStorageCapacity": 440,
                "GPUSpec": "INTEL ARRIA 10 GX 1150",
                "MemorySize": 30,
                "GPUAmount": 1,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.f1",
                "InstanceTypeId": "ecs.f1-c8f1.2xlarge",
                "LocalStorageCapacity": 440,
                "GPUSpec": "INTEL ARRIA 10 GX 1150",
                "MemorySize": 60,
                "GPUAmount": 1,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.f1",
                "InstanceTypeId": "ecs.f1-c16f1.4xlarge",
                "LocalStorageCapacity": 440,
                "GPUSpec": "INTEL ARRIA 10 GX 1150",
                "MemorySize": 60,
                "GPUAmount": 1,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.f1",
                "InstanceTypeId": "ecs.f1-c4f1.2xlarge",
                "LocalStorageCapacity": 880,
                "GPUSpec": "INTEL ARRIA 10 GX 1150",
                "MemorySize": 60,
                "GPUAmount": 2,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.f1",
                "InstanceTypeId": "ecs.f1-c8f1.4xlarge",
                "LocalStorageCapacity": 880,
                "GPUSpec": "INTEL ARRIA 10 GX 1150",
                "MemorySize": 120,
                "GPUAmount": 2,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.gn5",
                "InstanceTypeId": "ecs.gn5-c4g1.xlarge",
                "LocalStorageCapacity": 440,
                "GPUSpec": "NVIDIA P100",
                "MemorySize": 30,
                "GPUAmount": 1,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.gn5",
                "InstanceTypeId": "ecs.gn5-c8g1.2xlarge",
                "LocalStorageCapacity": 440,
                "GPUSpec": "NVIDIA P100",
                "MemorySize": 60,
                "GPUAmount": 1,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.gn5",
                "InstanceTypeId": "ecs.gn5-c4g1.2xlarge",
                "LocalStorageCapacity": 880,
                "GPUSpec": "NVIDIA P100",
                "MemorySize": 60,
                "GPUAmount": 2,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.gn5",
                "InstanceTypeId": "ecs.gn5-c8g1.4xlarge",
                "LocalStorageCapacity": 880,
                "GPUSpec": "NVIDIA P100",
                "MemorySize": 120,
                "GPUAmount": 2,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.gn5",
                "InstanceTypeId": "ecs.gn5-c8g1.8xlarge",
                "LocalStorageCapacity": 1760,
                "GPUSpec": "NVIDIA P100",
                "MemorySize": 240,
                "GPUAmount": 4,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.gn4",
                "InstanceTypeId": "ecs.gn4-c4g1.xlarge",
                "GPUSpec": "NVIDIA M40",
                "MemorySize": 30,
                "GPUAmount": 1,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.gn4",
                "InstanceTypeId": "ecs.gn4-c8g1.2xlarge",
                "GPUSpec": "NVIDIA M40",
                "MemorySize": 60,
                "GPUAmount": 1,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.gn4",
                "InstanceTypeId": "ecs.gn4-c4g1.2xlarge",
                "GPUSpec": "NVIDIA M40",
                "MemorySize": 60,
                "GPUAmount": 2,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.gn4",
                "InstanceTypeId": "ecs.gn4-c8g1.4xlarge",
                "GPUSpec": "NVIDIA M40",
                "MemorySize": 60,
                "GPUAmount": 2,
                "LocalStorageCategory": ""
            },
            {
                "LocalStorageAmount": 4,
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.d1ne",
                "InstanceTypeId": "ecs.d1ne.2xlarge",
                "LocalStorageCapacity": 5500,
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_hdd_pro"
            },
            {
                "LocalStorageAmount": 8,
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.d1ne",
                "InstanceTypeId": "ecs.d1ne.4xlarge",
                "LocalStorageCapacity": 5500,
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_hdd_pro"
            },
            {
                "LocalStorageAmount": 12,
                "CpuCoreCount": 24,
                "InstanceTypeFamily": "ecs.d1ne",
                "InstanceTypeId": "ecs.d1ne.6xlarge",
                "LocalStorageCapacity": 5500,
                "GPUSpec": "",
                "MemorySize": 96,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_hdd_pro"
            },
            {
                "LocalStorageAmount": 16,
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.d1ne",
                "InstanceTypeId": "ecs.d1ne.8xlarge",
                "LocalStorageCapacity": 5500,
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_hdd_pro"
            },
            {
                "LocalStorageAmount": 28,
                "CpuCoreCount": 56,
                "InstanceTypeFamily": "ecs.d1ne",
                "InstanceTypeId": "ecs.d1ne.14xlarge",
                "LocalStorageCapacity": 5500,
                "GPUSpec": "",
                "MemorySize": 224,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_hdd_pro"
            },
            {
                "LocalStorageAmount": 12,
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.d1",
                "InstanceTypeId": "ecs.d1-c8d3.8xlarge",
                "LocalStorageCapacity": 5500,
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_hdd_pro"
            },
            {
                "LocalStorageAmount": 12,
                "CpuCoreCount": 56,
                "InstanceTypeFamily": "ecs.d1",
                "InstanceTypeId": "ecs.d1-c14d3.14xlarge",
                "LocalStorageCapacity": 5500,
                "GPUSpec": "",
                "MemorySize": 160,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_hdd_pro"
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.c5",
                "InstanceTypeId": "ecs.c5.large",
                "GPUSpec": "",
                "MemorySize": 4,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.c5",
                "InstanceTypeId": "ecs.c5.xlarge",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.c5",
                "InstanceTypeId": "ecs.c5.2xlarge",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.c5",
                "InstanceTypeId": "ecs.c5.4xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 24,
                "InstanceTypeFamily": "ecs.c5",
                "InstanceTypeId": "ecs.c5.6xlarge",
                "GPUSpec": "",
                "MemorySize": 48,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.c5",
                "InstanceTypeId": "ecs.c5.8xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 64,
                "InstanceTypeFamily": "ecs.c5",
                "InstanceTypeId": "ecs.c5.16xlarge",
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.g5",
                "InstanceTypeId": "ecs.g5.large",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.g5",
                "InstanceTypeId": "ecs.g5.xlarge",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.g5",
                "InstanceTypeId": "ecs.g5.2xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.g5",
                "InstanceTypeId": "ecs.g5.4xlarge",
                "GPUSpec": "",
                "MemorySize": 48,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 24,
                "InstanceTypeFamily": "ecs.g5",
                "InstanceTypeId": "ecs.g5.6xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.g5",
                "InstanceTypeId": "ecs.g5.8xlarge",
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 64,
                "InstanceTypeFamily": "ecs.g5",
                "InstanceTypeId": "ecs.g5.16xlarge",
                "GPUSpec": "",
                "MemorySize": 256,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.r5",
                "InstanceTypeId": "ecs.r5.large",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.r5",
                "InstanceTypeId": "ecs.r5.xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.r5",
                "InstanceTypeId": "ecs.r5.2xlarge",
                "GPUSpec": "",
                "MemorySize": 48,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.r5",
                "InstanceTypeId": "ecs.r5.4xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 24,
                "InstanceTypeFamily": "ecs.r5",
                "InstanceTypeId": "ecs.r5.6xlarge",
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.r5",
                "InstanceTypeId": "ecs.r5.8xlarge",
                "GPUSpec": "",
                "MemorySize": 256,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 64,
                "InstanceTypeFamily": "ecs.r5",
                "InstanceTypeId": "ecs.r5.16xlarge",
                "GPUSpec": "",
                "MemorySize": 512,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 88,
                "InstanceTypeFamily": "ecs.r5",
                "InstanceTypeId": "ecs.r5.22xlarge",
                "GPUSpec": "",
                "MemorySize": 704,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.hfc5",
                "InstanceTypeId": "ecs.hfc5.large",
                "GPUSpec": "",
                "MemorySize": 4,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.hfc5",
                "InstanceTypeId": "ecs.hfc5.xlarge",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.hfc5",
                "InstanceTypeId": "ecs.hfc5.2xlarge",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.hfc5",
                "InstanceTypeId": "ecs.hfc5.4xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 24,
                "InstanceTypeFamily": "ecs.hfc5",
                "InstanceTypeId": "ecs.hfc5.6xlarge",
                "GPUSpec": "",
                "MemorySize": 48,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.hfc5",
                "InstanceTypeId": "ecs.hfc5.8xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.hfg5",
                "InstanceTypeId": "ecs.hfg5.large",
                "GPUSpec": "",
                "MemorySize": 8,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.hfg5",
                "InstanceTypeId": "ecs.hfg5.xlarge",
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.hfg5",
                "InstanceTypeId": "ecs.hfg5.2xlarge",
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.hfg5",
                "InstanceTypeId": "ecs.hfg5.4xlarge",
                "GPUSpec": "",
                "MemorySize": 48,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 24,
                "InstanceTypeFamily": "ecs.hfg5",
                "InstanceTypeId": "ecs.hfg5.6xlarge",
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.hfg5",
                "InstanceTypeId": "ecs.hfg5.8xlarge",
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "CpuCoreCount": 56,
                "InstanceTypeFamily": "ecs.hfg5",
                "InstanceTypeId": "ecs.hfg5.14xlarge",
                "GPUSpec": "",
                "MemorySize": 160,
                "GPUAmount": 0,
                "LocalStorageCategory": ""
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 2,
                "InstanceTypeFamily": "ecs.i2",
                "InstanceTypeId": "ecs.i2.large",
                "LocalStorageCapacity": 447,
                "GPUSpec": "",
                "MemorySize": 16,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 4,
                "InstanceTypeFamily": "ecs.i2",
                "InstanceTypeId": "ecs.i2.xlarge",
                "LocalStorageCapacity": 894,
                "GPUSpec": "",
                "MemorySize": 32,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 1,
                "CpuCoreCount": 8,
                "InstanceTypeFamily": "ecs.i2",
                "InstanceTypeId": "ecs.i2.2xlarge",
                "LocalStorageCapacity": 1788,
                "GPUSpec": "",
                "MemorySize": 64,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 2,
                "CpuCoreCount": 16,
                "InstanceTypeFamily": "ecs.i2",
                "InstanceTypeId": "ecs.i2.4xlarge",
                "LocalStorageCapacity": 1788,
                "GPUSpec": "",
                "MemorySize": 128,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 3,
                "CpuCoreCount": 24,
                "InstanceTypeFamily": "ecs.i2",
                "InstanceTypeId": "ecs.i2.6xlarge",
                "LocalStorageCapacity": 1788,
                "GPUSpec": "",
                "MemorySize": 192,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 4,
                "CpuCoreCount": 32,
                "InstanceTypeFamily": "ecs.i2",
                "InstanceTypeId": "ecs.i2.8xlarge",
                "LocalStorageCapacity": 1788,
                "GPUSpec": "",
                "MemorySize": 255.970703125,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_ssd_pro"
            },
            {
                "LocalStorageAmount": 8,
                "CpuCoreCount": 64,
                "InstanceTypeFamily": "ecs.i2",
                "InstanceTypeId": "ecs.i2.16xlarge",
                "LocalStorageCapacity": 1788,
                "GPUSpec": "",
                "MemorySize": 512,
                "GPUAmount": 0,
                "LocalStorageCategory": "local_ssd_pro"
            }
        ]
    },
    "RequestId": "AAC1A359-E0A9-4DB9-84C2-C1AA7BDF2B6F"
}*/
