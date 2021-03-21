// miniprogram/pages/canteen_four/canteen_four.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[],
    curindex:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db=wx.cloud.database()
    const _=db.command
    db.collection("canteen3").get().then(res=>{console.log(res.data)
    this.setData({
      items:res.data
    })
    }).catch(err=>{console.log(err)})
  },
  tap:function(e)
  {
    let i=e.currentTarget.dataset.index;
    this.setData(
      {
        curindex:i
      }
    )
  }
  

  
})