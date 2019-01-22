// pages/mine-myVegetables/mine-myVegetables.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'tab1',
    current_scroll: 'tab1',
    details: [{
      img: 'https://img.xiaopiu.com/userImages/img429816857677ad0.jpg',
      name: '营养增肌',
      type: '早餐-减脂餐',
      statue: '所有人可见',
      pushTime: '2019.01.01',
      pices: '15'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // tab切换
  handleChange({
    detail
  }) {
    this.setData({
      current: detail.key
    });
    console.log(detail)
  },
})