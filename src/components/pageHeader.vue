<template>
  <div class="pHeader">
    <div class="l-content">
      <el-button class="l-content-button"
        :icon="buttonIcon"
        circle
        @click="hiddenAndDisplay(buttonIcon)"
      ></el-button>
      <!-- <h3>首页</h3> -->
      <el-breadcrumb class='breadcrumb' separator="/">
        <el-breadcrumb-item v-for="item in tags" :to="item.path" :key="item.path">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">

        <span>
          <img class="userI" :src="userImg">
        </span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>主页</el-dropdown-item>
        </el-dropdown-menu>

      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      buttonIcon: "el-icon-d-arrow-left",
      userImg: require("../assets/logo.png"),
    };
  },
  methods: {
    hiddenAndDisplay(buttonIcon) {
      if (buttonIcon === "el-icon-d-arrow-left") {
        this.buttonIcon = "el-icon-d-arrow-right";
      } else {
        this.buttonIcon = "el-icon-d-arrow-left";
      }
      this.$store.commit('collapse')
    },
  },
  computed:{
    ...mapState({
      tags: state => state.tabsList
    })
  }
};
</script>

<style scoped>
.h3 {
  color: #fff;
}
.pHeader{
    display: flex;
    height:100%;
    justify-content: space-between;
    align-items: center;
}
.l-content-button{
  width:40px;
  height: 40px;
  margin-right: 0.5vw;
}
.l-content{
  display: flex;
}
.r-content{
  padding-top: 20px;
  line-height: 60px;
}
/* .user{
  height:100%
} */
.userI{
  width:40px;
  height:40px;
  border-radius: 50%;
  background: #fff;
}
.el-breadcrumb /deep/ .el-breadcrumb__inner{
  color: #fff !important;
}
.breadcrumb{
  margin: auto 0;
}

</style>