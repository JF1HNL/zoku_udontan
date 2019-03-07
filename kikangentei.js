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
		name: "other_name",
		price: 0,
		type: type.topping,
		img: "",
		term_start: "2019-03-06T00:00:00",
		term_end: "2019-03-08T00:00:00",
		coupon_used: false,
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
		name: "udonname",
		price: 0,
		img: "",
		term_start: "2019-01-01T00:00:00",
		term_end: "2019-03-07T16:02:00",
		coupon_used: false,
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
]

let udon_object = {
	name: "udonname",
	price: 0,
	img: "",
	term_start: "2019-01-01T00:00:00",
	term_end: "2019-01-02T00:00:00",
	coupon_used: false,
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
	coupon_used: false,
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
