<template>
  <div class="home-container">
    <el-container>
      <el-header>
        <div>
          <img src="../assets/loginImg/featherIcon.webp" alt=""/>
          <span>ApplicationFramework</span>
        </div>
        <div>
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
                <el-icon class="el-icon-user" :size="25"><User/></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="loginOut">
                  <el-icon>
                    <Position/>
                  </el-icon>
                  退出
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse ? '60px':'140px'">
          <div style="color: white; cursor: pointer;" @click="isPutAway">
            <el-icon v-if="!isHide" style="left: 40%;">
              <DArrowLeft/>
            </el-icon>
            <el-icon v-if="isHide" style="left: 40%;">
              <DArrowRight/>
            </el-icon>
          </div>
          <!-- 导航菜单 -->
          <el-menu
              style="text-align: left;"
              background-color="#333744"
              text-color="#fff"
              :unique-opened="true"
              :collapse="isCollapse"
              :router="true"
              :default-active="activePath"
              :collapse-transition="false">
            <el-sub-menu :index="item.id" v-for="item in menuList" :key="item.id">
              <template #title>
                <el-icon :size="18">
                  <component :is="item.menuIcon"></component>
                </el-icon>
                <span>{{ item.menuName }}</span>
              </template>
              <el-menu-item :index="'/'+item2.menuRoute" v-for="item2 in item.children" :key="item2.id"
                            @click="activeSave('/'+item2.menuRoute)">
                <template #title>
                  <el-icon :size="18">
                    <component :is="item2.menuIcon"></component>
                  </el-icon>
                  <span> {{ item2.menuName }}</span>
                </template>
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main>
          <RouterView/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import {menuList} from "@/assets/js/menuList";

export default {
  name: 'Home',
  data() {
    return {
      menuList: [],
      isCollapse: true,
      activePath: '',
      isHide: false,
    }
  },
  async created() {
    //导航激活的状态
    this.activePath = window.sessionStorage.getItem('activePath');
    this.menuList = menuList
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case 'loginOut':
          this.loginOut()
          break
      }
    },
    //退出登录
    loginOut() {
      window.sessionStorage.removeItem('startActivation');
      window.sessionStorage.removeItem('activePath');
      this.$router.push({path: '/'})
      this.$message({
        message: 'See You Later',
        type: 'success',
        center: true
      })
    },
    isPutAway() {
      this.isCollapse = !this.isCollapse
      this.isHide = !this.isHide
    },
    //点击导航，有激活的状态
    activeSave(path) {
      this.activePath = path;
      window.sessionStorage.setItem('activePath', path);
    }
  }

}
</script>

<style scoped>
.home-container {
  height: 100%;
  background: #c4c4c4;
}

.el-container {
  height: 100%;
}

.el-header {
  height: 40px !important;
  background: #303741;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 20px;
  padding-top: 5px;
}

.el-header img {
  vertical-align: middle;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 15px;
}

.el-aside {
  overflow: hidden;
  background: #303741;
  height: 100%;
  box-sizing: border-box;
}

.el-main {
  background: #ececec;
  padding: unset;
}

.el-menu {
  border-right: solid 1px #303741;
}

.el-icon-user {
  padding-top: 5px;
  font-size: 30px;
  cursor: pointer;
  color: white;
}


</style>
