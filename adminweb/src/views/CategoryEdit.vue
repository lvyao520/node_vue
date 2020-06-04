<template>
  <div>
    <h1>编辑分类</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="上级分类">
        <el-select v-model="form.parentName" placeholder="请选择">
          <el-option
            v-for="item in parentOptions"
            :key="item._id"
            :label="item.parentName"
            :value="item.parentName"
          ></el-option>
        </el-select>
      </el-form-item>
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
        name: "",
        parentName: ""
      },
      parentOptions: []
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getCategory(this.id);
    this.getParentName();
  },
  methods: {
    async getCategory(id) {
      // 知识点:正常的get动态路由请求是写一个路径，把id当做参数{params:{id:id}}这样传给后端
      // 但这个地方由于用node写的接口路由就是直接把id拼在路径后面，所以这里前端的请求需要按照后端
      // 接口来，不用再传参数了
      const { data } = await this.$http.get("/rest/categories/" + id);
      this.form.name = data.name;
      this.form.parentName = data.parentName;
    },
    async finishEdit() {
      // 知识点（难点）：put接口前后端如何写，以及整个put请求步骤
      const res = await this.$http.put(
        "/rest/categories/" + this.id,
        this.form
      );
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async getParentName() {
      const { data } = await this.$http.get("/rest/categories");
      var obj = {};
      var newData = data.reduce((pre, cur) => {
        if (!obj[cur.parentName]) {
          obj[cur.parentName] = true;
          return pre.concat(cur);
        } else {
          return pre;
        }
      }, []);
      this.parentOptions = newData;
    }
  }
};
</script>

<style scoped>
</style>