//获取应用实例
const app = getApp();
 
Page({
  /**
   * 页面的初始数据
   */

  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
      userInfo: {},
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      menuitems: [
        { text: '我的收藏', url: '../mycollect/mycollect', icon: '../../images/mineicon/mycollect.png', tips: '' },
        { text: '我的评论', url: '../mycomment/mycomment', icon: '../../images/mineicon/mycomment.png', tips: '' },
        { text: '关于我们', url: '../aboutme/aboutme', icon: '../../images/mineicon/aboutwe.png', tips: '' }
        
      ]
    },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (app.globalData.userInfo) {
      that.setUserInfo(app.globalData.userInfo);
    } else if (that.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setUserInfo(res.userInfo);
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          that.setUserInfo(res.userInfo);
        }
      })
    }
  },
 
  getUserInfo: function (e) {
    this.setUserInfo(e.detail.userInfo);
  },
 
  setUserInfo: function (userInfo) {
    if (userInfo != null) {
      app.globalData.userInfo = userInfo
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true
      })
    }
  }
})