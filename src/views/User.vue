<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
      >
      <!-- 用户表单信息 -->
      <el-form :inline="true" ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="姓名" prop="name">
          <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请输入">
          <el-option label="男" :value="1"></el-option>
          <el-option label="女" :value="0"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
            <el-date-picker
              v-model="form.birth"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
</el-dialog>
    <div class="manage-header">
      <el-button @click="handleAdd" type="primary">
        + 新增
      </el-button>
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        >
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
        <template slot-scope="scope">
        
          <span style="margin-left: 10px">{{ scope.row.sex===1 ? '男' : '女'}}</span>
         </template>
      </el-table-column>
      <el-table-column
        prop="birth"
        label="出生日期">
      </el-table-column>
      <el-table-column
        prop="addr"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="addr"
        label="地址">
        <template slot-scope= "scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
       </template>
      </el-table-column>
      
    </el-table>
   
    </div>
    <div>
      <el-pagination
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getUser,addUser,editUser,delUser } from '../api/index'
export default {
    data(){
      return{
        dialogVisible:false,
        form:{
          name:'',
          age:'',
          sex:'',
          birth:'',
          addr:''
        },
        rules:{
          name:[
            { required: true, message: '请输入name',}
          ],
       
         age:[
            { required: true, message: '请输入age',}
          ],
        
        sex:[
            { required: true, message: '请输入sex',}
          ],
        
        birth:[
            { required: true, message: '请输入birth',}
          ],
        
        addr:[
            { required: true, message: '请输入addr',}
          ],
        },
        tableData:[],
        modalType:0,//0表示新增弹窗   1表示编辑
        total:0//当前总条数


      }
    },
    methods:{
      submit(){
        this.$refs.form.validate((valid)=>{

          // console.log(valid,'valid');
          if(valid){
            //对后续表单数据进行处理
            if(this.modalType===0){
              addUser(this.form).then(()=>{
                this.getList()
              })
            }else{
              editUser(this.form).then(()=>{
                this.getList()
            })
          }
            this.$refs.form.resetFields()
            this.dialogVisible = false
          }
        
        })
      },
      handleClose(){
        this.$refs.form.resetFields()
        this.dialogVisible=false
      },
      cancel(){
        this.handleClose()
      },
      handleEdit(row){
        this.modalType=1
        this.dialogVisible=true
        //注意需要对当前数据进行深拷贝，否则出错
        this.form = JSON.parse(JSON.stringify(row))
      },
      handleDelete(row){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delUser({id:row.id}).then(()=>{
            this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getList()
          })
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      handleAdd(){
        this.modalType=0
        this.dialogVisible=true
      },
      getList(){
        getUser().then(({data})=>{
        console.log(data);
        this.tableData = data.list
        this.total = data.list.count|| 0
      })
      }
    },
    mounted(){
      this.getList()
    }
}
</script>

<style>

</style>