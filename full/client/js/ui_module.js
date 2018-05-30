export const displayPosts = (userList) => {
  userList.forEach(user => {
    const $card = $(`
        <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${user.title}</span>
              <p>${user.intro}</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    `)
    $(".div-card").append($card);
  });
}