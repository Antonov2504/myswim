jQuery(function ($) {
    var tabLinkId = 0;
    var tabObject = {};

    function setActiveTab() {
        var tab = $(".reviews .tabs-item--active");
        tabObject = {
            tabImg: tab.find(".tabs-item__img").html(),
            tabTitle: tab.find(".tabs-item__title").text(),
            tabText: tab.find(".tabs-item__text").text(),
            tabName: tab.find(".tabs-item__name").text(),
            tabSocial: tab.find(".tabs-item__social").html()
        }

        $(".reviews .tab__active .tab__img").html(tabObject.tabImg);
        $(".reviews .tab__active .tab__title").text(tabObject.tabTitle);
        $(".reviews .tab__active .tab__text").text(tabObject.tabText);
    }

    // ----- SECTION SWIMMING-POOLS -----
    // ----- Open Popup -----
    $(".swimming-pools__card").on("click", function () {
        tabLinkId = 0;
        $("body").addClass("hidden");
        $(".swimming-pools__popup").show();
        $(".swimming-pools__popup .content__info").show();
        $(".swimming-pools__popup .content__total").show();
        $(".swimming-pools__popup .info__price").show();

        $(".swimming-pools__popup .info__nav-item").removeClass("info__nav-item--active");
        $(".swimming-pools__popup .info__nav-item").eq(0).addClass("info__nav-item--active");

        $(".swimming-pools__popup .tab-content").hide();
        $(".swimming-pools__popup .content__thanks").hide();
        $(".swimming-pools__popup .tab-content").eq(tabLinkId).show();

        $(".swimming-pools__popup .total__button--next").show();
        $(".swimming-pools__popup .total__button--prev").hide();
        $(".swimming-pools__popup .total__button--total").hide();
    });

    // ----- Close Popup -----
    $(".popup__shadow, .popup__close").on("click", function () {
        $(".section__popup").hide();
        $(".swimming-pools__popup .total__error").hide();
        $("body").removeClass("hidden");
    });

    // ----- Open Price-List -----
    $(".swimming-pools__popup .price__period").on("click", function () {
        $(".price__list").show();
    });

    // ----- Close Price-List -----
    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".swimming-pools__popup .price__list"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
    });

    // ----- Choose Price-List-Item -----
    $(".swimming-pools__popup .price__list-item").on("click", function () {
        var newPrice = $(this).find(".list-item__price--new").text();
        var newPeriod = $(this).find(".list-item__period").text();
        $(".swimming-pools__popup .price__list-item").removeClass("price__list-item--active");
        $(this).addClass("price__list-item--active");
        $(".swimming-pools__popup .price__period").text(newPeriod);
        $(".swimming-pools__popup .price__total").text(newPrice);
        $(".swimming-pools__popup .price__list").hide();
    });

    // ----- Choose Group -----
    $(".swimming-pools__popup .groups-item").on("click", function () {
        $(".swimming-pools__popup .groups-item").removeClass("groups-item--active");
        $(this).addClass("groups-item--active");
    });

    // ----- Transition to Contacts -----
    $(".swimming-pools__popup .total__button--next").on("click", function () {
        if ($(".swimming-pools__popup .groups-item").hasClass("groups-item--active")) {
            $(".swimming-pools__popup .total__error").hide();
            tabLinkId++;
            $(".swimming-pools__popup .info__price").hide();

            $(".swimming-pools__popup .info__nav-item--active")
                .removeClass("info__nav-item--active")
                .next().addClass("info__nav-item--active");

            $(".swimming-pools__popup .tab-content").hide();
            $(".swimming-pools__popup .tab-content").eq(tabLinkId).show();

            $(".swimming-pools__popup .total__button--next").hide();
            $(".swimming-pools__popup .total__button--prev").show();
            $(".swimming-pools__popup .total__button--total").show();
        } else {
            $(".swimming-pools__popup .total__error").show();
        }
    });

    // ----- Transition to Back Step -----
    $(".swimming-pools__popup .total__button--prev").on("click", function () {
        tabLinkId--;
        $(".swimming-pools__popup .info__price").show();

        $(".swimming-pools__popup .info__nav-item--active")
            .removeClass("info__nav-item--active")
            .prev().addClass("info__nav-item--active");

        $(".swimming-pools__popup .tab-content").hide();
        $(".swimming-pools__popup .tab-content").eq(tabLinkId).show();

        $(".swimming-pools__popup .total__button--next").show();
        $(".swimming-pools__popup .total__button--prev").hide();
        $(".swimming-pools__popup .total__button--total").hide();
    });

    // ----- Transition to Content-Thanks -----
    $(".swimming-pools__popup .total__button--total").on("click", function () {
        $(".swimming-pools__popup .content__info").hide();
        $(".swimming-pools__popup .content__total").hide();
        $(".swimming-pools__popup .content__thanks").show();

        $(".swimming-pools__popup .tab-content").hide();
        $(".swimming-pools__popup .tab-content").eq(tabLinkId).show();

        $(".swimming-pools__popup .total__button--next").show();
        $(".swimming-pools__popup .total__button--prev").hide();
        $(".swimming-pools__popup .total__button--total").hide();
    });
    // ----- END SECTION SWIMMING-POOLS -----

    // ----- SECTION REVIEWS -----
    $(".reviews .tabs-item").eq(0).addClass("tabs-item--active");
    setActiveTab();
    // ----- Open Popup -----
    $(".reviews .tab__button").on("click", function () {
        $("body").addClass("hidden");

        $(".reviews__popup .content__img").html(tabObject.tabImg);
        $(".reviews__popup .content__title").text(tabObject.tabTitle);
        $(".reviews__popup .content__description .description__text").text(tabObject.tabText);
        $(".reviews__popup .content__description .description__name").text(tabObject.tabName);
        $(".reviews__popup .content__description .description__social").html(tabObject.tabSocial);

        $(".reviews__popup").show();
    });

    // ----- Choose Review -----
    $(".reviews .tabs-item").on("click", function () {
        $(".reviews .tabs-item").removeClass("tabs-item--active");

        $(this).addClass("tabs-item--active");

        setActiveTab();
    });
    // ----- END SECTION REVIEWS -----
});



