//index.js
//获取应用实例
var common = require('../../utils/common.js')
const app = getApp()

Page({
  data: {
    clinicpic:"../../images/portrait.png",
    clinicname:"深圳拜博口腔",
    dentalid:"48888",
    clinicid:"1111111",
    ispopup:0, //弹出状态
    arrowpic_def:"../../images/down_arrow_default.png",
    arrowpic: "../../images/down_arrow.png",
    addpic:"../../images/home_add_default.png",
    enterpic:"../../images/enter_arrow_default.png",
    controlpic:"../../images/package.png",
    settingpic:"../../images/home_settings_default.png",
    //背景颜色波浪
    DefaulColorStart: '#18d2ad',
    DefaultColorEnd: '#f0f0f0',  
    ReverseColorStart: '#f0f0f0',//翻转颜色
    ReverseColorEnd: '#18d2ad',//翻转颜色

    swiperArray:[
      {"keyname":"今日诊所实际业绩(元)","money":"0","reserve":"day","data":[{"money":2},{"money":4}]},
      { "keyname": "今月诊所实际业绩(元)", "money": "0", "reserve": "month" },
      { "keyname": "今年诊所实际业绩(元)", "money": "0", "reserve": "year" }
    ],

    todaywork:[
      {"keyname":"今日工作","num":10},
      { "keyname": "明日预约", "num": 12 },
      { "keyname": "历史欠款", "num": 21 },
    ],

    mainicon:[
      {
      "keyname":"患者",
      "icon":"../../images/mainicon/customer.png",
    },
      {
        "keyname": "预约",
        "icon": "../../images/mainicon/schedule.png",
      },
      {
        "keyname": "医患沟通",
        "icon": "../../images/mainicon/communication.png",
      },
      {
        "keyname": "回访",
        "icon": "../../images/mainicon/returnvisit.png",
      },
      {
        "keyname": "学习",
        "icon": "../../images/mainicon/learn.png",
      },
      {
        "keyname": "同事",
        "icon": "../../images/mainicon/colleague.png",
      },
      {
        "keyname": "商城",
        "icon": "../../images/mainicon/mall.png",
      },
      {
        "keyname": "排班",
        "icon": "../../images/mainicon/scheduling.png",
      },
      {
        "keyname": "微官网",
        "icon": "../../images/mainicon/weiwebsite.png",
      },
      {
        "keyname": "营销",
        "icon": "../../images/mainicon/marketing.png",
      },
      {
        "keyname": "签到",
        "icon": "../../images/mainicon/sign.png",
      },
      {
        "keyname": "活动",
        "icon": "../../images/mainicon/activity.png",
      },
      {
        "keyname": "运营统计",
        "icon": "../../images/mainicon/operationStat.png",
      },
      {
        "keyname": "库房",
        "icon": "../../images/mainicon/warehouse.png",
      },
      {
        "keyname": "看牙无忧",
        "icon": "../../images/mainicon/jfx.png",
      },
      {
        "keyname": "审批",
        "icon": "../../images/mainicon/check.png",
      },
    ],
    //诊所列表
    cliniclist:[{
      "clinicname":"太和诊所1",
      "clinicid":"1",
      "dentalid":"88881",
      "issel":0,
    },
      {
        "clinicname": "太和诊所2",
        "clinicid": "2",
        "dentalid": "88882",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所3",
        "clinicid": "3",
        "dentalid": "48888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所4",
        "clinicid": "4",
        "dentalid": "88883",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所5",
        "clinicid": "5",
        "dentalid": "88884",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所6",
        "clinicid": "6",
        "dentalid": "88885",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所7",
        "clinicid": "7",
        "dentalid": "88868",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所8",
        "clinicid": "8",
        "dentalid": "888668",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所9",
        "clinicid": "9",
        "dentalid": "88288",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所10",
        "clinicid": "10",
        "dentalid": "88188",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所11",
        "clinicid": "11",
        "dentalid": "88288",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所12",
        "clinicid": "12",
        "dentalid": "83888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所13",
        "clinicid": "13",
        "dentalid": "84888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所14",
        "clinicid": "14",
        "dentalid": "85888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所15",
        "clinicid": "15",
        "dentalid": "88788",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所16",
        "clinicid": "16",
        "dentalid": "87888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所17",
        "clinicid": "17",
        "dentalid": "88887",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所18",
        "clinicid": "18",
        "dentalid": "78888",
        "issel": 0,
      },
      ],
  },
 
  // onShareAppMessage:function(){
  //   console.log("页面转发");
  //   this.setData({
  //     motto: "页面转发"
  //   });
  //   return {
  //     title:"牙医管家分享",
  //     path:"../logs/logs"
  //   }
  // },
  // onPageScroll:function(e){
  //   console.log(e);
  // },
  //点击【主图标】
  tapmenu:function(e){
    console.log(e);
    var name = e.currentTarget.dataset.name;
    switch(name)
    {
      case "营销":
      {
        wx.navigateTo({
          url: '../marketing/marketing',
        })
        break;
      }
    }
  },
  //点击-【今日工作】 【明日预约】 【历史欠款】跳转不同的页面
  taptask:function(e){
    console.log(e);
    var id = e.currentTarget.dataset.id;
    switch(id)
    {
      case 0:
        {
          console.log("今日工作");
          wx.navigateTo({
            url: '../today/today',
          })
          wx.na
          break;
        }
      case 1:
        {
          console.log("明日预约");
          break;
        }
      case 2:
        {
          console.log("历史欠款");
          break;
        }
    }
  },
  onReachBottom:function(){
    wx.showToast({
      title: '上拉刷新',
      icon: 'success',
      duration: 2000
    })
  },

  onPullDownRefresh:function(){
    console.log("下拉刷新");
    if (this.data.ispopup == 1){
      this.showModal();
    }
    wx.showToast({
      title: '下拉刷新',
      icon: 'success',
      duration: 2000
    })
    wx.stopPullDownRefresh();
  },
  //切换TAB触发
  onTabItemTap:function(item){
    console.log(item);
    wx.setNavigationBarTitle(
      {
        title: item.text
      }
    );
  },
  //选择诊所
  selClinic:function(e){
    console.log(e);
    // clinicname: "深圳拜博口腔",
    //   dentalid:"48888",
    //     clinicid:"1111111",
    //选择同一个诊所
    if (this.data.clinicid != e.currentTarget.id){
      this.setData({
        "clinicid": e.currentTarget.id,
        "dentalid":e.currentTarget.dataset.dentalid,
        "clinicname": e.currentTarget.dataset.name
      })
    }

    this.showModal();
  },
  //点击弹框背景
  hideModel: function () {
    this.showModal()
  },

  showModal:function(){
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease",
      delay: 0
    })
    var isShow = 0;
    this.animation = animation
    if (this.data.ispopup == 0) {
      animation.translateY(300).step()
      isShow = 1;

    } else {
      animation.translateY(-300).step()
      isShow = 0;
    }
    this.setData({
      animationAlert: animation.export(),
      ispopup: isShow,
    })
  },



  //页面首次加载完成触发
  onReady:function(){
    var context = wx.createCanvasContext('mycanvas');
    const grd = context.createLinearGradient(0, 0, 0, app.globalData.canvasHeight);
    grd.addColorStop(0, this.data.DefaulColorStart);
    grd.addColorStop(0.7, this.data.DefaultColorEnd);
    grd.addColorStop(1, this.data.DefaulColorStart);
    context.setFillStyle(grd)
    context.fillRect(0, 0, app.globalData.screenwidth, app.globalData.sreenheight);
    context.draw();
    this.position = {
      x:0,
      y:0,
      vx:1,
      vy:1,
    }
    this.interval = setInterval(this.drawBall,17);
  },

  //设置定时器,动态绘制点
  drawBall:function(){
    var p = this.position;
    p.x += p.vx;
    p.y += p.vy;
    if (p.x >= app.globalData.screenwidth) {
      p.vx = -1;
    }
    if (p.x <= 0) {
      p.vx = 1;
    }

    if (p.y >= app.globalData.canvasHeight) {
      p.vy = -1;
    }
    if (p.y <= 0) {
      p.vy = 1;
    }

    var context = wx.createCanvasContext('ballid');
    context.beginPath(0);
    context.arc(p.x,p.y,3,0,Math.PI * 2);
    context.setFillStyle('black');//设置填充颜色
    context.setStrokeStyle("rgba(0,1,0,1)"); //设置边框颜色
    context.stroke();
    context.fill();
    context.draw();
  },

  //页面刚加载时，触发
  onLoad: function (e) {
    console.log(e);
  },
  onUnload:function(){
    clearInterval(this.interval);
  },

})
