
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
  title: '情人节抽奖',
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
  { key: 'q', name: '全身按摩(30min)', alias: '按摩(30min)', image: './images/spa.png',  description: '「奢华享受, 感受轻松」' },
  { key: 'e', name: 'TASAKI BalanceCharm项链', alias: 'TASAKI', image: './images/tasaki.png',  description: '「定格优雅, 风格隽永」' },
  { key: 'r', name: '全定制旅行', alias: '全定制旅行', image: './images/travel.png',  description: '「说走就走, 私享定制」' },
  { key: 'i', name: 'LAMER精华乳霜30ml', alias: 'LAMER乳霜', image: './images/lamer.png',  description: '「柔韧修护, 纵享年轻」' },
  { key: 'w', name: '黄金(10g)', alias: '黄金(10g)', image: './images/gold.png',  description: '「金诚可贵, 情比金坚」' },
  { key: 't', name: '洗碗券x12', alias: '洗碗券x12', image: './images/wash.png',  description: '「每月一次, 轻松自在」' },
  { key: 'y', name: '1314红包', alias: '1314', image: './images/money.png',  description: '「从今往后，我都会在你旁边」' },
  { key: 'u', name: 'YSL小金条口红', alias: 'YSL小金条', image: './images/ysl.png',  description: '「直击你, 非45°的美」' },
];
