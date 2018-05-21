// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= jquery
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require bootstrap

function iconChange(x) {
  $(".bars").toggleClass("change");
  $("#hamburger-text").html() === "Menu" ? $("#hamburger-text").html("Close") : $("#hamburger-text").html("Menu");
};

$(document).ready(function(){
  const commissioners =[
    { 
      "name":"Commissioner 1",
      "pic":"headshot_1.jpg",
      "bio":"1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat nisi vitae nunc lobortis mattis id ac nisl. Fusce eu pretium mi. Nullam aliquam nulla eget mauris facilisis porttitor. Donec at justo quis dui aliquam blandit sed sit amet magna. Curabitur varius lorem at interdum rutrum. Morbi in ex nisl. Vestibulum eget urna leo. Pellentesque sollicitudin faucibus lectus, at porta dolor ultricies vel. Nam in feugiat dui. Donec scelerisque diam orci, at volutpat sem sodales sit amet. Donec lobortis erat ultrices risus consequat efficitur. Maecenas elementum, risus ac eleifend porttitor, lorem mauris egestas tellus, ac interdum enim purus ut magna. Donec volutpat ullamcorper erat condimentum sodales."
    },
    { 
      "name":"Commissioner 2",
      "pic":"headshot_1.jpg",
      "bio":"2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat nisi vitae nunc lobortis mattis id ac nisl. Fusce eu pretium mi. Nullam aliquam nulla eget mauris facilisis porttitor. Donec at justo quis dui aliquam blandit sed sit amet magna. Curabitur varius lorem at interdum rutrum. Morbi in ex nisl. Vestibulum eget urna leo. Pellentesque sollicitudin faucibus lectus, at porta dolor ultricies vel. Nam in feugiat dui. Donec scelerisque diam orci, at volutpat sem sodales sit amet. Donec lobortis erat ultrices risus consequat efficitur. Maecenas elementum, risus ac eleifend porttitor, lorem mauris egestas tellus, ac interdum enim purus ut magna. Donec volutpat ullamcorper erat condimentum sodales."
    },
    { 
      "name":"Commissioner 3",
      "pic":"headshot_1.jpg",
      "bio":"3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat nisi vitae nunc lobortis mattis id ac nisl. Fusce eu pretium mi. Nullam aliquam nulla eget mauris facilisis porttitor. Donec at justo quis dui aliquam blandit sed sit amet magna. Curabitur varius lorem at interdum rutrum. Morbi in ex nisl. Vestibulum eget urna leo. Pellentesque sollicitudin faucibus lectus, at porta dolor ultricies vel. Nam in feugiat dui. Donec scelerisque diam orci, at volutpat sem sodales sit amet. Donec lobortis erat ultrices risus consequat efficitur. Maecenas elementum, risus ac eleifend porttitor, lorem mauris egestas tellus, ac interdum enim purus ut magna. Donec volutpat ullamcorper erat condimentum sodales."
    },
  ];

  $(".contact-modal-open").click(function(){
    $("#commissioner-name").html(commissioners[$(this).attr("data-contact")].name);
    $("#commissioner-pic").html("<img src='images/headshots/"+commissioners[$(this).attr("data-contact")].pic+"'>");
    $("#commissioner-bio").html(commissioners[$(this).attr("data-contact")].bio);
  });

  // $("#seal").click(function(){
  //   window.location = "https://council.nyc.gov/";
  // });
  
  // $(".nav-link:not(.dropdown-toggle)").click(function(e){
  //   if($(this).attr("href") && window.location.origin === "file://"){
  //     if ($(this).attr("href")==="https://newyorkcitycouncil.github.io/charter-commission/"){
  //       e.preventDefault();
  //       window.location = "index.html";
  //     } else {
  //       e.preventDefault();
  //       window.location = $(this).attr("href")+".html";
  //     };
  //   };
  // });
});