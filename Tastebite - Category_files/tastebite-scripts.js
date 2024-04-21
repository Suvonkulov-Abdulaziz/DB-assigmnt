// Tstbite Masonry JavaScript
document.querySelectorAll('.tstbite-masonry').forEach(FabrxMasonry => {
  var FabrxISO = new Isotope(FabrxMasonry, {
    itemSelector: '.masonry-item',
    layoutMode: 'packery',
    percentPosition: true,
    isFitWidth: true,
  });
});

// Tstbite Sticky JavaScript
var sticky = new Sticky('.tstbite-sticky', {
  stickyClass: 'sticky',
  wrap: true,
});

// Tstbite Single Swiper Slider JavaScript
var swiper = new Swiper('.single-swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: "bullets",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Tstbite Toggle JavaScript
document.querySelectorAll('.aside-toggle').forEach(tstbiteToggle => {
  tstbiteToggle.addEventListener('click', ({target}) => {
    target.closest('body').classList.toggle('manage-page');
    target.closest('.tstbite-sidebar').classList.toggle('aside-open');
  });
});

// Tstbite Add Class JavaScript
document.querySelectorAll('.search-link').forEach(link => {
  link.addEventListener('click', event => {
    document.querySelector('.tstbite-search').classList.add('active');
  });
});

// Tstbite Remove Class JavaScript
document.querySelectorAll('.tstbite-search button[type="button"]').forEach(link => {
  link.addEventListener('click', event => {
    document.querySelector('.tstbite-search').classList.remove('active');
  });
});

// Tstbite On Keyup Show Search Result JavaScript
document.getElementById('Search').onkeyup = function() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('Search');
  filter = input.value.toUpperCase();
  ul = document.getElementById('SearchList');
  li = ul.querySelectorAll('.tstbite-search-list');
  if (input.length === 0) {
    document.getElementById('SearchList').style.display = 'none';
  }
  else {
    document.getElementById('SearchList').style.display = 'block';
  }
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = '';
      } else {
          li[i].style.display = 'none';
      }
  }
};

// Tstbite On Click Clear Input Value And Hide Div JavaScript
document.querySelector('.search-box button').addEventListener('click', event => {
  document.getElementById('SearchList').style.display = 'none';
  document.getElementById('Search').value='';
});
  
// Tstbite On Window Resize Add And Remove class JavaScript
if (document.documentElement.clientWidth < 768) {
  sibblingOf('.tstbite-footer [class*="col-"]');
  function sibblingOf(fabrxLike,targetChild) {
    var fabrxLike = document.querySelectorAll(fabrxLike);
    for(var i=0; i< fabrxLike.length; i++) {
      fabrxLike[i].addEventListener('click', function(e) {
        var current = this;
        for (var i = 0; i < fabrxLike.length; i++) {
          if (current != fabrxLike[i]) {
            fabrxLike[i].classList.remove('block-menu');
          } else if (current.classList.contains('block-menu') === true) {
            current.classList.remove('block-menu');
          } else {
            current.classList.add('block-menu')
          }
        }
        e.preventDefault();
      });
    }
  };
  let parentElement = document.querySelector('.navbar-collapse');
  let theLastChild = parentElement.lastChild;
  let newElement = document.querySelector('.header-topbar');
  parentElement.insertBefore(newElement, theLastChild);
}