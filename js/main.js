//JS functions used in all pages

//Adds bring to front for all elements from D3 selection
//Adapted from the following code:
//http://stackoverflow.com/questions/14167863/how-can-i-bring-a-circle-to-the-front-with-d3
d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

//Adds bring to back for all elements from D3 selection
d3.selection.prototype.moveToBack = function() {
  return this.each(function(){
    this.parentNode.insertBefore(this,this.parentNode.firstChild);
  });
};

//Rounds the input number to input decimal places
function round(number,decimal) {
	var power = Math.pow(10,decimal);
	return (Math.round(number*power)/power).toFixed(decimal);
};

// var options = {'easing':'swing'}
// //Panel Snapping
// jQuery(function($) {
// $('body').panelSnap(options);
// });

//Prevent users from using on mobile devices
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 	$('body').append("<div class='modal fade' id='mobile' role='dialog'> \
                        <div class='modal-dialog modal-sm'> \
                          <div class='modal-content'> \
                            <div class='modal-header'> \
                              <button type='button' class='close' data-dismiss='modal'>&times;</button> \
                              <h4 class='modal-title'>Seeing Theory is not Mobile Friendly</h4> \
                            </div> \
                            <div class='modal-body'> \
                              <p class='text-center'>Sorry, some of the visualizations might not be fully functional.</p> \
                            </div> \
                          </div> \
                        </div> \
                    </div>");
 	$('#mobile').modal('show');
 	// $('body').children().css('display','none');
 	// $('body').append( "<div class='text-center'><img src='/img/noMobile.png' /><h4>Please do not use a mobile device!</h4></div>" );
};

// $('#likelihood-tab').click(function(){
//   $('#tab-sub-basic').click();
// });

loadJS = function(src) {
     var jsLink = $("<script type='text/javascript' src='"+src+"'>");
     $("head").append(jsLink);
 };

$('#tab-sub-basic').click(function(){
  loadJS("js/basic-probability.js");
  setTimeout(function(){
    var target = $('#tab-nav-basic.nav-tabs > li.active > a').attr('func');
    var fn = window[target];
    if (typeof fn === "function") fn();
  }, 99);
});
$('#tab-sub-compnd').click(function(){
  loadJS("js/compound-probability.js");
  setTimeout(function(){
    var target = $('#tab-nav-compnd.nav-tabs > li.active > a').attr('func');
    var fn = window[target];
    if (typeof fn === "function") fn();
  }, 99);
});
$('#tab-sub-dist').click(function(){
  loadJS("js/distributions.js");
  setTimeout(function(){
    var target = $('#tab-nav-dist.nav-tabs > li.active > a').attr('func');
    var fn = window[target];
    if (typeof fn === "function") fn();
  }, 99);
});
$('#tab-sub-stat').click(function(){
  loadJS("js/statistical-inference.js");
  setTimeout(function(){
    var target = $('#tab-nav-stat.nav-tabs > li.active > a').attr('func');
    var fn = window[target];
    if (typeof fn === "function") fn();
  }, 99);
});
$('#tab-sub-linear').click(function(){
  loadJS("js/regression.js");
  setTimeout(function(){
    var target = $('#tab-nav-linear.nav-tabs > li.active > a').attr('func');
    var fn = window[target];
    if (typeof fn === "function") fn();
  }, 99);
});

$('.sec-basic-prob').click(function(){
  var tid = $(this).attr('tabnav-id');
  setTimeout(function(){
    $('#tab-nav-basic li:eq('+ tid +') a').tab('show');
    if (tid == 1) drawCoin();
    if (tid == 2) drawDie();
  }, 99);
  $('#tab-sub-basic').click();
});
$('.sec-compnd-prob').click(function(){
  var tid = $(this).attr('tabnav-id');
  setTimeout(function(){
    $('#tab-nav-compnd li:eq('+ tid +') a').tab('show');
    if (tid == 1) drawSet();
    if (tid == 2) drawComb();
    if (tid == 3) drawCP();
  }, 99);
  $('#tab-sub-compnd').click();
});
$('.sec-distributions').click(function(){
  var tid = $(this).attr('tabnav-id');
  $('#tab-sub-dist').click();
  setTimeout(function(){
    $('#tab-nav-dist li:eq('+ tid +') a').tab('show');
  }, 99);
});
$('.sec-stat-inference').click(function(){
  var tid = $(this).attr('tabnav-id');
  $('#tab-sub-stat').click();
  setTimeout(function(){
    $('#tab-nav-stat li:eq('+ tid +') a').tab('show');
  }, 99);
});
$('.sec-linear-regression').click(function(){
  var tid = $(this).attr('tabnav-id');
  $('#tab-sub-linear').click();
  setTimeout(function(){
    $('#tab-nav-linear li:eq('+ tid +') a').tab('show');
  }, 99);
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
  var target = $(e.target).attr('func');
  var fn = window[target];
  // console.log("fn ", fn, typeof fn, $(e.target).attr('href'));
  if (typeof fn === "function") fn();
});
