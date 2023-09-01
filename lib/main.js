// Cache selectors
var topMenu = $(".nav-list"),
  topMenuHeight = topMenu.outerHeight() + 150,
  // All list items
  menuItems = topMenu.find(".nav-link"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var getId = $(this).attr("href");
    var item = $(getId);
    if (item.length) {
      return item;
    }
  });

// Bind to scroll
$(window).scroll(function () {
  menuItems.addClass("nav-active");
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";
  // Set/remove active class

  var tobeScrolled = 0;

  if (fromTop >= tobeScrolled) {
    menuItems
      .parent()
      .removeClass("nav-active")
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass("nav-active");
  } else {
    menuItems.parent().removeClass("nav-active");
    menuItems.parent().first().addClass("nav-active");
  }
});
