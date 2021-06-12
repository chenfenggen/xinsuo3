// pages/buycar/buycar.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    productlist: [{
        productid: 1,
        ownernickname: '大甜甜',
        price: 15,
        num: 2,
        title: '标题测试',
        xinghao: 'xxl',
        firstimgpath: 'https://www.chenfenggen.cn/heart2018/image/heart.jpg'
      }, {
        productid: 2,
        ownernickname: '大甜甜',
        price: 15,
        num: 2,
        title: '标题测试',
        xinghao: 'xxl',
        firstimgpath: 'https://www.chenfenggen.cn/heart2018/image/heart.jpg'
      },
      {
        productid: 3,
        ownernickname: '大甜甜',
        price: 15,
        num: 2,
        title: '标题测试',
        xinghao: 'xxl',
        firstimgpath: 'https://www.chenfenggen.cn/heart2018/image/heart.jpg'
      }
    ],
    buycarlist: [],
    totalprice: 0,
    totalnum: 0,
    width: 0,
    payordel: true,
    edit: '管理',
    ifall: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  change: function(e) {
    var item = this.data.productlist
    if (e.target.dataset.action == 'add') {
      for (var i = 0; i < item.length; i++) {
        if (item[i].productid == e.target.id * 1) {
          item[i].num += 1
          break
        }
      }
    } else {
      for (var i = 0; i < item.length; i++) {
        if (item[i].productid == e.target.id * 1) {
          if(item[i].num>1){
            item[i].num -= 1
            break
          }
         
        }
      }
    }
    this.setData({
      productlist:item
    })
    this.totalprice(item)
  },
  edit: function(e) {
    var edit = ''
    var payordel = false
    if (this.data.edit == '管理') {
      edit = '完成'
      payordel = false
    } else {
      edit = '管理'
      payordel = true
    }
    this.setData({
      payordel: payordel,
      edit: edit
    })
  },
  item: function(e) {
    console.log(e.detail.value)
    console.log(e.target.dataset.id)
    var item1 = this.data.productlist[e.target.dataset.id]
    if (e.detail.value !== []) {
      console.log(item1)
      for (var i = 0; i < item1.length; i++) {
        item1[i].checked = true
      }
    } else {
      item1 = this.data.productlist[e.target.dataset.id]
      console.log(item1)

      for (var i = 0; i < item1.length; i++) {
        item1[i].checked = false
      }
    }
    var list = this.data.productlist
    list[e.target.dataset.id] = item
    this.setData({
      productlist: list
    })
  },
  subitem: function(e) {
    var sum = 0
    var item = this.data.productlist
    for (var i = 0; i < item.length; i++) {
      if (item[i].productid == e.target.id * 1) {
        if (item[i].checked) {

          item[i].checked = false

        } else {
          item[i].checked = true
        }
      }
    }
    this.totalprice(item)
    this.payordel(item)
  },
  totalprice: function(item) {
    var sum = 0
    for (var i = 0; i < item.length; i++) {
      if (item[i].checked) {
        sum += item[i].num * item[i].price
      }

    }
    this.setData({
      totalprice: sum
    })
  },
  allselect: function(e) {
    var item = this.data.productlist
    if (e.detail.value.length == 1) {

      for (var i = 0; i < item.length; i++) {
        item[i].checked = true
      }
    } else {
      for (var i = 0; i < item.length; i++) {
        item[i].checked = false
      }
    }
    this.setData({
      productlist: item
    })
    this.totalprice(item)
    this.payordel(item)
  },
  payordel: function(item) {
    var sum=0
    for(var i=0;i<item.length;i++){
      if(item[i].checked){
        sum+=1
      }
    }
    this.setData({
      totalnum: sum
    })
  },
  onLoad: function(options) {
    //先加载手机存储的购物车内产品id，做成字符串，再统一发送产品id给服务器，最后以json形式返回到手机渲染页面。
    var item = this.data.productlist
    this.setData({
      width: wx.getSystemInfoSync().windowWidth
    })
    wx.getStorage({
      key: 'buycar',
      success: function(res) {
        this.setData({
          buycarlist: res.data
        })
        wx.request({
          url: 'https://www.chenfenggen.cn/heart2018/getbuycarlist.php',
          method: 'post',
          data: {
            buycarlist: res.data
          }
        })
      },
    })
    for (var i = 0; i < item.length; i++) {
      item[i].checked = false
      item[i].num = item[i].num * 1
    }
    this.totalprice(item)
    this.payordel(item)
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