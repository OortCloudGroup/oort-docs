/**
Created by  lanjian   on 2020/6/3  14:40
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
  <div>
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />
    <div class="page_404">
      <div class="page_404_text">
        <span class="text_404">404</span>
        <span class="text_404_tip">你似乎来到了没有知识存在的荒原</span>
        <RouterLink to="/">
          <p class="button_404">去往首页</p>
        </RouterLink>
      </div>
      <div class="page_404_img">
        <img src="../../imags/liukanshan_wire.e7247fbf.svg"/>
      </div>
    </div>
  </div>

</template>

<script>
  import Navbar from '@theme/components/Navbar.vue'
  export default {
    components: {
      Navbar
    },
    computed: {
      shouldShowNavbar() {
        const {themeConfig} = this.$site
        const {frontmatter} = this.$page
        if (
          frontmatter.navbar === false
          || themeConfig.navbar === false) {
          return false
        }
        return (
          this.$title
          || themeConfig.logo
          || themeConfig.repo
          || themeConfig.nav
          || this.$themeLocaleConfig.nav
        )
      }
    },
    methods: {
      toggleSidebar (to) {
        this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
        this.$emit('toggle-sidebar', this.isSidebarOpen)
      }
    }
  }
</script>

<style lang="css">

  .button_404 {
    color: #fff;
    margin-top: 20px;
    background-color: #0084ff;
    display: inline-block;
    padding: 0 16px;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    border: 1px solid;
    border-radius: 5px;
  }
  .text_404 {
    font-size: 40px;
    font-weight: 600;
    color: #646464;
  }

  .text_404_tip {
    font-size: 18px;
    margin-top: 10px;
    color: #646464;
  }

  .page_404 {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .page_404_text {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 284px;
  }

  .page_404_img {
    margin-left: 40px;
    width: 220px;
  }



</style>
