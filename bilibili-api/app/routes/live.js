import Router from 'koa-router'
import axios from 'axios'
import { liveXhr } from './urlConfig'

const router = Router()

// 直播
// 引入数据库操作方法
const UserController = require('../controller/user.js')

router.get('/live', UserController.createUser)
// router.get('/live', async (ctx, next) => {
//   let response = await axios.get(liveXhr)
//   let data = response.data

//   ctx.body = JSON.parse("[]")
// })

export default router
