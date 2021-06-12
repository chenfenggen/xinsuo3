// pages/partner/partner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: ['新郎新娘', '一条龙服务供应商', '婚前风险评估师', '鲜花供应商', '假花供应商', '道具设备供应商', '酒店', '婚纱服务商', '摄影师', '婚庆主持人', '美工设计师', '旅游婚庆服务商'],
    pickdata: '',
    ifhavesign: false,
    width: 0,
    preitem: ['', '', '', '', ''],
    description: '',
    desc: '',
    path: '',
    region: '',
    ifcansign: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  changestatu: function(e) {
    this.setData({
      ifcansign: true
    })
  },
  getdata: function(e) {
    this.setData({
      pickdata: this.data.item[e.detail.value]
    })
  },
  getaddress: function(e) {
    this.setData({
      region: e.detail.value
    })
  },
  tijiao: function(e) {
    var this1 = this
    if (this1.data.pickdata == '') {
      wx.showModal({
        title: '提示',
        content: '您还没有选择您的身份，选择好才能注册',

      })
      return
    } else if (e.detail.value.name == '') {
      wx.showModal({
        title: '提示',
        content: '您还没有填写单位名称或者个人姓名'

      })
      return
    } else if (this.data.region == '') {
      wx.showModal({
        title: '提示',
        content: '您还没有选择省市区'

      })
      return
    } else if (e.detail.value.address == '') {
      wx.showModal({
        title: '提示',
        content: '您还没有填写详细地址'

      })
      return
    } else if (e.detail.value.phone == '') {
      wx.showModal({
        title: '提示',
        content: '您还没有填写手机号'

      })
      return
    } else if (e.detail.value.sign == '') {
      wx.showModal({
        title: '提示',
        content: '您还没有填写个性签名，客户会不感兴趣的'

      })
      return
    } else if (this.data.path == '') {
      wx.showModal({
        title: '提示',
        content: '您还没有选择您用于展示主页的头像图片'

      })
      return
    } else {

      wx.getUserInfo({
        withCredentials: false,
        lang: 'zh_CN',
        success: function(res) {
          console.log(res.userInfo)
          wx.uploadFile({
            url: 'https://www.chenfenggen.cn/heart2018/sign.php',
            filePath: this1.data.path,
            name: 'headimg',
            formData: {
              openid: 'ff',
              phonenum: 'ff',
              gender: 'dd',
              nickname: 'dd',
              country: 'dd',
              province: 'dd',
              city: 'dd',
              name: 'dd',
              idclass: 'dd',
              latitude: 'dd',
              longitude: 'dd',
              detailaddress: 'dd'
            },
            success: function(res) {
              wx.showToast({
                title: '注册成功',
                icon: 'success',
                success: function(res) {
                  this1.setData({
                    ifhavesign: true
                  })
                }
              })
            }
          })
        }
      })

    }
  },
  selectimg: function(e) {
    var that = this
    var preitemtemp = this.data.preitem
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        console.log(res.tempFilePaths[0])
        preitemtemp[e.target.id * 1] = res.tempFilePaths[0]
        that.setData({
          preitem: preitemtemp
        })
      },
    })
  },
  inputtext: function(e) {
    this.setData({
      description: e.detail.value
    })
  },
  desc: function(e) {
    this.setData({
      desc: e.detail.value
    })
  },
  selectheadimg: function() {
    var _this = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album'],
      success: function(res) {
        _this.setData({
          path: res.tempFilePaths[0]
        })
      },
    })
  },
  save: function(e) {
    wx.uploadFile({
      url: 'https://www.chenfenggen.cn/heart2018/product.php',
      filePath: '',
      formData: {
        productname: '',
        firstimgpath: '',
        secondimgpath: '',
        thirdimgpath: '',
        forthimgpath: '',
        fifthimgpath: '',
        description: '',
        owneropenid: '',
        sellednum: '',
        totalnum: '',
        ifonline: '',
        title: '',
        xinghao: ''
      },
      name: 'product',
      success: function(res) {
        wx.showToast({
          title: '保存成功',
        })
      },
      fail: function() {
        wx.showToast({
          title: '注册失败，请同意程序需要的权限',
        })
      }
    })
  },
  onLoad: function(options) {
    this.setData({
      width: wx.getSystemInfoSync().windowWidth
    })
    // wx.getStorageSync(key)
    if (wx.getStorageSync('openid')) {
      this.setData({
        ifhavesign: true
      })
      wx.setNavigationBarTitle({
        title: '添加商品或者服务',
      })
    } else {
      this.setData({
        ifhavesign: false
      })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
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
  map: function() {
    wx.navigateTo({
      url: '../map/map',
    })
  }
})