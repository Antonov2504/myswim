var cardsFilters = document.querySelectorAll(".card__filter");
cardsFilters.forEach(cardFilter => {
    // if (cardFilter.innerText === "Группы") {
    //     cardFilter.classList.add('groups');
    // }

    switch (cardFilter.innerText) {
        case "Группы":
            cardFilter.classList.add('groups');
            break;

        case "Студия":
            cardFilter.classList.add('studio');
            break;

        case "Академия":
            cardFilter.classList.add('academy');
            break;

        case "Кэмпы":
            cardFilter.classList.add('camps');
            break;

        case "Онлайн":
            cardFilter.classList.add('online');
            break;

        default:
            cardFilter.classList.add('groups');
            break;
    }
});