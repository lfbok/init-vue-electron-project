<template>
  <div class="page">
    <header>
      <div>
         <img src="@/assets/logo_b.png" width="40px" alt="logo">
      </div>
      <div>
        <h1>
          TOOL
        </h1>
      </div>
      <div></div>
      <div>
        <span
          ><i class="el-icon-remove min_btn" title="最小化" @click="minWindow"></i
        ></span>
        <span
          ><i class="el-icon-error close_btn" title="关闭" @click="closeWindow"></i
        ></span>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import { ipcRenderer } from "electron";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    minWindow() {
      ipcRenderer.send("min");
    },
    closeWindow() {
      this.$confirm("确定关闭吗？", "关闭软件", {
        type: "warning",
      }).then(() => {
        ipcRenderer.send("close");
      });
    },
  },
};
</script>

<style lang="scss">
.page {
  height: 100%;
  overflow: hidden;
  color: #000;
  header {
    color: #fff;
    height: 50px;
    background: #2196f3;
    box-shadow: 0 2px 4px 0 #666;
    display: flex;
    align-items: center;
    padding: 0 20px;
    -webkit-app-region: drag;
    > div {
      img{
        display: block;
      }
      h1{
        font-weight: bold;
        font-size: 22px;
        margin-left: 15px;
      }
      &:nth-of-type(3) {
        flex: 1;
      }
      &:nth-of-type(4) {
        -webkit-app-region: no-drag;
        > span {
          display: inline-block;
          width: 36px;
          height: 36px;
          margin-left: 5px;
          text-align: center;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          transition: background 0.2s linear;
          &::after{
            content:"";
            width: 16px;
            height: 16px;
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background: #fff;
          }
          &:hover{
            background:hsla(0,0%,100%,.12);
          }
          i {
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            font-size: 24px;
            &.min_btn {
              color: rgb(255, 189, 46);
            }
            &.close_btn {
              color: rgb(255, 95, 86);
            }
          }
        }
      }
    }
  }
  main {
    height: calc(100vh - 50px);
    overflow: auto;
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      background: rgba(100, 100, 100, 0.5);
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      background: #ededed;
    }
  }
}
</style>
