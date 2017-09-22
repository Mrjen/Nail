// pages/goods/goods.js
var util = require('../../utils/util.js');
var app = getApp();
Page({
    data: {
        listbar: [], //左导航
        rightList: [] //右边内容
    },

    onLoad: function(options) {

    },

    onReady: function() {

    },

    // 点击跳转详情页
    toDetail(ev){
        let gid = ev.currentTarget.dataset.gid;
        wx.navigateTo({
          url: `../Detile/Detile?gid=${gid}`
        })
    },

    // 点击切换标签
    changeNav(ev) {
        let that = this;
        let index = ev.currentTarget.dataset.index;
        let listbar = that.data.listbar;
        let id = ev.currentTarget.dataset.id;
        for (var i = 0; i < listbar.length; i++) {
            listbar[i].active = false;
        }
        listbar[index].active = true;
        let apiData = {
          str:"type=0&cate_id="+id,
          apiWords:"goods-list"
        }
        util.ajax(apiData,function(res){
          console.log(res)
          let rightList = res.data.data.goodsList;
          that.setData({
            listbar,
            rightList
          })
        })
        
    },

    onShow: function() {
        let that = this;
        let apiData1 = {
            str: "type=0",
            apiWords: "get-categorys"
        }
        // 获取左导航
        util.ajax(apiData1, function(res) {
            let listbar = res.data.data.categorys;
            for (var i = 0; i < listbar.length; i++) {
                listbar[i].active = false;
            }
            listbar[0].active = true;
            that.setData({
                listbar
            })
        });
        
        // 获取默认商品
        let apiData2 = {
           str:"type=0",
           apiWords:"goods-list"
        }
        util.ajax(apiData2,function(res){
          let rightList = res.data.data.goodsList;
          that.setData({
             rightList
          })
        })
    },

    onHide: function() {

    },

    onUnload: function() {

    },

    onPullDownRefresh: function() {

    },

    onReachBottom: function() {

    },

    onShareAppMessage: function() {

    }
})