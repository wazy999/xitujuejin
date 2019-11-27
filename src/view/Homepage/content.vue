<template>
    <div>
        <div style="left:20%;max-width:960px" class="relative">
        <div class="content inline-block">
            <el-row>
                <el-col v-for="item in navList" :key="item.name" :span="3">
                    <router-link :to="{path:item.src}" style="fontSize:14px">{{item.name}}</router-link>
                    <span style="color:lightgray;padding-left:15px">|</span>
                </el-col>
            </el-row>
            <el-row v-for="item in mainList" :key="item.name" class="maincontent relative">
                <header class="font-size-2"><a class="pointer">{{item.name}}</a><span class="color-lightgray">.{{item.tag}}.{{item.datetime}}.{{item.language}}</span></header>
                <router-link to="" class="bold color-black">{{item.title}}</router-link>
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
                    <div class="absolute right30" style="top:50%;transform:translateY(-50%);">
                        <img :src="item.imgsrc" style="width:70px;height:70px;">
                    </div>
                </footer>
            </el-row>
          </div>
        <div class="nav">
            <nav>
                <img src="../../assets/image/20120830173930_PBfJE.jpeg" alt="" style="width:100%;margin-bottom:20px">
                <img src="../../assets/image/8993051_170340691334_2.jpg" alt="" style="width:100%;margin-bottom:20px">
                <div style="width:100%;margin-bottom:20px;background:white">
                    <div style="height:30px;border-bottom:1px solid lightgray">作者榜</div>
                    <div v-for="item in authorList" :key="item.author" style="margin:20px 0 10px 0;padding-left:20px">
                        <div>{{item.author}}</div>
                        <div>{{item.introduce}}</div>
                        <div></div>
                    </div>
                </div>
            </nav>
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
        {name:'热门',tag:'前端',title:"<吐血整理>",goodnum:343,badnum:324,isshow:false,datetime:"5小时前",language:"javascript",imgsrc:"../../assets/image/20120830173930_PBfJE.jpeg"},
        {name:'asda',tag:'撒旦',title:"啊沙发上",goodnum:343,badnum:324,isshow:false,datetime:"5小时前",language:"javascript",imgsrc:"../../assets/image/8993051_170340691334_2.jpg"},
        {name:'阿松大',tag:'发生',title:"发生发生",goodnum:343,badnum:324,isshow:false,datetime:"5小时前",language:"java"},
        {name:'啊实打实',tag:'阿达端',title:"撒发顺丰",goodnum:343,badnum:324,isshow:false,datetime:"5小时前",language:"javascript"},
        {name:'啊实打',tag:'发顺丰端',title:"阿斯顿发",goodnum:343,badnum:324,isshow:false,datetime:"5小时前",language:"javascript"},
        {name:'阿三大苏打我',tag:'阿发',title:"阿斯顿发生",goodnum:343,badnum:324,isshow:false,datetime:"5小时前",language:"javascript"},
        {name:'阿三大苏',tag:'阿发',title:"阿斯顿发生",goodnum:343,badnum:324,isshow:false,datetime:"5小时前",language:"javascript"},
        {name:'阿三大撒',tag:'阿',title:"阿斯生",goodnum:343,badnum:324,isshow:false,datetime:"5小时前",language:"javascript"},
        {name:'大苏打我',tag:'阿发',title:"阿斯生",goodnum:343,badnum:324,isshow:false,datetime:"5小时前",language:"javascript"},
      ] ,
       authorList:[
        {author:'蘑菇街前端工程师',introduce:"简介"},
        {author:'蘑菇街前端工程',introduce:"简介"},
        {author:'蘑菇街前端',introduce:"简介"},
        {author:'蘑菇街',introduce:"简介"},
      ] ,
      }
   },
   activated() {
   }
}
</script>
<style> 
.content{
    width:75%;
    background-color: white;
    /* box-shadow: 0px 0px 1000px #ccc; */
    /* border: 1px solid black; */
    margin-right:30px;
}
.maincontent{
    height:120px;
    border-top:1px solid lightgray;
    border-bottom:1px solid lightgray;
    text-align:left;
    position: relative;
    padding-left:20px;
    line-height: 35px;
}
.nav{
    width:25%;
    position: absolute;
    display: inline-block;
    /* box-shadow: 0px 0px 1000px #ccc; */
    /* border: 1px solid black */
}
</style>