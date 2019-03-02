const type = {
  udon: "udon",
  tempura: "tempura",
  topping: "topping",
  other: "other",
  all: "all"
};
/*
アレルギー情報に関して
配列で情報を持たせる。
[小麦,そば,卵,乳,落花生,えび,かに]
1がアレルギーあり、
0がアレルギーなし。
  */
const allergy_list = {
  komugi: {
    komugi: 1,
    soba: 0,
    tamago: 0,
    nyu: 0,
    rakkasei: 0,
    ebi: 0,
    kani: 0
  },
  komugi_tamago_nyu: {
    komugi: 1,
    soba: 0,
    tamago: 1,
    nyu: 1,
    rakkasei: 0,
    ebi: 0,
    kani: 0
  },
  nashi: {
    komugi: 0,
    soba: 0,
    tamago: 0,
    nyu: 0,
    rakkasei: 0,
    ebi: 0,
    kani: 0
  },
  komugi_tamago: {
    komugi: 1,
    soba: 0,
    tamago: 1,
    nyu: 0,
    rakkasei: 0,
    ebi: 0,
    kani: 0
  },
  komugi_tamago_ebi_kani: {
    komugi: 1,
    soba: 0,
    tamago: 1,
    nyu: 0,
    rakkasei: 0,
    ebi: 1,
    kani: 1
  },
  komugi_ebi_kani: {
    komugi: 1,
    soba: 0,
    tamago: 0,
    nyu: 0,
    rakkasei: 0,
    ebi: 1,
    kani: 1
  },
  komugi_nyu: {
    komugi: 1,
    soba: 0,
    tamago: 0,
    nyu: 1,
    rakkasei: 0,
    ebi: 0,
    kani: 0
  },
  komugi_tamago_nyu_ebi: {
    komugi: 1,
    soba: 0,
    tamago: 1,
    nyu: 1,
    rakkasei: 0,
    ebi: 1,
    kani: 0
  },
  komugi_tamago_nyu_ebi_kani: {
    komugi: 1,
    soba: 0,
    tamago: 1,
    nyu: 1,
    rakkasei: 0,
    ebi: 1,
    kani: 1
  },
  tamago: {
    komugi: 0,
    soba: 0,
    tamago: 1,
    nyu: 0,
    rakkasei: 0,
    ebi: 0,
    kani: 0
  },
  ebi_kani: {
    komugi: 0,
    soba: 0,
    tamago: 0,
    nyu: 0,
    rakkasei: 0,
    ebi: 1,
    kani: 1
  }
};
// const allergy_list = {
//   komugi: [1, 0, 0, 0, 0, 0, 0],
//   komugi_tamago_nyu: [1, 0, 1, 1, 0, 0, 0],
//   nashi: [0, 0, 0, 0, 0, 0, 0],
//   komugi_tamago: [1, 0, 1, 0, 0, 0, 0],
//   komugi_tamago_ebi_kani: [1, 0, 1, 0, 0, 1, 1],
//   komugi_ebi_kani: [1, 0, 0, 0, 0, 1, 1],
//   komugi_nyu: [1, 0, 0, 1, 0, 0, 0],
//   komugi_tamago_nyu_ebi: [1, 0, 1, 1, 0, 1, 0],
//   komugi_tamago_nyu_ebi_kani: [1, 0, 1, 1, 0, 1, 1],
//   tamago: [0, 0, 1, 0, 0, 0, 0],
//   ebi_kani: [0, 0, 0, 0, 0, 1, 1]
// };

