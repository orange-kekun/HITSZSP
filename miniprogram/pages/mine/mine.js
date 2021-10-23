//获取应用实例
const app = getApp();
 
Page({
  /**
   * 页面的初始数据
   */

  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    canIUseGetUserProfile: false,      menuitems: [
        { text: '我的收藏', url: '../mycollect/mycollect', icon: '../../images/mineicon/mycollect.png', tips: '' },
        { text: '我的评论', url: '../mycomment/mycomment', icon: '../../images/mineicon/mycomment.png', tips: '' },
        { text: '关于我们', url: '../aboutme/aboutme', icon: '../../images/mineicon/aboutwe.png', tips: '' }
        
      ]
    },
 
  /**
   * 生命周期函数--监听页面加载
   */ 
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setUserInfo(app.globalData.userInfo);
    }
    if(wx.getStorageSync('user')!=''){
      this.setData({
        hasUserInfo: false
      })
      this.setUserInfo(wx.getStorageSync('user'))
    }
    if(wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
      //兼容低版本用getUseInfo,推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
  getUserProfile(e) {
 
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.setStorage({
          key:"user",
          data:this.data.userInfo
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    this.setUserInfo(e.detail.userInfo);
  },
  setUserInfo: function (userInfo) {
    if (userInfo != null) {
      app.globalData.userInfo = userInfo
      console.log(userInfo)
      wx.setStorageSync('user', userInfo)//缓存用户信息，用于检验用户是否授权登录
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true
      })
      
    }
  }
})