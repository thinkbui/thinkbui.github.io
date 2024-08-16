let sidebar_left_ul = document.querySelectorAll("#sidebar_left ul");

const ul_contents = [
  {
    "name": "Old DBC Blog",
    "url": "index_dbc.html"
  }
]

for(let i=0;i<ul_contents.length;i++){
  console.log(ul_contents[i].name);
  console.log(ul_contents[i].url);
}
