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
                      <router-link id="selecta" :class="{'clickColor': $route.name=='Index'}" to="/">首页</router-link>
                  </div>
                  <div class="hy-nav-item twobtn">
                      <router-link id="selecta" :class="{'clickColor': $route.name=='LiveBroadcast'}" :to="{path:'/liveBroadcast'}">直播</router-link>
                  </div>
                  <div  class="hy-nav-item threebtn" >
                      <div class="hy" v-on:mouseenter="classifyShow()" v-on:mouseleave="classifyHidden()">
                          <router-link  id="selecta" :class="{'clickColor': $route.name=='Classify'}" to="/classify">分类<i class="sanjiao"></i></router-link>
                          <div v-show="isShowClassify" class="select-list">
                            <i class="select-sanjiao"></i>
                            <dl>
                                <dt>热门分类</dt>
                                <dd>
                                    <router-link class="clickstat" to="">英雄联盟</router-link>
                                </dd>
                                <dd>
                                    <router-link class="clickstat" to="">绝地求生</router-link>
                                </dd>
                                <dd>
                                    <router-link to="" class="clickstat">王者荣耀</router-link>
                                </dd>
                                <dd>
                                    <router-link to="" class="clickstat">星秀</router-link>
                                </dd>
                                <dd>
                                    <router-link to="" class="clickstat">一起看</router-link>
                                </dd>
                                <dd>
                                    <router-link to="" class="clickstat">刺激战场</router-link>
                                </dd>
                                <dd>
                                    <router-link to="" class="clickstat">户外</router-link>
                                </dd>
                                <dd>
                                    <router-link to="" class="clickstat">主机游戏</router-link>
                                </dd>
                                <dd>
                                    <router-link to="" class="clickstat">穿越火线</router-link>
                                </dd>
                            </dl>
                            <dl>
                                <dt>玩家推荐</dt>
                                <dd>
                                    <router-link class="clickstat" to="">英雄联盟</router-link>
                                </dd>
                                <dd>
                                    <router-link class="clickstat" to="">绝地求生</router-link>
                                </dd>
                                <dd>
                                    <router-link to="" class="clickstat">王者荣耀</router-link>
                                </dd>
                                <dd>
                                    <router-link to="" class="clickstat">星秀</router-link>
                                </dd>
                                <dd>
                                    <router-link to="" class="clickstat">一起看</router-link>
                                </dd>
                                <dd>
                                    <router-link to="" class="clickstat">刺激战场</router-link>
                                </dd> 
                                <dd>
                                    <router-link to="" class="clickstat">户外</router-link>
                                </dd>
                                <dd>
                                    <router-link to="" class="clickstat">主机游戏</router-link>
                                </dd>
                                <dd>
                                    <router-link to="" class="clickstat">穿越火线</router-link>
                                </dd>
                            </dl>
                            <router-link to=""  class="select-more">更多<i>></i></router-link>
                          </div>
                      </div> 
                  </div>
                  <div class="hy-nav-item threebtn">
                       <div class="hy" v-on:mouseenter="competitionShow()" v-on:mouseleave="competitionHidden()">
                           <router-link id="selecta" :class="{'clickColor': $route.name=='Competition'}" to="/competition">赛事<i class="sanjiao"></i></router-link>
                           <div v-show="isShowCompetition" class="select select-list2">
                              <i class="select-sanjiao"></i>
                              <div class="competitionSelect">
                                <div class="competitionTitle">
                                    热门赛事
                                </div>
                             
                                 <div class="competitionSelect-first">
                                     <ul>
                                         <li>
                                             <router-link class="competitionSelectA" to="">
                                                  <i class="icon-living" ></i>
                                                  <span>WEGL微博杯-绝地求生</span>
                                                  &nbsp; 绝地求生
                                             </router-link>
                                         </li>
                                         <li>
                                             <router-link class="competitionSelectA" to="">
                                                  <i class="icon-living" ></i>
                                                  <span>WEGL微博杯-绝地求生</span>
                                                  &nbsp; 绝地求生
                                             </router-link>
                                         </li>
                                         <li>
                                             <router-link class="competitionSelectA" to="">
                                                  <i class="icon-replay" ></i>
                                                  <span>WEGL微博杯-绝地求生</span>
                                                  &nbsp; 绝地求生
                                             </router-link>
                                         </li>
                                         <li>
                                             <router-link class="competitionSelectA" to="">
                                                  <i class="icon-replay" ></i>
                                                  <span>WEGL微博杯-绝地求生WEGL微博杯-绝地求生</span>
                                                  &nbsp; 绝地求生
                                             </router-link>
                                         </li>
                                         <li>
                                             <router-link class="competitionSelectA" to="">
                                                  <i class="icon-replay" ></i>
                                                  <span>WEGL微博杯-绝地求生</span>
                                                  &nbsp; 绝地求生
                                             </router-link>
                                         </li>
                                         <li>
                                             <router-link class="competitionSelectA" to="">
                                                  <i class="icon-replay" ></i>
                                                  <span>WEGL微博杯-绝地求生</span>
                                                  &nbsp; 绝地求生
                                             </router-link>
                                         </li>
                                     </ul>
                                 </div>
                             </div>
                             <div class="competitionSelect">
                                <div class="competitionTitle">
                                    热门赛事
                                </div>
                             
                                 <div class="competitionSelect-last">
                                      <div class="competitionSelect_ul">
                                        <ul>
                                         <li>
                                            <div class="li_content">
                                                 <i class="com_time" >今天&nbsp;&nbsp;17:00</i>
                                                 <span>QQ飞车：谁是车王S6</span>
                                                 <router-link to="">预约</router-link>
                                            </div>     
                                         </li>
                                         <li>
                                            <div class="li_content">
                                                <i class="com_time" >今天&nbsp;&nbsp;17:00</i>
                                                 <span>QQ飞车：谁是车王S6</span>
                                                 <router-link to="">预约</router-link>
                                            </div>     
                                         </li>
                                         <li>
                                            <div class="li_content">
                                                 <i class="com_time" >今天&nbsp;&nbsp;17:00</i>
                                                 <span>QQ飞车：谁是车王S6</span>
                                                 <router-link to="">预约</router-link>
                                            </div>     
                                         </li>
                                         <li>
                                            <div class="li_content">
                                                 <i class="com_time" >今天&nbsp;&nbsp;17:00</i>
                                                 <span>QQ飞车：谁是车王S6</span>
                                                 <router-link to="">预约</router-link>
                                            </div>     
                                         </li>
                                         <li>
                                            <div class="li_content">
                                                 <i class="com_time" >今天&nbsp;&nbsp;17:00</i>
                                                 <span>QQ飞车：谁是车王S6</span>
                                                 <router-link to="">预约</router-link>
                                            </div>     
                                         </li>
                                       </ul>
                                      </div>
                                 </div>
                             </div>
                          </div>
                       </div>
                  </div>
                  <div class="hy-nav-item fourbtn">
                    <div class="hy" v-on:mouseenter="pm5Show()" v-on:mouseleave="pm5Hidden()">
                      <router-link id="selecta" :class="{'clickColor': $route.name=='Pm5'}" to="/pm5">视频<i class="sanjiao"></i></router-link>
                      <div v-show="isShowPm5" class="select select-list3">
                          <i class="select-sanjiao"></i>
                          <div class="competitionSelect">
                                <div class="competitionTitle">
                                    精选专题
                                </div>
                                 <div class="competitionSelect-first">
                                     <ul>
                                         <li>
                                             <router-link class="competitionSelectA" to="">
                                                  <i class="icon-video" >1</i>
                                                  <span>WEGL微博杯-绝地求生</span>
                                                  &nbsp; 绝地求生
                                             </router-link>
                                         </li>
                                         <li>
                                             <router-link class="competitionSelectA" to="">
                                                  <i class="icon-video" >2</i>
                                                  <span>WEGL微博杯-绝地求生</span>
                                                  &nbsp; 绝地求生
                                             </router-link>
                                         </li>
                                         <li>
                                             <router-link class="competitionSelectA" to="">
                                                  <i class="icon-video" >3</i>
                                                  <span>WEGL微博杯-绝地求生</span>
                                                  &nbsp; 绝地求生
                                             </router-link>
                                         </li>
                                         <li>
                                             <router-link class="competitionSelectA" to="">
                                                  <i class="icon-video" >4</i>
                                                  <span>WEGL微博杯-绝地求生WEGL微博杯-绝地求生</span>
                                                  &nbsp; 绝地求生
                                             </router-link>
                                         </li>
                                         <li>
                                             <router-link class="competitionSelectA" to="">
                                                  <i class="icon-video" >5</i>
                                                  <span>WEGL微博杯-绝地求生</span>
                                                  &nbsp; 绝地求生
                                             </router-link>
                                         </li>
                                         <li>
                                             <router-link class="competitionSelectA" to="">
                                                  <i class="icon-video" ></i>
                                                  <span>WEGL微博杯-绝地求生</span>
                                                  &nbsp; 绝地求生
                                             </router-link>
                                         </li>
                                     </ul>
                                 </div>
                             </div>
                      </div>
                    </div>
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
  /* width: 100%; */
  /* height: 100%; */
  overflow: hidden;
}
/* 头部 */
.huya header {
  min-width: 100%;
  height: 60px;
  /* background: red; */
  position: relative;
  margin: 0 auto;
}
.huya header .container {
  width: 1400px;
  height: 100%;
  background-color: yellow;
  margin: 0 auto;
}
/* logo */
.huya header .haya-logo {
  width: 120px;
  margin: 0;

  height: 100%;
  float: left;
  /* background-color:green; */
  position: relative;
}
.huya header .haya-logo .haya-logo-first {
  width: 120px;
  height: 36px;
  position: absolute;
  top: 14px;
}
/* nav */
.huya .nav-start {
  background-color: fuchsia;
  width: 25%;
  height: 100%;
  float: left;
  margin-left: 20px;
}
.huya .nav-start .hy-nav-item {
  width: 20%;
  height: 100%;
  box-sizing: border-box;
  float: left;
  padding: 13.75px 0 0 5px;
  /* overflow: hidden; */
}
/* .huya .nav-start .hy-nav-item .hy{
    width: 100%;
    height: 100%;
    position: relative;
    } */
