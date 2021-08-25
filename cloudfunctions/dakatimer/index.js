// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'hitsz-recipe-formal-1cosd953108c'
})
const db = cloud.database();
const temp5=[0,1,2,3,4,5,6,7,8,9,10,11,12,13]
const temp=['1','2','3'];
const temp4=['01','02','03','04','05','06','07','08','09','10','11','12','13']
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
        var temp3='meal'+'['+temp5[j]+']'
         cloud.database().collection(temp1).
        doc(temp2).update({
         data:{
         ['dangkou.'+temp3+'.daka']:false,
         ['dangkou.'+temp3+'.daka_num']:0,
         ['dangkou.'+temp3+'.daka_people']:[]
         }
       })
      }
    }
    }
}
