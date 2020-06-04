<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="_id" label="ID" width="300"></el-table-column>
      <el-table-column prop="parentName" label="上一级分类"></el-table-column>

      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template v-slot="scope">
          <el-button type="primary" size="small" @click="goEdit(scope.row._id)">编辑</el-button>
          <el-button type="warning" size="small" @click="deleteCategory(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>确定要删除{{name}}吗</span>
      <span slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmDelete">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      tableData: [],
      dialogVisible: false
    };
  },
  created() {
    this.getCategoryList();
  },
  methods: {
    async getCategoryList() {
      const { data } = await this.$http.get("/rest/categories");
      this.tableData = data;
    },
    goEdit(id) {
      this.$router.push("/categotyEdit/" + id);
    },
    deleteCategory(row) {
      this.dialogVisible = true;
      this.id = row._id;
      this.name = row.name;
    },
    async confirmDelete() {
      await this.$http.delete("/rest/categories/" + this.id);
      this.dialogVisible = false;
      this.$message({
        type: "success",
        message: "删除成功"
      });
      this.getCategoryList();
    }
  }
};
</script>

<style scoped>
</style>