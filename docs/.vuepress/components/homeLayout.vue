/**
Created by  lanjian   on 2020/6/2  16:52
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
    <div class="page_container">
        <div class="page_up_body">
            <div class="page_tips">
                <span style="font-size: 36px;color: #fff">让开发更简单</span>
                <span style="font-size: 18px;color: #fff;margin-left: 80px;line-height: 41px;">供应商开放平台资源中心，帮助开发者解决问题、<br/> 共享资源，让开发更简单。</span>
            </div>
            <div class="page_bottom">
                <div class="bottom_item" @click="gotoReview">
                    <div class="bottom_item_img">
                        <img src="../imags/overreview.png"/>
                    </div>
                    <div class="bottom_item_text">
                        <span>概述</span>
                        <span>平台能力，简介。</span>
                    </div>
                </div>
                <div class="split_line"></div>
                <div class="bottom_item"  @click="gotoDocsDev">
                    <div class="bottom_item_img">
                        <img src="../imags/doc_dev.png"/>
                    </div>
                    <div class="bottom_item_text">
                        <span>文档中心</span>
                        <span>文档总集，规范性的文档。</span>
                    </div>
                </div>
                <div class="split_line"></div>
                <div class="bottom_item"  @click="gotoUIUE">
                    <div class="bottom_item_img">
                        <img src="../imags/app_dev.png"/>
                    </div>
                    <div class="bottom_item_text">
                        <span>UI/UE</span>
                        <span>统一视觉效果。</span>
                    </div>
                </div>
                <div class="split_line"></div>
                <div class="bottom_item"  @click="gotoAppDev">
                    <div class="bottom_item_img">
                        <img src="../imags/app_dev.png"/>
                    </div>
                    <div class="bottom_item_text">
                        <span>应用开发</span>
                        <span>应用上架文档，应用开发规范，Demo应用开发参考。</span>
                    </div>
                </div>
                <div class="split_line"></div>
                <div class="bottom_item"  @click="gotoServiceDev">
                    <div class="bottom_item_img">
                        <img src="../imags/service_dev.png"/>
                    </div>
                    <div class="bottom_item_text">
                        <span>服务开发</span>
                        <span>服务上架文档，服务开发规范，服务运维规范。</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="page_bottom_body">
            <img src="../imags/pic_bg.png"/>
        </div>
    </div>
</template>

<script>
  export default {
      name: 'homeLayout',
      methods: {
          gotoReview() {
            this.$router.push('/guide/overview/')
          },
          gotoUIUE() {
              this.$router.push('/guide/UIUE/')
          },
          gotoDocsDev() {
              this.$router.push('/guide/docs/')
          },
          gotoAppDev() {
              this.$router.push('/guide/application/')
          },
          gotoServiceDev() {
              this.$router.push('/guide/services/')
          },

      }
  }
</script>

<style>
    body {
        margin: 0px;
    }
</style>

<style scoped lang="css">
    .page_tips {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }
    .split_line {
        background: rgba(255,255,255,0.30);
        width: 1px;
        height: 110px;
    }
    .bottom_item {
        width: 236px;
        height: 100%;
        background: rgba(0,0,0,0);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    .bottom_item:hover {
        background: rgba(0,94,255,0.30);
    }
    .bottom_item_img {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    .bottom_item_img img {
        width: 26px;
        height: 26px;
    }

    .bottom_item_text {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        flex: 2;
    }
    .bottom_item_text span:nth-of-type(1) {
        ont-size: 16px;
        color: #F4F4F5;
    }
    .bottom_item_text span:nth-of-type(2) {
        margin-top: 8px;
        font-size: 12px;
        color: #d2cccc;
    }
    .page_bottom {
        cursor: pointer;
        width: 100%;
        background: rgba(0,0,0,0.30);
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        position: absolute;
        bottom:0px;
        left: 0px;
    }
    .page_container{
        width: 100%;
        height: 100%;
    }

    .page_up_body {
        position: relative;
        width: 100%;
        height: 45vh;
        background-image: url("../imags/earth.png");
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .page_bottom_body {
        width: 100%;
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
