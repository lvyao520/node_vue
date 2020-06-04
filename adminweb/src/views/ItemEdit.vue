<template>
  <div>
    <h1>{{id?'编辑物品':'新建物品'}}</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="图标">
        <el-input v-model="form.icon"></el-input>
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
        name: "",
        icon: ""
      },
      id: ""
    };
  },
  created() {
    // 知识点（重点）：通过判断当前路由来决定显示新建页还是编辑页，一定要在created里面，不能到watch里面去监听路由
    this.id = this.$route.path === "/itemEdit" ? "" : this.$route.params.id;
    this.id && this.getItem(this.id);
  },
  methods: {
    // 新建保存和编辑保存
    async onSubmit() {
      // 通过id来判断是新建保存还是编辑保存
      if (this.id) {
        const res = await this.$http.put("/rest/items/" + this.id, this.form);
        this.$message({
          type: "success",
          message: "保存成功"
        });
      } else {
        const res = await this.$http.post("/rest/items", this.form);
        this.$message({
          type: "success",
          message: "成功了"
        });
      }
    },
    async getItem(id) {
      const { data } = await this.$http.get("/rest/items/" + id);
      this.form.name = data.name;
    }
  }
};
</script>

<style scoped>
</style>