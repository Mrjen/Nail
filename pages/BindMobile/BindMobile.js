// pages/BindMobile/BindMobile.js
Page({
  data: {
    second:30
  },

  onLoad: function (options) {
  
  },

  // 获取手机号验证码
  getphone(){
    var that = this;
    let second = that.data.second;
    that.setData({
      selected:true
    })
    var time = setInterval(function() {
      if (second > 0) {
        second = second - 1;
        that.setData({
          second: second
        });
      } else {
        that.setData({
          selected: false,
          second: 30
        })
        clearInterval(time);
      }
    }, 1000);
  },

  onReady: function () {
  
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