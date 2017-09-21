// pages/SubmitOrder/SubmitOrder.js
Page({
  data: {
     product:{
       img:"http://iph.href.lu/120x120",
       title:"湖南大道116号南湖时尚城K4b靓丽彩妆美甲美睫128元",
       productNum:1,
       price:128
     },
     userphone:18275668568
  },

  onLoad: function (options) {
  
  },

  onReady: function () {
  
  },

  // 获取用户手机号
  getPhoneNumber(e){
    console.log(e.detail.errMsg) 
    console.log(e.detail.iv) 
    console.log(e.detail.encryptedData) 
  },

  onShow: function () {
  
  },

  onHide: function () {
  
  },

  onUnload: function () {
  
  },

  onPullDownRefresh: function () {
  
  },

  onReachBottom: function () {
  
  },

  onShareAppMessage: function () {
  
  }
})