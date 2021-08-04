// pages/list/list.js
let app = getApp();
let http = require('../../utils/http.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nb: "",
    nameList: "",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let global = app.globalData;
    let url = global.url;
    let move = global.movesubject;
    let tv = global.tvsubject;
    let id = options.id;
    let list = global.list;
    let key = wx.getStorageSync('key') 
    console.log(key)
    if(key=="movie"){
      http.request(url + move + id + list, this.getDatalist)
    }else{
      http.request(url + tv + id + list, this.getDatalist)
    }   
 
  },
  getDatalist(res) {
    console.log(res);
    let That = this;
    That.setData({
      nameList: res.interests,
      number: res.total,
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