// pages/home/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    imgUrls: ['https://www.chenfenggen.cn/image/black.png', 'https://www.chenfenggen.cn/image/red.png', 'https://www.chenfenggen.cn/image/green.png', 'https://www.chenfenggen.cn/image/blue.png', 'https://www.chenfenggen.cn/image/red.png'],
    indicatorDot: true,
    autoplay: true,
    date: '',
    startdate: '',
    enddate: '',
    title: '产品标题',
    desc: '产品详细描述',
    icon: [{
      image: '/image/door.png',
      text: '主页'
    }, {
      image: '/image/webimg.png',
      text: '客服'
    }, {
      image: '/image/collect.png',
      text: '收藏'
    }],
    height: 0,
    productid: '',
    owneropenid: '',
    ownernickname: '',
    owneropenid: '',
    ownernickname: '',
    xinghao: [{
      ifselect: 'unselect',
      text: "xl"
    }, {
      ifselect: 'unselect',
      text: "xxl"
    }, {
      ifselect: 'unselect',
      text: "xxxl"
    }],
    animation: {},
    showxinghao: false,
    showmodel:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  exchangetime: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  rightclick: function(e) {
    var _this = this
    if (e.target.id == 'addcar') {
      wx.getStorage({
        key: 'buycar',
        success: function(res) {
          var buycar = res.data

          var item = {
            productid: this.data.productid,
            num: 1,
            owneropenid: _this.data.ownernickname
          }
          buycar.push(item)
          wx.setStorage({
            key: 'buycar',
            data: buycar,
            success: function() {
              wx.showToast({
                title: '添加成功',
              })
            }
          })
        },
      })
    } else {
      wx.showToast({
        title: '程序处于测试阶段，后续会上线支付功能。',
        duration: 4000
      })
    }
  },
  xinghao: function(e) {
    var that = this
    var animate = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease',
    })
    that.animation = animate

    animate.translateY(-400).step()
    that.setData({
      animation: animate.export(),
      showmodel:true
    })

  },
  preventtouchmove: function(e) {

  },
  select: function(e) {
    for (var i = 0; i < this.data.xinghao.length; i++) {
      if (e.target.id == ('xinghao' + i)) {
        this.data.xinghao[i].ifselect = 'select'
      }else{
        this.data.xinghao[i].ifselect = 'unselect'
      }
     
      this.setData({
        xinghao:this.data.xinghao
      })
    }
  },
  onLoad: function(options) {
    var _this = this
    var date = new Date()
    this.setData({
      productid: options.productid
    })
    this.setData({
      width: wx.getSystemInfoSync().windowWidth, //图片宽度 
      startdate: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
      enddate: (date.getFullYear() * 1 + 1) + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    })
    const query = wx.createSelectorQuery()
    query.select('#right').boundingClientRect() //后续的操作全是设置选择器执行操作之后返回什么数据。
    query.exec(function(res) {
      _this.setData({
        height: res[0].height
      })
    })

    wx.request({
      url: 'https://www.chenfenggen.cn/heart2018/getproduct.php',
      method: 'post',
      data: {
        productid: _this.data.productid
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