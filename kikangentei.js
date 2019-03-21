export {kikangentei};
const type = {
  udon: "udon",
  tempura: "tempura",
  topping: "topping",
  other: "other",
  all: "all"
};

// const data_type = {
// 	cp_short_name : {
// 		alldata : [],
// 		cp_name : ""
// 	}
// }

const data = {
	shugawari201902 : {
		alldata : [
			{
				name: "明太玉子あんかけ",
				price: 420,
				img: "",
				term_start: "2019-02-12T00:00:00",
				term_end: "2019-02-19T00:00:00",
				status: "",
				type: type.udon
			},
			{
				name: "あおさ玉子あんかけ",
				price: 420,
				img: "",
				term_start: "2019-02-19T00:00:00",
				term_end: "2019-02-26T00:00:00",
				status: "",
				type: type.udon
			},
			{
				name: "月見わかめかけ",
				price: 410,
				img: "",
				term_start: "2019-02-26T00:00:00",
				term_end: "2019-03-05T00:00:00",
				status: "",
				type: type.udon
			},
			{
				name: "月見昆布かけ",
				price: 410,
				img: "",
				term_start: "2019-03-05T00:00:00",
				term_end: "2019-03-12T00:00:00",
				status: "",
				type: type.udon
			},
			{
				name: "月見刻みきつねかけ",
				price: 410,
				img: "",
				term_start: "2019-03-12T00:00:00",
				term_end: "2019-03-19T00:00:00",//4月
				status: "",
				type: type.udon
			},
			{
				name: "刻みきつねかけ",
				price: 420,
				img: "",
				term_start: "2019-03-19T00:00:00",
				term_end: "2019-03-26T00:00:00",//4月
				status: "",
				type: type.udon
			},
			{
				name: "ごぼう天うどん",
				price: 430,
				img: "",
				term_start: "2019-03-26T00:00:00",
				term_end: "2019-04-02T00:00:00",//4月
				status: "",
				type: type.udon
			}
		],
		cp_name : "【週替わりうどん】"
	},
	asari201903 : {
		alldata : [
			{
				name: "あさりうどん",
				price: 590,
				img: "",
				term_start: "2019-03-12T00:00:00",
				term_end: "2019-04-23T00:00:00",
				status: "",
				type: type.udon
			}
		],
		cp_name : "【あさりうどん】"
	},
	gyuniku201903 : {
		alldata : [
			{
				name: "肉うどん",
				price: 590,
				img: "",
				term_start: "2019-03-12T00:00:00",
				term_end: "2019-04-23T00:00:00",//4月
				status: "",
				type: type.udon
			},
			{
				name: "牛すき釜玉",
				price: 690,
				img: "",
				term_start: "2019-03-12T00:00:00",
				term_end: "2019-04-23T00:00:00",//4月
				status: "",
				type: type.udon
			},
		],
		cp_name : "【春のがっつり牛肉祭り】"
	},
	kamoudon201901 : {
		alldata : [
			{
				name: "鴨つけうどん",
				price: 640,
				img: "",
				term_start: "2019-01-29T00:00:00",
				term_end: "2019-03-11T00:00:00",
				status: "",
				type: type.udon
			},
			{
				name: "鴨ねぎうどん",
				price: 650,
				img: "",
				term_start: "2019-01-29T00:00:00",
				term_end: "2019-03-11T00:00:00",
				status: "",
				type: type.udon
			},
			{
				name: "鴨すきうどん",
				price: 690,
				img: "",
				term_start: "2019-01-29T00:00:00",
				term_end: "2019-03-11T00:00:00",
				status: "",
				type: type.udon
			}
		],
		cp_name : "【鴨うどん祭】"
	},
	momoya : {
		alldata : [
			{
				name: "少し辛いラー油",
				price: 30,
				type: type.topping,
				img: "",
				term_start: "2019-02-25T00:00:00",
				term_end: "2019-03-25T00:00:00",//終わり次第終了
			},
			{
				name: "梅ごのみ",
				price: 30,
				type: type.topping,
				img: "",
				term_start: "2019-02-25T00:00:00",
				term_end: "2019-03-25T00:00:00",//終わり次第終了
			},
			{
				name: "ごはんですよ！",
				price: 30,
				type: type.topping,
				img: "",
				term_start: "2019-02-25T00:00:00",
				term_end: "2019-03-25T00:00:00",//終わり次第終了
			}
		],
		cp_name : "【桃屋トッピング】"
	}
}

let kikangentei = []

const add_data = {
	udon : {
		interval : 100,
		allergy :  {
			komugi: 1,
			soba: 0,
			tamago: 0,
			nyu: 1,
			rakkasei: 0,
			ebi: 0,
			kani: 0
		}
	},
	other : {
		allergy : {
			komugi: 0,
			soba: 0,
			tamago: 0,
			nyu: 0,
			rakkasei: 0,
			ebi: 0,
			kani: 0
		}

	}
}

for(let short in data){
	for(let i in data[short].alldata){
		if(data[short].alldata[i].type === type.udon){
			for(let j in add_data.udon){
				data[short].alldata[i][j] = add_data.udon[j];
			}
		}else{
			for (let j in add_data.other){
				data[short].alldata[i][j] = add_data.udon[j];
			}
		}
		data[short].alldata[i].cp_name = data[short].cp_name;
		kikangentei.push(data[short].alldata[i]);
	}
}