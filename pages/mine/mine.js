// pages/user/user.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    menuitems: [
      { text: '我发布的', url: '#', icon: '/assets/images/上传.svg', tips: '', arrows: '/assets/images/箭头.svg' },
      { text: '我的收藏', url: '#', icon: '/assets/images/加星收藏.svg', tips: '', arrows: '/assets/images/箭头.svg' },
      { text: '我的留言', url: '#', icon: '/assets/images/对话信息.svg', tips: '', arrows: '/assets/images/箭头.svg' },
      { text: '收到回复', url: '#', icon: '/assets/images/灯泡提示.svg', tips: '', arrows: '/assets/images/箭头.svg' }
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    hasUserInfo: false,
    hasCertification: false
  },

//事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

    
  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //点击跳转到学生认证界面
  jumpToCertification:function(){
    wx.navigateTo({
      url: '/pages/certification/certification',
    })
  }
})