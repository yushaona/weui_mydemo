// pages/college/signle.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerUrl:'http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg',
    title:'纪东方拉数据法拉盛接待来访结束啦看风景拉世纪东方来得快',
    anchorname:"李晓红",
    anchorpic:"http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg",
    portraitpic:"../../images/college/portrait.png",
    comment: "李钊 主治医师 硕士 毕业于广西医科大学口腔医学院研究生院，ITI（国际植牙学会会员），雅仕莱口腔创始人，从事种植+修复多年，立志于做一个细心的种植医师\n多次参与骨再生大会，BITC比赛。",
    flagimage:{
      "point_1":{
        "image": '../../images/college/point_1.png',
        "info":"未开播",
      },
      
      "point_2": {
        "image": '../../images/college/point_2.png',
        "info":"直播中"
      },
      "point_3":{
        "image":"../../images/college/point_3.png",
        "info":"已结束"
      } 
    },
    learnnum:2723,
    follow:{
      "like":{
        "image":"../../images/college/follow.png",
        "info":"未关注",
      },
      "not_like":{
        "image":"../../images/college/followed.png",
        "info":"已关注",
      }
    },
    morecollege:[
      {
        "signleid": '1111',
        "url": "http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg",
        "title": "护士服务礼仪以及接诊流程诊流程诊流程诊流程312312312",
        "learn": 2723,
        "fee": "￥1,599.00",
        "remark": "10月18日 19:30 1天后"
      },
      {
        "url": "http://www.yake.net.cn/uploadfile/NewsAutoSave/20113/2011314101071.jpg",
        "title": "护士服务礼仪以及接诊流程诊流程诊流程诊流程131231312",
        "learn": 2723,
        "fee": "￥1,599.00",
        "remark": "10月18日 19:30 1天后"
      },
      {
        "url": "http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg",
        "title": "护士服务礼仪以及接诊流程诊流程诊流程诊流程112123",
        "learn": 2723,
        "fee": "￥1,599.00",
        "remark": "10月18日 19:30 1天后"
      }
      ,
      {
        "url": "http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg",
        "title": "护士服务礼仪以及接诊流程诊流程诊流程诊流程112123",
        "learn": 2723,
        "fee": "￥1,599.00",
        "remark": "10月18日 19:30 1天后"
      }
      ,
      {
        "url": "http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg",
        "title": "护士服务礼仪以及接诊流程诊流程诊流程诊流程112123",
        "learn": 2723,
        "fee": "￥1,599.00",
        "remark": "10月18日 19:30 1天后"
      }
      ,
      {
        "url": "http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg",
        "title": "护士服务礼仪以及接诊流程诊流程诊流程诊流程112123",
        "learn": 2723,
        "fee": "￥1,599.00",
        "remark": "10月18日 19:30 1天后"
      }
      ,
      {
        "url": "http://pic2.ooopic.com/10/51/52/46b1OOOPIC63.jpg",
        "title": "护士服务礼仪以及接诊流程诊流程诊流程诊流程112123",
        "learn": 2723,
        "fee": "￥1,599.00",
        "remark": "10月18日 19:30 1天后"
      }
    ],
    titleWidth:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      "titleWidth": app.globalData.windowWidth - 106 - 20,
    });
    
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