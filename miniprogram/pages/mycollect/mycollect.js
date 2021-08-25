// pages/mycollect/mycollect.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dangkou1_id:[],
    dangkou2_id:[],
    dangkou3_id:[],
    temp2:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],
    temp4:['01','02','03','04','05','06','07','08','09','10','11','12','13'],
    meal1_id:[],
    meal2_id:[],
    meal3_id:[],
    meal1:[],
    meal2:[],
    meal3:[],
    items:[],
    openid:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //获取用户的openid
    const db=wx.cloud.database()
    const _=db.command
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => { 
        console.log('云函数获取到的openid: ', res.result.openid)
        this.setData({
          openid: res.result.openid
        })

//循环无法实现只能把代码复制粘贴3次了
// 1  
          db.collection('canteen1')
         .get()
         .then(res=>{
            console.log("sucess",res)
          this.setData({
           items:res.data
           })
           console.log("items数据",this.data.items)
           var h=0
           for (var i = 0; i < this.data.items.length; i++){
            console.log('i',i)
             for(var j = 0; j < this.data.items[i].dangkou.meal.length; j++){
               console.log('j',j)
               for(var k = 0; k < this.data.items[i].dangkou.meal[j].shoucang_people.length; k++){
                 console.log('k',k)
                  if(this.data.items[i].dangkou.meal[j].shoucang_people[k] == this.data.openid){//把已收藏的菜品信息放入新数组
                   var temp='meal1'+'['+h+']'
                   var temp1='meal1_id'+'['+h+']'
                   var temp3='dangkou1_id'+'['+h+']'
                   console.log('将放入',temp)
                    this.setData({
                      [temp]:this.data.items[i].dangkou.meal[j],
                      [temp1]:this.data.temp2[j],
                      [temp3]:'10'+this.data.temp4[i]
                    })
                    h=h+1
                  }
                }
             }
           }
          }).catch(res=>{
            console.log("failed",res)
         })
        //  2
        db.collection('canteen2')
        .get()
        .then(res=>{
           console.log("sucess",res)
         this.setData({
          items:res.data
          })
          console.log("items数据",this.data.items)
          var h=0
          for (var i = 0; i < this.data.items.length; i++){
           console.log('i',i)
            for(var j = 0; j < this.data.items[i].dangkou.meal.length; j++){
              console.log('j',j)
              for(var k = 0; k < this.data.items[i].dangkou.meal[j].shoucang_people.length; k++){
                console.log('k',k)   
                 if(this.data.items[i].dangkou.meal[j].shoucang_people[k] == this.data.openid){//把已收藏的菜品信息放入新数组
                  var temp='meal2'+'['+h+']'
                  var temp1='meal2_id'+'['+h+']'
                  var temp3='dangkou2_id'+'['+h+']'
                  console.log('将放入',temp)
                   this.setData({
                     [temp]:this.data.items[i].dangkou.meal[j],
                     [temp1]:this.data.temp2[j],
                     [temp3]:'20'+this.data.temp4[i]
                   })
                   h=h+1
                 }
              }
            }
          }
         }).catch(res=>{
           console.log("failed",res)
        })
        // 3 
        db.collection('canteen3')
         .get()
         .then(res=>{
            console.log("sucess",res)
          this.setData({
           items:res.data
           })
           console.log("items数据",this.data.items)
           var h=0
           for (var i = 0; i < this.data.items.length; i++){
            console.log('i',i)
             for(var j = 0; j < this.data.items[i].dangkou.meal.length; j++){
               console.log('j',j)
               for(var k = 0; k < this.data.items[i].dangkou.meal[j].shoucang_people.length; k++){
                 console.log('k',k)        
                  if(this.data.items[i].dangkou.meal[j].shoucang_people[k] == this.data.openid){//把已收藏的菜品信息放入新数组
                   var temp='meal3'+'['+h+']'
                   var temp1='meal3_id'+'['+h+']'
                   var temp3='dangkou3_id'+'['+h+']'
                   console.log('将放入',temp)
                    this.setData({
                      [temp]:this.data.items[i].dangkou.meal[j],
                      [temp1]:this.data.temp2[j],
                      [temp3]:'30'+this.data.temp4[i]
                    })
                    h=h+1
                  }
                }
             }
           }
          }).catch(res=>{
            console.log("failed",res)
         })
      }
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