<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="1"> 
        <span style="color:#007fff;cursor:pointer;font-size:14px">推荐</span>
      </el-col>
      <el-col v-for="item in titleList" :key="item.id" :span="1" style="font-size:14px">
        <router-link :to="{path:item.src}">{{item.name}}</router-link>
      </el-col>
    </el-row>
    <router-view />
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
        {name:'关注',id:1,src:"Home/attention"},
        {name:'后端',id:2,src:"Home/after"},
        {name:'前端',id:3,src:"Home/front"},
        {name:'安卓',id:4,src:"Home/android"},
        {name:'ios',id:5,src:"Home/ios"},
        {name:'人工智能',id:6,src:"Home/artificial"},
        {name:'开发工具',id:7,src:"Home/development"},
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
  text-align: center;
}
.el-col{
  position: relative;
  top: 50%;
  transform: translateY(-50%)
}
a{
  text-decoration: none;
  color: gray
}
a:active,a:hover{
  color: #007fff
}
</style>
