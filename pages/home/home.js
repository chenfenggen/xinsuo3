// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['https://www.chenfenggen.cn/image/black.png', 'https://www.chenfenggen.cn/image/red.png', 'https://www.chenfenggen.cn/image/green.png', 'https://www.chenfenggen.cn/image/blue.png'],
    indicatorDots: true,
    autoplay: true,
    width: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  uploadbanner: function() {
    wx.navigateTo({
      url: 'uploadbanner/uploadbanner'
    })
  },
  buy: function(e) {
    wx.navigateTo({
      url: 'productitem/productitem?id=' +e.target.id
    })
  },
  blacklist: function() {
    wx.navigateTo({
      url: 'blackname/blackname',
    })
  },
  onLoad: function(options) {
    var _this = this
    this.setData({
      width: wx.getSystemInfoSync().windowWidth //图片宽度 
    })

    wx.request({
      url: 'https://www.chenfenggen.cn/heart2018/getbannerimg.php',
      success: function(res) {
        for(var i=0;i<res.data.bannerlist.length;i++){
          if(res.data.bannerlist[i]==null){
            res.data.bannerlist.splice(i)
          }
        }
        //console.log(res.data.bannerlist) 注意小程序的console要在变量定义之前对res的数据进行打印或者修改，否则引用变量定义之后会出现在变量修改之前打印的数据是已经被修改后的数据。
        var swiperimg = res.data.bannerlist
       
        for (var i = 0; i < swiperimg.length; i++) {
          swiperimg[i] = 'https://www.chenfenggen.cn/heart2018/' + swiperimg[i]
        }
        _this.setData({
          imgUrls: swiperimg
        })
      },
      fail: function() {

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