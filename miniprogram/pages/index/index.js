
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    items1:[],
    items2:[],
    items3:[],
    temp4:['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
    xing:[
          ],
    renqi:[
            ],
    tuijian:'',
    tuijian_id:'',
    tuijian_mealid:''   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const db=wx.cloud.database()
    const _=db.command
    // 获取一食堂数据
    db.collection('canteen1')
    .get()
    .then(res=>{
       console.log("sucess",res)
     this.setData({
      items1:res.data
      })
      var renqi5='renqi'+'[4]'+'.meal'
      var renqi4='renqi'+'[3]'+'.meal'
      var renqi55='renqi'+'[4]'+'.dangkou'
      var renqi44='renqi'+'[3]'+'.dangkou'
      this.setData({
        [renqi5]:this.data.items1[0].dangkou.meal[0],
        [renqi4]:this.data.items1[1].dangkou.meal[0],
        [renqi55]:this.data.items1[0]._id,
        [renqi44]:this.data.items1[1]._id
       })
    }).catch(res=>{
      console.log("failed",res)
   })
   
    db.collection("canteen2").get().then(res=>{console.log(res.data)
      this.setData({
        // 获取的二食堂值赋给items2
        items2:res.data
      })
      var xing1='xing'+'[0]'+'.meal'
      var xing2='xing'+'[1]'+'.meal'
      var xing5='xing'+'[4]'+'.meal'
       var xing6='xing'+'[5]'+'.meal'
       var xing11='xing'+'[0]'+'.dangkou'
       var xing22='xing'+'[1]'+'.dangkou'
       var xing55='xing'+'[4]'+'.dangkou'
       var xing66='xing'+'[5]'+'.dangkou'
       var renqi2='renqi'+'[1]'+'.meal'
       var renqi22='renqi'+'[1]'+'.dangkou'
       this.setData({
        [xing1]:this.data.items2[7].dangkou.meal[0],
        [xing2]:this.data.items2[1].dangkou.meal[0],
        [xing5]:this.data.items2[5].dangkou.meal[0],
        [xing6]:this.data.items2[4].dangkou.meal[0],
        [renqi2]:this.data.items2[2].dangkou.meal[0],
        [xing11]:this.data.items2[7]._id,
        [xing22]:this.data.items2[1]._id,
        [xing55]:this.data.items2[5]._id,
        [xing66]:this.data.items2[4]._id,
        [renqi22]:this.data.items2[2]._id
       })
      }).catch(err=>{console.log(err)})
    db.collection("canteen3").get().then(res=>{console.log(res.data)
        this.setData({
          // 获取的三食堂值赋给items3
          items3:res.data
        })
        var xing3='xing'+'[2]'+'.meal'
        var xing4='xing'+'[3]'+'.meal'
        var renqi3='renqi'+'[2]'+'.meal'
        var renqi33='renqi'+'[2]'+'.dangkou'
        var renqi1='renqi'+'[0]'+'.meal'
        var renqi11='renqi'+'[0]'+'.dangkou'
        var renqi6='renqi'+'[5]'+'.meal'
        var renqi66='renqi'+'[5]'+'.dangkou'
         var xing33='xing'+'[2]'+'.dangkou'
         var xing44='xing'+'[3]'+'.dangkou'
       this.setData({
         [xing3]:this.data.items3[4].dangkou.meal[0],
         [xing4]:this.data.items3[1].dangkou.meal[0],
         [xing33]:this.data.items3[4]._id,
         [xing44]:this.data.items3[1]._id,
         [renqi33]:this.data.items3[3]._id,
         [renqi3]:this.data.items3[3].dangkou.meal[0],
         [renqi11]:this.data.items3[8]._id,
         [renqi1]:this.data.items3[8].dangkou.meal[0],
         [renqi66]:this.data.items3[9]._id,
         [renqi6]:this.data.items3[9].dangkou.meal[0]
        })
        console.log('赋值',this.data.xing)
        console.log('赋值',this.data.renqi)

        }).catch(err=>{console.log(err)})
    

  },
  
  tanchuang1:function(e){
    wx.showToast({
      title: "爆款就这些啦~",
      icon:'none'
    })
  },

  tanchuang:function(e){
    wx.showToast({
      title: "新品就这些啦~",
      icon:'none'
    })
  },
  shuiji:function(){
    //生成随机数
    var n=Math.floor(Math.random()*3+1);
    var canteen='canteen'+n;
    var id=n+'0'+this.data.temp4[Math.floor(Math.random()*7+1)]
    console.log(n,id,canteen)
    const db=wx.cloud.database()
    const _=db.command
    // 获取数据
    db.collection(canteen)
    .doc(id)
    .get()
    .then(res=>{
       console.log("sucess",res)
     var m=Math.floor(Math.random()*res.data.dangkou.meal.length)
     console.log(m)
     this.setData({
      tuijian:res.data.dangkou.meal[m],
      tuijian_id:id,
      tuijian_mealid:m
      })
      this.setData({
      showModal: true
      })
      console.log(this.data.tuijian)
    }).catch(res=>{
      console.log("failed",res)
   })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
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