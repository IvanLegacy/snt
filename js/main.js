$(function() {
    let $menu = $('#catalog-menu'),
        $root = $menu.find('.catalog-root'),
        $btn = $('a.catalogButton');

    $btn.click(function() {
        event.preventDefault();
        $menu.slideToggle('fast');
    });

    $menu.find('div').on('wheel', function () {
        event.preventDefault();

        let target = event.target;

        while (target.tagName != 'DIV') {
            target = target.parentNode;
        }

        let $wrapper = $(target),
            $content = $wrapper.find('ul:first');

        if ($content.height() < $wrapper.outerHeight()) return;

        let delta = event.deltaY || event.detail || event.wheelDelta,
            move = 0,
            top = parseInt($content.css('marginTop')),
            bottom = $content.children().last().position().top;

        if (delta < 0 && top >= 0) {
            move = 0;
        } else if (delta > 0 && bottom <= $wrapper.outerHeight()) {
            move = top - (bottom - $wrapper.height());
            console.log('конец');
        } else {
            move = top - ((delta / 100) * 50);
            console.log('еще есть');
        }

        $content.css('marginTop', move);
    });

    $menu.find('li').hover(
        function () {
            let $target = $(this),
                $childList  = $target.find('div:first');

            if (!$childList.length) return;

            // Показ иконки "стрелочки"
            let arrow = document.createElement('img');

            arrow.classList.add('arrow_right');
            arrow.setAttribute('src', 'images/icons/right-arrow.svg');
            $target.find('a:first').append(arrow);

            $childList.show();
            $childList.height($root.height());
            $childList.offset({top: $menu.offset().top});
        },
        function () {
            let $target = $(this),
                $childList = $target.find('div:first'),
                $listContent = $childList.find('ul:first');

            if (!$childList.length) return;

            $childList.hide();
            $target.find('.arrow_right:first').remove();
            $listContent.css('marginTop', 0);
        }
     );

    // TABS

    $('.tabs-cl').on('click', '.tab', function(event) {
        event.preventDefault();
        /* Act on the event */

        $('.tabs-cl').find('.active-tab').removeClass('active-tab');

        $(this).addClass('active-tab');
        $('.content-tab').eq($(this).index()).addClass('active-tab');
    });

    $(document).on('click', function(event) {
        // event.preventDefault();
        /* Act on the event */
        if (!$btn.is(event.target) // если клик был не по нашему блоку btn
            && $btn.has(event.target).length === 0 // и не по его дочерним элементам
            && !$menu.is(event.target) // и если клик был не блоку nav_menu
            && $menu.has(event.target).length === 0) { // и не по дочерним элементам блока nav_menu
            $menu.hide(); // скрываем его
        }
    });
});
