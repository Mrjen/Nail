//app.js
App({
  data: {
    apiUrl: "https://meijia.playonwechat.com/api/",
    kid: 440300100
  },

  onLaunch: function () {
    //调用API从本地缓存中获取数据
  },

  getSign(cb) {
    let that = this;
    wx.login({
      success(res) {
        wx.request({
          url: `${that.data.apiUrl}auth?code=${res.code}&operator_id=${that.data.kid}`,
          success(res) {
            typeof cb == "function" && cb();
            wx.setStorageSync("sign", res.data.data.sign);
          }
        })
      }
    })
  },

  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function (res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})