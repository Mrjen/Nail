// pages/selectStyle/selectStyle.js
var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    opationBar:[{
      text:"百变新娘",
      icon:"http://iph.href.lu/80x80?text=预约"
    },{
      text:"时尚轻奢",
      icon:"http://iph.href.lu/80x80?text=拼团"
    },{
      text:"清新简约",
      icon:"http://iph.href.lu/80x80?text=领券"
    },{
      text:"足部美甲",
      icon:"http://iph.href.lu/80x80?text=付款"
    }],
    list:[{
      img:"http://iph.href.lu/344x344",
      typeNumber:"1123-110",
      iscollect:1,
      cid:1
    },{
      img:"http://iph.href.lu/344x344",
      typeNumber:"1123-110",
      iscollect:1,
      cid:1
    },{
      img:"http://iph.href.lu/344x344",
      typeNumber:"1123-110",
      iscollect:1,
      cid:1
    },{
      img:"http://iph.href.lu/344x344",
      typeNumber:"1123-110",
      iscollect:1,
      cid:1
    },{
      img:"http://iph.href.lu/344x344",
      typeNumber:"1123-110",
      iscollect:1,
      cid:1
    }]
  },

  onLoad: function (options) {
  
  },

  onReady: function () {
  
  },

  onShow: function () {
     let that = this;
     let apiData = {
        str:"cate_id=0",
        apiWords:"style-list"
      }
     util.ajax(apiData,function(res){
       console.log(res)
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