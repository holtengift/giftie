
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = true;

// 首页配置
export const homeConfig = {
  // 标题
  title: '生日礼抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: 'Only for Rita', },
    { key: 's', wording: '2023.02.14', },
  ],
  // 最终解释权归属人
  owner: 'Holten',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '全身按摩(30min)', alias: '全身按摩', image: '/images/spa.png',  description: '「经典迷人色彩，彰显奢华魅力」' },
  { key: 'e', name: '兰蔻小黑瓶套装', alias: '小黑瓶套装', image: '/images/spa.png',  description: '「强维稳，快修护」' },
  { key: 'r', name: '520红包', alias: '520', image: '/images/spa.png',  description: '“想给你唱一百首情歌”' },
  { key: 'w', name: '黄金(10g)', alias: '黄金(10g)', image: '/images/gold.png',  description: '“为你承包一辈子的 VIP”' },
  { key: 't', name: 'Dior星空套装', alias: 'Dior星空', image: '/images/gold.png',  description: '「百变唇妆，精美雕琢」' },
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/gold.png',  description: '“从今往后，我都会在你旁边”' },
  { key: 'u', name: 'UR购物券：¥1,000', alias: 'UR', image: '/images/gold.png',  description: '“UR！买！”' },
  { key: 'i', name: 'Dyson美发套装', alias: '戴森', image: '/images/gold.png',  description: '「不同造型需求，全面满足」' },
];
