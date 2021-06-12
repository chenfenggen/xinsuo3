//index.js
//获取应用实例
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    ifsupplier: false
  },
  myweb: function() {
    wx.navigateTo({
      url: 'web/web',
    })
  },
  showme: function() {

  },
  fadeback: function() {
    wx.navigateTo({
      url: 'fadeback/fadeback',
    })
  },
  myinfo: function() {
    wx.navigateTo({
      url: 'myinfo/myinfo',
    })
  },
  kefu: function() {
    wx.navigateTo({
      url: 'kefu/kefu',
    })
  },
  share: function() {



  },
  getstatu: function(e) {
    wx.navigateTo({
      url: 'orders/orders?id=' + e.currentTarget.id
    })

    /*wx.getStorage({
      key: 'openid',
      success: function(res) {
        wx.navigateTo({
          url: 'orders/orders?id=' + e.currentTarget.id
        })
      },
      fail:function(){
        wx.switchTab({
          url: '/pages/partner/partner',
        })
      }
    })*/

  },
  productedit: function(e) {
    wx.navigateTo({
      url: '/pages/home/productitem/productitem?id=' + 10,
    })
    wx.getStorage({
      key: 'idclass',
      success: function(res) {
        wx.getStorage({
          key: 'openid',
          success: function(res) {
            wx.navigateTo({
              url: '/pages/home/productitem/productitem?id=' +10,
            })
          }
        })

      },
      fail: function () {
        wx.showToast({
          title: '您还没有注册',
        })
      }
    })

    wx.request({
      url: 'https://www.chenfenggen.cn/heart2018/myproduct.php',
      data:{
        openid:''
      },
      success:function(res){

      }
    })
  },
  onLoad: function() {
    wx.getStorage({
      key: 'idclass',
      success: function(res) {
        if (res.data !== 'client') {
          this.setData({
            ifsupplier: true
          })
        }
      }
      /*fail: function() {
        wx.switchTab({
          url: '/pages/partner/partner',
        })
      }*/
    })
  },
  onShareAppMessage: function(res) {
    return {
      title: '转发',
      path: '/pages/home/home',
      imageUrl: 'https://www.chenfenggen.cn/heart2018/image/heart.jpg'
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})