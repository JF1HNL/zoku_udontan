import { list } from "./data.js";
import { kikangentei } from "./kikangentei.js";

const now_time = new Date();

for(let i in list){
  for(let j in list[i]){
    list[i][j].cp_name = "";
  }
}

//対象期間のものを抽出
for(let i in kikangentei){
  let term_start = new Date(kikangentei[i].term_start);
  let term_end = new Date(kikangentei[i].term_end);
  if(term_start.getTime() < now_time.getTime() && now_time.getTime() < term_end.getTime()){
    //タイプに合わせて仕分け
    for(let j in list){
      if(j === kikangentei[i].type){
        kikangentei[i].kikangentei = true;
        list[j].push(kikangentei[i]);
      }
    }
  }
}


for(let i in list){
  for(let j in list[i]){
    list[i][j].flag = false;
  }
}

let Field = new Vue({
  el: "#udon",
  computed: {
    menu_text_make: function() {
      let text = "";
      for(let i in list){
        for(let j in list[i]){
          if(list[i][j].flag){
            if(text === ""){
              text = list[i][j].name;
            }else{
              text = text + "と" + list[i][j].name;
            }
          }
        }
      }
      return text;
    },
    udon_select_judge: function(){
      let ret = false;
      for(let i in this.list.udon){
        if(this.list.udon[i].flag){
          ret = this.list.udon[i].flag
        }
      }
      return ret;
    }
  },
  data: {
    page: 1,
    list: list,
    index_data: {
      tempura: false,
      topping: false,
      other: false
    },
    twitter_tag: ["うどんクック","うどんつくるやつ"]
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
    },
    tweet: function(){
      const content = {
        url: window.location.href,
        text: this.menu_text_make + "を食べました！",
        tag: this.separete(",")
      };
      for (let key in content) {
        content[key] = encodeURIComponent(content[key]);
      }
      const tweet_text = `https://twitter.com/intent/tweet?url=${content.url}&text=${
        content.text
      }&hashtags=${content.tag}`;
      window.open(tweet_text);
    },
    copy: function(type){
      const content = {
        url: window.location.href,
        text: this.menu_text_make + "を食べました！",
        tag: "#" + this.separete(" #")
      };
      let copy_text = content.text;
      if(type === "url"){
        copy_text = copy_text + " " + content.url + " " + content.tag;
      }
      this.execCopy(copy_text);
      alert("クリップボードにコピーしました。");
    },
    // コピペしてしまった
    execCopy: function(string){

      // 空div 生成
      var tmp = document.createElement("div");
      // 選択用のタグ生成
      var pre = document.createElement('pre');
    
      // 親要素のCSSで user-select: none だとコピーできないので書き換える
      pre.style.webkitUserSelect = 'auto';
      pre.style.userSelect = 'auto';
    
      tmp.appendChild(pre).textContent = string;
    
      // 要素を画面外へ
      var s = tmp.style;
      s.position = 'fixed';
      s.right = '200%';
    
      // body に追加
      document.body.appendChild(tmp);
      // 要素を選択
      document.getSelection().selectAllChildren(tmp);
    
      // クリップボードにコピー
      var result = document.execCommand("copy");
    
      // 要素削除
      document.body.removeChild(tmp);
    
      return result;
    },
    separete: function(char){
      let ret = "";
      for(let i in this.twitter_tag){
        if(ret !== ""){
          ret = ret + char;
        }
        ret = ret + this.twitter_tag[i];
      }
      return ret;
    },
    reset: function(){
      for(let i in this.list){
        for(let j in this.list[i]){
          this.list[i][j].flag = false;
        }
      }
      for(let i in this.index_data){
        this.index_data[i] = false;
      }
      this.page = 1;
    }
  }
})
