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
    arrowpic:"../../images/down_arrow_default.png",
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
      "clinicname":"太和诊所",
      "clinicid":"1",
      "dentalid":"8888",
      "issel":0,
    },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "48888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
        "issel": 0,
      },
      {
        "clinicname": "太和诊所",
        "clinicid": "1",
        "dentalid": "8888",
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
  // onPullDownRefresh:function(){
  //   console.log("下拉刷新");
  //   this.setData({
  //     motto: "下拉刷新"
  //   });
  //   wx.stopPullDownRefresh();
  // },
  //切换TAB触发
  onTabItemTap:function(item){
    console.log(item);
    wx.setNavigationBarTitle(
      {
        title: item.text
      }
    );
  },
  
  cliniclisttap:function(){
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
