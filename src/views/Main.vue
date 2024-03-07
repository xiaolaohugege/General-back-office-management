<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <CommonAsid/>
      </el-aside>
      <el-container>
        <el-header>
            <common-head/>
        </el-header>
         <common-tag/>
        <el-main>
          <!-- <h1>main</h1> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAsid from '../components/CommonAsid'
import CommonHead from '../components/CommonHead.vue'
import CommonTag from '../components/CommenTag.vue'
export default {
    data(){
        return {

        }
    },
    components:{CommonAsid,CommonHead,CommonTag}
};
</script>

<style lang="less" scoped>
.el-header{
  padding: 0;

}
</style>