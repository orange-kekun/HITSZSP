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
    ['dangkou.meal.'+event.meal_id+'.daka']:event.daka,
    ['dangkou.meal.'+event.meal_id+'.daka_num']:event.daka_num,
    ['dangkou.meal.'+event.meal_id+'.daka_people']:event.daka_people
    }
  })
}