<!--分组组件-->
<template>
  <div
      :style="{ flexDirection: isReverse ? 'column-reverse' : 'column' }"
      class="container"
  >
    <div
        :style="{ gridTemplateColumns: styleColumns, width: styleWidth }"
        class="grid-parent"
    >
      <div
          style="
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        "
      >
        <VueDraggable
            v-model="form.list"
            :style="{ gridTemplateColumns: styleColumns, width: styleWidth }"
            animation="150"
            class="grid"
            ghostClass="ghost"
            group="class"
            @add="onAdd"
            @end="onEnd"
            @remove="remove"
            @start="onStart"
            @update="onUpdate"
        >
          <div
              v-for="(item, index) in form.list"
              :key="item.id"
              class="team-card"
          >
            <div class="team-card-title">
              {{ formatTitle(item.id) }} ({{ item.list.length }}人)
            </div>
            <VueDraggable
                v-model="item.list"
                animation="150"
                class="team-card-list"
                ghostClass="ghost"
                group="team"
                @add="onAdd"
                @end="onEnd"
                @remove="remove"
                @start="onStart"
                @update="onUpdate"
            >
              <div
                  v-for="(child, childIndex) in item.list"
                  :key="child.id"
                  class="student"
                  @click="openUserDetail(child)"
              >
                <div class="student-top">
                  <img :src="child.headImage" alt="" class="student-img" />
                  <div
                      v-if="childIndex === 0"
                      class="student-tag student-leader"
                  >
                    组长
                  </div>
                  <!--isNew: null,//1:是，0:否-->
                  <div
                      v-else-if="child.isNew === '1'"
                      class="student-tag student-new"
                  >
                    新人
                  </div>
                  <div v-if="child.stuStyle" class="student-tag student-type">
                    {{ child.stuStyle }}
                  </div>
                </div>
                <div class="student-name">
                  <div
                      :style="{ backgroundColor: child.color }"
                      class="line"
                  ></div>
                  <div class="text">
                    {{ child.name }}
                  </div>
                </div>
              </div>
            </VueDraggable>
            <DeleteOutlined
                v-if="item.list.length === 0"
                class="team-card-delete"
                @click="deleteEmptyGroup(index)"
            />
          </div>
        </VueDraggable>
        <div style="position: absolute; bottom: -50px; font-size: 20px">
          总计{{ count }}人
        </div>
      </div>
      <div class="color-card-list">
        <div v-for="item in colorList" :key="item.name" class="color-card">
          <div :style="{ backgroundColor: item.color }" class="color"></div>
          <div class="title">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { VueDraggable } from "vue-draggable-plus";
import request from "@/api/request";

const emit = defineEmits(["onUpdate", "refreshUser"]);
const props = defineProps({
  title: {
    type: String,
    default: "%s组", //%s占位符
  },
  form: {
    type: Object,
    default: null,
  },
  resetGroupWidth: {
    type: Boolean,
    default: false,
  },
});
onMounted(() => {});
const formatTitle = (text) => {
  return props.title.replace(/%s/g, text);
};
const onStart = (text) => {
  console.log("----------onStart----------");
  console.log(text);
};
const onEnd = (text) => {
  console.log("----------onEnd----------");
  console.log(text);
};
// 监听布局变化
watch(
    () => props.resetGroupWidth,
    () => {
      styleColumns.value = `repeat(${props.form.condition.colsNum}, 1fr)`;
      styleWidth.value =
          502 * props.form.condition.colsNum +
          23 * (props.form.condition.colsNum - 1) +
          "px";
    },
);
// 监听列表数据变化
watch(
    () => props.form.list,
    () => {
      changeIndexName();
      changeCount();
    },
    { deep: true },
);
// 监听列表数据变化
watch(
    () => props.form.condition.course,
    () => {
      loadColors();
    },
);
const count = ref(0);
//计算总人数
const changeCount = () => {
  console.log(props.form);
  count.value = 0;
  props.form.list.forEach((item) => {
    if (item.list) {
      count.value += item.list.length;
    }
  });
};
const changeIndexName = () => {
  console.log(props.form);
  let id = 1;
  props.form.list.forEach((item) => {
    if (id % 10 === 4) {
      id++;
    }
    item.id = id;
    id++;
  });
};
const isReverse = ref(false);
const toggleOrder = () => {
  isReverse.value = !isReverse.value;
};
const styleWidth = ref();
const styleColumns = ref();
const showDetailPop = ref(false);
const showUserDetailMorePop = ref(false);
const item = ref();
const openUserDetail = (value) => {
  item.value = value;
  showDetailPop.value = true;
};
const openUserDetailMore = () => {
  showDetailPop.value = false;
  showUserDetailMorePop.value = true;
};
const closeUserDetailMore = () => {
  emit("refreshUser");
  showUserDetailMorePop.value = false;
};
const colorList = ref([]);
// 获取图例
const loadColors = async () => {
  try {
    console.log("---------loadColors-------");
    const response = await request.post("/wgcrmadmin/getlegend", {
      course: props.form.condition.course,
    });
    console.log(response);
    colorList.value = response;
  } catch (error) {
    message.error(error.msg);
  }
};
//删除空的分组
const deleteEmptyGroup = (index) => {
  props.form.list.splice(index, 1);
};
const onUpdate = () => {
  console.log("update");
  emit("onUpdate");
};

