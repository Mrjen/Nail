//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [],//轮播图
    opationBar:[{   //功能导航
      text:"预约",
      icon:"../img/home_icon_order.png"
    },{
      text:"拼团",
      icon:"../img/home_icon_fight_group.png"
    },{
      text:"领券",
      icon:"../img/home_icon_coupon.png"
    },{
      text:"付款",
      icon:"../img/home_icon_pay.png"
    }],
    hotlist:[], //火热拼团
    managerList:[] //店长推荐
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getSign();
  },

// 更多店长推荐
  toGoods(){
    wx.switchTab({
      url: '../goods/goods'
    })
  },

  onShow(){
    let that = this;
    let sign = wx.getStorageSync("sign");
    wx.request({
       url:`${app.data.apiUrl}homepage`,
       data:{
         sign:sign,
         operator:app.data.kid
       },
       success(res){
         console.log(res);
         let imgUrls = res.data.data.advertisements;
         let hotlist = res.data.data.group_goods;
         let managerList = res.data.data.recommend_goods;
         that.setData({
            imgUrls:imgUrls,
            hotlist:hotlist,
            managerList:managerList
         })
       }
    })
  },
  onShareAppMessage(){

  }
})
