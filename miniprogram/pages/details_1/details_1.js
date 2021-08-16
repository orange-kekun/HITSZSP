// pages/details/details.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
      items:'',
      meal_id:'',
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db=wx.cloud.database()
    const _=db.command
    var meal_id = options.meal_id;
  //接受页面传递数据
    this.setData({
      meal_id:meal_id
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


//     var postId = option.id;//要先在对应的数据文本中对每个栏目定义postId、比如postId: 0 postId:1
//     this.data.currentPostId = postId; //借助顶部data作为中转，拿到上面这行postid后，将它放到下面var postCollected = postsCollected[]中        //将这个postId从onLoad中传递到下面的onCollectionTap中
//          var postData = postsData.postList[postId];//定义每个新闻列表对应顺序是哪个新闻内容
//  //用户收藏功能
//     var postsCollected = wx.getStorageSync('posts_collected') //从缓存中读取所有的缓存状态
//      if (postsCollected) {   //postsCollected为真的情况，在缓存中存在
//          var postCollected = postsCollected[postId]//读取其中一个缓存状态
//          this.setData({
//              collected: postCollected //将是否被收藏的状态上绑定到collected这个变量上
//          })
//      }
//      else {       //为假的情况，缓存中为空的情况
//          var postsCollected = { }; //对postsCollected进行一个赋值操作，从而防止为空，从而省掉后面对它是否为空进行测试的步骤
//          postsCollected[postId] = false; // 让当前的状态为false，从而收藏星星不点亮
//          wx.setStorageSync('posts_collected', postsCollected);//将postsCollected对象放到缓存中
//      }
//  },
//  onCollectionTap: function (event) {　　　　// 定义onCollectionTap事件用来确定是否收藏，如果没收藏就能点亮星星进行收藏
//      var postsCollected = wx.getStorageSync('posts_collected');   //获取缓存的方法
//      var postCollected = postsCollected[this.data.currentPostId];   //确定当前是否有缓存的状态，传递参数方法、借助其他参数来传递变量，如上的data
//      postCollected = !postCollected;// 取反操作，收藏变成未收藏、未收藏变为收藏
//      postsCollected[this.data.currentPostId] = postCollected;//整体缓存的某一菜的缓存值等于postCollected从而更新一个变量
//      wx.setStorageSync('posts_collected', postsCollected);//更新是否收藏的缓存值,相当于在数据库中做了一次更新。
//      //更新Data的数据绑定变量,从而实现图片切换
//      this.setData({
//          collected: postCollected //当前的collected为postCollected
//      })
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