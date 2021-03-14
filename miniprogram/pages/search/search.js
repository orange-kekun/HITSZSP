Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '',
    inputShowed: false,
    search_list1: [],
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
    //连接数据库
    const db = wx.cloud.database()
    var that = this
    db.collection('cantee1','canteen2','canteen3').where({
      //使用正则查询，实现对搜索的模糊查询
      name: db.RegExp({
        regexp: e.detail.value,
        //从搜索栏中获取的value作为规则进行匹配。
        options: 'i',
        //大小写不区分
      }),
      
    }).limit(10).get({
      success: res => {
        console.log(res)
        that.setData({
          search_list1: res.data
        })
      }
    })
  }
  })
