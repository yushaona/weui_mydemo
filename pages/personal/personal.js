// pages/personal/personal.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picture:"../../images/personal/avatar.png",
    name:"娜娜小哥",
    duty:"主治医生",
    qrcode:"../../images/personal/qrcode_default.png",
    arrowpic:"../../images/enter_arrow_default.png",
    totalfee:"138.200.00",
    otherfee:"5.200.00",
    lastHeight:"",
    bodyHeight:0,
    datalist:[
      // 每一块
      [
        {
          "icon": "../../images/personal/my_liveshow.png",
          "keyname": "我的直播",
        },
        {
          "icon": "../../images/personal/my_fans.png",
          "keyname": "我的粉丝",
        },
        {
          "icon": "../../images/personal/forbid_list.png",
          "keyname": "禁言列表",
        },
      ],
      // 每一块
      [
        {
          "icon": "../../images/personal/my_clinic.png",
          "keyname": "我的诊所",
        },
        {
          "icon": "../../images/personal/my_observe.png",
          "keyname": "我的关注",
        },
        {
          "icon": "../../images/personal/buy_list.png",
          "keyname": "购买记录",
        },
        {
          "icon": "../../images/personal/learn_record.png",
          "keyname": "学习记录",
        },
      ],
      // 每一块
      [
        {
          "icon": "../../images/personal/about.png",
          "keyname": "关于牙医管家",
        },
        {
          "icon": "../../images/personal/advice.png",
          "keyname": "意见反馈",
        },
        {
          "icon": "../../images/personal/settings.png",
          "keyname": "设置",
        },
      ]
    ],
    datalist1: [
        // 每一块
        {
          "icon": "../../images/personal/my_liveshow.png",
          "keyname": "开始",
        },
        {
          "icon": "../../images/personal/my_liveshow.png",
          "keyname": "我的直播",
        },
        {
          "icon": "../../images/personal/my_fans.png",
          "keyname": "我的粉丝",
        },
        {
          "icon": "../../images/personal/forbid_list.png",
          "keyname": "禁言列表",
        },
        // 每一块
        {
          "icon": "../../images/personal/my_clinic.png",
          "keyname": "我的诊所",
        },
        {
          "icon": "../../images/personal/my_observe.png",
          "keyname": "我的关注",
        },
        {
          "icon": "../../images/personal/buy_list.png",
          "keyname": "购买记录",
        },
        {
          "icon": "../../images/personal/learn_record.png",
          "keyname": "学习记录",
        },
        // 每一块
        {
          "icon": "../../images/personal/about.png",
          "keyname": "关于牙医管家",
        },
        {
          "icon": "../../images/personal/advice.png",
          "keyname": "意见反馈",
        },
        {
          "icon": "../../images/personal/settings.png",
          "keyname": "设置",
        },
        {
          "icon": "../../images/personal/learn_record.png",
          "keyname": "学习记录",
        },
        // 每一块
        {
          "icon": "../../images/personal/about.png",
          "keyname": "关于牙医管家",
        },
        {
          "icon": "../../images/personal/advice.png",
          "keyname": "意见反馈",
        },
        {
          "icon": "../../images/personal/settings.png",
          "keyname": "设置",
        },
        {
          "icon": "../../images/personal/learn_record.png",
          "keyname": "学习记录",
        },
        // 每一块
        {
          "icon": "../../images/personal/about.png",
          "keyname": "关于牙医管家",
        },
        {
          "icon": "../../images/personal/advice.png",
          "keyname": "意见反馈",
        },
        {
          "icon": "../../images/personal/settings.png",
          "keyname": "设置",
        },
        {
          "icon": "../../images/personal/settings.png",
          "keyname": "结束",
        },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      "bodyHeight": app.globalData.windowHeight - 146
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(app.globalData.windowHeight);
    console.log(app.globalData.windowWidth);
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