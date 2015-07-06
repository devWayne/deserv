Deserv
============
> mock server

## Install

```shell

$ sudo npm i -g deserv

```

## Quick Usage

#### step 1

config `mock.json` in your develop folder   

```json
{
  "getInfo":{
    "code":"200",
    "msg":{
      "name":"vi",
      "age":"23"
    }
  },
  "error":{
    "code":"500",
    "msg":"this is a error msg"
  }
}
```

#### step 2

run Deserv

```shell
$ cd yourfolder && deserv

```

#### step 3

send Ajax request with mock url in your js

```javascript
$.ajax({
	url:'/mock/json/getInfo',
	type: 'GET',
	data:{},
}).done(function(res){
	//your code here
	/*  
	  res.code == 200
	  res.msg == {
            "name":"vi",
            "age":"23"
        }
	*/
});

```





