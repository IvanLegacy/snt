$(function(){
    var btn = $('a.catalogButton');
    var nav_menu = $('.catalog_root');

    btn.on('click', function (event) {
        event.preventDefault();
        nav_menu.height(windowHeight - headerHeight + $(window).scrollTop());
        nav_menu.slideToggle('fast');
    });




/*FIX DROP_MENU*/
    $(window).scroll(function () {	
    	var val = $(this).scrollTop();
		nav_menu.height(windowHeight - headerHeight + $(window).scrollTop());
    	if (val > 130) {
			headerHeight = $('#mainMenuContainer').height();
			
			$('.catalog_menu').css({
				position: 'fixed',
				top: 60
			});
    	} else {
			headerHeight = $('#foundation').height();
			
			$('.catalog_menu').css({
				position: 'relative',
				top: 0
			});
        } 
    });

    // Скролл длинного списка меню
    var headerHeight = $('#foundation').height(),
		windowHeight = $(window).height() - 2;
	
	$(window).resize(function() {
		windowHeight = $(window).height() - 2;
	});
	
	$('.catalog_menu').on('wheel', function() {

        event.preventDefault();

        var $elem = $(event.target);

        while (!$elem.is('div')) {
            $elem = $elem.parent();
        }

        $elem = $elem.find('.catalog_list:first');

        if ($elem.height() < (windowHeight - headerHeight - $(window).scrollTop())) return;

        var delta = event.deltaY || event.detail || event.wheelDelta,
            move = 0,
			topEdge = parseInt($elem.css('marginTop')),
			bottomEdge = headerHeight + $elem.height();

        if (delta < 0 && topEdge >= 0) {
            move = 0;
        } else if (delta > 0 && (bottomEdge + topEdge - $(window).scrollTop()) <= windowHeight) {
        	move = 	windowHeight - $elem.height() - headerHeight + $(window).scrollTop();
        } else {
        	move = topEdge - (delta / 4);
		}

        $elem.css('marginTop', move);
	});
	

    // Отображение "пройденного пути" в меню
    $('.catalog_menu li').hover(function () {
        var $elem = $(this),
			$parent = $elem.closest('.catalog_wrapper');
            $list = $elem.find('.catalog_wrapper:first');

        // Если внутри элемента нет списка - ничего не далем
        if (!$list.length) return;
        
        // Показ иконки "стрелочки"
        var arrow = document.createElement('img');

        arrow.classList.add('item_next');
        arrow.setAttribute('src', 'images/icons/right-arrow.svg');
        $elem.find('a:first').append(arrow);

        // Показ дочернего списка
        $list.css('display', 'block');

        // Если высота дочернего списка выше родительского, то проставляем
		// эту высоту всем предыдущим спискам
       if ($list.height() > $parent.height()) {
        	var height = $list.height();

           // Запишем значение оригинальной высоты
           $parent.data('origHeight', $parent.height());

        	while (!$elem.hasClass('catalog_menu'))  {
                if ($elem.is('.catalog_wrapper')) $elem.height(height);
        		$elem = $elem.parent();
            }
        } else {
            // Иначе делаем минимальную высоту равной высоте родительского списка
            $list.css('minHeight', $parent.height());
		}
		return false;

    }, function () {
    	var $elem = $(this),
            $list = $elem.find('.catalog_wrapper:first'),
			height = $elem.closest('.catalog_wrapper').data('origHeight');
    	
        if (!$list.length) return;

    	// Прячем список и удаляем иконку стрелки
        $list.attr('style', '');
        $list.find('.catalog_list:first').css('marginTop', 0);
    	$elem.find('.item_next:first').remove();


        // Делаем высоту оставшихся списков равными высоте самого большего оставшегося списка
    	while (!$elem.hasClass('catalog_menu'))  {
            if ($elem.is('.catalog_wrapper')) $elem.height(height);
            $elem = $elem.parent();
        }
    });

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
		if (!btn.is(event.target) // если клик был не по нашему блоку btn 
		    && btn.has(event.target).length === 0 // и не по его дочерним элементам
		    && !nav_menu.is(event.target) // и если клик был не блоку nav_menu 
		    && nav_menu.has(event.target).length === 0) { // и не по дочерним элементам блока nav_menu
			nav_menu.hide(); // скрываем его
		}
	});



});
