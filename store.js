const DATA = {
  allBookmarks: [],
  error: null,
  filter: 0,
  adding: false,
};

const addItems = function (data){
  data.expanded = false;
  this.DATA.allBookmarks.push(data);
};

const removeItems = function(itemId) {
  const currentItem = this.DATA.allBookmarks.find(objects => Number(objects.id) === Number(itemId));
  const position = this.DATA.allBookmarks.indexOf(currentItem);
  let data = this.DATA.allBookmarks;
  data.splice(position,1);
  this.DATA.allBookmarks = data;
};

const defineErrorMessage = function (err) {
  this.DATA.error = err;
};

export default {
  DATA,
  addItems,
  removeItems,
  defineErrorMessage,
};