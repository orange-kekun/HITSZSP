Page({
  data: {
    cateItems: [
    //  一个大对象对应一个档口
      {
        cate_id: 1,
        cate_name: "外公家米线",
        ishaveChild: true,
        // 一个child小对象对应档口的菜品数组
        children:
          [
            {
              child_id: 1,
              name: 'ssd',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 2,
              name: 'fff',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 3,
              name: 'ghf',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 4,
              name: 'gergr',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 3,
              name: 'tuyfuk',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 4,
              name: 'tuyfuk',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 5,
              name: 'tuyfuk',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 6,
              name: 'tuyfuk',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 7,
              name: 'tuyfuk',
              image: "../../images/1.jpg",
              price:0
            },
            

          ]
      },
      {
        cate_id: 2,
        cate_name: "酸菜鱼",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: 'eryt',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 2,
              name: '3dwag',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 3,
              name: 'hrtht',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 4,
              name: 'ydtjy',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 5,
              name: 'yjtdyt',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 6,
              name: 'aerf',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 7,
              name: 'gerg',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 8,
              name: 'jytj',
              image: "../../images/1.jpg",
              price:0
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "煮打哥冒菜",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: 'jtytyj',
              image: "../../images/1.jpg",
              price:0
            },
            {
              child_id: 2,
              name: 'tyjfyj',
              image: "../../images/1.jpg",
              price:0
            },
            
            {
              child_id: 4,
              name: 'seyu5trd',
              image: "../../images/1.jpg",
              price:0
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "粤式烧腊",
        ishaveChild: false,
        children: []
      },
      {
        cate_id:5,
        cate_name:"洪兴黄焖鸡",
        ishaveChild:true,
        children:[
          {
            child_id: 1,
              name: 'jtytyj',
              image: "../../images/1.jpg",
              price:0
          }
        ]
      },
      {
        cate_id: 6,
        cate_name: "蒸功夫",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 7,
        cate_name: "开饭了",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 8,
        cate_name: "东北水饺",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 9,
        cate_name: "西域烤肉",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 10,
        cate_name: "兰州牛肉拉面",
        ishaveChild: false,
        children: []
      },
    ],
    curNav: 1,
    curIndex: 0
  },
  onload:function()
  {
    const db=wx.cloud.database()
    const _=db.command//find and update command
    db.collection("canteen3").field({
id:true,
dangkou:true,
weidao:true,
    }).get().then(res=>{
      this.setData(
        {
        
          // 这里到时就把上面写死的数组替换成云端的
          //cateItems:res.data

        }
      )
    }).catch(err=>{console.log(err)})
  },
  //事件处理函数  
  switchRightTab: function (e) {
    console.log(e);
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
    index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})

