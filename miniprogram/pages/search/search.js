Page({

  /**
   * 作者 870371444
   * 页面的初始数据
   */
  data: {
    inputVal: '',
    inputShowed: true,
    search_list1:[],
    search_list2:[],
    search_list3:[],
    items:[],
    temp2:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
    temp4:['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
  },
  onShow(){
   this.setData({
    search_list1: [],
    search_list2: [],
    search_list3: []
   })
   this.inputTyping()
  },
  showInput: function () {
    this.setData({
      search_list1: [],
      search_list2: [],
      search_list3: []
     })
    this.inputTyping()
     this.setData({
       inputShowed: false
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
  changeSearch(event) {
    let that = this;
    var inputSearch = event.detail.value;
    that.setData({
      inputVal: inputSearch
    })
  },
  inputTyping1:function(e){
    this.setData({
      inputVal: "",
      inputShowed: false,
      search_list1:[],
      search_list2:[],
      search_list3:[]

    });

  },
  inputTyping: function (e) {
    const db = wx.cloud.database()
    db.collection('canteen1')
    .get()
    .then(res=>{
       console.log("sucess",res)
     this.setData({
      items:res.data
      })
      console.log("输入数据",this.data.inputVal)
      
  if(this.data.inputVal.length >0 ){
    var h=0
      for (var i = 0; i < this.data.items.length; i++){
       console.log('i',i)
        for(var j = 0; j < this.data.items[i].dangkou.meal.length; j++){
             if(this.data.items[i].dangkou.meal[j].meal_name.indexOf(this.data.inputVal)>=0){//把匹配的菜品信息放入新数组
              var temp='search_list1'+'['+h+']'+'.meal'
              var temp1='search_list1'+'['+h+']'+'.meal_id'
              var temp3='search_list1'+'['+h+']'+'.dangkou_id'
               this.setData({
                 [temp]:this.data.items[i].dangkou.meal[j],
                 [temp1]:this.data.temp2[j],
                 [temp3]:'10'+this.data.temp4[i]
               })
               h=h+1
               console.log('找到了',this.data.search_list1,'h',h)

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
     if(this.data.inputVal.length >0 ){
     var h=0
     let val = this.data.inputVal;
     console.log('输入',val)
     for (var i = 0; i < this.data.items.length; i++){
      console.log('i',i)
       for(var j = 0; j < this.data.items[i].dangkou.meal.length; j++){
            if(this.data.items[i].dangkou.meal[j].meal_name.indexOf(val)>=0){//把匹配的菜品信息放入新数组
             var temp='search_list2'+'['+h+']'+'.meal'
             var temp1='search_list2'+'['+h+']'+'.meal_id'
             var temp3='search_list2'+'['+h+']'+'.dangkou_id'
              this.setData({
                [temp]:this.data.items[i].dangkou.meal[j],
                [temp1]:this.data.temp2[j],
                [temp3]:'20'+this.data.temp4[i]
              })
              h=h+1
              console.log('找到了',this.data.search_list2,'h2',h)
            }
          }
     }
    }
    }).catch(res=>{
      console.log("failed",res)
   })
   //3
   db.collection('canteen3')
    .get()
    .then(res=>{
       console.log("sucess",res)
     this.setData({
      items:res.data
      })
      if(this.data.inputVal.length >0 ){
      var k=0
      let val = this.data.inputVal;
      for (var i = 0; i < this.data.items.length; i++){
       console.log('i',i)
        for(var j = 0; j < this.data.items[i].dangkou.meal.length; j++){
             if(this.data.items[i].dangkou.meal[j].meal_name.indexOf(val)>=0){//把匹配的菜品信息放入新数组
              var temp='search_list3'+'['+k+']'+'.meal'
              var temp1='search_list3'+'['+k+']'+'.meal_id'
              var temp3='search_list3'+'['+k+']'+'.dangkou_id'
               this.setData({
                 [temp]:this.data.items[i].dangkou.meal[j],
                 [temp1]:this.data.temp2[j],
                 [temp3]:'30'+this.data.temp4[i]
               })
               k=k+1
               console.log('找到了',this.data.search_list3,'k',k)
             }
        }
      }
      if(this.data.inputVal.length===0){
        wx.showToast({
          title: '不能搜索空气哦',
          icon: 'error',
          duration: 2000
        })
      }
      if (this.data.inputVal.length>0&&this.data.search_list1.length === 0&&this.data.search_list2.length === 0&&this.data.search_list3.length === 0) {
        wx.showToast({
          title: '没找到呢qaq',
          icon: 'error',
          duration: 2000
        })

      }      else{
        wx.showToast({
          title: '找到啦！',
          icon: 'success',
          duration: 2000
        })
    }
  }
     }).catch(res=>{
       console.log("failed",res)
    })
  

      }
      })