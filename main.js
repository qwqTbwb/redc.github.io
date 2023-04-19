let categories_visible_flag = false;

window.onload = function () {
  var tags = [
    "爱情",
    "动作",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
    "涩情",
  ];
  var html = template("Tags__", { tags: tags });
  var container2 = document.querySelector("#container2");
  container2.innerHTML = html;
  let bt = document.querySelector(".btns");
  let show = document.querySelector(".show");
  show.addEventListener("click", (el) => {
    if (bt.style.overflow == "hidden") {
      bt.style.overflow = "visible";
      show.innerHTML = "-";
      bt.style.height = bt.scrollHeight + "px";
    } else {
      bt.style.overflow = "hidden";
      show.innerHTML = "+";
      bt.style.height = "100%";
    }
  });
  if (bt.scrollHeight > bt.clientHeight) {
    bt.style.overflow = "hidden";
  }
  let btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      var tag = btn.textContent;
      if (categories_visible_flag == false) {
        categories_visible_flag = true;
        document.querySelector(".categories").style.visibility = "visible";
      }
      //这里有个ajax
      var datas = [
        {
          img: "./try1.jpg",
          name: "喜狼狼与灰太羊",
          tags: ["动作", "爱情", "涩情"],
          score: 9.8,
        },
        {
          img: "./try1.jpg",
          name: "喜狼狼与灰太羊",
          tags: ["动作", "爱情", "涩情"],
          score: 9.8,
        },
        {
          img: "./try1.jpg",
          name: "喜狼狼与灰太羊",
          tags: ["动作", "爱情", "涩情"],
          score: 9.8,
        },
        {
          img: "./try1.jpg",
          name: "喜狼狼与灰太羊",
          tags: ["动作", "爱情", "涩情"],
          score: 9.8,
        },
        {
          img: "./try1.jpg",
          name: "喜狼狼与灰太羊",
          tags: ["动作", "爱情", "涩情"],
          score: 9.8,
        },
        {
          img: "./try1.jpg",
          name: "喜狼狼与灰太羊",
          tags: ["动作", "爱情", "涩情"],
          score: 9.8,
        },
        {
          img: "./try1.jpg",
          name: "喜狼狼与灰太羊",
          tags: ["动作", "爱情", "涩情"],
          score: 9.8,
        },
        {
          img: "./try1.jpg",
          name: "喜狼狼与灰太羊",
          tags: ["动作", "爱情", "涩情"],
          score: 9.8,
        },
        {
          img: "./try1.jpg",
          name: "喜与灰",
          tags: ["动作", "涩情", "诙谐"],
          score: 9.7,
        },
        {
          img: "./try1.jpg",
          name: "喜与灰",
          tags: ["动作", "涩情", "诙谐"],
          score: 9.7,
        },
        {
          img: "./try1.jpg",
          name: "喜与灰",
          tags: ["动作", "涩情", "诙谐"],
          score: 9.7,
        },
        {
          img: "./try1.jpg",
          name: "喜与灰",
          tags: ["动作", "涩情", "诙谐"],
          score: 9.7,
        },
        {
          img: "./try1.jpg",
          name: "喜与灰",
          tags: ["动作", "涩情", "诙谐"],
          score: 9.7,
        },
        {
          img: "./try1.jpg",
          name: "喜与灰",
          tags: ["动作", "涩情", "诙谐"],
          score: 9.7,
        },
        {
          img: "./try1.jpg",
          name: "喜与灰",
          tags: ["动作", "涩情", "诙谐"],
          score: 9.7,
        },
      ];
      var html = template("tpl", { datas: datas });
      var container1 = document.querySelector("#container1");
      container1.innerHTML = html;
    });
  });
};
