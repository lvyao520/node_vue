<template>
  <div>
    <h1>编辑分类</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="finishEdit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      form: {
        name: ""
      }
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getCategory(this.id);
  },
  methods: {
    async getCategory(id) {
      // 知识点:正常的get动态路由请求是写一个路径，把id当做参数{params:{id:id}}这样传给后端
      // 但这个地方由于用node写的接口路由就是直接把id拼在路径后面，所以这里前端的请求需要按照后端
      // 接口来，不用再传参数了
      const { data } = await this.$http.get("/categorylist/" + id);
      this.form.name = data.name;
    },
    async finishEdit() {
      // 知识点（难点）：put接口前后端如何写，以及整个put请求步骤
      const res = await this.$http.put("/categorylist/" + this.id, this.form);
      this.$message({
        type: "success",
        message: "保存成功"
      });
    }
  }
};
</script>

<style scoped>
</style>