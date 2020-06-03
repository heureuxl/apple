<template>
  <div>
    <!-- 吸顶灯 -->
    <div class="top_1"></div>
    <div class="top_2">
        <ul>
            <li class="logo" @click="backToIndex()"></li>
            <li><router-link to="/Mac">Mac</router-link></li>
            <li><router-link to="/Ipad">iPad</router-link></li>
            <li><router-link to="/Iphone11">iPhone</router-link></li>
            <li><router-link to="/Watch">Watch</router-link></li>
            <li><router-link to="/Music">Music</router-link></li>
            <li><router-link to="/Skill">技术支持</router-link></li>
            <li class="search"></li>
            <li class="cart"><img src="https://www.apple.com.cn/ac/globalnav/6/zh_CN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__bmix8075eg4i_large.svg" alt=""></li>
        </ul>
    </div>
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    created() {
      console.log(this)  
    },
    methods: {
        backToIndex() {
            this.$router.push('/Home_welcome')
        }
    }
};
</script>

<style lang="less" scope>
body{
    background-color: #fff;
}
.top_1 {
  width: 100%;
  height: 40px;
  background-color: #444444;
}
.top_2 {
    width: 100%;
    height: 44px;
    background-color: #333333;
}
.top_2 ul{
    width: 1000px;
    height: 44px;
    margin: 0 auto;
    list-style: none;
    overflow: hidden;
}
.top_2 ul li{
    font-family: "SF Pro SC","HanHei SC","SF Pro Text","Myriad Set Pro","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
    text-align: center;
    display: inline-block;
    vertical-align:middle;
    color: #D6D6D6;
    line-height: 44px;
    opacity: .8;
    font-weight: 400;
    font-size: 14px;
    width: 65px;
    height: 44px;
    margin-right: 51px;
}
.top_2 ul li a{
    color: #D6D6D6;
    text-decoration: none;
}
.top_2 ul li:last-child{
    margin-right: 0;
}
.logo{
    background: url("https://www.apple.com.cn/ac/globalnav/6/zh_CN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg");
    vertical-align:middle;
    background-repeat: no-repeat;
    size: 100%;
    width: 36px;
    height: 44px;
    background-position: 40px 0;
    cursor: pointer;
}
.search{
    vertical-align:middle;
    background: url("https://www.apple.com.cn/ac/globalnav/6/zh_CN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__fca9mfoh8a2q_large.svg");
    size: 100%;
    background-size: 18px 88px;
    background-repeat: no-repeat;
    width: 18px;
    background-position: 40px 0;
}
.cart img{
    vertical-align:middle;
    size: 100%;
    background-size: 17px 44px;
    background-repeat: no-repeat;
    width: 17px;
}

.top_2 ul li a:hover{
    color: #fff;
    cursor:pointer;
}
.hr{
    width: 100%;
    height: 44px;
    background-color: #131313;
}
</style>
