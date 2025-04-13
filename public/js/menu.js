export function initMenu() {
    const $menu = $('#menu');
    const $body = $('body');
  
    if ($menu.length === 0) return;
  
    $menu._locked = false;
  
    $menu._lock = function () {
      if ($menu._locked) return false;
      $menu._locked = true;
      setTimeout(() => { $menu._locked = false }, 350);
      return true;
    };
  
    $menu._show = function () {
      if ($menu._lock()) $body.addClass('is-menu-visible');
    };
  
    $menu._hide = function () {
      if ($menu._lock()) $body.removeClass('is-menu-visible');
    };
  
    $menu._toggle = function () {
      if ($menu._lock()) $body.toggleClass('is-menu-visible');
    };
  
    $menu
      .appendTo($body)
      .on('click', function (event) {
        event.stopPropagation();
        $menu._hide();
      })
      .find('.inner')
      .on('click', '.close', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $menu._hide();
      })
      .on('click', function (event) {
        event.stopPropagation();
      })
      .on('click', 'a', function (event) {
        var href = $(this).attr('href');
        event.preventDefault();
        event.stopPropagation();
        $menu._hide();
        setTimeout(() => {
          window.location.href = href;
        }, 350);
      });
  
    $body
      .on('click', 'a[href="#menu"]', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $menu._toggle();
      })
      .on('keydown', function (event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
          $menu._hide();
        }
      });
  }
  
  export default initMenu