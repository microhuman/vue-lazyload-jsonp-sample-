<template>
  <div>
    <h1>{{ pagename }}</h1>
    <p> ============================== </p>
    <ul>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行</h1>
        </div>
        <div v-for="article in articles" class="text item">
            {{ article.title + ' / ' + article.year + '年'}} 
        </div>
    </el-card>
    </ul>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                author: "yoyo",
                articles: [],
                pagename: "page two"
            }
        },

        mounted: function(){
            //利用JSONP获取外部数据
            const jsonp = require('jsonp');
            jsonp('https://api.douban.com/v2/movie/top250?count=20&start=10', null, (err, data) => {
                if (err) {
                    console.error(err.message);
                } else {
                    this.articles = data.subjects;
                }
            });
        }
    }
</script>

<style>
    @import 'https://cdn.bootcss.com/element-ui/2.3.8/theme-chalk/index.css'; 
</style>