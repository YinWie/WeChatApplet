let app = getApp();
let http = require('../../utils/http.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allMore: [],
    totalCount: "",
    requestCount: "",
    urlHttp: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let title = options.title;
    let global = app.globalData;
    let url = global.url;
    let move = global.move;
    let tv = global.tv;
    let zy = global.zy;
    let urlHttp = '';
    console.log(title)
    switch (title) {
      case "电影":
        urlHttp = url + move
        break;
      case "电视剧":
        urlHttp = url + tv
        break;
      case "综艺":
        urlHttp = url + zy
        break;
    }
    this.setData({
      urlHttp: urlHttp,
      totalCount: 0,
    requestCount: 0
    })
    http.request(urlHttp, this.getMore);
  },


  getMore(res) {
    let tplMore = [];
    if (this.data.totalCount > 0) {
      tplMore = this.data.allMore.concat(res.subject_collection_items);
    } else {
      tplMore = res.subject_collection_items;
    }
      this.data.totalCount += 20;
      this.requestCount+=20;
      this.setData({
        allMore: tplMore
      })
    console.log(res.subject_collection_items)
  },
  lodeMore() {
    let url = this.data.urlHttp + "?start=" + this.data.totalCount + "&count=" + this.data.requestCount + "";
    http.request(url, this.getMore);
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