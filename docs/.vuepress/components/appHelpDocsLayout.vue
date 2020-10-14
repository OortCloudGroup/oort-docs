/**
Created by  lanjian   on 2020/8/1  19:56
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
  <div class="self_page">
    <div
      class="theme-container self-cont help-docs"
      :class="pageClasses"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <div class="home">
        <div class="search_div">
          <div
            class="links search_bbxo"
            :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
          >
            <SearchBox />
          </div>
        </div>
        <div class="help_banner">
          <span style="font-size: 22px;font-weight: bold">{{ data.title }}</span>
          <span style="font-size: 16px;font-weight: bold;margin-top: 1rem">使用手册</span>
        </div>
        <div style=" max-width: 1000px;margin: 0px 16px">
          <Content/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@theme/components/Navbar.vue'
  import NavLink from '@theme/components/NavLink.vue'
  import AlgoliaSearchBox from '@AlgoliaSearchBox'
  import SearchBox from '@SearchBox'
  import {resolveSidebarItems} from "../theme/util";
  export default {
    name: "appHelpDocsLayout",
    components: {
      Navbar,
      NavLink,
      SearchBox,
      AlgoliaSearchBox
    },
    data () {
      return {
        isSidebarOpen: false,
        linksWrapMaxWidth: null
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
      console.log(this.$page.frontmatter)
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

<style>
  .help-docs img {
    width: 90%;
    max-width: 360px;
    margin: 0 auto;
  }
  .help-docs p {
    display: flex;
  }
</style>

<style scoped lang="less">
  .search_div {
    height: 48px;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    width: 100%;
    top: 0px;
  }

  .search_bbxo {
    margin: 5px 16px;
  }

  .help_banner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 24vh;
    background-size: cover;
    background-image: url('../imags/appHelp/helpdocbanner.png')
  }

  .self-cont {
    background: #fff;
    min-height: 100vh;
  }
  .home {
    padding: 0rem 0rem 0;
    position: relative;
    margin: 0 auto;
    display: block;
    max-width: 1000px;
  }
  .features {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #eaecef;
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
