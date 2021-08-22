// pages/details/details.js
const db=wx.cloud.database()
const _=db.command
const mealsCollection = db.collection('canteen1')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: [], //列表数据
    iscard: [], //打过卡的id集合
    daka_people: [], //每个列表数据的打卡的用户集合
    
    openid: '',
      items:'',
      meal_id:'',
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      dangkou_id:'',
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
    var meal_id = options.meal_id
    var dangkou_id=options.dangkou_id
  //接受页面传递数据
    this.setData({
      meal_id:meal_id,
      dangkou_id:dangkou_id
    })
    console.log("接受的数据",options)
    wx.cloud.database().collection("canteen1")
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
    let that = this;
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => { // 获取用户openid
       console.log('云函数获取到的openid: ', res.result.openid)
       that.setData({
          openid: res.result.openid
       })
    
       wx.cloud.database().collection("canteen1")
       .doc(options.dangkou_id)
       .get()
       .then(res=>{
         console.log("sucess",res)
        that.setData({
           newsList:res.data.dangkou.meal
         })
         
         var iscard = that.data.iscard;
         
           for (var i = 0; i < res.data.dangkou.meal.length; i++) { //数据获取成功后，进行遍历，拿到所有已经打过卡的菜品id
           
            for (let j = 0; j < res.data.dangkou.meal[i].daka_people.length; j++) {
               if (res.data.dangkou.meal[i].daka_people[j] == that.data.openid) { 
                 iscard.push(res.data.dangkou.meal[i].meal_name) //根据该用户的数据找到已经打卡的，把菜品id放入新建数组中
               }
              }
            }
           for (let i = 0; i < res.data.dangkou.meal.length; i++) {
             res.data.dangkou.meal[i].daka = false
             for (let j = 0; j < iscard.length; j++) { //利用新建的iscard数组与list数组的id查找相同的菜品id
                if (res.data.dangkou.meal[i].name == iscard[j]) { //双重循环遍历，有相同的id则为打卡成功
                 res.data.dangkou.meal[i].daka = true
                }
             }
            }
           console.log(res.data)
           that.setData({
             iscard: this.data.iscard,
             newsList: res.data.dangkou.meal
            })
            console.log('newslist的数据',that.data.newsList)
           wx.setStorageSync('card', iscard);
      
         })
       .catch(res=>{
          console.log("failed",res)
       })
      }
    })
   },

 // 打卡函数  获取对应id
thumbsup: function (e) {
  var shareid = e.currentTarget.dataset.id;
  console.log(shareid)
  this.card(shareid);
},
 //打卡处理函数    
 card: function (mealname) {
 
  var that = this;
  var cookie_id = wx.getStorageSync('card') || [];
  console.log(cookie_id) //获取全部打卡的id
  var openid = that.data.openid
  console.log(openid)
  for (var i = 0; i < that.data.newsList.length; i++) {
    if (that.data.newsList[i].meal_name == mealname) { //数据列表中找到对应的id
      var num = that.data.newsList[i].daka_num; //当前打卡数
      if (cookie_id.includes(mealname) ) { //已经打过卡了，取消打卡
        for (var j in cookie_id) {
          if (cookie_id[j] == mealname) {
            cookie_id.splice(j, 1); //删除取消打卡的id
          }
        }
        --num; //打卡数减1
        that.setData({
          [`items.dangkou.meal[${i}.].daka_num`]: num,
          [`newsList[${i}].daka_num`]: num, //es6模板语法，常规写法报错
          [`newsList[${i}.].daka`]: false ,//我的数据中daka为'false'是未打卡
          [`items.dangkou.meal[${i}.].daka`]:false
        })
        wx.setStorageSync('card', cookie_id);
        wx.showToast({
          title: "取消打卡",
          icon:'none'
        })
        this.data.newsList[i].daka_people.pop(openid)
      } else { //打卡操作
        ++num; //打卡数加1
        that.setData({
          [`newsList[${i}].daka_num`]: num,
          [`items.dangkou.meal[${i}.].daka_num`]: num,
          [`newsList[${i}.].daka`]: true,
          [`items.dangkou.meal[${i}.].daka`]:true
        })
        
        cookie_id.unshift(mealname); //新增被打卡的菜名
        wx.setStorageSync('card', cookie_id);
        wx.showToast({
          title: "第"+that.data.items.dangkou.meal[i].daka_num+'人打卡',
          icon:'success'
        })
        this.data.newsList[i].daka_people.push(openid)
        console.log(this.data.newsList[i].daka_people)
      }
      //和后台交互，后台数据要同步
      var dangkou__id=that.data.dangkou_id
      var meal__id=that.data.meal_id
      var dangkou__id=that.data.dangkou_id
      var meal__id=that.data.meal_id
      console.log(this.data.newsList)
      wx.cloud.callFunction(
        {
          name:'daka',
          data:
          {
          canteen:'canteen1',
          dangkou:dangkou__id,
          meal_id:meal__id,
          daka_people:this.data.newsList[i].daka_people,
          daka:this.data.newsList[i].daka,
          daka_num:num
          }
        }
      )
  
        
    }
  }
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