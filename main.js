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
let tag;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tag = btn.textContent;
  });
});

var html = template("tpl", { datas: datas });
var container = document.querySelector("#container");
container.innerHTML = html;

