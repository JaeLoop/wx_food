// pages/lead-list/lead-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.location=options.location;
    console.log(this.data.location);
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
    console.log();
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
  //我的教练详情
  goLeadDetail() {
    if(this.data.location =="1"){
      wx.navigateTo({
        url: '../lead-detail/lead-detail',
      })
    }else{
      wx.navigateTo({
        url: '../my-leader-detail/my-leader-detail',
      })
    }
    
  }
})