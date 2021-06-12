// pages/home/productitem/productitem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sellerclass: '求婚道具',
    width: 0,
    id: '',
    items: [{
      id: 0,
      image: '/image/msg.png',
      desc: '测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题',
      price: 29,
      address: '四川|成都'
    }, {
      id: 1,
      image: '/image/msg.png',
      desc: '测试标题',
      price: 29,
      address: '四川|成都'
    }, {
      id: 2,
      image: '/image/msg.png',
      desc: '测试标题',
      price: 29,
      address: '四川|成都'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getmore: function() {
    wx.request({
      url: 'https://www.chenfenggen.cn/heart2018/productlist.php',
      data: {}
    })
  },
  productdetail: function(e) {
    console.log(e)
    if (this.data.id == '10') {
      wx.navigateTo({
        url: '/pages/index/productedit/productedit?'+'productid='+ e.currentTarget.id
      })
    } else {
      wx.navigateTo({
        url: '../product/product?productid=' + e.currentTarget.id,
      })
    }
  },
  onLoad: function(options) {

    this.setData({
      width: wx.getSystemInfoSync().windowWidth,
      id:options.id
    })
    switch (options.id) {
      case '1':
        wx.setNavigationBarTitle({
          title: '一条龙服务',
        })
        break
      case '2':
        wx.setNavigationBarTitle({
          title: '求婚道具',
        })
        break
      case '3':
        wx.setNavigationBarTitle({
          title: '创意婚礼',
        })
        break
      case '4':
        wx.setNavigationBarTitle({
          title: '酒席预定',
        })
        break
      case '5':
        wx.setNavigationBarTitle({
          title: '婚纱租购',
        })
        break
      case '6':
        wx.setNavigationBarTitle({
          title: '摄影师',
        })
        break
      case '7':
        wx.setNavigationBarTitle({
          title: '拍婚纱照',
        })
        break
      case '8':
        wx.setNavigationBarTitle({
          title: '旅游婚庆',
        })
        break
      case '10':
        wx.setNavigationBarTitle({
          title: '我的产品',
        })
        break
    }
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