$(document).ready(function () {
  $('.navigation-icon').click(function () {
    var target = $('#side-bar');
    if (target.hasClass('side-bar-minimized')) {
      target.removeClass('side-bar-minimized');
    } else {
      target.addClass('side-bar-minimized');
    }

    if (screen.width < 850) {
      target.hide(300);
    }
  });

  $('.search-icon').click(function () {
    var target = $('.mobile-search');
    if (screen.width < 850) {
      target.toggle(300);
    }
  });

  $('#menu').click(function () {
    var target = $('#side-bar');
    target.removeClass('side-bar-minimized');
    target.show(400);
    target.css('display', 'flex');
  });
});

$(document).on('click', function (e) {
  if (
    $(e.target).closest('#side-bar').length === 0 &&
    screen.width < 1400 &&
    screen.width > 850
  ) {
    $('#side-bar').addClass('side-bar-minimized');
  }
});

$('img[src$="icon.svg"]').each(function () {
  var $img = jQuery(this);
  var imgURL = $img.attr('src');
  var attributes = $img.prop('attributes');

  $.get(
    imgURL,
    function (data) {
      var $svg = jQuery(data).find('svg');
      $svg = $svg.removeAttr('xmlns:a');
      $.each(attributes, function () {
        $svg.attr(this.name, this.value);
      });
      $img.replaceWith($svg);
    },
    'xml'
  );
});
