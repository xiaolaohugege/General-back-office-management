<template>
  <div class="headr-container">
    <div class="l-containt">
      <el-button style="margin-right: 20px;" @click="handMenu" icon="el-icon-menu" size="mini"></el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item  v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>
        
      </el-breadcrumb>

    </div>
    <div class="r-contain">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img id="user" src="../assets/logo.png" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
          
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data(){
    return{
      
    }
  },
  methods:{
    handMenu(){
      this.$store.commit('collapseMenu')
    }
  },
  computed:{
    ...mapState({
      tags:state=> state.tab.tabsList
    })
  },

};
</script>

<style lang="less" scoped>
.headr-container {
  background: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    color: #fff;
    margin-left: 10px;
    font-size: 14px;
  }
  #user{
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
  .l-containt{
    display: flex;
    align-items: center;
    /deep/.el-breadcrumb__item{
        .el-breadcrumb__inner{
            font-weight: normal;
            &.is-link{
              color:#666
            }
          }
          &:last-child{
            .el-breadcrumb__inner{
              color: #fff;
            }
          }
    }
  }
}
</style>