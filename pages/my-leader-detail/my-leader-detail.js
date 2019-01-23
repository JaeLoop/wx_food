// pages/lead-detail/lead-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    srcs: 'https://img.xiaopiu.com/userImages/img4245168572ffbc8.png',
    phone: '13800000001',
    years: '5',
    graduationSchool: '健身大学',
    privateRoom: 'vivid',
    number: '20090118',
    name: 'Lui_LiWang',
    statueLeader: '已验证教练',
    studentNumber: '5',
    qualificationCertificate: [{
      img: 'https://img.xiaopiu.com/userImages/img42831685755f670.jpg'
    }, {
      img: 'https://img.xiaopiu.com/userImages/img4284168575609f8.jpg'
    }],
    privateImg: [{
      img: 'https://img.xiaopiu.com/userImages/img425016857354740.jpg'
    }, {
      img: 'https://img.xiaopiu.com/userImages/img425216857363970.jpg'
    }, {
      img: 'https://img.xiaopiu.com/userImages/img425416857393710.jpg'
    }]
  },
  collection() {
    wx.showToast({
      title: '成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
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

  }
})