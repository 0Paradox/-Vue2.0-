<template>
    <el-container style="height:100vh">
        <el-aside>
            <common-aside></common-aside>
        </el-aside>

        <el-container>
            <el-header>
              <page-header></page-header>
            </el-header>
            <common-tag></common-tag>
            <el-main>
              <router-view></router-view>
            </el-main>
        </el-container>

    </el-container>
</template>

<script>
import commonAside from './commonAside.vue'
import pageHeader from './pageHeader.vue'
import CommonTag from './commonTag.vue'

export default {
    data(){
      return {}
    },
    components:{
      commonAside,
      pageHeader,
      CommonTag,
    }
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #000;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    color: #fff;
    background-color: #E9EEF3;
    text-align: center;
    overflow-x:hidden;
    width:auto !important;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>