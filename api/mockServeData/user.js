import Mock from 'mockjs'

function paramObj(url){
    const search = url.split('?')[1]
    if(!search){
        return {}
    }
    return JSON.param('{"' +
    decodeURIComponent(search)
        .replace(/"/g,'\\"')
        .replace(/"/g,'","')
        .replace(/=/g,'":"') +
        '"}')
}

let List = []
const count = 200
for(let i = 0;i < count; i ++){
    List.push(
        Mock.mock({
            id:Mock.Random.guid(),
            name:Mock.Random.cname(),
            addr:Mock.mock('@county(true)'),
            'age|18-60':1,
            birth:Mock.Random.date(),
            sex:Mock.Random.integer(0,1)
        })
    )
}

export default{
    getUserList: config =>{
        const {name,page = 1,limit = 20} = paramObj(config.url)
        console.log('name:' + name,'page:' + page,'分页大小limit：' + limit)
        const mockList = List.filter(user =>{
            if(name && user.name.indexOf(name) === -1 && user.addr.indexOf(name) === -1) {
                return false}
            return true
        })
        const pageList = mockList.filter((item,index) => index < limit * page && index >= limit * (page - 1))
        return {
            code:20000,
            count:mockList.length,
            list:pageList
        }
    },

    createUser: config =>{
        const {name,addr,age,birth,sex} = JSON.parse(config.body)
        console.log(JSON.parse(config.body))
        List.unshift({
            id:Mock.Random.guid(),
            name:name,
            addr:addr,
            age:age,
            birth:birth,
            sex:sex
        })
        return {
            code:20000,
            data:{
                message:'添加成功'
            }
        }
    },

    deleteUser: config => {
        const {id} = paramObj(config.url)
        if(!id){
            return {
                code:-999,
                message:'参数错误'
            }
        }else{
            List = List.filter(item => item.id !== id)
            return {
                code:20000,
                data:{
                    message:'删除成功'
                }
            }
        }
    },

    batchremove: config => {
        let {ids} = paramObj(config.url)
        ids = ids.split(',')
        List = List.filter(item => ids.includes(item.id))
        return {
            code:20000,
            data:{
                message:'批量删除成功'
            }
        }
    },

    updateUser: config => {
        const{id,name,addr,age,birth,sex} = JSON.parse(config.body)
        const sex_num = parseInt(sex)
        List.some(item => {
            if(item.id === id){
                item.name = name
                item.addr = addr
                item.age = age
                item.sex = sex_num
                item.birth = birth
                return true
            }
        })
        return {
            code:20000,
            data:{
                message:'编辑成功'
            }
        }
    }

}