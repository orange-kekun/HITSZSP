// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env:'hitsz-recipe-formal-1cosd953108c'
})
const db = cloud.database();
const temp5=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
const temp=['1','2','3'];
const temp4=['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20']
// 云函数入口函数
exports.main = async (event, context) => {
  for(var ii=0;ii<1;ii++){
    var temp1='canteen'+temp[ii]
    let items=await db.collection(temp1).get();
    for(var i=0;i<items.length;i++)
    {
      var temp2=temp[ii]+'0'+temp4[i]
      for(var j=0;j<items[i].dangkou.meal.length;j++)
      {
        var temp3='dangkou.'+'meal'+'['+temp5[j]+']'+'.daka'
        var temp33='dangkou.'+'meal'+'['+temp5[j]+']'+'.daka_num'
        var temp333='dangkou.'+'meal'+'['+temp5[j]+']'+'.daka_people'
         cloud.database().collection(temp1).
        doc(temp2).update({
         data:{
         [temp3]:false,
         [temp33]:0,
         [temp333]:[]
         }
       })
      }
    }
    }
}
