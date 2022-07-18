<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="$store.state.isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>通用后台管理系统</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu v-for="item in hasChildren" :index="item.name" :key="item.name">
      <template slot="title">
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="(subItem) in item.children"
        :key="subItem.path"
      >
        <el-menu-item @click="clickMenu(subItem)" :index="subItem.toString()">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      screenwidth:null,
      isCollapse: false,
      menu: [
        {
          path: "/myHome",
          name: "myHome",
          label: "首页",
          url: "myHome/myHome",
        },
        {
          path: "/mallMange",
          name: "mallMange",
          label: "商品管理",
          url: "mallManage/mallManage",
        },
        {
          path: "/userMange",
          name: "userMange",
          label: "用户管理",
          url: "userMange/userMange",
        },
        {
          path:"/Other",
          name:"Other",
          label: "其他",
          children: [
            {
              path: "/pageOne",
              name: "pageOne",
              label: "页面1",
              url: "Other/pageOne",
            },
            {
              path: "/pageTwo",
              name: "pageTwo",
              label: "页面2",
              url: "Other/pageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(index){
        // console.log("执行了clickMenu命令",this.$router)
        this.$router.push(index)
        this.$store.commit('selectMenu',index)
    }
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);

    },
  },
};

</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {

  min-height: 400px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  border:0;
}
.h3{
    color:#fff;
    text-align:center;
    line-height:48px;
}
</style>