// pages/add-addr/add-addr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    check: false,
    currentTab: 0,
    items: [{
        name: '先生',
        value: '先生'
      },
      {
        name: '女士',
        value: '女士',
        checked: 'true'
      },
    ]
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

  radioChange(e) {
    console.log('radio发生change事件:', e)
  },
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  handleClick() {
    wx.navigateBack({
      delta: 2,
    })
  },
  pitchOn(e){
    console.log(e.currentTarget.id)
    var that = this;
    console.log(e);
    console.log(this.data.currentTab);
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})