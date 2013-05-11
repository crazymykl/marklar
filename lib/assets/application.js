(function () {
  'use strict';
  var input;

  function markdown() {
    var xhr, postData;

    xhr = new XMLHttpRequest();
    postData = new FormData();
    postData.append('data', this.value);
    xhr.onload = function () {
      document.getElementById('output').innerHTML = this.responseText;
    };
    xhr.open("POST", '/', true);
    xhr.send(postData);
  }

  function debounce(func, delay) {
    var timeout;

    return function () {
      var that = this, args = arguments;

      clearTimeout(timeout);
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(that, args);
      }, delay);
    };
  }

  input = document.getElementById('input');

  input.addEventListener('input', debounce(markdown, 500));

  markdown.call(input);
}).call(this);
