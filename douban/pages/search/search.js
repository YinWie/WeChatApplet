let app = getApp();
let http = require('../../utils/http.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList:[],
  },
  inputValue(e) {   
     let global = app.globalData;
    let url = global.url;
    let search = global.search;
    let val = e.detail.value;
    wx.setStorage({
      key:"list",
      data:val
    })
    let key = wx.getStorageSync('list') 
    console.log(key); 
    http.request(url+search+"?q="+val+"",this.getSearch);
  },
  getSearch(res){
    this.setData({
      searchList:res.subjects,
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