const all_list = [
  //クーポン用
  {
    name: "大根おろし",
    price: 70,
    type: type.topping,
    img: "./topping/topping_oroshi@2x.png",
    coupon_used: false,
    allergy: allergy_list.nashi
  },
  {
    name: "温泉玉子",
    price: 70,
    type: type.topping,
    img: "./topping/topping_ontama@2x.png",
    coupon_used: false,
    allergy: allergy_list.tamago
  },
  {
    name: "野菜かき揚げ天",
    price: 130,
    img: "./tempura/kakiage.svg",
    type: type.tempura,
    coupon_used: false,
    allergy: allergy_list.komugi_tamago_nyu
  },
  {
    name: "いなり",
    price: 100,
    img: "./other/inari.svg",
    type: type.other,
    coupon_used: false,
    allergy: allergy_list.komugi
  },
  {
    name: "かしわ天",
    price: 140,
    img: "./tempura/kashiwa.svg",
    type: type.tempura,
    coupon_used: false,
    allergy: allergy_list.komugi_tamago_nyu
  },
  {
    name: "釜揚げうどん",
    price: 290,
    img: "./udon/kamaage@2x.png",
    interval: 100,
    coupon_used: false,
    status: "温",
    type: type.udon,
    allergy: allergy_list.komugi
  },
  // {
  //   name: "天丼用ごはん",
  //   price: 130,
  //   img: null,
  //   type: type.other,
  // coupon_used: false,
  // allergy: allergy_list.nashi
  // },
  //うどん
  {
    name: "釜揚げ家族うどん",
    price: 1260,
    img: "./udon/kamaage@2x.png",
    interval: 100,
    coupon_used: false,
    status: "温",
    type: type.udon,
    interval: 100,
    allergy: allergy_list.komugi
  },
  {
    name: "釜玉うどん",
    price: 350,
    img: "./udon/kamatama2@2x.png",
    interval: 100,
    coupon_used: false,
    status: "温",
    type: type.udon,
    interval: 100,
    allergy: allergy_list.komugi_tamago
  },
  {
    name: "明太釜玉うどん",
    price: 410,
    img: "./udon/mentaikamatama@2x.png",
    interval: 100,
    coupon_used: false,
    status: "温",
    type: type.udon,
    interval: 100,
    allergy: allergy_list.komugi_tamago_ebi_kani
  },
  {
    name: "とろろ醤油うどん",
    price: 350,
    img: "./udon/tororoshoyu@2x.png",
    interval: 100,
    coupon_used: false,
    status: "両",
    type: type.udon,
    interval: 100,
    allergy: allergy_list.komugi_ebi_kani
  },
  {
    name: "ぶっかけうどん",
    price: 290,
    img: "./udon/bukkake@2x.png",
    interval: 100,
    coupon_used: false,
    status: "両",
    type: type.udon,
    interval: 100,
    allergy: allergy_list.komugi
  },
  {
    name: "とろ玉うどん",
    price: 410,
    img: "./udon/torotama2@2x.png",
    interval: 100,
    coupon_used: false,
    status: "両",
    type: type.udon,
    interval: 100,
    allergy: allergy_list.komugi_tamago
  },
  {
    name: "おろし醤油うどん",
    price: 350,
    img: "./udon/oroshi@2x.png",
    interval: 100,
    coupon_used: false,
    status: "両",
    type: type.udon,
    interval: 100,
    allergy: allergy_list.komugi
  },
  {
    name: "カレーうどん",
    price: 490,
    img: "./udon/curry@2x.png",
    interval: 100,
    coupon_used: false,
    status: "温",
    type: type.udon,
    interval: 100,
    allergy: allergy_list.komugi_nyu
  },
  {
    name: "かけうどん",
    price: 290,
    img: "./udon/kake@2x.png",
    interval: 100,
    coupon_used: false,
    status: "温",
    type: type.udon,
    interval: 100,
    allergy: allergy_list.komugi
  },
  {
    name: "ざるうどん",
    price: 290,
    img: "./udon/zaru2@2x.png",
    interval: 100,
    coupon_used: false,
    status: "冷",
    type: type.udon,
    interval: 100,
    allergy: allergy_list.komugi
  },
  //天ぷら
  {
    name: "えび天",
    price: 150,
    img: "./tempura/ebi.svg",
    type: type.tempura,
    coupon_used: false,
    allergy: allergy_list.komugi_tamago_nyu_ebi
  },
  {
    name: "いか天",
    price: 110,
    img: "./tempura/ika.svg",
    type: type.tempura,
    coupon_used: false,
    allergy: allergy_list.komugi_tamago_nyu
  },
  {
    name: "さつまいも天",
    price: 100,
    img: "./tempura/satumaimo.svg",
    type: type.tempura,
    coupon_used: false,
    allergy: allergy_list.komugi_tamago_nyu
  },
  {
    name: "なす天",
    price: 110,
    img: "./tempura/nasu.svg",
    type: type.tempura,
    coupon_used: false,
    allergy: allergy_list.komugi_tamago_nyu
  },
  {
    name: "かぼちゃ天",
    price: 100,
    img: "./tempura/kabocha.svg",
    type: type.tempura,
    coupon_used: false,
    allergy: allergy_list.komugi_tamago_nyu
  },
  {
    name: "ちくわ天",
    price: 110,
    img: "./tempura/chikuwa.svg",
    type: type.tempura,
    coupon_used: false,
    allergy: allergy_list.komugi_tamago_nyu_ebi_kani
  },
  {
    name: "半熟玉子天",
    price: 120,
    img: "./tempura/tamago.svg",
    type: type.tempura,
    coupon_used: false,
    allergy: allergy_list.komugi_tamago_nyu
  },
  //トッピング
  {
    name: "明太子",
    price: 70,
    type: type.topping,
    img: "./topping/topping_mentai@2x.png",
    coupon_used: false,
    allergy: allergy_list.komugi
  },
  {
    name: "きつねあげ",
    price: 130,
    type: type.topping,
    img: "./topping/topping_kitsune@2x.png",
    coupon_used: false,
    allergy: allergy_list.komugi
  },
  {
    name: "とろろ",
    price: 70,
    type: type.topping,
    img: "./topping/topping_tororo@2x.png",
    coupon_used: false,
    allergy: allergy_list.nashi
  },
  {
    name: "生卵",
    price: 70,
    type: type.topping,
    img: "./topping/topping_tamago@2x.png",
    coupon_used: false,
    allergy: allergy_list.tamago
  },
  //other
  {
    name: "鮭（おにぎり）",
    price: 130,
    img: "./other/sake.svg",
    type: type.other,
    coupon_used: false,
    allergy: allergy_list.ebi_kani
  },
  {
    name: "梅（おにぎり）",
    price: 130,
    img: "./other/ume.svg",
    type: type.other,
    coupon_used: false,
    allergy: allergy_list.ebi_kani
  },
  {
    name: "明太子（おにぎり）",
    price: 130,
    img: "./other/mentai.svg",
    type: type.other,
    coupon_used: false,
    allergy: allergy_list.komugi_ebi_kani
  },
  {
    name: "こんぶ（おにぎり）",
    price: 130,
    img: "./other/konbu.svg",
    type: type.other,
    coupon_used: false,
    allergy: allergy_list.komugi_ebi_kani
  }
];

