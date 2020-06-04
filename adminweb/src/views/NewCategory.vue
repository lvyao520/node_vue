<template>
  <div>
    <h1>新建分类</h1>
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
        parentName: ""
      },
      parentOptions: []
    };
  },
  created() {
    this.getParentName();
  },
  methods: {
    async onSubmit() {
      const res = await this.$http.post("/categorylist", this.form);
      this.$message({
        type: "success",
        message: "成功了"
      });
    },
    handleChange() {
      console.log("改变了");
    },
    async getParentName() {
      const { data } = await this.$http.get("/categorylist");
      // 知识点（重点）：数组中对象去重，要搞清楚var obj = {}的思想,
      // 和购物车添加商品去重一样，都是用换一个阀门去控制是否去重，只不过购物车中的
      // 去重的元素一模一样，这个里面只是根据元素里面的一个属性来去重
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