import VueRouter from 'vue-router'
import myHome from '../pages/myHome'
import userMange from '../pages/userMange'
import mallMange from '../pages/mallMange'


export default new VueRouter({
    routes:[
        {
            name:'myHome',
            path:'/myHome',
            component:myHome,
        },
        {
            name:'userMange',
            path:'/userMange',
            component:userMange,
        },
        {
            name:'mallMange',
            path:'/mallMange',
            component:mallMange,
        }
    ]
})

const includPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {

  return includPush.call(this, location).catch(err => err)

}