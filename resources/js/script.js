$(document).ready(function () {
  if (screen.width > 850 && screen.width < 1400) {
    $('#side-bar').addClass('side-bar-minimized');
  }
  $('.navigation-icon').click(function () {
    var sidebar = $('#side-bar');
    if (screen.width > 850) {
      if (sidebar.width() == 287) {
        sidebar.addClass('side-bar-minimized');
      } else {
        sidebar.removeClass('side-bar-minimized');
      }
    } else {
      $('.main').css('display', 'flex');
      $('.mobile-menu').css('display', 'flex');
      sidebar.hide(500);
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
    target.show(500);
    target.css('display', 'flex');
    $('.main').hide();
    $('.mobile-menu').hide();
  });
  $(window).resize(function () {
    if (screen.width > 850 && screen.width < 1400) {
      $('#side-bar').addClass('side-bar-minimized');
    } else {
      $('#side-bar').removeClass('side-bar-minimized');
    }
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