const onAdd = () => {
  console.log("add");
  emit("onUpdate");
};

const remove = (event) => {
  console.log("remove:");
  console.log(event);
};
</script>
<style lang="less" scoped>
.container {
  margin-top: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.color-card-list {
  margin-top: 20px;
  display: flex;
  max-width: 460px;
  row-gap: 16px;
  flex-flow: wrap;
  column-gap: 10px;

  .color-card {
    width: 160px;
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .title {
    margin-left: 10px;
    height: 20px;
    font-weight: 400;
    font-size: 17px;
    color: rgba(0, 0, 0, 0.7);
    line-height: 20px;
    text-align: left;
    font-style: normal;
  }

  .color {
    width: 50px;
    border-radius: 4px;
    height: 26px;
  }
}

.grid-parent {
  margin: 20px auto;

  .grid {
    display: grid;
    flex-direction: row;
    justify-content: start;
    grid-template-columns: repeat(3, auto); /* 创建三等分的列 */
    grid-auto-rows: auto; /* 自动调整行高以适应内容 */
    row-gap: 50px;
    position: relative;
    column-gap: 23px;

    .team-card {
      width: 502px; /* 宽度固定为100px */
      background: #f2f3fa;
      border-radius: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      overflow: visible;
      position: relative;
      flex-direction: column;

      .team-card-delete {
        top: 10px;
        right: 10px;
        position: absolute;
        color: #bc1515;
        font-size: 16px;
      }

      .team-card-title {
        height: 30px;
        top: -35px;
        position: absolute;
        font-weight: 400;
        font-size: 14px;
        color: #999999;
        line-height: 20px;
        text-align: left;
        font-style: normal;
        align-items: center;
        display: flex;
      }

      .team-card-list {
        column-gap: 12px;
        padding: 30px 30px;
        width: 100%;
        row-gap: 12px;
        height: auto; /* 高度自适应 */
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 创建三等分的列 */
        grid-auto-rows: auto; /* 自动调整行高以适应内容 */
        min-height: 130px;

        .student {
          display: flex;
          flex-direction: column;
          height: 94px;
          border-radius: 8px;
          overflow: hidden;
          background: white;
          padding: 18px 16px;
          box-sizing: border-box;
          cursor: pointer;
          position: relative;

          .student-top {
            display: flex;
            align-items: center;
            flex-direction: row;

            .student-img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              object-fit: cover;
              margin-right: 9px;
            }

            .student-tag {
              margin-left: 4px;
              width: 30px;
              height: 16px;
              border-radius: 2px;
              font-weight: 500;
              font-size: 9px;
              line-height: 16px;
              text-align: center;
              font-style: normal;
            }

            .student-type {
              border: 1px solid rgba(74, 144, 226, 0.3);
              color: #4687d2;
            }

            .student-leader {
              border: 1px solid rgba(185, 115, 0, 0.3);
              color: #f4a100;
            }

            .student-new {
              color: #3fc58d;
              border: 1px solid rgba(55, 126, 103, 0.3);
            }
          }

          .student-name {
            margin-top: 8px;
            width: 100%;
            height: 20px;
            position: relative;

            .line {
              width: 100%;
              position: absolute;
              bottom: 0; /* 将横条放置在 div 的底部 */
              left: 0;
              height: 6px; /* 横条的高度 */
            }

            .text {
              /* 防止文本换行 */
              white-space: nowrap;
              /* 隐藏超出容器的文本 */
              overflow: hidden;
              /* 在文本被截断的地方显示省略号 */
              text-overflow: ellipsis;
              font-weight: 500;
              font-size: 14px;
              color: #000000;
              line-height: 20px;
              text-align: left;
              font-style: normal;
              position: absolute;
              z-index: 1; /* 设置较高的 z-index 值，确保文本显示在横条上方 */
            }
          }
        }
      }
    }
  }
}

.ghost {
  opacity: 0.2;
  background: #ffffff;
}
</style>
