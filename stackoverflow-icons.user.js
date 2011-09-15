// ==UserScript==
// @name          StackOverflow Tag Icons
// @description   Adds icons to non-sponsored tags
// @include       http://stackoverflow.com/*
// @version       1.0
// ==/UserScript==

var icons = {
  bugzilla : 'http://www.bugzilla.org/favicon.ico',
  django : 'http://www.djangoproject.com/favicon.ico',
  eclipse : 'http://eclipse.org/favicon.ico',
  'internet-explorer' : 'http://ie.microsoft.com/testdrive/Graphics/CanvasPad/images/ie_small.png',
  firefox : 'http://www.mozilla.com/favicon.ico',
  'firefox-addon' : 'https://addons.mozilla.org/favicon.ico',
  git : 'http://git-scm.com/favicon.png',
  github : 'https://github.com/favicon.ico',
  gwt : 'http://code.google.com/eclipse/images/gwt_compile_button.png',
  haskell : 'http://www.haskell.org/favicon.ico',
  ios : 'http://itunes.apple.com/favicon.ico',
  iphone : 'http://itunes.apple.com/favicon.ico',
  java : 'http://java.sun.com/favicon.ico', 
  jquery : 'http://static.jquery.com/favicon.ico',
  json : 'http://www.json.org/favicon.ico',
  junit : 'http://junit.org/favicon.ico',
  linux : 'http://kernel.org/favicon.ico',
  mercurial : 'http://mercurial.selenic.com/favicon.ico',
  mysql : 'http://www.mysql.com/favicon.ico',
  osx : 'http://images.apple.com/macosx/what-is-macosx/images/subnav_overview20090824.png',
  perl : 'http://www.perl.org/favicon.ico',
  php : 'http://www.php.net/favicon.ico',
  'project-euler' : 'http://projecteuler.net/favicon.ico',
  python : 'http://python.org/favicon.ico',
  r : 'http://www.r-project.org/favicon.ico',
  ruby : 'http://www.ruby-lang.org/favicon.ico',
  scala : 'http://www.scala-lang.org/favicon.ico',
  sharepoint : 'http://sharepoint.microsoft.com/_layouts/images/favicon.ico',
  silverlight : 'http://www.silverlight.net/resources/images/icons/favicon.ico',
  svn : 'http://subversion.tigris.org/favicon.ico',
  tortoisesvn : 'http://tortoisesvn.tigris.org/favicon.ico',
  twitter : 'http://twitter.com/favicon.ico',
  windows : 'http://www.microsoft.com/windows/Framework/images/favicon.ico',
  xul : 'http://www.mozilla.org/favicon.ico'
};

function GM_wait() {
  if (typeof unsafeWindow.jQuery === 'undefined') { window.setTimeout(GM_wait,50); }
  else { $ = unsafeWindow.jQuery; GM_letsJQuery(); }
}
GM_wait();

function GM_letsJQuery() {
  $(function() {
    $('.post-tag').each(function() {
      var $this = $(this);
      var iconURL = icons[$this.text()];
      if (iconURL) {
        var icon = $('<img src="' + iconURL + '" class="sponsor-tag-img" />').width(16).height(16);
        $this.prepend(icon);
      }
    });
  });
}
