// pages/home/blackname/blackname.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: '',
    first: 0,
    second: 0,
    third: 0,
    disabled:false,
    button:'提交'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  submit: function(e) {
    var _this=this
    switch (e.detail.value.radio) {
      case '同意':
        this.setData({
          first: this.data.first * 1 + 1
        })
        break
      case '中立':
        this.setData({
          second: this.data.second * 1 + 1
        })
        break
      case '反对':
        this.setData({
          third: this.data.third * 1 + 1
        })
        break
    }
    var openid = wx.getStorageSync('openid')
    wx.request({
      url: 'https://www.chenfenggen.cn/heart2018/stata/setstata.php',
      data: {
        value: e.detail.value.radio,
        openid: openid
      },
      success: function(res) {
        wx.setStorage({
          key: 'vote',
          data: 'yes',
        })
        _this.setData({
          disabled:true,
          button:'您已投过票'
        })
      }
    })
  },
  onLoad: function(options) {
    var _this = this
    wx.getStorage({
      key: 'vote',
      success: function(res) {
        _this.setData({
          disabled: true,
          button: '您已投过票'
        })
      },
    })
    wx.request({
      url: 'https://www.chenfenggen.cn/heart2018/stata/getstata.php',
      success: function(res) {
        for (var i = 0; i < res.data.value.length; i++) {
          if (res.data.value[i] == null) {
            res.data.value[i] = 0
          }
        }
        _this.setData({
          first: res.data.value[0],
          second: res.data.value[1],
          third: res.data.value[2]
        })
      }
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

  }
})