var trace = R.curry(function (tag, x) {
  console.log(tag, x);
  return x;
});

var Impure = {
  getJSON: R.curry(function (callback, url) {
    $.getJSON(url, callback)
  }),

  setHtml: R.curry(function (sel, html) {
    $(sel).html(html);
  })
}

var url = function (term) {
  return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + term + '&format=json&jsoncallback=?';
};

var img = function (url) {
  return $('<img />', { src: url })
}

var mediaUrl = R.compose(R.prop('m'), R.prop('media'));
var mediaToImg = R.compose(img, mediaUrl)
var images = R.compose(R.map(mediaToImg), R.prop('items'))
var renderImages = R.compose(Impure.setHtml('body'), images)
var app = R.compose(Impure.getJSON(renderImages), url)
app('cats')