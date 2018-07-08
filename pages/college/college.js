// pages/college/college.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrowpic: "../../images/enter_arrow_default.png",
    banner:[
      {
        "url":"http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg"
      },
      {
        "url":"http://www.yake.net.cn/uploadfile/NewsAutoSave/20113/2011314101071.jpg"
      },
    ],
    //课程预告
    advance:[
      {
        "signleid":'1111',
        "url":"http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg",
        "title":"护士服务礼仪以及接诊流程",
        "learn":2723,
        "fee":"￥1,599.00",
        "remark":"10月18日 19:30 1天后"
      },
      {
        "url": "http://www.yake.net.cn/uploadfile/NewsAutoSave/20113/2011314101071.jpg",
        "title": "护士服务礼仪以及接诊流程",
        "learn": 2723,
        "fee": "￥1,599.00",
        "remark": "10月18日 19:30 1天后"
      },
      {
        "url": "http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg",
        "title": "护士服务礼仪以及接诊流程",
        "learn": 2723,
        "fee": "￥1,599.00",
        "remark": "10月18日 19:30 1天后"
      }
    ],
    //系列课
    series: [
      {
        "url": "http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg",
        "title": "护士服务礼仪以及接诊流程",
        "learn": 2723,
        "fee": "￥1,599.00",
        "remark": "10y月18日 19:30 1天后"
      },
      {
        "url": "http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg",
        "title": "护士服务礼仪以及接诊流程",
        "learn": 2723,
        "fee": "￥1,599.00",
        "remark": "10y月18日 19:30 1天后"
      },
      {
        "url": "http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg",
        "title": "护士服务礼仪以及接诊流程",
        "learn": 2723,
        "fee": "￥1,599.00",
        "remark": "10y月18日 19:30 1天后"
      }
    ],
    //单课程
    signle: [
      {
        "url": "http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg",
        "title": "护士服务礼仪以及接诊流程",
        "learn": 2723,
        "fee": "￥1,599.00",
        "remark": "10y月18日 19:30 1天后"
      },
      {
        "url": "http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg",
        "title": "护士服务礼仪以及接诊流程",
        "learn": 2723,
        "fee": "￥1,599.00",
        "remark": "10y月18日 19:30 1天后"
      },
      {
        "url": "http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg",
        "title": "护士服务礼仪以及接诊流程",
        "learn": 2723,
        "fee": "￥1,599.00",
        "remark": "10y月18日 19:30 1天后"
      }
    ],
  },
  tapdetail:function(e){
    console.log(e);
    var type = e.currentTarget.dataset.type;
    switch(type)
    {
      case '课程预告':
      {
        console.log(type);
        wx.navigateTo({
          url: './signle',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
        break;
      }
      case '单课程':
      {
        console.log(type);
        wx.navigateTo({
          url: './signle?test=111111',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
        break;
      }
      case '系列课':
      {
        console.log(type);
        wx.navigateTo({
          url: './series',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
        break;
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
})