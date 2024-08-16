let sidebar_left_ul = document.querySelectorAll("#sidebar_left ul")[0];

const sidebar_left_ul_contents = [
  {
    "name": "Old DBC Blog",
    "url": "index_dbc.html"
  }
]

let buildLeftListItemLink = function(name,url){
  let a = document.createElement("a");
  a.href = url;
  a.innerHTML = name;
  return a;
}

let buildLeftListItem = function(name,url){
  let li = document.createElement("li");
  li.appendChild(buildLeftListItemLink(name,url));
  return li;
}

for(let i=0;i<sidebar_left_ul_contents.length;i++){
  sidebar_left_ul.appendChild(buildLeftListItem(sidebar_left_ul_contents[i].name,sidebar_left_ul_contents[i].url));
}
