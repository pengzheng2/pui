// Get data from a JSON file
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://api.jsonbin.io/b/5bfd1a2799d3ae655491857b/1');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    // This is where we'll do something with the retrieved data
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
    ScrollReveal().reveal('h1', { duration: 3000 });
    ScrollReveal().reveal('.subtitle', { delay: 500 });
    ScrollReveal().reveal('.subtitle', { duration: 3000 });

    ScrollReveal().reveal('.podcast', { delay: 0 });
    ScrollReveal().reveal('.podcast', { duration: 1000 });
    ScrollReveal().reveal('.podcast', { distance: '2rem' });
    ScrollReveal().reveal('.podcast', { interval: 200 });
    ScrollReveal().reveal('.podcast', { easing: 'cubic-bezier(0.5, 0, .56, .95)' });

  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

function createHTML(podcastsData) {
  var rawTemplate = document.getElementById("podcastsTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(podcastsData);

  var podcastsContainer = document.getElementById("podcasts-container");
  podcastsContainer.innerHTML = ourGeneratedHTML;
}

$(document).ready(function() {
  $('#develop').click(function() {
    $(this).css('color', 'var(--color-gray-900)');
    $(this).css('transition', 'color .5s');
    $(this).css('cursor', 'pointer');
    $('#design').css('color', 'var(--color-gray-400)');
    $('#design').css('transition', 'color .5s');
    $('.toggle').css('left', '11.7rem');
    $('.toggle').css('transition', 'left .3s');
    developSelection = true;
    function recreateHTML(podcastsData) {
      var rawTemplate = document.getElementById("developPodcastsTemplate").innerHTML;
      var compiledTemplate = Handlebars.compile(rawTemplate);
      var ourGeneratedHTML = compiledTemplate(podcastsData);
      var podcastsContainer = document.getElementById("podcasts-container");
      podcastsContainer.innerHTML = ourGeneratedHTML;
    }
    var data = JSON.parse(ourRequest.responseText);
    recreateHTML(data);
    ScrollReveal().reveal('.podcast', { duration: 2000 });
  });
    $('#design').click(function() {
    $(this).css('color', 'var(--color-gray-900)');
    $(this).css('transition', 'color .5s');
    $(this).css('cursor', 'pointer');
    $('#develop').css('color', 'var(--color-gray-400)');
    $('#develop').css('transition', 'color .5s');
    $('.toggle').css('left', '.5rem');
    $('.toggle').css('transition', 'left .3s');
    designSelection = true;
    function recreateHTML(podcastsData) {
      var rawTemplate = document.getElementById("designPodcastsTemplate").innerHTML;
      var compiledTemplate = Handlebars.compile(rawTemplate);
      var ourGeneratedHTML = compiledTemplate(podcastsData);
      var podcastsContainer = document.getElementById("podcasts-container");
      podcastsContainer.innerHTML = ourGeneratedHTML;
    }
    var data = JSON.parse(ourRequest.responseText);
    recreateHTML(data);
    ScrollReveal().reveal('.podcast', { duration: 2000 });
  });
});

// Reveal animation
    ScrollReveal().clean('h1');
    ScrollReveal().reveal('.subtitle', { cleanup: true });
