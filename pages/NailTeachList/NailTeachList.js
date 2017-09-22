// pages/NailTeachList/NailTeachList.js
Page({
  data: {
    teachList:[{
      img:"http://iph.href.lu/120x120",
      name:"娟娟",
      orderNum:"3",
      checked:false,
      tid:1
    },{
      img:"http://iph.href.lu/120x120",
      name:"娟娟",
      orderNum:"3",
      checked:false,
      tid:1
    },{
      img:"http://iph.href.lu/120x120",
      name:"娟娟",
      orderNum:"3",
      checked:false,
      tid:1
    },{
      img:"http://iph.href.lu/120x120",
      name:"娟娟",
      orderNum:"3",
      checked:false,
      tid:1
    },{
      img:"http://iph.href.lu/120x120",
      name:"娟娟",
      orderNum:"3",
      checked:false,
      tid:1
    }]
  },

  onLoad: function (options) {
  
  },

  selectTeach(ev){
    let that = this;
    let _index = ev.currentTarget.dataset.index;
    let teachList = that.data.teachList;
    for(let i=0;i<teachList.length;i++){
       teachList[i].checked = false;
    }
        teachList[_index].checked = !teachList[_index].checked;
    that.setData({
      teachList:teachList
    })
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