.huya .nav-start .hy-nav-item #selecta {
  display: block;
  font-size: 16.25px;
  padding: 7.5px 17.5px;
  border-radius: 75px;
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
  background-size: 9px 9px;
  width: 9px;
  height: 9px;
  position: absolute;
  top: 14px;
  left: 55px;
  opacity: 0.6;
  transition: transform 0.5s;
}
.huya .nav-start .hy-nav-item #selecta:hover > .sanjiao {
  opacity: 1;
  transform: rotateZ(180deg);
  /* background-color: red; */
}
.huya .nav-start #selecta:hover,
.clickstat:hover {
  opacity: 1;
  background-color: #ff9600;
}


/*赛事和视频公共开始*/
 .huya .nav-start .hy-nav-item .select{
  position: relative;
  width: 280px;
  min-height: 270px;
  top: 40px;
  left: -112px;
  z-index: 99;
  background-color: #fff;
  border-radius: 8px 6px;
  box-shadow: 0 1px 8px 2px rgba(1, 1, 1, 0.2);
  border-top: 2px solid #ff9600;
  padding-top: 10px;
}
.competitionSelect{
    margin-bottom: 10px;
}
.hy-nav-item .hy .competitionTitle {
  width: 100%;
  padding: 0 5px 5px 10px;
  color: #555;
  font-size: 14px;
  font-weight: 700;
  box-sizing: border-box;
}
.hy-nav-item .hy .competitionSelect-first {
  width: 100%;
}
.hy-nav-item .hy .competitionSelect-first li {
  width: 100%;
  height: 30px;
}
.hy-nav-item .hy .competitionSelect-first .competitionSelectA {
  height: 20px;
  display: block;
  color: #666;
  font-size: 12px;
  overflow: hidden;
  position: relative;
  top: 6px;
  right: -10px;
}
.hy-nav-item .hy .select-list2 .competitionSelect-first i {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  float: left;
  margin-right: 5px;
  line-height: 20px;
  text-align: center;
  
  font-style: normal
}
.hy-nav-item .hy .select-list3 .competitionSelect-first i {
  display: block;
  width: 18px;
  height: 20px;
  float: left;
  margin-right: 5px;
  color: #fff;
  text-align: center;
  line-height: 20px;
  

  
}
.hy-nav-item .hy .competitionSelect-first span{
  max-width:230px;
  height: 100%;
  display: block;
  overflow: hidden; 
  text-overflow: ellipsis; 
  -o-text-overflow: ellipsis;
  white-space:nowrap;


}
.hy-nav-item .hy .competitionSelect-first li:hover {
  background-color: rgba(1, 1, 1, 0.1);
}
.hy-nav-item .hy .competitionSelect-first .competitionSelectA:hover > span {
  color: #ff9600;
}
/* .hy-nav-item .hy .competitionSelect-first .icon-living {
  background-image: url("../assets/images/icon_live_cd.png");
  background-color: #ff9600;
  animation: move 0.6s steps(6) infinite;
}
.hy-nav-item .hy .competitionSelect-first .icon-replay {
  background-image: url("../assets/images/icon_replay_d.png");
} */
.hy-nav-item .hy .competitionSelect-first .icon-video {
  background-image: url("../assets/images/video_ccb206e.png");
  background-repeat: no-repeat;
 
  
} 
/*赛事和视频公共结束*/



