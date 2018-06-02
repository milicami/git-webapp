export const displayTop50 = (list) => {
    const $mainContainer = $('.main');
    const $row = $(`<div class='row'>`)

    list.forEach(show => {
        const $card = $(`
            <div class='col-12 col-md-6 col-lg-4 show' id='${show.id}'>
                <a href='#'>
                    <img src='${show.posterUrl}' id='${show.id}'>
                    <h3 class='show-title' id='${show.id}' ${show.name}></h3>
                </a>
            </div>
        `)
        $mainContainer.append($row);
        $row.append($card);

    });
}

export const displayOnShowInfo = ({ clickedShow, listOfSeasons, listOfActors }) => {
    const $mainContainer = $(`#show-info-main`);
    const $chosenShowTitle = $(`<h3>${clickedShow.name}</h3>`);
    const $ulSeasons = $(`<ul>`);
    const $seasonsTitle = $(`<h4 class='showTitle'>`);
    const $ulActors = $(`<ul>`);
    listOfActors.forEach(season => {
        const $li = $(`<li>`);
        $li.text(`${season.startDate} - ${season.endDate}`);
        $ulSeasons.append($li);
    })
    listOfActors.forEach(actor => {
        const $liActors = $(`<li>`);
        $liActors.text(`${actor.name.name}`);
        $ulActor.append($liActors);
    })
}