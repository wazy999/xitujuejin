<template>
    <div>
        <div style="left:30%" class="relative">
        <div class="content">
            <el-row>
                <el-col v-for="item in navList" :key="item.name" :span="3">
                    <router-link :to="{path:item.src}" style="fontSize:14px">{{item.name}}</router-link>
                    <span style="color:lightgray;padding-left:15px">|</span>
                </el-col>
            </el-row>
            <el-row style="height:120px;border-top:1px solid lightgray;border-bottom:1px solid lightgray" v-for="item in mainList" :key="item.name">
                <header>{{item.name}}.{{item.tag}}</header>
                <router-link to="">{{item.title}}</router-link>
                <footer>
                    <span style="border:1px solid lightgray" @mouseover="item.isshow=true" @mouseout="item.isshow=false">
                        <i class="el-icon-thumb"></i>
                        {{item.goodnum}}
                    </span>
                    <span style="border:1px solid lightgray" @mouseover="item.isshow=true" @mouseout="item.isshow=false">
                        <i class="el-icon-coin"></i>
                        {{item.badnum}}
                    </span>
                    <span style="border:1px solid lightgray" v-show="item.isshow">
                        <i class="el-icon-position"></i>
                    </span>
                </footer>
            </el-row>
          </div>
        <div :span="2" class="nav">
        </div>
        </div>
    </div>
</template>
 <script>
export default {
   data() {
      return {
        navList:[
        {name:'热门',src:"attention"},
        {name:'最新',src:"after"},
        {name:'热榜',src:"front"},
      ] ,
      mainList:[
        {name:'热门',tag:'前端',title:"<吐血整理>",goodnum:343,badnum:324,isshow:false},
        {name:'asda',tag:'撒旦',title:"啊沙发上",goodnum:343,badnum:324,isshow:false},
        {name:'阿松大',tag:'发生',title:"发生发生",goodnum:343,badnum:324,isshow:false},
        {name:'啊实打实',tag:'阿达端',title:"撒发顺丰",goodnum:343,badnum:324,isshow:false},
        {name:'啊实打',tag:'发顺丰端',title:"阿斯顿发",goodnum:343,badnum:324,isshow:false},
        {name:'阿三大苏打我',tag:'阿发',title:"阿斯顿发生",goodnum:343,badnum:324,isshow:false},
      ] ,
      }
   },
   activated() {
   }
}
</script>
<style> 
.content{
    width:30%;
    background-color: white;
    box-shadow: 0px 0px 1000px #ccc;
    border: 1px solid black;
    margin-right:30px;
}
.nav{
    background-color: white;
    box-shadow: 0px 0px 1000px #ccc;
    border: 1px solid black
}
</style>