/*分类select开始*/
.huya .nav-start .hy-nav-item .select-list {
  position: relative;
  width: 250px;
  min-height: 270px;
  padding: 15px;
  top: 40px;
  left: -115px;
  z-index: 99;
  background-color: #fff;
  border-radius: 8px 6px;
  box-shadow: 0 1px 8px 2px rgba(1, 1, 1, 0.2);
  border-top: 2px solid #ff9600;
}
.huya .nav-start .hy-nav-item .select-sanjiao {
  background-image: url("../assets/images/select-sanjiao.png");
  background-position: -9px 0px;
  width: 25px;
  height: 7px;
  position: absolute;
  left: 50%;
  top: -7px;
}
.huya .nav-start .hy-nav-item .select-list dl {
  width: 255px;
  height: 113px;
  margin: 0 -5px 10px 0;
  font-size: 14px;
}
.huya .nav-start .hy-nav-item .select-list dl > dt {
  margin-bottom: 5px;
  color: #555;
  font-weight: 700;
  font-size: 14px;
}
.huya .nav-start .hy-nav-item .select-list dd {
  float: left;
  margin: 0 5px 5px 0;
}
.huya .nav-start .hy-nav-item .select-list .clickstat {
  width: 78px;
  height: 22px;
  display: block;
  border: 1px solid #e3e7e8;
  border-radius: 22px;
  text-align: center;
  line-height: 22px;
  color: #666;
  font-size: 12px;
  overflow: hidden;
}
/* .huya .nav-start .clickstat:hover {
    background-color: #ff9600;
    color: #fff;
} */
.huya .nav-start .hy-nav-item .select-list .select-more {
  display: block;
  width: 255px;
  height: 28px;
  border-radius: 22px;
  background-color: #f1f2f4;
  text-align: center;
  line-height: 28px;
  color: #666;
  font-size: 12px;
  overflow: hidden;
}
.huya .nav-start .hy-nav-item .select-list .select-more i {
  padding-left: 5px;
  font-family: \5b8b\4f53;
}
.huya .nav-start .hy-nav-item .select-list .select-more:hover {
  background-color: #ff9600;
  color: #fff;
}

