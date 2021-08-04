// pages/home/home.js
let app = getApp();
let http = require('../../utils/http.js')
Page({


  /**
   * 页面的初始数据
   */
  data: {
    list: {
      move: {},
      tv: {},
      zy: {}
    }

  },
   toSearch(){//进入搜索页面
    wx.navigateTo({
      url:"/pages/search/search"
    })

  },
  toMore(e){//进入更多页面
    let title = e.currentTarget.dataset.title;

      wx.navigateTo({
        url:"/pages/more/more?title="+title+""
      })
  },
  toDetails(e) {
    // 进入详情页面
    let name = e.currentTarget.dataset.name
    let id = e.currentTarget.dataset.id;
    wx.setStorage({
      key: "key",
      data: name
    })
    wx.navigateTo({
      url: "/pages/details/details?id="+id+"",
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let global = app.globalData;
    let url = global.url;
    let move = global.move;
    let tv = global.tv;
    let zy = global.zy;
    http.requestMove(url + move + "?sta rt=0&count=10", 'move', '电影', this.getHttp)
    http.requestMove(url + tv + "?sta rt=0&count=10", 'tv', '电视剧', this.getHttp)
    http.requestMove(url + zy + "?sta rt=0&count=10", 'zy', '综艺', this.getHttp)
    // http.request(url +tv+"?sta rt=0&count=10",this.getHtpp)
  },
  getHttp(res, key, title) {
    this.data.list[key] = {
      title: title,
      move: res
    }
    console.log(this.data.list)
    this.setData({
      list: this.data.list
    })

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})