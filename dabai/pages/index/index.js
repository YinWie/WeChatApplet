// pages/canpin/canpin.js
Page({
  n1: function(){
   wx.navigateTo({
     url: '/pages/n1/n1',
   })
  },
  n2: function(){
    wx.navigateTo({
      url: '/pages/n2/n2',
    })
   },
   n3: function(){
    wx.navigateTo({
      url: '/pages/n3/n3',
    })
   },
   n4: function(){
    wx.navigateTo({
      url: '/pages/n4/n4',
    })
   },
   n5: function(){
    wx.navigateTo({
      url: '/pages/n5/n5',
    })
   },
   n6: function(){
    wx.navigateTo({
      url: '/pages/n6/n6',
    })
   },

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this; 
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "/image/a11.jpg"
        },
        {
          "id": 2,
          "imgurl": "/image/a12.jpg"
        },
        {
          "id": 3,
          "imgurl": "/image/a13.jpg"
        }
      ]
    }; 
    that.setData({
      lunboData: data.datas
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