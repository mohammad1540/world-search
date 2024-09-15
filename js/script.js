let search = document.getElementById("search");
let data = document.getElementById("data");
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let searchtext = search.value;
  let replacedata = new RegExp(searchtext, "ig");
  data.innerHTML=data.innerText.replace(replacedata, `<span>${searchtext}</span>`)
  console.log(searchtext);
});
