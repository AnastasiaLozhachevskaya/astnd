(function($, window, document, undefined) {
  var $win = $(window);
  var $doc = $(document);

  function animateItems($item, indx) {
    var itemPercent = indx * 100;

    $item.css({
      "-webkit-transform": "translateX(-" + itemPercent + "%)",
      "-ms-transform": "translateX(-" + itemPercent + "%)",
      transform: "translateX(-" + itemPercent + "%)"
    });
  }

  $doc.ready(function() {
    // Toggle Functionality
    $(".js-toggle").on("click", function(e) {
      e.preventDefault();

      var $target = $($(this).attr("href"));
      var classToggle = $(this).data("class");

      $target.toggleClass(classToggle);
    });

    // Custom Slider
    if ($(".js-products-slider").length) {
      $(".js-products-slider .product:first-child").addClass("expanded");

      $(".js-slider-prev").on("click", function(e) {
        e.preventDefault();
        var $products = $(".js-products-slider");
        var $productExpanded = $products.find(".product.expanded");

        if ($productExpanded.is(":first-child")) {
          $productExpanded.removeClass("expanded");

          $products.find(".product:last-child").addClass("expanded");
        } else {
          $productExpanded
            .prev()
            .addClass("expanded")
            .siblings()
            .removeClass("expanded");
        }

        animateItems(
          $products,
          $(".js-products-slider .product.expanded").index()
        );
      });

      $(".js-slider-next").on("click", function(e) {
        e.preventDefault();
        var $products = $(".js-products-slider");
        var $productExpanded = $products.find(".product.expanded");

        if ($productExpanded.is(":last-child")) {
          $productExpanded.removeClass("expanded");

          $products.find(".product:first-child").addClass("expanded");
        } else {
          $productExpanded
            .next()
            .addClass("expanded")
            .siblings()
            .removeClass("expanded");
        }

        animateItems(
          $products,
          $(".js-products-slider .product.expanded").index()
        );
      });
    }
  });
})(jQuery, window, document);
