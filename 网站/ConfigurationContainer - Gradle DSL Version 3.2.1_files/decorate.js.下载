$(function() {
  var prefix = window.location.hostname == "docs.gradle.org" ? "" : "/docs";
  var parts = location.pathname.replace(prefix + "/", "").split("/", 3);
  var version = parts[0];
  var docset = parts[1];
  var path = parts[2];

  var body = $("body");
  var nav = $('<div class="site-decorated navbar-inverse navbar-fixed-top" />').prependTo(body);

  var navInner = $('<div class="navbar-inner" />').prependTo(nav);

  navInner.append('<a href="/" class="gradle" target="_top" alt="Gradlephant"><img src="/images/elephant-corner.png" width="42" height="34"/></a>');
  navInner.append('<div class="navbar-version">' + siteDecorateVersion + "</div>");

  var ul = $("<ul>").appendTo($('<div class="nav-collapse collapse"/>').appendTo(navInner));

  var links;
  if(typeof legacyNotes === 'undefined') {  // for releases prior to 1.1, only link to release notes
    if(typeof hasGroovyDoc === 'undefined' || hasGroovyDoc === 'true') {  //
      links = [
        {name: "Release Notes", link: "release-notes", cl: "rn"},
        {name: "User Guide", link: "userguide/userguide.html", cl: "ug"},
        {name: "DSL Reference", link: "dsl/", cl: "dsl"},
        {name: "Javadoc", link: "javadoc/", cl: "javadoc"},
        {name: "Groovydoc", link: "groovydoc/", cl: "groovydoc"}
      ];
    } else {
      links = [
        {name: "Release Notes", link: "release-notes", cl: "rn"},
        {name: "User Guide", link: "userguide/userguide.html", cl: "ug"},
        {name: "DSL Reference", link: "dsl/", cl: "dsl"},
        {name: "Javadoc", link: "javadoc/", cl: "javadoc"}
      ];
    }
  } else {
    links = [
      {name: "Release Notes", link: "release-notes", cl: "rn"},
      {name: "User Guide", link: "userguide/userguide.html", cl: "ug"},
      {name: "Javadoc", link: "javadoc/", cl: "javadoc"},
      {name: "Groovydoc", link: "groovydoc/", cl: "groovydoc"}
    ];
  }

  for (var i=0; i < links.length; i++) {
    var link = links[i];
    var li = $("<li><a href='" + prefix + "/" + version + "/" + link.link + "' class='navbar-li-" + link.cl + "' target='_top'>" + link.name + "</a></li>").appendTo(ul);
    if (docset.lastIndexOf(link.link.split("/", 2)[0], 0) >= 0) {
      li.find("a").addClass('current-nav');
    }
  };

  var topMargin = nav.height();
  body.css({
    marginTop: "+=" + topMargin + "px",
    backgroundPosition: "100%" + topMargin + "px"
  });

  var isIn = function(thing, things) {
    for (var i = 0; i < things.length; i++) {
      if (thing == things[i]) {
        return true;
      }
    };
    return false;
  };

  $("body").addClass(docset);

  if (!isIn(docset, ["userguide", "javadoc", "groovydoc"])) {
    $("div.gradleware p").css({
      marginTop: "-=1px"
    });
  }

  if (isIn(docset, ["release-notes", "userguide", "dsl"])) {
    var fixedContainer = $("<div id='fixed-container'/>").appendTo("body");


    var content;
    if (docset == "release-notes") {
      content = $("div.text-container:first").detach().appendTo(fixedContainer);
    } else if (isIn(docset, ["userguide", "dsl"])) {
      $("div.sidebar").detach().appendTo(fixedContainer);
      var contentContainer = docset == "dsl" ? $("<div id='content-container'/ >").appendTo(fixedContainer) : fixedContainer;
      $("div.book:first,div.chapter:first,div.part:first,div.appendix:first,div.glossary:first").appendTo(contentContainer);
      $("div.navfooter").detach().appendTo(contentContainer);
    }

    if (isIn(docset, ["release-notes", "userguide"]) || (docset == "dsl" && (path == "" || path.match(/^index\.html.*/) || path.match(/\.Project.html/)))) {

      var gradlewareBox = $("<div id='gradleware-box'/>").appendTo(fixedContainer).hide();
      $("h1:first").after(gradlewareBox);

      $.get(prefix + '/ads.php', function(data) {
        gradlewareBox.html(data).show();
      });
    }
  }

  // 1.5 had bugs in this area
  var oldMarkers = $("section > .incubating-marker");
  if (oldMarkers.length > 0) {
    $("section > .incubating-marker").each(function() {
      var element = $(this);
      var heading = element.prev(".incubating");
      element.remove();
      heading.append(element);
    });
  }

// Insert crazy egg tracking code
setTimeout(function(){var a=document.createElement("script");
var b=document.getElementsByTagName("script")[0];
a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0027/8262.js?"+Math.floor(new Date().getTime()/3600000);
a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);

// Insert footer
$.get(prefix + '/footer.php', function(data) {
  $("body").append( data );
});

});

// Google search bar kills the page on IE 10
// http://forums.gradle.org/gradle/topics/gradle_html_user_guide_doesnt_load_correctly_in_ie10_windows_7
var isIE10 = false;
/*@cc_on
if (/^10/.test(@_jscript_version)) {
  isIE10 = true;
}
@*/
var isIE9 = false;
/*@cc_on
@if (@_jscript_version == 9)
  // Enable styling of new HTML5 elements
  isIE9 = true;
@end
@*/

if (!isIE10 && !isIE9) {
  var inserted = false;
  var insertSearch = function() {
    if (!inserted) {
      inserted = true;
      $("div.navbar-inner").append("<div id='doc-search' class='doc-search'/>");
      google.search.cse.element.render({div: "doc-search", tag: 'searchbox-only'});
    }
  };

  var gcseCallback = function() {
    if (document.readyState == 'complete') {
      insertSearch();
    } else {
      google.setOnLoadCallback(insertSearch, true);
    }
  };

  window.__gcse = {
    parsetags: 'explicit',
    callback: gcseCallback
  };

  (function() {
    var cx = '015787191533919309970:mzpnzol47hy';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
}
