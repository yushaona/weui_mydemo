// pages/today/today.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    enterpic: "../../images/enter_arrow_default.png",
    datalist:[{
      "icon":"../../images/today/schedule_n_arr.png",
      "name":"预约未到",
      "num":3
    },
      {
        "icon": "../../images/today/wait_triage.png",
        "name": "待分诊",
        "num": 9
      },
      {
        "icon": "../../images/today/accept.png",
        "name": "接诊中",
        "num": 6
      },
      {
        "icon": "../../images/today/n_pay.png",
        "name": "待缴费",
        "num": 7
      },
      {
        "icon": "../../images/today/treating.png",
        "name": "治疗中",
        "num": 6
      },
      {
        "icon": "../../images/today/finished.png",
        "name": "已完成",
        "num": 10
      },
      {
        "icon": "../../images/today/n_deal.png",
        "name": "未成交",
        "num": 1
      },
      {
        "icon": "../../images/today/today_birth.png",
        "name": "今日生日",
        "num": 1
      },
    ]
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
  
  }
})