$(function(){


	var btn = $('a.catalogButton');
	var nav_menu = $('.navMenu_item');

	btn.on('click',  function(event) {
		event.preventDefault();
		nav_menu.slideToggle('fast');

			var val = $(window).scrollTop();
	        if (val > 130) {
	            $('.navMenu').css({
	            	top: val +60+"px",
	            	position: "absolute"
	            });
	        } 
	        else {
	            $('.navMenu')
	            .css({
	            	top: "0",
	            	position: "relative"
	            });
	        }
	});




/*FIX DROP_MENU*/
    $(window).scroll(function () {
    	var val = $(this).scrollTop();
    	if(val > 130){
    		$('.navMenu')
    		.css({
    			top: val + 60+"px",
    			position: "absolute"
    		});
    	}
        else{
    	   $('.navMenu')
        	.css({
        		top: "0",
        		position: "relative"
        	});

        } 
    });
    



// SCROLL MENU

	var maxHeight = $(window).height();	
    $(".navMenu_item > li").hover(function() {
    
         var $container = $(this),
             $list = $container.find(".navMenu_item__plumbing"),
             height = $list.height() * 1.1,       // Снизу должно быть достаточно места
             multiplier = height / maxHeight;     // Для ускорения перемещения, если список очень длинный

        // Сохраняем оригинальное значение высоты контейнера, чтобы восстановить его 
        $container.data("origHeight", $container.height());

        // Выпадающее меню появляется точно под соответствующим пунктом родительского списка
        $list.show().css({
                paddingTop: "0px",
            });

        // Не делаем никаких анимаций, если список короче максимального значения
        if (multiplier > 1) {
            $list.mousemove(function(e) {
                    var offset = $container.offset();
                    var relativeY = ((e.pageY - offset.top) * multiplier) - ($container.data("origHeight") * multiplier);
                    if (relativeY > $container.data("origHeight")) {
                        $list.css("top", -relativeY + $container.data("origHeight"));
                    };
                });
        }
        
    }, function() {
    
        var $el = $(this);
        
        // Устанавливаем оригинальные настройки
        $el
            .height($(this).data("origHeight"))
            .find(".navMenu_item__plumbing")
            .css({ top: 0 })
            .hide()
            .end()
            .find("a")
            .removeClass("hover");
    
    });

    // Отображение "пройденного пути" в меню
    $('.navMenu li').hover(function () {
        var $elem = $(this),
        	$parent = $elem.parent(),
            $list = $elem.find('ul:first');

        // Если внутри элемента нет списка - ничего не далем
        if (!$list.length) return;

        $elem.find('.item_next:first').show();

        // Если высота дочернего списка выше родительского, то проставляем
		// эту высоту всем предыдущим спискам
        if ($list.height() > $parent.height()) {
        	var maxHeight = $list.height();

        	// Запишем значение оригинальной высоты
        	$parent.data('origHeight', $parent.height());

        	while (!$elem.hasClass('navMenu'))  {
                if ($elem.is('ul')) $elem.height(maxHeight);
        		$elem = $elem.parent();
            }
        } else {
            // Иначе делаем минимальную высоту равной высоте родительского списка
            $list.css('minHeight', $parent.height());
		}

    }, function () {
    	var $elem = $(this),
			maxHeight = $elem.parent().data('origHeight');

    	$elem.find('.item_next:first').hide();

        // Делаем высоту оставшихся списков равными высоте самого большего оставшегося списка
    	while (!$elem.hasClass('navMenu'))  {
            if ($elem.is('ul')) $elem.height(maxHeight);
            $elem = $elem.parent();
        }
    });


//show div and trigger custom event in callback when div is visible
    $('#someDivId').show('slow', function(){
        $(this).trigger('isVisible');
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
