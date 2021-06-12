// pages/index/myinfo/myinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myinfo: [], //服务器返回的数据是数据库存储的字段，id,time,title,content
    ifhavemore: true,
    clicked:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getmore: function() {
    var _this = this
    wx.request({
      url: 'https://www.chenfenggen.cn/heart2018/msg.php',
      method:'post',
      header:{
        'content-type':'x-www-form-urlencoded'
      },
      data: {
        pagenum: _this.data.myinfo.length / 10 + 1
      },
      success: function(res) {
        console.log(res.data)
        _this.setData({
          myinfo: _this.data.myinfo.concat(res.data.myinfo),
          ifhavemore: res.data.ifhavemore
        })
      }
    })
  },
  detail: function(e) {
    /*this.setData({
      clicked: true
    })*/
    for (var i = 0; i < this.data.myinfo.length; i++) {
      if (this.data.myinfo[i].id == e.currentTarget.id) {//currentTarget.id一般为动态绑定数据指定的id，而target.id为硬编码指定的id
        wx.navigateTo({
          url: 'detail/detail?title=' + this.data.myinfo[i].title + '&time=' + this.data.myinfo[i].time + '&content=' + this.data.myinfo[i].content
        })
       
        return
      }

    }
  },
  onLoad: function(options) {
    var _this = this
    wx.request({
      url: 'https://www.chenfenggen.cn/heart2018/msg.php',
      data: {
        pagenum: 1
      },
      success: function(res) {
        _this.setData({
          myinfo: res.data.myinfo,
          ifhavemore: res.data.ifhavemore
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