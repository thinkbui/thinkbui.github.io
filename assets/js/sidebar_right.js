let sidebar_right_ul = document.querySelectorAll("#sidebar_right ul")[0];

const sidebar_right_ul_contents = [
  {
    "name": "Main Portfolio",
    "url": "https://thinkbui.herokuapp.com/"
  }
]

let buildRightListItemLink = function(name,url){
  let a = document.createElement("a");
  a.href = url;
  a.innerHTML = name;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}

let buildRightListItem = function(name,url){
  let li = document.createElement("li");
  li.appendChild(buildRightListItemLink(name,url));
  return li;
}

for(let i=0;i<sidebar_right_ul_contents.length;i++){
  sidebar_right_ul.appendChild(buildRightListItem(sidebar_right_ul_contents[i].name,sidebar_right_ul_contents[i].url));
}
