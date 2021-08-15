// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'hitsz-recipe-formal-1cosd953108c'
})

// 云函数入口函数
exports.main = async (event, context) => {
  return await cloud.database().collection(event.canteen).
  doc(event.dangkou).update({
    data:{
    ['dangkou.meal.'+event.meal_id+'.pj']:event.pj
    }
  })
}