/*分类select结束*/


/*赛事*/
/* .huya .nav-start .hy-nav-item .select-list3{
  position: relative;
  width: 280px;
  min-height: 270px;
  top: 40px;
  left: -112px;
  z-index: 99;
  background-color: pink;
  border-radius: 8px 6px;
  box-shadow: 0 1px 8px 2px rgba(1, 1, 1, 0.2);
  border-top: 2px solid #ff9600;
  padding-top: 10px;
} */

/* .competitionSelect{
    margin-bottom: 10px;
}
.threebtn .hy .competitionTitle {
  width: 100%;
  padding: 0 5px 5px 10px;
  color: #555;
  font-size: 14px;
  font-weight: 700;
  box-sizing: border-box;
} */
/* .threebtn .hy .competitionSelect-first {
  width: 100%;
}
.threebtn .hy .competitionSelect-first li {
  width: 100%;
  height: 30px;
}
.threebtn .hy .competitionSelect-first .competitionSelectA {
  height: 20px;
  display: block;
  color: #666;
  font-size: 12px;
  overflow: hidden;
  position: relative;
  top: 6px;
  right: -10px;
}
.threebtn .hy .competitionSelect-first i {
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 9px;

  float: left;
  margin-right: 5px;
}
.threebtn .hy .competitionSelect-first span{
  max-width:230px;
  height: 100%;
  display: block;
  overflow: hidden; 
  text-overflow: ellipsis; 
  -o-text-overflow: ellipsis;
  white-space:nowrap;


}
.threebtn .hy .competitionSelect-first li:hover {
  background-color: rgba(1, 1, 1, 0.1);
}
.threebtn .hy .competitionSelect-first .competitionSelectA:hover > span {
  color: #ff9600;
}*/
.threebtn .hy .competitionSelect-first .icon-living {
  background-image: url("../assets/images/icon_live_cd.png");
  background-color: #ff9600;
  animation: move 0.6s steps(6) infinite;
  background-repeat: no-repeat;
}
.threebtn .hy .competitionSelect-first .icon-replay {
  background-image: url("../assets/images/icon_replay_d.png");
  background-repeat: no-repeat;
} 
.competitionSelect .competitionSelect-last{
    width: 100%;
    /* background-color:red; */
    overflow: hidden;
    font-size: 12px;
    
}
.competitionSelect .competitionSelect_ul{
    width: 100%;
    height: 100%;
    /* background-color:green; */
    padding-left: 10px;
    box-sizing: border-box;
}
.competitionSelect .competitionSelect_ul ul{
  width: 100%;
  height: 100%;
  border-left: 1px solid #cdcdcd;

}
.competitionSelect .competitionSelect_ul li{
        position: relative;
        padding: 0 15px 0 4px;
        margin: 0 0 7px 6px;
        line-height: 30px;
        height: 30px;
}

