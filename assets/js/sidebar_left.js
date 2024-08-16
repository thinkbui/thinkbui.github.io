let sidebar_left_ul = document.querySelectorAll("#sidebar_left ul")[0];

const ul_contents = [
  {
    "name": "Old DBC Blog",
    "url": "index_dbc.html"
  }
]

let buildListItemLink = function(name,url){
  let a = document.createElement("a");
  a.href = url;
  a.innerHTML = name;
  return a;
}

let buildListItem = function(name,url){
  let li = document.createElement("li");
  li.appendChild(buildListItemLink(name,url));
  return li;
}

for(let i=0;i<ul_contents.length;i++){
  sidebar_left_ul.appendChild(buildListItem(ul_contents[i].name,ul_contents[i].url));
}
