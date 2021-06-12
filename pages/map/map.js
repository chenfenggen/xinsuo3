
Page({
  data: {
    latitude:0,
    longitude: 0,
    markers: [{
      id: 0,
      iconPath: "/image/point.png",
      latitude: 0,
      longitude: 0,
      width: 50,
      height: 50

    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    const that = this
    wx.getLocation({
      type:"gcj02",
      success: function(res) {
that.setData({//再次警惕，setData 命名规则，有大写。
  latitude:res.latitude,
  longitude:res.longitude,
 markers:[{
   id: 0,
   iconPath: "/image/point.png",
   latitude: res.latitude,
   longitude: res.longitude,
   width: 40,
   height: 40
 }, {
     id: 0,
     iconPath: "/image/point.png",
     latitude: res.latitude-0.01,
     longitude: res.longitude-0.01,
     width: 40,
     height: 40
   }]
        })
         

      },
    })
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

  }
})