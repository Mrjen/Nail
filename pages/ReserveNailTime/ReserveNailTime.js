// pages/ReserveNailTime/ReserveNailTime.js 
Page({
  data: {
    dateList: [{
      text: "今天",
      date: "09/22",
      active: true
    }, {
      text: "今天",
      date: "09/22",
      active: false
    }, {
      text: "今天",
      date: "09/22",
      active: false
    }, {
      text: "今天",
      date: "09/22",
      active: false
    }, {
      text: "今天",
      date: "09/22",
      active: false
    }],
    timeList: [{
      time: "10:00",
      isOrder: 0,
      order_id: 0,
      active:false
    }, {
      time: "12:00",
      isOrder: 1,
      order_id: 0,
      active:false
    }, {
      time: "14:00",
      isOrder: 1,
      order_id: 0,
      active:false
    }, {
      time: "16:00",
      isOrder: 0,
      order_id: 0,
      active:false
    }, {
      time: "18:00",
      isOrder: 0,
      order_id: 0,
      active:false
    }, {
      time: "20:00",
      isOrder: 1,
      order_id: 0,
      active:false
    }, {
      time: "22:00",
      isOrder: 1,
      order_id: 0,
      active:true
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