/**
Created by  lanjian   on 2020/6/18  11:47
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>

  <div class="self_page">
    <div
      class="theme-container self-cont"
      :class="pageClasses"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <Navbar
        v-if="shouldShowNavbar"
        @toggle-sidebar="toggleSidebar"
      />
      <div class="home">
        <div style="display: flex;justify-content: center;">
          <img style="width: 100%;margin: 0 auto" src="../imags/UIUEHome.png" />
        </div>
        <div style="max-width: 1000px;margin: 0 auto;min-height: 50vh">
          <div class="features">
            <div class="features_item" @click="$router.push(feature.actionLink)" v-for="(feature, index) in data.features" :key="index">
              <span>{{ feature.title }}</span>
              <span>{{ feature.details }}</span>
            </div>
          </div>
        </div>
        <div style=" max-width: 1000px;margin: 0 auto">
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  import Navbar from '@theme/components/Navbar.vue'
  import NavLink from '@theme/components/NavLink.vue'
  import {resolveSidebarItems} from "../theme/util";

  export default {
    name: "docsIndexLayout",
    components: {
      Navbar,
      NavLink
    },
    data () {
      return {
        isSidebarOpen: false
      }
    },
    computed: {
      data () {
        return this.$page.frontmatter
      },
      shouldShowNavbar () {
        const { themeConfig } = this.$site
        const { frontmatter } = this.$page
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
      },

      shouldShowSidebar () {
        const { frontmatter } = this.$page
        return (
          !frontmatter.home
          && frontmatter.sidebar !== false
          && this.sidebarItems.length
        )
      },

      sidebarItems () {
        return resolveSidebarItems(
          this.$page,
          this.$page.regularPath,
          this.$site,
          this.$localePath
        )
      },

      pageClasses () {
        const userPageClass = this.$page.frontmatter.pageClass
        return [
          {
            'no-navbar': !this.shouldShowNavbar,
            'sidebar-open': this.isSidebarOpen,
            'no-sidebar': !this.shouldShowSidebar
          },
          userPageClass
        ]
      }
    },

    mounted () {
      this.$router.afterEach(() => {
        this.isSidebarOpen = false
      })
    },

    methods: {
      toggleSidebar (to) {
        this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
        this.$emit('toggle-sidebar', this.isSidebarOpen)
      },

      // side swipe
      onTouchStart (e) {
        this.touchStart = {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY
        }
      },

      onTouchEnd (e) {
        const dx = e.changedTouches[0].clientX - this.touchStart.x
        const dy = e.changedTouches[0].clientY - this.touchStart.y
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
          if (dx > 0 && this.touchStart.x <= 80) {
            this.toggleSidebar(true)
          } else {
            this.toggleSidebar(false)
          }
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .sidebar-button {
    display: none!important;
  }
  .self-cont {
    background: #fff;
    min-height: 100vh;
  }
  .home {
    padding: 3.6rem 2rem 0;
    margin: 0 auto;
    display: block;
    max-width: 1000px;
  }
  .features {
    display: flex;
    flex-wrap: wrap;
    border-top: 0.3px solid #eaecef;
    &_item {
      margin: 4px;
      cursor: pointer;
      width: 288px;
      min-height: 134px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      transition-property: color;
      transition-duration: .3s;
      color: rgba(0, 0, 0, 0.87);
      padding: 0 20px 0 17px;
      float: left;
      span:nth-of-type(1) {
        margin-top: 5px;
        font-size: 1.4rem;
        font-weight: 500;
        border-bottom: none;
        padding-bottom: 0;
        color: #3a5169;
      }
      span:nth-of-type(2) {
        margin-top: 12px;
        font-size: 0.8rem;
        color: #4e6e8e;
      }
    }
    &_item:before {
      content: "";
      position: absolute;
      z-index: 4;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #d1d2d466;
      transform: scaleY(0);
      transform-origin: 50% 100%;
      transition: transform 0.3s ease-out;
      margin-left: -3px;
    }
    &_item:hover::before {
      transform: scaleY(1);
    }
  }
</style>
