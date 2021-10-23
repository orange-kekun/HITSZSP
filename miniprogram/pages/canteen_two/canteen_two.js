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
    db.collection("canteen2").get().then(res=>{console.log(res.data)
    this.setData({
      // 获取的值赋给items
      items:res.data
    })
    console.log("items数据",this.data.items)
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