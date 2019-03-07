export {kikangentei};
const type = {
  udon: "udon",
  tempura: "tempura",
  topping: "topping",
  other: "other",
  all: "all"
};

const kikangentei = [
	{
		name: "肉うどん【春のがっつり牛肉祭り】",
		price: 590,
		img: "",
		term_start: "2019-03-12T00:00:00",
		term_end: "2019-04-20T00:00:00",//4月中旬
		status: "",
		type: type.udon,
		interval: 100,
		allergy: {
			komugi: 1,
			soba: 0,
			tamago: 0,
			nyu: 1,
			rakkasei: 0,
			ebi: 0,
			kani: 0
		}
	},
	{
		name: "牛すき釜玉【春のがっつり牛肉祭り】",
		price: 690,
		img: "",
		term_start: "2019-03-12T00:00:00",
		term_end: "2019-04-20T00:00:00",//4月中旬
		status: "",
		type: type.udon,
		interval: 100,
		allergy: {
			komugi: 1,
			soba: 0,
			tamago: 0,
			nyu: 1,
			rakkasei: 0,
			ebi: 0,
			kani: 0
		}
	},
	{
		name: "鴨つけうどん【鴨うどん祭】",
		price: 640,
		img: "",
		term_start: "2019-01-29T00:00:00",
		term_end: "2019-03-11T00:00:00",
		status: "",
		type: type.udon,
		interval: 100,
		allergy: {
			komugi: 1,
			soba: 0,
			tamago: 0,
			nyu: 1,
			rakkasei: 0,
			ebi: 0,
			kani: 0
		}
	},
	{
		name: "鴨ねぎうどん【鴨うどん祭】",
		price: 650,
		img: "",
		term_start: "2019-01-29T00:00:00",
		term_end: "2019-03-11T00:00:00",
		status: "",
		type: type.udon,
		interval: 100,
		allergy: {
			komugi: 1,
			soba: 0,
			tamago: 0,
			nyu: 1,
			rakkasei: 0,
			ebi: 0,
			kani: 0
		}
	},
	{
		name: "鴨すきうどん【鴨うどん祭】",
		price: 690,
		img: "",
		term_start: "2019-01-29T00:00:00",
		term_end: "2019-03-11T00:00:00",
		status: "",
		type: type.udon,
		interval: 100,
		allergy: {
			komugi: 1,
			soba: 0,
			tamago: 0,
			nyu: 1,
			rakkasei: 0,
			ebi: 0,
			kani: 0
		}
	},
	{
		name: "少し辛いラー油【桃屋トッピング】",
		price: 30,
		type: type.topping,
		img: "",
		term_start: "2019-02-25T00:00:00",
		term_end: "2019-03-25T00:00:00",//終わり次第終了
		allergy: {
			komugi: 0,
			soba: 0,
			tamago: 0,
			nyu: 0,
			rakkasei: 0,
			ebi: 0,
			kani: 0
		}
	},
	{
		name: "梅ごのみ【桃屋トッピング】",
		price: 30,
		type: type.topping,
		img: "",
		term_start: "2019-02-25T00:00:00",
		term_end: "2019-03-25T00:00:00",//終わり次第終了
		allergy: {
			komugi: 0,
			soba: 0,
			tamago: 0,
			nyu: 0,
			rakkasei: 0,
			ebi: 0,
			kani: 0
		}
	},
	{
		name: "ごはんですよ！【桃屋トッピング】",
		price: 30,
		type: type.topping,
		img: "",
		term_start: "2019-02-25T00:00:00",
		term_end: "2019-03-25T00:00:00",//終わり次第終了
		allergy: {
			komugi: 0,
			soba: 0,
			tamago: 0,
			nyu: 0,
			rakkasei: 0,
			ebi: 0,
			kani: 0
		}
	}
]

let udon_object = {
	name: "udonname",
	price: 0,
	img: "",
	term_start: "2019-01-01T00:00:00",
	term_end: "2019-01-02T00:00:00",
	status: "",
	type: type.udon,
	interval: 100,
	allergy: {
    komugi: 1,
    soba: 0,
    tamago: 0,
    nyu: 1,
    rakkasei: 0,
    ebi: 0,
    kani: 0
  }
}

let other_object = {
	name: "other_name",
	price: 0,
	type: type.topping,
	img: "",
	term_start: "2019-01-01T00:00:00",
	term_end: "2019-01-02T00:00:00",
	allergy: {
    komugi: 0,
    soba: 0,
    tamago: 0,
    nyu: 0,
    rakkasei: 0,
    ebi: 0,
    kani: 0
  }
}
