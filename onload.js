function loadItems() {
  console.log("im in file")
  let items = [
    'item1.html', 'item2.html', 'item3.html', 'item4.html', 'item5.html', 'item6.html',
  ];
  items.forEach((a)=>{
    var div = document.createElement('div');
    $(div).load("./items/" + a, null,(html)=>{
      // console.log(html)
      $('.my-item-list').append(html)
    });
  })
};
