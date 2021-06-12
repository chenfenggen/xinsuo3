// pages/home/uploadbanner/uploadbanner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    firstdate: '',
    seconddate: '',
    firstlist: ['', '', '', '', ''],
    secondlist: ['', '', '', '', ''] //没有值不要将路径设置为某些无效的替代之，设置为空即可，否则会出错
  },

  /**
   * 生命周期函数--监听页面加载
   */
  selectimg: function(e) {
    var _this = this
    var field
    var date
    switch (e.target.id) {
      case '1':
      case '6':
        field = 'first'
        break
      case '2':
      case '7':
        field = 'second'
        break
      case '3':
      case '8':
        field = 'third'
        break
      case '4':
      case '9':
        field = 'forth'
        break
      case '5':
      case '10':
        field = 'fifth'
        break

    }
    console.log(e)
    wx.chooseImage({
      count: 1,
      sizeType: ['origion'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        if (res.tempFiles[0].size > 33554432) {
          wx.showToast({
            title: '请选择小于4m的图片'
          })
          return
        }
        if (e.target.id * 1 <= 5) {
          var first = _this.data.firstlist
          first[e.target.id * 1 - 1] = res.tempFilePaths[0]
          _this.setData({
            firstlist: first
          })
        } else {
          var second = _this.data.secondlist
          second[e.target.id * 1 - 6] = res.tempFilePaths[0]
          _this.setData({
            secondlist: second
          })

        }

        if (e.target.id * 1 <= 5) {
          date = _this.data.firstdate
        } else {
          date = _this.data.seconddate
        }
        wx.uploadFile({
          url: 'https://www.chenfenggen.cn/heart2018/setbannerimg.php',
          filePath: res.tempFilePaths[0],
          name: 'name',
          formData: {
            id: e.target.id,
            field: field,
            date: date
          },
          success: function(res) {
            console.log(e.target.id + field + date + res.data)
          }
        })
        
      },
    })

  },
  onLoad: function(options) {
    var _this = this
    this.setData({
      width: wx.getSystemInfoSync().windowWidth
    })
    var nowdate = new Date()
    var onedayms = 24 * 60 * 60 * 1000
    var firstdate = new Date(nowdate.getTime() + onedayms)
    var seconddate = new Date(nowdate.getTime() + onedayms * 2)
    this.setData({
      firstdate: firstdate.getFullYear() + '-' + (firstdate.getMonth() + 1) + '-' + firstdate.getDate(),
      seconddate: seconddate.getFullYear() + '-' + (seconddate.getMonth() + 1) + '-' + seconddate.getDate()
    })

    wx.request({
      url: 'https://www.chenfenggen.cn/heart2018/getbannerimg.php',
      method:'post',
      header:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        date: '2018-12-29'
      },
      success: function(res) {
        var first=res.data.firstlist
        var second=res.data.secondlist
        for(var i=0;i<first.length;i++){
          first[i] = 'https://www.chenfenggen.cn/heart2018/' + first[i]
        }
        for (var i = 0; i < second.length; i++) {
          second[i] = 'https://www.chenfenggen.cn/heart2018/' + second[i]
        }
        _this.setData({
          firstlist: first,
          secondlist: second
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