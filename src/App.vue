<template>
  <div class="container">
    <div class="page">
      <div id="wrap" class="wrap">
        <HelloWorld :form="form" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

const form = reactive({
  list: [
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/45.jpg",
          name: "金燕",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "荣耀",
          num: "1",
          group: "1",
          id: "349",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/53.jpg",
          name: "赵悦彤",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "荣耀",
          num: "2",
          group: "1",
          id: "335",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/58.jpg",
          name: "张益中",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "BGM",
          num: "3",
          group: "1",
          id: "286",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/20.jpg",
          name: "JOAN",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "",
          num: "4",
          group: "1",
          id: "443",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/39.jpg",
          name: "吴亦佳",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "BGM",
          num: "5",
          group: "1",
          id: "267",
        },
      ],
      id: "1",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/37.jpg",
          name: "关胜利",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "荣耀",
          num: "1",
          group: "2",
          id: "368",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/38.jpg",
          name: "楼奕",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "丰盛",
          num: "2",
          group: "2",
          id: "408",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/9.jpg",
          name: "顾淼",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "荣耀",
          num: "3",
          group: "2",
          id: "334",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/54.jpg",
          name: "袁选民",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "BGM",
          num: "4",
          group: "2",
          id: "270",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/26.jpg",
          name: "楼姝妍/楼倩",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "丰盛",
          num: "5",
          group: "2",
          id: "405",
        },
      ],
      id: "2",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/34.jpg",
          name: "高也婷",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "BGM",
          num: "1",
          group: "3",
          id: "268",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/8.jpg",
          name: "贾益鸣",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "",
          num: "2",
          group: "3",
          id: "411",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/29.jpg",
          name: "李聪",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "BGM",
          num: "3",
          group: "3",
          id: "261",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/26.jpg",
          name: "易琳",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "BGM",
          num: "4",
          group: "3",
          id: "272",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/4.jpg",
          name: "夏树阳",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "丰盛",
          num: "5",
          group: "3",
          id: "376",
        },
      ],
      id: "3",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/32.jpg",
          name: "曲志方",
          isNew: "1",
          color: "#F5BE87",
          stuStyle: "",
          num: "1",
          group: "4",
          id: "431",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/31.jpg",
          name: "贾昌林",
          isNew: "1",
          color: "#F5BE87",
          stuStyle: "大课",
          num: "2",
          group: "4",
          id: "301",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/8.jpg",
          name: "于益锦/于一锦",
          isNew: "0",
          color: "#F5BE87",
          stuStyle: "荣耀",
          num: "3",
          group: "4",
          id: "370",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/28.jpg",
          name: "蔡成",
          isNew: "1",
          color: "#F5BE87",
          stuStyle: "大课",
          num: "4",
          group: "4",
          id: "305",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/17.jpg",
          name: "yiyi",
          isNew: "1",
          color: "#F5BE87",
          stuStyle: "",
          num: "5",
          group: "4",
          id: "447",
        },
      ],
      id: "4",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/3.jpg",
          name: "何俊南",
          isNew: "1",
          color: "#F5BE87",
          stuStyle: "大课",
          num: "1",
          group: "5",
          id: "333",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/14.jpg",
          name: "闻发军",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "大课",
          num: "2",
          group: "5",
          id: "297",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/17.jpg",
          name: "李雪梅",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "荣耀",
          num: "3",
          group: "5",
          id: "371",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/70.jpg",
          name: "郑艇",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "丰盛",
          num: "4",
          group: "5",
          id: "406",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/35.jpg",
          name: "沈言桐/沈英",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "丰盛",
          num: "5",
          group: "5",
          id: "403",
        },
      ],
      id: "5",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/12.jpg",
          name: "徐生朗",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "BGM",
          num: "1",
          group: "6",
          id: "294",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/7.jpg",
          name: "张小玲",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "丰盛",
          num: "2",
          group: "6",
          id: "379",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/35.jpg",
          name: "徐康源",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "大课",
          num: "3",
          group: "6",
          id: "298",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/59.jpg",
          name: "于耀杰/于雅杰",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "荣耀",
          num: "4",
          group: "6",
          id: "369",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/12.jpg",
          name: "万雪峰",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "大课",
          num: "5",
          group: "6",
          id: "323",
        },
      ],
      id: "6",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/35.jpg",
          name: "周莺燕",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "BGM",
          num: "1",
          group: "7",
          id: "292",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/4.jpg",
          name: "和清选",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "丰盛",
          num: "2",
          group: "7",
          id: "372",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/2.jpg",
          name: "林燕红",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "荣耀",
          num: "3",
          group: "7",
          id: "348",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/15.jpg",
          name: "陈国平",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "BGM",
          num: "4",
          group: "7",
          id: "295",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/42.jpg",
          name: "俞春波",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "BGM",
          num: "5",
          group: "7",
          id: "285",
        },
      ],
      id: "7",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/26.jpg",
          name: "陈伟",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "大课",
          num: "1",
          group: "8",
          id: "299",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/33.jpg",
          name: "杜宝燕",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "丰盛",
          num: "2",
          group: "8",
          id: "373",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/8.jpg",
          name: "林海提",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "丰盛",
          num: "3",
          group: "8",
          id: "380",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/11.jpg",
          name: "徐生祥",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "大课",
          num: "4",
          group: "8",
          id: "296",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/27.jpg",
          name: "沈浪",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "",
          num: "5",
          group: "8",
          id: "444",
        },
      ],
      id: "8",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/37.jpg",
          name: "徐信鑫",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "大课",
          num: "1",
          group: "9",
          id: "300",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/34.jpg",
          name: "lsj",
          isNew: "0",
          color: "#F77F7F",
          stuStyle: "丰盛",
          num: "2",
          group: "9",
          id: "252",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/21.jpg",
          name: "张娟",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "大课",
          num: "3",
          group: "9",
          id: "318",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/1.jpg",
          name: "谭智砺",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "4",
          group: "9",
          id: "441",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/4.jpg",
          name: "沈熙博",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "丰盛",
          num: "5",
          group: "9",
          id: "409",
        },
      ],
      id: "9",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/57.jpg",
          name: "王智辰",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "荣耀",
          num: "1",
          group: "10",
          id: "367",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/28.jpg",
          name: "赵园君",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "丰盛",
          num: "2",
          group: "10",
          id: "402",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/12.jpg",
          name: "王童",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "BGM",
          num: "3",
          group: "10",
          id: "265",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/11.jpg",
          name: "王思蕴",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "丰盛",
          num: "4",
          group: "10",
          id: "392",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/14.jpg",
          name: "张雄",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "5",
          group: "10",
          id: "427",
        },
      ],
      id: "10",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/29.jpg",
          name: "张馨月",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "1",
          group: "11",
          id: "420",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/18.jpg",
          name: "史健立/史建立",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "大课",
          num: "2",
          group: "11",
          id: "315",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/15.jpg",
          name: "罗卿/罗清",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "丰盛",
          num: "3",
          group: "11",
          id: "385",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/1.jpg",
          name: "唐建军",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "BGM",
          num: "4",
          group: "11",
          id: "283",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/46.jpg",
          name: "欧建辉",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "5",
          group: "11",
          id: "445",
        },
      ],
      id: "11",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/25.jpg",
          name: "张鑫",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "荣耀",
          num: "1",
          group: "12",
          id: "364",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/60.jpg",
          name: "王瑜",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "丰盛",
          num: "2",
          group: "12",
          id: "378",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/9.jpg",
          name: "伍岳峰",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "丰盛",
          num: "3",
          group: "12",
          id: "389",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/26.jpg",
          name: "王丽君",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "荣耀",
          num: "4",
          group: "12",
          id: "339",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/21.jpg",
          name: "钱尧均",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "荣耀",
          num: "5",
          group: "12",
          id: "350",
        },
      ],
      id: "12",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/40.jpg",
          name: "张洪腾",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "BGM",
          num: "1",
          group: "13",
          id: "262",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/44.jpg",
          name: "佟心茹",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "2",
          group: "13",
          id: "442",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/12.jpg",
          name: "张俪霏",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "3",
          group: "13",
          id: "424",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/61.jpg",
          name: "马波",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "大课",
          num: "4",
          group: "13",
          id: "316",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/34.jpg",
          name: "周岩",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "丰盛",
          num: "5",
          group: "13",
          id: "382",
        },
      ],
      id: "13",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/6.jpg",
          name: "万昌鑫/万昌金",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "丰盛",
          num: "1",
          group: "14",
          id: "400",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/6.jpg",
          name: "殷伟伟",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "大课",
          num: "2",
          group: "14",
          id: "319",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/43.jpg",
          name: "杨清明",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "BGM",
          num: "3",
          group: "14",
          id: "263",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/42.jpg",
          name: "朱家欣",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "BGM",
          num: "4",
          group: "14",
          id: "287",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/7.jpg",
          name: "于海滨",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "5",
          group: "14",
          id: "418",
        },
      ],
      id: "14",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/48.jpg",
          name: "曹菊芳",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "1",
          group: "15",
          id: "410",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/38.jpg",
          name: "曾宪军",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "荣耀",
          num: "2",
          group: "15",
          id: "337",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/11.jpg",
          name: "孟芋辛",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "丰盛",
          num: "3",
          group: "15",
          id: "375",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/65.jpg",
          name: "杨颜瞳/杨实炫",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "大课",
          num: "4",
          group: "15",
          id: "317",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/18.jpg",
          name: "张嘉芯",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "大课",
          num: "5",
          group: "15",
          id: "312",
        },
      ],
      id: "15",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/25.jpg",
          name: "李玉桐",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "BGM",
          num: "1",
          group: "16",
          id: "271",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/10.jpg",
          name: "佘学真",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "2",
          group: "16",
          id: "435",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/48.jpg",
          name: "周洛霄",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "BGM",
          num: "3",
          group: "16",
          id: "264",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/30.jpg",
          name: "张裕",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "丰盛",
          num: "4",
          group: "16",
          id: "393",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/49.jpg",
          name: "于其峰/于其丰",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "大课",
          num: "5",
          group: "16",
          id: "321",
        },
      ],
      id: "16",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/29.jpg",
          name: "赵俨",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "1",
          group: "17",
          id: "421",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/64.jpg",
          name: "牛凤岗/牛风岗",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "2",
          group: "17",
          id: "412",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/42.jpg",
          name: "胡嘉玲/胡晓惠",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "大课",
          num: "3",
          group: "17",
          id: "309",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/15.jpg",
          name: "胡广",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "丰盛",
          num: "4",
          group: "17",
          id: "377",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/39.jpg",
          name: "罗心彤/罗蓉",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "荣耀",
          num: "5",
          group: "17",
          id: "351",
        },
      ],
      id: "17",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/68.jpg",
          name: "张峰",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "大课",
          num: "1",
          group: "18",
          id: "314",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/31.jpg",
          name: "单国英",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "BGM",
          num: "2",
          group: "18",
          id: "281",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/22.jpg",
          name: "钱龙",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "丰盛",
          num: "3",
          group: "18",
          id: "395",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/39.jpg",
          name: "石宜珈/石春雷",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "丰盛",
          num: "4",
          group: "18",
          id: "397",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/38.jpg",
          name: "张然/张娜",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "5",
          group: "18",
          id: "429",
        },
      ],
      id: "18",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/6.jpg",
          name: "郑珺/郑梅",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "BGM",
          num: "1",
          group: "19",
          id: "260",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/37.jpg",
          name: "喻杰",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "2",
          group: "19",
          id: "422",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/23.jpg",
          name: "蹇黎",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "大课",
          num: "3",
          group: "19",
          id: "310",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/22.jpg",
          name: "历跃",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "4",
          group: "19",
          id: "419",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/44.jpg",
          name: "李慧萍",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "荣耀",
          num: "5",
          group: "19",
          id: "352",
        },
      ],
      id: "19",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/38.jpg",
          name: "林默/林春梅",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "BGM",
          num: "1",
          group: "20",
          id: "282",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/41.jpg",
          name: "廖子嫣/廖余惠",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "荣耀",
          num: "2",
          group: "20",
          id: "338",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/47.jpg",
          name: "许煜欣",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "BGM",
          num: "3",
          group: "20",
          id: "275",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/66.jpg",
          name: "张芳芳",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "4",
          group: "20",
          id: "430",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/17.jpg",
          name: "孔雯竺",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "荣耀",
          num: "5",
          group: "20",
          id: "363",
        },
      ],
      id: "20",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/27.jpg",
          name: "苗嘉玲/苗向静",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "",
          num: "1",
          group: "21",
          id: "423",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/49.jpg",
          name: "王蒲荣",
          isNew: "0",
          color: "#F4A6F4",
          stuStyle: "丰盛",
          num: "2",
          group: "21",
          id: "388",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/33.jpg",
          name: "海燕",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "丰盛",
          num: "3",
          group: "21",
          id: "381",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/67.jpg",
          name: "陈伟",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "",
          num: "4",
          group: "21",
          id: "416",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/21.jpg",
          name: "胡婷婷",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "大课",
          num: "5",
          group: "21",
          id: "311",
        },
      ],
      id: "21",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/19.jpg",
          name: "李永科",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "大课",
          num: "1",
          group: "22",
          id: "328",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/9.jpg",
          name: "王群芳",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "2",
          group: "22",
          id: "353",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/52.jpg",
          name: "辛浩铭",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "BGM",
          num: "3",
          group: "22",
          id: "276",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/48.jpg",
          name: "卢慧妍",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "大课",
          num: "4",
          group: "22",
          id: "322",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/41.jpg",
          name: "洪瑜浩",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "大课",
          num: "5",
          group: "22",
          id: "329",
        },
      ],
      id: "22",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/23.jpg",
          name: "李莎莎",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "",
          num: "1",
          group: "23",
          id: "413",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/16.jpg",
          name: "傅何鑫",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "2",
          group: "23",
          id: "354",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/44.jpg",
          name: "万云萍",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "3",
          group: "23",
          id: "346",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/5.jpg",
          name: "刘明辉",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "",
          num: "4",
          group: "23",
          id: "414",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/42.jpg",
          name: "方艳",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "5",
          group: "23",
          id: "357",
        },
      ],
      id: "23",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/8.jpg",
          name: "何星桥",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "1",
          group: "24",
          id: "340",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/2.jpg",
          name: "罗蓉",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "",
          num: "2",
          group: "24",
          id: "417",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/21.jpg",
          name: "赵梓淳",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "3",
          group: "24",
          id: "365",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/20.jpg",
          name: "万安英",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "4",
          group: "24",
          id: "343",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/24.jpg",
          name: "韩铭",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "丰盛",
          num: "5",
          group: "24",
          id: "383",
        },
      ],
      id: "24",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/28.jpg",
          name: "李秀英",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "1",
          group: "25",
          id: "361",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/2.jpg",
          name: "许建国",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "BGM",
          num: "2",
          group: "25",
          id: "274",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/50.jpg",
          name: "王嫦",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "丰盛",
          num: "3",
          group: "25",
          id: "386",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/50.jpg",
          name: "张晓东",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "4",
          group: "25",
          id: "366",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/36.jpg",
          name: "薜丽燕",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "BGM",
          num: "5",
          group: "25",
          id: "277",
        },
      ],
      id: "25",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/40.jpg",
          name: "周峰改下一期",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "1",
          group: "26",
          id: "359",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/13.jpg",
          name: "李筱瑜",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "大课",
          num: "2",
          group: "26",
          id: "302",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/4.jpg",
          name: "倪君超",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "BGM",
          num: "3",
          group: "26",
          id: "289",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/3.jpg",
          name: "王卫琴",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "4",
          group: "26",
          id: "358",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/69.jpg",
          name: "向伟",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "大课",
          num: "5",
          group: "26",
          id: "331",
        },
      ],
      id: "26",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/15.jpg",
          name: "刘子莹",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "大课",
          num: "1",
          group: "27",
          id: "320",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/10.jpg",
          name: "常新恒",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "2",
          group: "27",
          id: "356",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/7.jpg",
          name: "刘珂岑",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "3",
          group: "27",
          id: "344",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/17.jpg",
          name: "于艳荣",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "4",
          group: "27",
          id: "362",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/35.jpg",
          name: "蔡君蔚",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "大课",
          num: "5",
          group: "27",
          id: "330",
        },
      ],
      id: "27",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/10.jpg",
          name: "包国红",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "1",
          group: "28",
          id: "355",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/33.jpg",
          name: "唐悦",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "",
          num: "2",
          group: "28",
          id: "415",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/24.jpg",
          name: "黄琼",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "荣耀",
          num: "3",
          group: "28",
          id: "341",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/7.jpg",
          name: "贾玉芝",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "大课",
          num: "4",
          group: "28",
          id: "327",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/46.jpg",
          name: "米姿霖/米维民",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "丰盛",
          num: "5",
          group: "28",
          id: "384",
        },
      ],
      id: "28",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/32.jpg",
          name: "阮芳",
          isNew: "0",
          color: "#FE9CC3",
          stuStyle: "BGM",
          num: "1",
          group: "29",
          id: "293",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/29.jpg",
          name: "卢宜颖",
          isNew: "0",
          color: "#C2A7F2",
          stuStyle: "大课",
          num: "2",
          group: "29",
          id: "326",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/50.jpg",
          name: "张小花",
          isNew: "0",
          color: "#C2A7F2",
          stuStyle: "丰盛",
          num: "3",
          group: "29",
          id: "407",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/46.jpg",
          name: "王小英",
          isNew: "0",
          color: "#C2A7F2",
          stuStyle: "丰盛",
          num: "4",
          group: "29",
          id: "404",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/31.jpg",
          name: "曾兰/曾玉兰",
          isNew: "0",
          color: "#C2A7F2",
          stuStyle: "大课",
          num: "5",
          group: "29",
          id: "324",
        },
      ],
      id: "29",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/36.jpg",
          name: "陈妙英",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "BGM",
          num: "1",
          group: "30",
          id: "279",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/16.jpg",
          name: "张再飞",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "BGM",
          num: "2",
          group: "30",
          id: "290",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/49.jpg",
          name: "刘美麟/刘平",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "丰盛",
          num: "3",
          group: "30",
          id: "399",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/2.jpg",
          name: "翟瑞利",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "BGM",
          num: "4",
          group: "30",
          id: "269",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/19.jpg",
          name: "杜昕芮",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "BGM",
          num: "5",
          group: "30",
          id: "280",
        },
      ],
      id: "30",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/18.jpg",
          name: "钱亚昆",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "荣耀",
          num: "1",
          group: "31",
          id: "336",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/44.jpg",
          name: "邓燕",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "丰盛",
          num: "2",
          group: "31",
          id: "396",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/34.jpg",
          name: "童春玲",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "BGM",
          num: "3",
          group: "31",
          id: "266",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/10.jpg",
          name: "周平阳",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "BGM",
          num: "4",
          group: "31",
          id: "291",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/13.jpg",
          name: "王祥",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "荣耀",
          num: "5",
          group: "31",
          id: "342",
        },
      ],
      id: "31",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/20.jpg",
          name: "刘锦峰",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "BGM",
          num: "1",
          group: "32",
          id: "259",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/22.jpg",
          name: "夏懿琳",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "BGM",
          num: "2",
          group: "32",
          id: "284",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/14.jpg",
          name: "徐若瑜",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "丰盛",
          num: "3",
          group: "32",
          id: "390",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/24.jpg",
          name: "张颖颖",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "BGM",
          num: "4",
          group: "32",
          id: "288",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/23.jpg",
          name: "杨慧",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "大课",
          num: "5",
          group: "32",
          id: "313",
        },
      ],
      id: "32",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/19.jpg",
          name: "王晞辰",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "丰盛",
          num: "1",
          group: "33",
          id: "394",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/16.jpg",
          name: "张燕妮",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "丰盛",
          num: "2",
          group: "33",
          id: "387",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/40.jpg",
          name: "泮少云",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "BGM",
          num: "3",
          group: "33",
          id: "278",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/45.jpg",
          name: "冯星瑜",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "丰盛",
          num: "4",
          group: "33",
          id: "401",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/45.jpg",
          name: "徐小军",
          isNew: "0",
          color: "#CDD0DE",
          stuStyle: "丰盛",
          num: "5",
          group: "33",
          id: "391",
        },
      ],
      id: "33",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/25.jpg",
          name: "丁钰庭",
          isNew: "0",
          color: "",
          stuStyle: "",
          num: "1",
          group: "34",
          id: "448",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/5.jpg",
          name: "赵磊",
          isNew: "0",
          color: "",
          stuStyle: "",
          num: "2",
          group: "34",
          id: "434",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/13.jpg",
          name: "王鹤庭",
          isNew: "0",
          color: "",
          stuStyle: "丰盛",
          num: "3",
          group: "34",
          id: "374",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/11.jpg",
          name: "儿子叶璨铭",
          isNew: "0",
          color: "",
          stuStyle: "大课",
          num: "4",
          group: "34",
          id: "304",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/56.jpg",
          name: "陈妍",
          isNew: "0",
          color: "",
          stuStyle: "",
          num: "5",
          group: "34",
          id: "438",
        },
      ],
      id: "34",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/41.jpg",
          name: "周梓恒",
          isNew: "0",
          color: "",
          stuStyle: "荣耀",
          num: "1",
          group: "35",
          id: "360",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/30.jpg",
          name: "雷永正",
          isNew: "0",
          color: "",
          stuStyle: "大课",
          num: "2",
          group: "35",
          id: "308",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/3.jpg",
          name: "宗克玉",
          isNew: "0",
          color: "",
          stuStyle: "",
          num: "3",
          group: "35",
          id: "432",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/23.jpg",
          name: "肖子恬",
          isNew: "0",
          color: "",
          stuStyle: "大课",
          num: "4",
          group: "35",
          id: "332",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/1.jpg",
          name: "郑晓斌",
          isNew: "0",
          color: "",
          stuStyle: "",
          num: "5",
          group: "35",
          id: "433",
        },
      ],
      id: "35",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/14.jpg",
          name: "王桂花",
          isNew: "0",
          color: "",
          stuStyle: "BGM",
          num: "1",
          group: "36",
          id: "273",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/5.jpg",
          name: "YEH HONG SHI",
          isNew: "0",
          color: "",
          stuStyle: "大课",
          num: "2",
          group: "36",
          id: "303",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/43.jpg",
          name: "高慧善",
          isNew: "0",
          color: "",
          stuStyle: "",
          num: "3",
          group: "36",
          id: "428",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/43.jpg",
          name: "陈鼎元",
          isNew: "0",
          color: "",
          stuStyle: "荣耀",
          num: "4",
          group: "36",
          id: "345",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/32.jpg",
          name: "李宗宴",
          isNew: "0",
          color: "",
          stuStyle: "",
          num: "5",
          group: "36",
          id: "446",
        },
      ],
      id: "36",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/48.jpg",
          name: "杨宗霖",
          isNew: "0",
          color: "",
          stuStyle: "丰盛",
          num: "1",
          group: "37",
          id: "398",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/18.jpg",
          name: "李陆平",
          isNew: "0",
          color: "",
          stuStyle: "荣耀",
          num: "2",
          group: "37",
          id: "347",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/6.jpg",
          name: "卢立鸣/卢唤邦",
          isNew: "0",
          color: "",
          stuStyle: "大课",
          num: "3",
          group: "37",
          id: "325",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/32.jpg",
          name: "刘进田",
          isNew: "0",
          color: "",
          stuStyle: "",
          num: "4",
          group: "37",
          id: "439",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/16.jpg",
          name: "王力梓",
          isNew: "0",
          color: "",
          stuStyle: "",
          num: "5",
          group: "37",
          id: "425",
        },
      ],
      id: "37",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/49.jpg",
          name: "张文军",
          isNew: "0",
          color: "",
          stuStyle: "",
          num: "1",
          group: "38",
          id: "436",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/30.jpg",
          name: "李艾玲",
          isNew: "0",
          color: "",
          stuStyle: "大课",
          num: "2",
          group: "38",
          id: "306",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%BE%8E%E5%A5%B3%E5%A4%B4%E5%83%8F/43.jpg",
          name: "袁祖社",
          isNew: "0",
          color: "",
          stuStyle: "",
          num: "3",
          group: "38",
          id: "440",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%8A%A8%E7%89%A9%E5%A4%B4%E5%83%8F/46.jpg",
          name: "杨秋月",
          isNew: "0",
          color: "",
          stuStyle: "",
          num: "4",
          group: "38",
          id: "426",
        },
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E7%94%B7%E4%BA%BA%E5%A4%B4%E5%83%8F/50.jpg",
          name: "谭会川",
          isNew: "0",
          color: "",
          stuStyle: "",
          num: "5",
          group: "38",
          id: "437",
        },
      ],
      id: "38",
    },
    {
      list: [
        {
          headImage:
              "https://images-gy.oss-cn-beijing.aliyuncs.com/imgtest/%E5%A5%B3%E4%BA%BA%E5%A4%B4%E5%83%8F/47.jpg",
          name: "李小芳",
          isNew: "0",
          color: "",
          stuStyle: "大课",
          num: "1",
          group: "39",
          id: "307",
        },
      ],
      id: "39",
    },
  ],
  condition: {
    oldStuNew: null,
    genderMan: null,
    grade: null,
    region: null,
    character: null,
    oldStuOld: null,
    course: null,
    num: null,
    colsNum: 5, //横排组数
    demand: null,
    genderWoman: null,
  },
});
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #e6e7ee;
  flex-direction: column;
}

