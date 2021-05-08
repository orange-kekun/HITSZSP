// pages/details/details.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
      items:{},
      meal_id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db=wx.cloud.database()
    const _=db.command
    var meal_id = options.meal_id;
    this.setData({
      meal_id:meal_id
    })
    console.log("接受的数据",options)
    wx.cloud.database().collection("canteen2")
    .doc(options.dangkou_id)
    .get()
    .then(res=>{
      console.log("sucess",res)
      this.setData({
        items:res.data
      })
    })
    .catch(res=>{
      console.log("failed",res)
    })
 
    

 


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