.competitionSelect .competitionSelect_ul .li_content{
  height: 100%;
  text-align: center
}
.competitionSelect .competitionSelect_ul li:hover {
  background-color: rgba(1, 1, 1, 0.1);
}
.competitionSelect .competitionSelect_ul li:after{
  background-image: url("../assets/images/dot_f6760e1.png");
  position: absolute;
  left: -11px;
  top: 11px;
  display: inline-block;
  content: "";
  width: 9px;
  height: 9px;
  
}
.competitionSelect .competitionSelect_ul .li_content i{
     height: 100%;
     float: left;
     margin-right: 5px;

     color: #62B5F7;
     font-style: normal;

}
.competitionSelect .competitionSelect_ul .li_content span{
  height: 100%;
  max-width:114px;

  float: left;
  overflow: hidden; 
  text-overflow: ellipsis; 
  -o-text-overflow: ellipsis;
  white-space:nowrap;
  color: #666;
}
.competitionSelect .competitionSelect_ul .li_content a{
  width: 50px;
  height: 20px;
  display: block;
  border-radius: 20px;
  text-align: center;
  line-height: 20px;
  color: #fff;
  background-color:#62B5F7;
  float: right;
  margin-top: 5px;
}

@keyframes move {
  0% {
    background-position-x: 0px;
  }
  25% {
    background-position-x: -18px;
  }
  50% {
    background-position-x: -32px;
  }
  75% {
    background-position-x: -54px;
  }
  100% {
    background-position-x: -72px;
  }
}

/* .huya .nav-start .hy-nav-item .select-list3 {
  position: relative;
  width: 280px;
  min-height: 270px;
  top: 40px;
  left: -100px;
  z-index: 99;
  background-color: pink;
  border-radius: 8px 6px;
  box-shadow: 0 1px 8px 2px rgba(1, 1, 1, 0.2);
  border-top: 2px solid #ff9600;
  padding-top: 10px;
} */

.fourbtn .select-list3 i{
  color: #fff;
  line-height: 20px;
  text-align: center;
  
  font-style: normal
}
</style>
<script>
export default {
  data() {
    return {
      isShowClassify: false /*分类 */,
      isShowCompetition: false /*赛事*/,
      isShowPm5:false
    };
  },
  methods: {
    classifyShow: function() {
      this.isShowClassify = true;
    },
    classifyHidden: function() {
      this.isShowClassify = false;
    },
    competitionShow: function() {
      this.isShowCompetition = true;
    },
    competitionHidden: function() {
      this.isShowCompetition = false;
    },
    pm5Show: function() {
      this.isShowPm5 = true;
    },
    pm5Hidden: function() {
      this.isShowPm5 = false;
    }
  }
};
</script>
