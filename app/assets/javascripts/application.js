// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require react
//= require react_ujs
//= require alt
//= require react_router
//= require react_router_ujs
//= require react-rails-hot-loader
//= require components
//= require_tree .


// If you want to avoid adding a module system, you'll need to wrap Alt examples in an IIFE. If the Alt docs read something like this:

// class NameActions = { ... }

// module.exports = alt.createActions(NameActions);

// (() => {
//   class NameActions { ... }
//
//   this.NameActions = alt.createActions(NameActions);
// })();
$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});
