// pages/index/fadeback/fadeback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  color: function(e) {
    if ("focus" === e.type) {
      this.setData({
        hover: 'true'
      })
    } else {
      this.setData({
        hover: 'false'
      })
    }
  },
  submit: function(e) {
    wx.getStorage({
      key: 'openid',
      success: function(res) {
        wx.request({
          url: 'https://www.chenfenggen.cn/heart2018/feedback.php',
          method: 'post',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            openid: 'agen',
            feedback: e.detail.value.feedback
          },
          success: function(res) {
            console.log(res.data)
            wx.showToast({
              title: 'mjjj'
            })
          }
        })

      },
      fail:function(){
        wx.showToast({
          title: '请先注册',
        })
        wx.switchTab({
          url: 'pages/partner/partner',
        })
      }
    })

  },
  onLoad: function(options) {
    hover: 'false'
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