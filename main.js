let categories_visible_flag = false;
function ajax(url) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(new Error("Response error"));
        }
      }
    };
    xhr.send(null);
  });
  return p;
}
function getdata(url) {
  return ajax(url).then((res) => {
    return res;
  });
}

window.onload = async function () {
  let tags = await getdata("http://114.132.248.191:8011/tags");
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
    btn.addEventListener("click", async () => {
      var tag = btn.textContent;
      if (categories_visible_flag == false) {
        categories_visible_flag = true;
        document.querySelector(".categories").style.visibility = "visible";
      }
      //这里有个ajax
      var url = "http://114.132.248.191:8011/movie?tag=" + tag;
      let datas = await getdata(url);
      var html = template("tpl", { datas: datas });
      var container1 = document.querySelector("#container1");
      container1.innerHTML = html;
    });
  });
};
