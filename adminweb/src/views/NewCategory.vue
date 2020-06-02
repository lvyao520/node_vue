<template>
  <div>
    <h1>新建分类</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      const res = await this.$http.post("/newCategory", this.form);
      this.$message({
        type: "success",
        message: "成功了"
      });
    }
  }
};
</script>

<style scoped>
</style>