.action-buttons {
  row-gap: 12px;
  column-gap: 12px;
  flex-flow: row wrap;
  margin-top: 10px;
  display: flex;
  flex-direction: row;

  .action-button1 {
    width: 127px;
    background-color: #428de7;
    color: white;
    font-weight: 500;
    height: 50px;
  }

  .action-button2 {
    width: 127px;
    font-weight: 500;
    background-color: #d5e5f9;
    height: 50px;
    color: #428de7;
  }
}

.page {
  padding: 20px;
  overflow-x: auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  .select-parent {
    width: 100%;
    display: flex;
    align-items: center;

    .select-card {
      padding: 46px 36px;
      background-color: #f2f3fa;
      border-radius: 14px;

      .select {
        display: flex;
        flex-flow: row wrap;
        flex-direction: row;
        align-items: center;
        margin-bottom: 32px;

        .select-title {
          color: #000000;
          font-weight: bold;
          font-size: 14px;
        }

        .select-item {
          margin-left: 16px;
          display: flex;
          align-items: center;
          flex-wrap: nowrap; /* 禁止换行 */
          flex-direction: row;

          .select-item-title {
            display: flex;
            margin-right: 10px;
            flex-direction: row;
            align-items: center;
            color: #666666;
            flex-shrink: 1; /* 允许缩小以适应内容 */
            font-size: 14px;
            white-space: nowrap;

            .select-item-title-star {
              color: red;
            }
          }

          .select-item-select {
            flex-grow: 1; /* 填充剩余空间 */
            min-width: 140px;
          }

          .select-item-input {
            flex-grow: 1; /* 填充剩余空间 */
            max-width: 140px;
          }

          .select-item-ratio {
            width: 50px;
          }

          .select-item-ratio-point {
            margin: 0 5px;
          }

          .select-item-right {
            margin-left: 10px;
          }
        }
      }
    }
  }
}

.desk-lin {
  width: 100%;
  display: flex;
  flex-direction: row;

  .desk {
    margin: 0px auto;
    width: 189px;
    height: 66px;
    border-radius: 8px;
    text-align: center;
    background-color: rgba(181, 184, 207, 0.5);
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    line-height: 66px;
    font-style: normal;
  }
}

.wrap {
  background-color: #e6e7ee;
  padding-top: 50px;
}
</style>
