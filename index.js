import { couponlist, type, list, all_list } from "./list.js";

let Field = new Vue({
  el: "#udon",
  data: {
    page: 1,
    udon: list.udon,
    tempura: list.tempura,
    topping: list.topping,
    other: list.other
  },
  methods: {
    next_page: function() {
      console.log("next_page_function")
      if (this.page < 100) {
        this.page++
      } else {
        console.error("ページ遷移エラー")
      }
    },
    back_page: function() {
      console.log("back_page_function")
      if (this.page > 1) {
        this.page--
      } else {
        console.error("ページ遷移エラー")
      }
    }
  }
})
