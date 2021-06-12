// pages/index/orders/orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
    statu: '',
    orders: [{
      orderitem: [{
        productid: '34',
        image: '/image/webimg.png',
        title: '订单单项产品标题占位',
        num: 10,
        price: 5
      }, {
        productid: '34',
        image: '/image/webimg.png',
          title: '订单单项产品标题占位',
        num: 10,
        price: 5
      }],
      totalprice: 444,
      supplierid: '33',
      suppliername: '齐天大圣'
    }],
    width: 0
  },
  action: function(e) {
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      width: wx.getSystemInfoSync().windowWidth
    })
    var statuname
    switch (options.id) {
      case '1':
        statuname = '待付款'
        break
      case '2':
        statuname = '待发货'
        break;
      case '3':
        statuname = '待收货'
        break
      case '4':
        statuname = '待评价'
        break
      case '5':
        statuname = '已完成'
        break
    }
    wx.setNavigationBarTitle({
      title: statuname
    })
    this.setData({
      statu: statuname
    })
    wx.getStorage({
      key: 'openid',
      success: function(res) {
        this.setData({
          openid: res.data
        })
      },
      fail: function() {
        //从自己服务器获取openid的相关操作
        wx.showToast({
          title: '您还没有注册，请先注册',
          duration: 3000,
          success: function(e) {
            wx.navigateTo({
              url: '/pages/partner/partner',
            })
          }
        })
      },
    })
    wx.request({
      url: 'https://www.chenfenggen.cn/heart2018/orders.php',
      method: 'post',
      data: {
        exchangetime: '',
        needtime: '',
        productid: '',
        xinghao: '',
        clientopenid: this.data.openid,
        provideropenid: '',
        productnum: '',
        statu: statuname,
        totalprice: '',
        msg: ''
      },
      success: function(res) {

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