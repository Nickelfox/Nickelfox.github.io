// This source file is part of the Swift.org open source project
//
// Copyright (c) 2014 - 2023 Apple Inc. and the Swift project authors
// Licensed under Apache License v2.0 with Runtime Library Exception
//
// See http://swift.org/LICENSE.txt for license information
// See http://swift.org/CONTRIBUTORS.txt for the list of Swift project authors

(function () {
  var navbarElement = document.querySelectorAll('nav[role="navigation"] > .list-items > ul li.active ul li a');
  var headerElement = document.querySelectorAll('nav[role="navigation"] > .list-items > ul li.active ul li');

  var activeClass = "active";

  Array.prototype.forEach.call(navbarElement, (element) => {
    element.addEventListener("click", (e) => {
      var target = e.target;
      var title = document.title + " - " + target.textContent;
      var hash = "#" + target.id;
      if (window.location.hash !== hash) {
        history.replaceState(null, title, window.location.pathname + hash);
      }
      Array.prototype.forEach.call(headerElement, (element) => {
        element.classList.remove(activeClass);
      });
      target.parentElement.classList.add(activeClass);
    });
  });

  function toggleClass(element, className) {
    if (!element || !className) {
      return;
    }
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
      classString += " " + className;
    } else {
      classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
    }
    element.className = classString;
  }
  document.getElementById('menu-toggle').addEventListener('mousedown', function() {
    toggleClass(document.getElementById('menu-toggle'), 'open');
    toggleClass(document.querySelector('nav[role="navigation"]'), 'open');
  });
})();

