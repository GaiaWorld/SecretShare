
打开终端，进入项目根目录输入

```bash
npm install
node shares.js
````

输入三个参数以一个空格分隔:

1. 密钥
2. 分割的密钥份数
3. 能恢复原始密钥的密钥门限数量

例如:

产生5份分割之后的密钥，能恢复原始密钥的最小门限数量为3

```bash
af7bdadfdfe9f1b9fcee2b7ce078fc5a8566875f6217daafe13841f3f9e36a20 5 3
```


实例输出:

```bash
[ '80165173d6f1d3f80573d4296114a0e724cd2d86b4881abbf62b05be5460864d81811',
  '802118d54b540cbadee86fd3c1af2577bd8f5d4480990e2e1bf7836dad499fe64e76f',
  '80375351200822bc44802434420c4b971687d8945c64e2b4907678c07d362635f955e',
  '80466ca9364e4f403ea6f63df40d25622cdabaceab2794330309f90e820197713d40a',
  '8050272d5d126146a4cebdda77ae4b8287d23f1e77da78a9888802a3527e2ea28a63b' ]
```

任意从中选择三份就可以恢复原始密钥

