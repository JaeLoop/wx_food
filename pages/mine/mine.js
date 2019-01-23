// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:"https://img.xiaopiu.com/userImages/img421816857205bc8.jpg",
    hasmsg : 1
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

  },

  toorder:function(){
    wx.navigateTo({
      url: '../my-order/order-list',
    })
  },
  //我的教练
  tolead: function () {
    wx.navigateTo({
      url: '../my-leader/lead-list',
    })
  },

  toalt: function () {
    wx.navigateTo({
      url: '../alt-list/alt-list',
    })
  },
  //配送地址
  toaddress: function () {
    wx.navigateTo({
      url: '../addr-list/addr-list',
    })
  },
  //成为教练
  tobelead: function () {
    wx.navigateTo({
      url: '../be-lead/be-lead',
    })
  },
  //我的学员
  tostu:function(){

  },
  tomyVegetables: function () {
    wx.navigateTo({
      url: '../mine-myVegetables/mine-myVegetables',
    })
  }
})