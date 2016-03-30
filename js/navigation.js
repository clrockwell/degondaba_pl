
(function($) {

  // add classes to nav on page load
  $main_navigation = $('.nav-list');
  $main_navigation.addClass('nav-js');

  $sub_children = $main_navigation.find('ul');
  $sub_children.parent('li').addClass('nav-js--has-children');
  // add a toggle element
  $sub_children.before('<div class="nav-js__child-trigger"><button class="btn-arrow btn-arrow--down"></button></div>');

  // Listener for sub menus
  $('.nav-js__child-trigger').on('touchstart click', function() {
    $(this)
      .toggleClass('btn-arrow--down')
      .parent('li')
        .toggleClass('nav-js--has-children-open');
  });

  // Listener for menu toggle
  $('a.nav-toggle-menu').on('touchstart click', function(e) {
    e.stopImmediatePropagation();
    if ($main_navigation.is(':hidden')) {
      $main_navigation.slideDown();
    }
    else {
      $main_navigation.slideUp();
    }
    
    return false;
  });
  // Flexslider
  $('.block-carousel').flexslider({
    selector: "ul.block-carousel__items > li",
  });
})(jQuery)






