<template>
  <!-- 知识点：vh单位用来撑满整个高度 -->
  <el-container style="height:100vh">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['main']" @select="select">
        <el-submenu index="main">
          <template v-slot:title>内容管理</template>
          <el-menu-item-group>
            <el-menu-item index="/newCategory">新建分类</el-menu-item>
            <el-menu-item index="/categoryList">分类列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="/itemEdit">新建物品</el-menu-item>
            <el-menu-item index="/itemList">物品列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 知识点：element中菜单使用select事件搭配index来做路由跳转
    select(index, path) {
      this.$router.push(index);
    }
  }
};
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  /* 知识点：elementui中给el-aside添加了内联样式bgc,现在需要修改，给它加权重 */
  background-color: #fff !important;
}
</style>