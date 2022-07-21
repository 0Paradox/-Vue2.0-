<template>
  <div class = 'manage'>
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible.sync = "isShow"
    >
      <common-form
          :formLabel="operateFormLabel"
          :form="operateForm"
          :inline="true"
          ref="form"
      ></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确认</el-button>

      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">+ 新增</el-button>
        <common-form style="display:flex;width:45vw;height:40px;"
            :formLabel="formLabel"
            :form="searchForm"
            :inline="true"
            ref="form"
        >
        <el-button type="primary" @click="getList(searchForm.keyword)">搜索</el-button>
        </common-form>
    </div>
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editUser"
      @del="delUser"
    ></common-table>
  </div>
</template>

<script>
import commonForm from '../components/commonForm.vue'
import commonTable from'../components/commonTable.vue'
import axios from 'axios'
export default {
  name:'userMange',
  components:{
    commonForm,
    commonTable,
  },
  data(){
    return {
      operateType:'add',
      isShow: false,
      operateFormLabel:[],
      operateForm:{
        name:'',
        addr:'',
        age:'',
        birth:'',
        sex:'',
      },
      formLabel:[{
        model:'keyword',
        label:'',
        type:'input'
      }],
      searchForm:{
        keyword:''
      },
      tableData:[],
      tableLabel:[
        {
          prop:"name",
          label:"姓名",
        },
        {
          prop:"age",
          label:"年龄",
        },
                {
          prop:"sex",
          label:"性别",
        },
                {
          prop:"birth",
          label:"出生日期",
          width:200,
        },
                {
          prop:"addr",
          label:"地址",
          width:320,
        },
      ],
      config:{
        page:1,
        total:30,
      }
    }
  },
  methods:{
    confirm(){
      if(this.operateType === 'edit'){
        this.$http.post('/user/edit',this.operateForm).then(res =>{
          console.log(res)
          this.isShow = false
          this.getList()
        })
      }else{
        this.$http.post('/user/add',this.operateForm).then(res =>{
          console.log(res)
          this.isShow = false
          this.getList()
        })
      }
    },
    addUser(){
      this.isShow = true
      this.operateType = 'add'
      this.operateForm = {
        name:'',
        addr:'',
        age:'',
        birth:'',
        sex:'',
      }
    },
    editUser(row){
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = row
    },
    delUser(row){
      this.$confirm("此操作将永久删除该组件，是否继续？","提示",{
        confirmButtonText:"确认",
        cancelButtonText:"取消",
        type:"warning"
      }).then(()=>{
        const id = row.id
        this.$http.get("/user/del",{
          param:{id}
        }).then(() =>{
          this.$message({
            type:'success',
            message:'删除成功'
          })
          this.getList()
        })
      })
    },
    getList(name = ''){
      this.config.loading = true
      name ? (this.config.page = 1) : ' '
      
      this.$http.get('/user/getuser',{
        page:this.config.page,
        name
        }).then(res =>{
          this.tableData = res.data.list.map((item)=>{
            item.sexLabel = item.sex === 0 ? '女' : '男'
            return item
          })
          this.config.total = res.count 
          this.config.loading = false
        })
    },
  },

  created(){
    this.getList()
  },
  mounted(){
    const instance = axios.create({baseURL:'http://localhost:8080'})
    instance({
      url:'/operateFormLabel'
    }).then(res =>{
      this.operateFormLabel = res.data.operateFormLabel
    })
  }
}
</script>

<style lang="less" scoped>
  .manage-header{
    height: 5vh;
    display: flex;
    justify-content: space-between;
    padding-bottom:4vh;
  }
</style>