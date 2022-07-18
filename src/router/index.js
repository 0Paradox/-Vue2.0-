import VueRouter from 'vue-router'
import myHome from '../pages/myHome'
import userMange from '../pages/userMange'
import mallMange from '../pages/mallMange'
import pageOne from '../pages/other/pageOne'
import pageTwo from '../pages/other/pageTwo'


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
        },
        {
            name:'pageOne',
            path:'/pageOne',
            component:pageOne,
        },
        {
            name:'pageTwo',
            path:'/pageTwo',
            component:pageTwo,
        }
    ]
})

const includPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {

  return includPush.call(this, location).catch(err => err)

}