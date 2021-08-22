Page({

  /**
   * 作者 870371444
   * 页面的初始数据
   */
  data: {
    inputVal: '',
    inputShowed: true,
    search_list1: [],
  },
  onShow(){
   this.setData({
    search_list1: []
   })
   this.inputTyping()
  },
  showInput: function () {
    this.inputTyping()
    // this.setData({
    //   inputShowed: false
    // });
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
  changeSearch(event) {
    let that = this;
    var inputSearch = event.detail.value;
    that.setData({
      inputVal: inputSearch
    })
  },
  toAppendFiduciary(e) {
    const key = e.currentTarget.dataset.item
    return wx.navigateTo({
      url: '/pages/details/details?data='+JSON.stringify(key)
    })
  },
  inputTyping: function (e) {
    this.setData({
      search_list1: []
     })
    let val = this.data.inputVal;
    // this.setData({
    //   inputVal: "kaish"
    // });
    //连接数据库
    const db = wx.cloud.database()
    var that = this
    
    db.collection('canteen1').where({
      //使用正则查询，实现对搜索的模糊查询
      _id: db.RegExp({
        regexp: val,
        //从搜索栏中获取的value作为规则进行匹配。
        options: 'i',
        //大小写不区分
      })
    }).get().then(res => {
      if(res.data.length != 0){
        that.data.search_list1=that.data.search_list1.concat(res.data)
      }
      db.collection("canteen2").where({
        _id: db.RegExp({
          regexp: val,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get().then(res => {
        if(res.data.length != 0){
          that.data.search_list1=that.data.search_list1.concat(res.data)
        }
        db.collection("canteen3").where({
          _id: db.RegExp({
            regexp: val,
            //从搜索栏中获取的value作为规则进行匹配。
            options: 'i',
            //大小写不区分
          })
        }).get().then(res => {
          if (res.data.length != 0) {
            that.data.search_list1=that.data.search_list1.concat(res.data)
          }
          if (that.data.search_list1.length === 0) {
            wx.showToast({
              title: '暂无数据',
              icon: 'nonenone',
              duration: 2000
            })
          }else{
            that.setData({
              search_list1: that.data.search_list1
            })
          }
        })
      })
    })
  }
  })
