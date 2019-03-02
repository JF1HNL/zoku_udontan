let Field = new Vue({
  el: "#udon",
  data: {
    page: 1
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
