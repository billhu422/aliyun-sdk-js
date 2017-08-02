var ALY = require('../../index.js');
var config = require('../../config');
var ecs = new ALY.ECS({
    accessKeyId: config.aliyun.SecretId,
    secretAccessKey: config.aliyun.SecretKey,
    endpoint: 'https://ecs.aliyuncs.com',
    apiVersion: '2014-05-26'
  }
);

ecs.describeImages({
  RegionId: 'cn-beijing'
}, function(err, res) {
  //console.log(err, res);
  console.log(JSON.stringify(res,4,4));
});

/*
{
    "PageNumber": 1,
    "TotalCount": 34,
    "PageSize": 10,
    "RegionId": "cn-beijing",
    "RequestId": "1534FE93-CA5A-49C5-A5C7-4C872688659A",
    "Images": {
        "Image": [
            {
                "ImageId": "ubuntu_14_0405_32_40G_alibase_20170711.vhd",
                "Description": "",
                "ProductCode": "",
                "OSType": "linux",
                "Architecture": "i386",
                "OSName": "Ubuntu  14.04 32位",
                "DiskDeviceMappings": {
                    "DiskDeviceMapping": []
                },
                "ImageOwnerAlias": "system",
                "Progress": "100%",
                "IsSupportCloudinit": true,
                "Usage": "instance",
                "CreationTime": "2017-07-18T07:13:43Z",
                "Tags": {
                    "Tag": []
                },
                "ImageVersion": "",
                "Status": "Available",
                "ImageName": "ubuntu_14_0405_32_40G_alibase_20170711.vhd",
                "IsSupportIoOptimized": true,
                "IsSelfShared": "",
                "IsCopied": false,
                "IsSubscribed": false,
                "Platform": "Ubuntu",
                "Size": 40
            },
            {
                "ImageId": "ubuntu_14_0405_64_40G_alibase_20170711.vhd",
                "Description": "",
                "ProductCode": "",
                "OSType": "linux",
                "Architecture": "x86_64",
                "OSName": "Ubuntu  14.04 64位",
                "DiskDeviceMappings": {
                    "DiskDeviceMapping": []
                },
                "ImageOwnerAlias": "system",
                "Progress": "100%",
                "IsSupportCloudinit": true,
                "Usage": "instance",
                "CreationTime": "2017-07-18T07:09:17Z",
                "Tags": {
                    "Tag": []
                },
                "ImageVersion": "",
                "Status": "Available",
                "ImageName": "ubuntu_14_0405_64_40G_alibase_20170711.vhd",
                "IsSupportIoOptimized": true,
                "IsSelfShared": "",
                "IsCopied": false,
                "IsSubscribed": false,
                "Platform": "Ubuntu",
                "Size": 40
            },
            {
                "ImageId": "centos_6_08_32_40G_alibase_20170710.vhd",
                "Description": "",
                "ProductCode": "",
                "OSType": "linux",
                "Architecture": "i386",
                "OSName": "CentOS  6.8 32位",
                "DiskDeviceMappings": {
                    "DiskDeviceMapping": []
                },
                "ImageOwnerAlias": "system",
                "Progress": "100%",
                "IsSupportCloudinit": true,
                "Usage": "instance",
                "CreationTime": "2017-07-17T10:00:57Z",
                "Tags": {
                    "Tag": []
                },
                "ImageVersion": "",
                "Status": "Available",
                "ImageName": "centos_6_08_32_40G_alibase_20170710.vhd",
                "IsSupportIoOptimized": true,
                "IsSelfShared": "",
                "IsCopied": false,
                "IsSubscribed": false,
                "Platform": "CentOS",
                "Size": 40
            },
            {
                "ImageId": "centos_6_08_64_40G_alibase_20170710.vhd",
                "Description": "",
                "ProductCode": "",
                "OSType": "linux",
                "Architecture": "x86_64",
                "OSName": "CentOS  6.8 64位",
                "DiskDeviceMappings": {
                    "DiskDeviceMapping": []
                },
                "ImageOwnerAlias": "system",
                "Progress": "100%",
                "IsSupportCloudinit": true,
                "Usage": "instance",
                "CreationTime": "2017-07-17T06:24:30Z",
                "Tags": {
                    "Tag": []
                },
                "ImageVersion": "",
                "Status": "Available",
                "ImageName": "centos_6_08_64_40G_alibase_20170710.vhd",
                "IsSupportIoOptimized": true,
                "IsSelfShared": "",
                "IsCopied": false,
                "IsSubscribed": false,
                "Platform": "CentOS",
                "Size": 40
            },
            {
                "ImageId": "centos_7_03_64_40G_alibase_20170710.vhd",
                "Description": "",
                "ProductCode": "",
                "OSType": "linux",
                "Architecture": "x86_64",
                "OSName": "CentOS  7.3 64位",
                "DiskDeviceMappings": {
                    "DiskDeviceMapping": []
                },
                "ImageOwnerAlias": "system",
                "Progress": "100%",
                "IsSupportCloudinit": true,
                "Usage": "instance",
                "CreationTime": "2017-07-17T06:23:48Z",
                "Tags": {
                    "Tag": []
                },
                "ImageVersion": "",
                "Status": "Available",
                "ImageName": "centos_7_03_64_40G_alibase_20170710.vhd",
                "IsSupportIoOptimized": true,
                "IsSelfShared": "",
                "IsCopied": false,
                "IsSubscribed": false,
                "Platform": "CentOS",
                "Size": 40
            },
            {
                "ImageId": "debian_8_08_32_40G_alibase_20170711.vhd",
                "Description": "",
                "ProductCode": "",
                "OSType": "linux",
                "Architecture": "i386",
                "OSName": "Debian  8.8 32位",
                "DiskDeviceMappings": {
                    "DiskDeviceMapping": []
                },
                "ImageOwnerAlias": "system",
                "Progress": "100%",
                "IsSupportCloudinit": true,
                "Usage": "instance",
                "CreationTime": "2017-07-17T06:23:18Z",
                "Tags": {
                    "Tag": []
                },
                "ImageVersion": "",
                "Status": "Available",
                "ImageName": "debian_8_08_32_40G_alibase_20170711.vhd",
                "IsSupportIoOptimized": true,
                "IsSelfShared": "",
                "IsCopied": false,
                "IsSubscribed": false,
                "Platform": "Debian",
                "Size": 40
            },
            {
                "ImageId": "debian_8_08_64_40G_alibase_20170711.vhd",
                "Description": "",
                "ProductCode": "",
                "OSType": "linux",
                "Architecture": "x86_64",
                "OSName": "Debian  8.8 64位",
                "DiskDeviceMappings": {
                    "DiskDeviceMapping": []
                },
                "ImageOwnerAlias": "system",
                "Progress": "100%",
                "IsSupportCloudinit": true,
                "Usage": "instance",
                "CreationTime": "2017-07-17T06:22:50Z",
                "Tags": {
                    "Tag": []
                },
                "ImageVersion": "",
                "Status": "Available",
                "ImageName": "debian_8_08_64_40G_alibase_20170711.vhd",
                "IsSupportIoOptimized": true,
                "IsSelfShared": "",
                "IsCopied": false,
                "IsSubscribed": false,
                "Platform": "Debian",
                "Size": 40
            },
            {
                "ImageId": "ubuntu_16_0402_64_40G_alibase_20170711.vhd",
                "Description": "",
                "ProductCode": "",
                "OSType": "linux",
                "Architecture": "x86_64",
                "OSName": "Ubuntu  16.04 64位",
                "DiskDeviceMappings": {
                    "DiskDeviceMapping": []
                },
                "ImageOwnerAlias": "system",
                "Progress": "100%",
                "IsSupportCloudinit": true,
                "Usage": "instance",
                "CreationTime": "2017-07-17T06:22:00Z",
                "Tags": {
                    "Tag": []
                },
                "ImageVersion": "",
                "Status": "Available",
                "ImageName": "ubuntu_16_0402_64_40G_alibase_20170711.vhd",
                "IsSupportIoOptimized": true,
                "IsSelfShared": "",
                "IsCopied": false,
                "IsSubscribed": false,
                "Platform": "Ubuntu",
                "Size": 40
            },
            {
                "ImageId": "ubuntu_16_0402_32_40G_alibase_20170711.vhd",
                "Description": "",
                "ProductCode": "",
                "OSType": "linux",
                "Architecture": "i386",
                "OSName": "Ubuntu  16.04 32位",
                "DiskDeviceMappings": {
                    "DiskDeviceMapping": []
                },
                "ImageOwnerAlias": "system",
                "Progress": "100%",
                "IsSupportCloudinit": true,
                "Usage": "instance",
                "CreationTime": "2017-07-17T06:21:33Z",
                "Tags": {
                    "Tag": []
                },
                "ImageVersion": "",
                "Status": "Available",
                "ImageName": "ubuntu_16_0402_32_40G_alibase_20170711.vhd",
                "IsSupportIoOptimized": true,
                "IsSelfShared": "",
                "IsCopied": false,
                "IsSubscribed": false,
                "Platform": "Ubuntu",
                "Size": 40
            },
            {
                "ImageId": "win2008r2_64_ent_sp1_en-us_40G_alibase_20170622.vhd",
                "Description": "",
                "ProductCode": "",
                "OSType": "windows",
                "Architecture": "x86_64",
                "OSName": "Windows Server  2008 R2 企业版 64位英文版",
                "DiskDeviceMappings": {
                    "DiskDeviceMapping": []
                },
                "ImageOwnerAlias": "system",
                "Progress": "100%",
                "IsSupportCloudinit": true,
                "Usage": "instance",
                "CreationTime": "2017-07-06T10:11:57Z",
                "Tags": {
                    "Tag": []
                },
                "ImageVersion": "",
                "Status": "Available",
                "ImageName": "win2008r2_64_ent_sp1_en-us_40G_alibase_20170622.vhd",
                "IsSupportIoOptimized": true,
                "IsSelfShared": "",
                "IsCopied": false,
                "IsSubscribed": false,
                "Platform": "Windows Server 2008",
                "Size": 40
            }
        ]
    }
}*/
