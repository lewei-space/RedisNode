const redis = require('redis')

// 创建客户端
const redisClient=redis.createClient(6379,'127.0.0.1')
redisClient.on('error',err=>{
  console.error(err)
})

// 测试
redisClient.set('myname','lelewei001',redis.print)
redisClient.get('myname',(err,val)=>{
  if (err){
    console.log(err)
    return
  }

  console.log('val:',val)
})

//执行完成后退出，否则会一直开启服务
redisClient.quit()
