//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    opationBar:[{
      text:"预约",
      icon:"http://iph.href.lu/80x80?text=预约"
    },{
      text:"预约",
      icon:"http://iph.href.lu/80x80?text=拼团"
    },{
      text:"预约",
      icon:"http://iph.href.lu/80x80?text=领券"
    },{
      text:"预约",
      icon:"http://iph.href.lu/80x80?text=付款"
    }],
    hotlist:[{
      img:"http://iph.href.lu/250x250?text=拼团",
      title:"湖南时尚城K4b靓丽彩妆美甲美睫美容",
      pid:0,
      price:198,
      salse:92
    },{
      img:"http://iph.href.lu/250x250?text=拼团",
      title:"湖南时尚城K4b靓丽彩妆美甲美睫美容",
      pid:0,
      price:128,
      salse:23
    },{
      img:"http://iph.href.lu/250x250?text=拼团",
      title:"湖南时尚城K4b靓丽彩妆美甲美睫美容",
      pid:0,
      price:98,
      salse:2
    },{
      img:"http://iph.href.lu/250x250?text=拼团",
      title:"湖南时尚城K4b靓丽彩妆美甲美睫美容",
      pid:0,
      price:158,
      salse:8
    },{
      img:"http://iph.href.lu/250x250?text=拼团",
      title:"湖南时尚城K4b靓丽彩妆美甲美睫美容",
      pid:0,
      price:168,
      salse:6
    },{
      img:"http://iph.href.lu/250x250?text=拼团",
      title:"湖南时尚城K4b靓丽彩妆美甲美睫美容",
      pid:0,
      price:132,
      salse:5
    },{
      img:"http://iph.href.lu/250x250?text=拼团",
      title:"湖南时尚城K4b靓丽彩妆美甲美睫美容",
      pid:0,
      price:198,
      salse:3
    }],
    managerList:[{
      img:"http://iph.href.lu/250x250?text=店长推荐",
      title:"韩式进口柔软兔毛单次嫁接睫毛原价298特价158元",
      price:158,
      oldprice:298,
      salse:47,
      mid:1
    },{
      img:"http://iph.href.lu/250x250?text=店长推荐",
      title:"韩式进口柔软兔毛单次嫁接睫毛原价298特价158元",
      price:158,
      oldprice:298,
      salse:47,
      mid:1
    },{
      img:"http://iph.href.lu/250x250?text=店长推荐",
      title:"韩式进口柔软兔毛单次嫁接睫毛原价298特价158元",
      price:158,
      oldprice:298,
      salse:47,
      mid:1
    },{
      img:"http://iph.href.lu/250x250?text=店长推荐",
      title:"韩式进口柔软兔毛单次嫁接睫毛原价298特价158元",
      price:158,
      oldprice:298,
      salse:47,
      mid:1
    },{
      img:"http://iph.href.lu/250x250?text=店长推荐",
      title:"韩式进口柔软兔毛单次嫁接睫毛原价298特价158元韩式进口柔软兔毛单次嫁接睫毛原价298特价158元",
      price:158,
      oldprice:298,
      salse:47,
      mid:1
    }]
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(){
      
    })
  },

  lower(ev){
    console.log(ev)
  },

  onShow(){
    let that = this;
    let opationBarLen = that.data.hotlist.length;
    let hotScrollWidth = opationBarLen*270;
    console.log(hotScrollWidth);
    console.log(opationBarLen);
    that.setData({
      hotScrollWidth:hotScrollWidth
    })
  },
  onShareAppMessage(){

  }
})
