const $grid = $('.grid').masonry({
  gutter: 15,
  itemSelector: '.grid-item',
  horizontalOrder: true,
  isAnimated: true,
  isFitWidth: true,
});

function getNewPosts() {
  const allPosts = document.getElementsByClassName('grid-item');
  if (allPosts && allPosts.length > 0) {
    const latestPostTimestamp = allPosts[0].dataset.lastTimestamp;

    var jqxhr = $
      .get('/getNewPosts?latest=' + latestPostTimestamp)
      .done(function(posts) {
        var $items = $(posts);
        $grid.prepend($items).masonry('prepended', $items);
      })
      .fail(function() {})
      .always(function() {
        setTimeout(getNewPosts, 10000);
      });
  } else {
    setTimeout(getNewPosts, 10000);
  }
}

getNewPosts();
