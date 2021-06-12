// pages/index/productedit/productedit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productid: '',
    productinfo: {
      productname: '产品名称占位',
      title: '产品标题占位',
      firstimgpath: '/image/webimg.png',
      secondimgpath: '/image/webimg.png',
      thirdimgpath: '/image/webimg.png',
      forthimgpath: '/image/webimg.png',
      fifthimgpath: '/image/webimg.png',
      description: '',
      surplus: '',
      ifonline: true,
      xinghao: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  updateproduct: function(e) {
    console.log(e)
  },
  selectimg: function(e) {
    const path ='productinfo.'+e.target.id
    var _this=this
    wx.chooseImage({
      count:1,
      sizeType:['original'],
      sourceType:['album'],
      success: function(res) {
        _this.setData({
          [path]:res.tempFilePaths[0]
    })
      },
    })
    
  },
  onLoad: function(options) {
    this.setData({
      productid: options.productid
    })
    wx.request({
      url: 'https://www.chenfenggen.cn/heart2018/updateproduct.php',
      method: 'post',
      data: {
        productid: options.productid
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