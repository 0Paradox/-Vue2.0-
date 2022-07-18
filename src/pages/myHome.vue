<template>
  <el-row class="mHome" :gutter="24">
    <el-col :span="8" style="margin-top: 20;">
      <!-- 用户卡片 -->
      <el-card class="userCard" shadow="hover">
        <div class="user">
          <img class="userImg" :src="userImg" />
          <div class="userInfo">
            <p>Admin</p>
            <p>超级管理员</p>
          </div>
        </div>
        <hr/>
        <div class="LastInformation">
          <p>上次登录时间:<span>2021-7-19</span></p>
          <p>上次登录地点:<span>中国</span></p>
        </div>
      </el-card>

      <!-- 表单卡片 -->
      <el-card >
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="course" label="课程" width="100px">
          </el-table-column>
          <el-table-column prop="totalCost" label="总购买" width="100px">
          </el-table-column>
          <el-table-column prop="thisMonthCost" label="本月购买">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <el-col :span="16" style="margin-top:20;">
      <!-- 订单数据 -->
      <div class="num">

        <el-card shadow="hover" v-for="item in countData" :key="item.name" class="orderCard" :body-style="{ padding: 0, display:'flex',}">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color}"></i>
          <div class="detail">
            <p>￥{{item.value}}</p>
            <p>{{item.name}}</p>
          </div>
        </el-card>

      </div>
      
      <!--折线图-->
      <el-card class="lineChart">

      </el-card>

      <!-- 饼状图 -->
      <div  class="otherChart">
        <el-card class="otherChartChildren" id = 'bar'></el-card>
        <el-card class="otherChartChildren" id = 'pie'></el-card>
      </div>
    </el-col>
  </el-row>


</template>


<script>
// import { getMenu } from '../../api/data.js'
import axios from 'axios'
import * as echarts from 'echarts'
export default {
  data() {
    return {
      userImg: require("../assets/logo.png"),
      tableData:[],
      countData:[],
    };
  },
  mounted(){
    const instance = axios.create({baseURL:'http://localhost:8080'})

    instance({
      url:'/permission/getTable'
    }).then(res => {
       this.tableData = res.data.tableData
    })
    instance({
      url:'/permission/getCount'
    }).then(res => {
      this.countData = res.data.countData
    })
    instance({
      url:'/permission/getline'
    }).then(res => {
      const option = res.data.options
      let lineChart = echarts.init(document.querySelector('.lineChart'))
        option && lineChart.setOption(option)
    })
    instance({
      url:'/permission/getBar'
    }).then(res => {
      const option = res.data.options
      let barChart = echarts.init(document.querySelector('#bar'))
      option && barChart.setOption(option)
    })
    instance({
      url:'/permission/getPie'
    }).then(res => {
      const option = res.data.options
      let pieChart = echarts.init(document.querySelector('#pie'))
      option && pieChart.setOption(option)
    })
  },
};
</script>

<style>
.mHome{
  min-width: 800px;
}
.user {
  display: flex;
}
.userImg {
  width: 50%;
  height: 50%;
}
.userInfo {
  height: 50%;
  width: 50%;
  padding: 0;
}
.userCard{
  margin-bottom: 10px;
}
.LastInformation p {
  font-size: smaller;
}
.LastInformation span {
  color: darkgrey;
  padding: 5px;
}

.num{
  width:100%;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.orderCard{
  border:none;
  width:30%;
  margin-bottom: 4vh;
}
.icon{
  width:50px;
  height:50px;
  color:white;
  font-size:25px;
  text-align: center;
  line-height: 50px;
}
.detail{
  width:70%;
  line-height: 24px;
  margin-left:5px;
}
.detail p:nth-child(1){
  font-size: 22px;
  margin: 0;
}
.detail p:nth-child(2){
  font-size:13px;
  margin: 0;
}

/* 折线图 */
.lineChart{
  width:100%;
  height:30vh;
  margin-bottom:4vh;
}
/* 饼状图 */
.otherChart{
  display: flex;
  width:100%;
  height:40vh;
  justify-content: space-between;
}
.otherChartChildren{
  width:45%;
  height:100%;
}
</style>