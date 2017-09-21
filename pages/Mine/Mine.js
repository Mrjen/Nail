// pages/Mine/Mine.js
Page({
  data: {
     avatarUrl:"http://iph.href.lu/150x150",
     nickName:"小额么",
     featureList:[{
       icon:"../img/mine_icon_payment.png",
       text:"待付款",
       url:"../myOrder/myOrder",
       id:1
     },{
      icon:"../img/mine_icon_payment.png",
      text:"已完成",
      url:"../myOrder/myOrder",
      id:1
    }],
    fightGroup:[{
      icon:"../img/mine_icon_payment.png",
      text:"待付款",
      url:"../fightGroup/fightGroup",
      id:1
    },{
     icon:"../img/mine_icon_grouping.png",
     text:"拼团中",
     url:"../fightGroup/fightGroup",
     id:1
    },{
      icon:"../img/mine_icon_group_success.png",
      text:"拼团成功",
      url:"../fightGroup/fightGroup",
      id:1
    }],
    navList:[{
      text:"我的优惠券",
      tip:"2",
      text_tip:"张",
      url:""
    },{
      text:"我的会员卡",
      tip:"",
      text_tip:"去开卡",
      url:""
    },{
      text:"我的预约",
      tip:"2",
      text_tip:"条",
      url:""
    },{
      text:"我的收藏",
      tip:"2",
      text_tip:"",
      url:""
    },{
      text:"付款商家",
      tip:"2",
      text_tip:"",
      url:""
    },{
      text:"关于店铺",
      tip:"2",
      text_tip:"品牌",
      url:""
    }]
  },

  onLoad: function (options) {
  
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