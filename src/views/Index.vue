<template>
    <div >
      <div class="huya">

          <!-- 头部start -->
         <header >
             <!-- logo-start -->
             <div class="container">
                <div class="haya-logo">
                    <a href="#" >
                        <img class="haya-logo-first" src="../assets/images/logo2.png" alt="" >
                    </a>
                </div>
             
             <!-- logo-end --> 

             <!-- 导航开始 -->
              <div class="nav-start">
                  <div class="hy-nav-item onebtn">
                      <router-link :class="{'clickColor':$route.name=='Index'}" to="/">首页</router-link>
                  </div>
                  <div class="hy-nav-item twobtn">
                      <router-link :class="{'clickColor':$route.name=='LiveBroadcast'}" to="/liveBroadcast">直播</router-link>
                  </div>
                  <div class="hy-nav-item threebtn">
                      <router-link :class="{'clickColor':$route.name=='Classify'}" to="/classify">分类<i class="sanjiao"></i></router-link>
                      <div class="select-list classify-list">
                         <i class="select-sanjiao"></i>
                         <dl>
                             <dt>热门分类</dt>
                             <dd>
                                 <!-- <router-link >英雄联盟</router-link> -->
                                 <a href="">英雄联盟</a>
                             </dd>
                             <dd>
                                 <router-link class="clickstat">绝地求生</router-link>
                             </dd>
                             <dd>
                                 <router-link class="clickstat">王者荣耀</router-link>
                             </dd>
                             <dd>
                                 <router-link class="clickstat">星秀</router-link>
                             </dd>
                             <dd>
                                 <router-link class="clickstat">一起看</router-link>
                             </dd>
                             <dd>
                                 <router-link class="clickstat">刺激战场</router-link>
                             </dd>
                             <dd>
                                 <router-link class="clickstat">户外</router-link>
                             </dd>
                             <dd>
                                 <router-link class="clickstat">主机游戏</router-link>
                             </dd>
                             <dd>
                                 <router-link class="clickstat">穿越火线</router-link>
                             </dd>
                         </dl>
                      </div>
                  </div>
                  <div class="hy-nav-item threebtn">
                      <router-link :class="{'clickColor':$route.name=='Competition'}" to="/competition">赛事<i class="sanjiao"></i></router-link>
                  </div>
                  <div class="hy-nav-item fourbtn">
                      <router-link :class="{'clickColor':$route.name=='Pm5'}" to="/pm5">视频<i class="sanjiao"></i></router-link>
                  </div>
              </div>
             </div>

         </header>
        <!-- 头部结束 -->
              <router-view></router-view>
         
       </div>
    </div>
</template>
<style>
.huya {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/* 头部 */
.huya header {
  width: 100%;
  height: 2.4rem;
  /* background: red; */
  position: relative;
  margin: 0 auto;
}
.huya header .container {
  width: 75%;
  height: 100%;
  background-color: yellow;
  margin: 0 auto;
}
/* logo */
.huya header .haya-logo {
  width: 4.8rem;
  margin: 0;

  height: 100%;
  float: left;
  /* background-color:green; */
  position: relative;
}
.huya header .haya-logo .haya-logo-first {
  width: 4.8rem;
  height: 1.44rem;
  position: absolute;
  top: 0.56rem;
}
/* nav */
.huya .nav-start {
  background-color: fuchsia;
  width: 25%;
  height: 100%;
  float: left;
  margin-left: 0.8rem;
}
.huya .nav-start .hy-nav-item {
  width: 20%;
  height: 100%;
  box-sizing: border-box;
  float: left;
  padding: 0.56rem 0 0 0.2rem;
  /* overflow: hidden; */
}
.huya .nav-start .hy-nav-item a {
  display: block;
  font-size: 0.64rem;
  padding: 0.3rem 0.7rem;
  border-radius: 3rem;
  /* background-color:forestgreen; */
  line-height: 0.8rem;
  text-align: center;
  position: absolute;
}
.huya .nav-start .clickColor {
  background-color: #ff9600;
}
.huya .nav-start .sanjiao {
  background-image: url("../assets/images/header-ioc.png");
  background-size: 0.36rem 0.36rem;
  width: 0.36rem;
  height: 0.36rem;
  position: absolute;
  top: 0.56rem;
  right: 0.2rem;
  opacity: 0.6;
  transition: transform 0.5s;
}
.huya .nav-start .hy-nav-item a:hover > .sanjiao  {
  opacity: 1;
  transform: rotateZ(180deg);
  /* background-color: red; */
}
.huya .nav-start a:hover {
  opacity: 1;
  background-color: #ff9600;
}
.huya .nav-start .hy-nav-item .select-list {
    position: relative;
    width: 10rem;
    height: 100%;
    padding: 0.6rem;
    top: 1.6rem;
    left: -4.55rem;
    z-index: 99;
    background-color: pink;
    border-radius: 8px 6px;
    box-shadow: 0 1px 8px 2px rgba(1,1,1,.2);
    border-top: 2px solid #ff9600;
}
.huya .nav-start .hy-nav-item .select-list .select-sanjiao{
    background-image: url("../assets/images/zhengsj.png");
    background-size: 20px 10px;
    width: 25px;
    height: 7px;
    position: absolute;
    left: 50%;
    top: -7px;
}
.huya .nav-start .hy-nav-item .select-list dl{
    margin: 0 -5px 10px 0;
    font-size: 14px;
}
.huya .nav-start .hy-nav-item .select-list dl>dt{
    margin-bottom: 5px;
    color: #555;
    font-weight: 700;
    font-size: 14px;
}
.huya .nav-start .hy-nav-item .select-list dl>dd{
    display: inline-block;
    float: left;
    margin:0 5px 5px 0;
}
</style>