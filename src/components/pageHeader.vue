<template>
  <div class="pHeader">
    <el-button
      :icon="buttonIcon"
      circle
      @click="hiddenAndDisplay(buttonIcon)"
    ></el-button>

    <h3>首页</h3>

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
    this.$bus.$emit("change")
    },
  },
};
</script>

<style>
.h3 {
  color: #fff;
}
.pHeader{
    display: flex;
    height:100%;
    justify-content: space-between;
    align-items: center;
}
.r-content{
  align-items: center;
}
.user{
  height:100%
}
.userI{
  width:40px;
  height:40px;
  margin-top:20px;
  border-radius: 50%;
  background: #fff;
}

</style>