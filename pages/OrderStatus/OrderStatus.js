// pages/OrderStatus/OrderStatus.js
Page({
  data: {
     orderInfo:{
       img:"http://iph.href.lu/100x100",
       title:"韩式进口柔软兔毛单次嫁接睫毛原价298特价158元",
       price:"158",
       orderNum:2
     }
  },

  onLoad: function (options) {
  
  },

  onReady: function () {
  
  },

  onShow: function () {
     let that = this;
     let orderInfo = that.data.orderInfo;
     let money = Number(orderInfo.price)*Number(orderInfo.orderNum);
     that.setData({
       money:money
     })
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