const udonlist = all_list.filter(it => it.type === type.udon);

const tempuralist = all_list.filter(it => it.type === type.tempura);

const toppinglist = all_list.filter(it => it.type === type.topping);

const otherlist = all_list.filter(it => it.type === type.other);

const list = {
  udon: udonlist,
  tempura: tempuralist,
  topping: toppinglist,
  other: otherlist
};
// const otherlist = [
//   { name: "天丼用ごはん", price: 130, img: null, allergy: allergy_list.nashi },
//   {
//     name: "いなり",
//     price: 100,
//     img: "./other/inari.svg",
//     allergy: allergy_list.komugi
//   },
//   {
//     name: "鮭（おにぎり）",
//     price: 130,
//     img: "./other/sake.svg",
//     allergy: allergy_list.ebi_kani
//   },
//   {
//     name: "梅（おにぎり）",
//     price: 130,
//     img: "./other/ume.svg",
//     allergy: allergy_list.ebi_kani
//   },
//   {
//     name: "明太子（おにぎり）",
//     price: 130,
//     img: "./other/mantai.svg",
//     allergy: allergy_list.komugi_ebi_kani
//   },
//   {
//     name: "こんぶ（おにぎり）",
//     price: 130,
//     img: "./other/konbu.svg",
//     allergy: allergy_list.komugi_ebi_kani
//   }
// ];

const couponlist = [
  { name: "うどん-¥100", price: 100, condition: type.udon },
  { name: "うどん-¥50", price: 50, condition: type.udon },
  { name: "天ぷら-¥30", price: 30, condition: type.tempura },
  { name: "天ぷら-¥50", price: 50, condition: type.tempura },
  { name: "天ぷら-¥100", price: 100, condition: type.tempura },
  { name: "大根おろし無料", price: 70, condition: all_list[0].name },
  { name: "温玉無料", price: 70, condition: all_list[1].name },
  { name: "野菜かき揚げ半額", price: 70, condition: all_list[2].name },
  { name: "いなり半額", price: 50, condition: all_list[3].name },
  { name: "かしわ天無料", price: 140, condition: all_list[4].name },
  // { name: "天丼用ごはん半額", price: 70, condition: all_list[6].name },
  //{ name: "期間限定-¥50", price: 50, condition: "all" },
  { name: "釜揚げの日", price: 0, condition: all_list[5].name },
  { name: "期間限定うどん半額", price: 0, condition: type.udon }
];

export { couponlist, type, all_list, list };