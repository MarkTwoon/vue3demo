<template>
  <div  >
     <h2>我是vue3项目页面哦！！</h2>
  </div>

  <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </el-row>
<br>
  {{msg1}}
</template>

<script>


export default {
  name: 'Home',
  components: {

  },
data(){
    return{
      msg1:22
    }
},created() {
    const _this=this;
    this.$axios.get('banners',{}).then(res=>{
      const data=res.data.data;
      _this.msg1=data;
    });
  }
}
</script>
