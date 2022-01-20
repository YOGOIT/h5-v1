<template>
  <div id="content" class="container">
    <div class="navheader borderbox">
      <img
        class="back"
        @click="goBack()"
        src="../../assets/img/icon-back.png"
      />
      <div class="title">我的证书</div>
    </div>
    <!-- <div
      class="message-item"
      @click="read(item)"
      :class="{ readed: item.read_at }"
      v-for="item in list"
      :key="item.id"
    >
      <div class="content">{{ item.data.message }}</div>
      <div class="date">{{ item.created_at | changeTime }}</div>
    </div> -->
    <div>
      <ul>
        <li v-for="item in list" :key="item.id">
          <img
            src="https://api.camec.sdyougao.com/storage/images/mO1QPZZ4VsoVjGN2eK8wznrobr3Ju92Q84e4UpJX.png"
            alt=""
          />
          {{ item.content }}
        </li>
      </ul>
    </div>
    <div class="drop">
      <img v-show="loading && !over" src="../../assets/img/Spinload.gif" />
      <span v-if="over">已经到底了</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      pagination: {
        page: 0,
        page_size: 20,
      },
      over: false,
      loading: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.ScrollToBottomEvt, true);
    if (this.pagination.page === 0) {
      this.getData(true);
    }
  },
  beforeDestroy() {
    // 记得销毁event
    window.removeEventListener("scroll", this.ScrollToBottomEvt, true);
  },
  methods: {
    ScrollToBottomEvt() {
      const el = document.getElementById("content");
      const toBottom = el.scrollHeight - window.screen.height - el.scrollTop;
      if (toBottom < 10) {
        this.getData(true);
      }
    },
    getData(more = false) {
      if (this.over) {
        return;
      }
      if (this.loading) {
        return;
      }
      if (more) {
        this.pagination.page++;
      }
      this.loading = true;
      this.$api.Member.Zhengshus(this.pagination).then((res) => {
        let list = res.data;
        if (list.length > 0) {
          this.list.push(...list);
        }
        setTimeout(() => {
          this.loading = false;
          if (list.length < this.pagination.page_size) {
            this.over = true;
          }
        }, 200);
      });
    },
    read(item) {
      if (item.read_at) {
        return;
      }
      this.$api.Member.ReadMessage(item.id).then(() => {
        item.read_at = 1;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  box-sizing: border-box;
  padding-top: 50px;
  background: #f6f6f6;
}
.drop {
  display: inline-block;
  width: 100%;
  text-align: center;
  color: #cccccc;
  font-size: 14px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.message-item {
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  padding: 10px 15px;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &:active {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .content {
    width: 100%;
    height: auto;
    float: left;
    font-size: 14px;
    color: #333333;
    line-height: 20px;
    margin-bottom: 10px;
    word-break: break-all;
  }

  .date {
    width: 100%;
    height: auto;
    float: left;
    font-size: 10px;
    color: rgba(0, 0, 0, 0.3);
  }

  &.readed {
    .content {
      color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>