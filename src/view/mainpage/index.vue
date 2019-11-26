<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="2">
        <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg">
      </el-col>
      <el-col v-for="item in titleList" :key="item.id" :span="1">
        <router-link :to="{path:item.src}">{{item.name}}</router-link>
      </el-col>
      <el-col :span="3">
        <el-input placeholder="搜索">
        </el-input>
      </el-col>
      <el-col :span="3">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
         </el-select>
      </el-col>
      <el-col :span="1">
        <i class="el-icon-bell"></i>
      </el-col>
      <el-col :span="2">
        <div class="avatar">
        </div>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {
   
  },
  data() {
    return {
      value:'',
      titleList:[
        {name:'首页',id:1,src:"Home"},
        {name:'沸点',id:2,src:"hottop"},
        {name:'话题',id:3,src:"Topic"},
        {name:'小册',id:4,src:"Book"},
        {name:'活动',id:5,src:"Activity"},
      ] ,
      options:[
        { value: '选项1',label: '发布沸点'},
        { value: '选项2',label: '分享链接'}
      ]
  }
}
}
</script>

<style lang="scss" scope> 
*{
  margin:0;
  padding:0;
}
.el-row{
  height: 60px;
  border-bottom:1px gray solid;
  text-align: center;
}
.el-col{
  position: relative;
  top: 50%;
  transform: translateY(-50%)
}
img{
  vertical-align: middle;
  text-align:center;
}
a{
  text-decoration: none;
  color: gray
}
a:active,a:hover{
  color: #007fff
}
.avatar{
      width: 30px;
    height: 30px;
    border-radius: 50%;
    position: relative;
    border:1px black solid;
}
</style>
