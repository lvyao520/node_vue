<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="_id" label="ID" width="300"></el-table-column>
      <el-table-column prop="name" label="物品名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template v-slot="scope">
          <el-button type="primary" size="small" @click="goEdit(scope.row._id)">编辑</el-button>
          <el-button type="warning" size="small" @click="deleteItem(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.getItemList();
  },
  methods: {
    async getItemList() {
      const { data } = await this.$http.get("/rest/items");
      this.tableData = data;
    },
    goEdit(id) {
      this.$router.push("/itemList/" + id);
    }
  }
};
</script>

<style scoped>
</style>