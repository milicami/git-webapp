import * as ui from './ui_module.js';
import * as data from './data_module.js';

const showInfoHandler = (event) => {
  if (event.target.parentElement.tagName === "A" || event.target.tagName === "A") {
    event.preventDefault();
    console.log(event.target.parentElement.tagName)
    data.setLocalStorage(event.target.id);
    location.href = './show_info.html';
  }
}

const searchHandler = (event) => {
  const searchValue = $(`.search-box`).val();
  data.fetchSearchShows(searchValue)
    .then(ui.displaySearchList)
    .catch(ui.failed);
}


export const init = () => {
  data.fetchShow()
    .then(ui.displayTop50)
    .catch(ui.failed);

  $(`body`).on("click", showInfoHandler);
  $(`.search-box`).on("keyup", searchHandler);
  const id = localStorage.getItem("id");
  
  data.fetchSeasonsAndCast(id)
    .then(ui.displayOnShowInfo);
}

