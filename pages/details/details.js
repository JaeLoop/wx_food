// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: "https://img.xiaopiu.com/userImages/img419216857093218.png",
    list: [{
        id: 1,
        name: "鸡蛋",
        weight: "100g",
        p: "张三",
        n: 123,
        url: "https://img.xiaopiu.com/userImages/img488416859c56030.jpg"
      },
      {
        id: 1,
        name: "牛肉",
        weight: "40g",
        p: "李四",
        n: 123,
        url: "https://img.xiaopiu.com/userImages/img488616859c58740.jpg"
      },
      {
        id: 1,
        name: "生抽",
        weight: "5g",
        p: "王五",
        n: 123,
        url: "https://img.xiaopiu.com/userImages/img488716859c5a298.jpg"
      },
      {
        id: 1,
        name: "盐",
        weight: "3g",
        p: "赵六",
        n: 123,
        url: "https://img.xiaopiu.com/userImages/img488716859c5a298.jpg"
      }
    ],
    obj: {
      id: 1,
      url: "",
      name: "",
      author: "",
      praise: 1,
      price: "0.0",
      number: 1
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // let item = JSON.parse(options.item);
    // this.setData({
    //   obj: item
    // });
    this.data.url = options.item;
    console.log(options.item)
    this.setData({
      url: options.item
    })
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

  goPay: function() {
    wx.navigateTo({
      url: '../pay/pay',
    })
  },

  gocart: function() {
    wx.switchTab({
      url: '../cart/cart',
    })
  }
})