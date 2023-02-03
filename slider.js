$('#HTML5 .widget-content').each(function(){

   var randomposts_number = 5;

  $.ajax({
      url: "/feeds/posts/default/-/Series?alt=json-in-script",
      type: 'get',
      dataType: "jsonp",
      success: function (datax) {
        var numpost = datax.feed.entry.length;
        var min = 1; 
        var max = numpost-randomposts_number; 
        var random = Math.floor(Math.random() * (max - min + 1)) + min;

     $.ajax({
       type: 'GET',
       url: '/feeds/posts/default/-/Series?alt=json&start-index=' + random + '&max-results='+ randomposts_number +'',
       dataType: 'json'
   }).done(function(data) {
       var posturl = "";
        var htmlcode = '<div class="loop owl-carousel full owl-loaded">';
        for (var i = 0; i < data.feed.entry.length; i++) {
          for (var j = 0; j < data.feed.entry[i].link.length; j++) {
            if (data.feed.entry[i].link[j].rel == "alternate") {
              posturl = data.feed.entry[i].link[j].href;
              break;
            }
          }
         var posttitle = data.feed.entry[i].title.$t;
         var content = data.feed.entry[i].content.$t,
               $content = $('<div>').html(content);

         if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1 ) {
            var src2 = data.feed.entry[i].media$thumbnail.url;
            var thumb = '<img src="'+src2.replace('s72-c','s720')+'">';
            var thumb2 = '<img src="'+src2.replace('s72-c','s720')+'" class="ts-post-image wp-post-image attachment-medium size-medium" loading="lazy">';
         } else if (content.indexOf("<img") > -1 ) {

            var src = $content.find('img:first').attr('src');
              var thumb = '<img src="'+src+'">';
              var thumb2 = '<img src="'+src+'" class="ts-post-image wp-post-image attachment-medium size-medium" loading="lazy">';
          } else {
              var thumb = '<img src="http://3.bp.blogspot.com/-qnLm52EsvBE/VDkrZ46TWXI/AAAAAAAAAsM/tiJ36WiboU4/s1600/90.jpg">';
              var thumb2 = '<img src="http://3.bp.blogspot.com/-qnLm52EsvBE/VDkrZ46TWXI/AAAAAAAAAsM/tiJ36WiboU4/s1600/90.jpg" class="ts-post-image wp-post-image attachment-medium size-medium" loading="lazy">';
          }

          if (content.indexOf("SinopsiSeries") > -1 ) {
             var SinopsiSeries = $content.find('.SinopsiSeries').html();
             var ElmntSinopsiSeries = ''+SinopsiSeries+'';
            } else {
             var ElmntSinopsiSeries ='Belum Ada Sinopsi';
            }

         for(Status=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Hiatus"==data.feed.entry[i].category[sx].term)Status=' Hiatus';else if("Ongoing"==data.feed.entry[i].category[sx].term)Status=' Ongoing';else if("Complete"==data.feed.entry[i].category[sx].term)Status=' Complete';


         if (content.indexOf("AuthorSeries") > -1 ) {
            var AuthorSeries = $content.find('.AuthorSeries').html();
            var dataAuthorSeries = ''+AuthorSeries+'';
           } else {
            var dataAuthorSeries = ' Tidak Di ketahui ';
           }

          if (content.indexOf("RateSeries") > -1 ) {
             var TotalRate = $content.find('.TotalRate').html();
             var TtlRate = ''+TotalRate+'';
            } else {
             var TtlRate = 'N/A';
            }

for(pk=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("4-Koma"==data.feed.entry[i].category[sx].term)var pk='<a href="/search/label/4-Koma" rel="tag">4-Koma</a>, ';for(Ac=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Action"==data.feed.entry[i].category[sx].term)Ac='<a href="/search/label/Action" rel="tag">Action</a>, ';for(Ad=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Adult"==data.feed.entry[i].category[sx].term)Ad='<a href="/search/label/Adult" rel="tag">Adult</a>';for(Adv=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Adventure"==data.feed.entry[i].category[sx].term)Adv='<a href="/search/label/Adventure" rel="tag">Adventure</a>, ';for(Co=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Comedy"==data.feed.entry[i].category[sx].term)Co='<a href="/search/label/Comedy" rel="tag">Comedy</a>, ';for(Coo=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Cooking"==data.feed.entry[i].category[sx].term)Coo='<a href="/search/label/Cooking" rel="tag">Cooking</a>, ';for(Cr=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Crime"==data.feed.entry[i].category[sx].term)Cr='<a href="/search/label/Crime" rel="tag">Crime</a>, ';for(De=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Demon"==data.feed.entry[i].category[sx].term)De='<a href="/search/label/Demon" rel="tag">Demon</a>, ';for(Dem=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Demons"==data.feed.entry[i].category[sx].term)Dem='<a href="/search/label/Demons" rel="tag">Demons</a>, ';for(Do=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Doujinshi"==data.feed.entry[i].category[sx].term)Do='<a href="/search/label/Doujinshi" rel="tag">Doujindhi</a>, ';for(Dr=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Drama"==data.feed.entry[i].category[sx].term)Dr='<a href="/search/label/Drama" rel="tag">Drama</a>, ';for(Ec=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Ecchi"==data.feed.entry[i].category[sx].term)Ec='<a href="/search/label/Ecchi" rel="tag">Ecchi</a>, ';for(Fa=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Fantasy"==data.feed.entry[i].category[sx].term)Fa='<a href="/search/label/Fantasy" rel="tag">Fantasy</a>, ';for(Ga=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Game"==data.feed.entry[i].category[sx].term)Ga='<a href="/search/label/Game" rel="tag">Game</a>, ';for(Ge=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Gender bender"==data.feed.entry[i].category[sx].term)Ge='<a href="/search/label/Gender bender" rel="tag">Gender bender</a>, ';for(Go=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Gore"==data.feed.entry[i].category[sx].term)Go='<a href="/search/label/Gore" rel="tag">Gore</a>, ';for(Ha=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Harem"==data.feed.entry[i].category[sx].term)Ha='<a href="/search/label/Harem" rel="tag">Harem</a>, ';for(Hi=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Historical"==data.feed.entry[i].category[sx].term)Hi='<a href="/search/label/Historical" rel="tag">Historical</a>, ';for(Ho=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Horror"==data.feed.entry[i].category[sx].term)Ho='<a href="/search/label/Horror" rel="tag">Horror</a>, ';for(Is=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Isekai"==data.feed.entry[i].category[sx].term)Is='<a href="/search/label/Isekai" rel="tag">Isekai</a>, ';for(Js=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Josei"==data.feed.entry[i].category[sx].term)Js='<a href="/search/label/Josei" rel="tag">Josei</a>, ';for(Ki=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Kingdom"==data.feed.entry[i].category[sx].term)Ki='<a href="/search/label/Kingdom" rel="tag">Kingdom</a>, ';for(Ma=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Magic"==data.feed.entry[i].category[sx].term)Ma='<a href="/search/label/Magic" rel="tag">Magic</a>, ';for(Lo=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Lolicon"==data.feed.entry[i].category[sx].term)Lo='<a href="/search/label/Lolicon" rel="tag">Lolicon</a>, ';for(Mar=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Martial Art"==data.feed.entry[i].category[sx].term)Mar='<a href="/search/label/Martial Art" rel="tag">Martial Art</a>, ';for(Mart=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Martial Arts"==data.feed.entry[i].category[sx].term)Mart='<a href="/search/label/Martial Arts" rel="tag">Martial Arts</a>, ';for(Matu=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Mature"==data.feed.entry[i].category[sx].term)Matu='<a href="/search/label/Mature" rel="tag">Mature</a>, ';for(Me=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Mecha"==data.feed.entry[i].category[sx].term)Me='<a href="/search/label/Mecha" rel="tag">Mecha</a>, ';for(Med=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Medical"==data.feed.entry[i].category[sx].term)Med='<a href="/search/label/Medical" rel="tag">Medical</a>, ';for(Mi=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Military"==data.feed.entry[i].category[sx].term)Mi='<a href="/search/label/Military" rel="tag">Military</a>, ';for(Mu=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Music"==data.feed.entry[i].category[sx].term)Mu='<a href="/search/label/Music" rel="tag">Music</a>, ';for(My=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Mystery"==data.feed.entry[i].category[sx].term)My='<a href="/search/label/Mystery" rel="tag">Mystery</a>, ';for(On=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("One Shot"==data.feed.entry[i].category[sx].term)On='<a href="/search/label/One Shot" rel="tag">One Shot</a>, ';for(Pa=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Parody"==data.feed.entry[i].category[sx].term)Pa='<a href="/search/label/Parody" rel="tag">Parody</a>, ';for(Po=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Police"==data.feed.entry[i].category[sx].term)Po='<a href="/search/label/Police" rel="tag">Police</a>, ';for(Pos=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Post apocalyptic"==data.feed.entry[i].category[sx].term)Pos='<a href="/search/label/Post apocalyptic" rel="tag">Post apocalyptic</a>, ';for(Psy=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Psychological"==data.feed.entry[i].category[sx].term)Psy='<a href="/search/label/Psychological" rel="tag">Psychological</a>, ';for(Re=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Reincarnation"==data.feed.entry[i].category[sx].term)Re='<a href="/search/label/Reincarnation" rel="tag">Reincarnation</a>, ';for(Rev=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Revenge"==data.feed.entry[i].category[sx].term)Rev='<a href="/search/label/Revenge" rel="tag">Revenge</a>, ';for(Ro=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Romance"==data.feed.entry[i].category[sx].term)Ro='<a href="/search/label/Romance" rel="tag">Romance</a>, ';for(Sa=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Samurai"==data.feed.entry[i].category[sx].term)Sa='<a href="/search/label/Samurai" rel="tag">Samurai</a>, ';for(Sc=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("School"==data.feed.entry[i].category[sx].term)Sc='<a href="/search/label/School" rel="tag">School</a>, ';for(Sch=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("School Life"==data.feed.entry[i].category[sx].term)Sch='<a href="/search/label/School Life" rel="tag">School Life</a>, ';for(Sci=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Sci-Fi"==data.feed.entry[i].category[sx].term)Sci='<a href="/search/label/Sci-Fi" rel="tag">Sci-Fi</a>, ';for(Se=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Seinen"==data.feed.entry[i].category[sx].term)Se='<a href="/search/label/Seinen" rel="tag">Seinen</a>, ';for(Su=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Supernatural"==data.feed.entry[i].category[sx].term)Su='<a href="/search/label/Supernatural" rel="tag">Supernatural</a>, ';for(Sh=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Shotacon"==data.feed.entry[i].category[sx].term)Sh='<a href="/search/label/ShotaconShotacon" rel="tag">Shotacon</a>, ';for(Sho=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Shoujo"==data.feed.entry[i].category[sx].term)Sho='<a href="/search/label/Shoujo" rel="tag">Shoujo</a>, ';for(Shu=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Shoujo Ai"==data.feed.entry[i].category[sx].term)Shu='<a href="/search/label/Shoujo Ai" rel="tag">Shoujo Ai</a>, ';for(Shoun=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Shounen"==data.feed.entry[i].category[sx].term)Shoun='<a href="/search/label/Shounen" rel="tag">Shounen</a>, ';for(Shne=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Shounen Ai"==data.feed.entry[i].category[sx].term)Shne='<a href="/search/label/Shounen Ai" rel="tag">Shounen Ai</a>, ';for(Si=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Si-fi"==data.feed.entry[i].category[sx].term)Si='<a href="/search/label/Si-fi" rel="tag">Si-fi</a>, ';for(Sl=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Slice of Life"==data.feed.entry[i].category[sx].term)Sl='<a href="/search/label/Slice of Life" rel="tag">Slice of Life</a>, ';for(Sp=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Space"==data.feed.entry[i].category[sx].term)Sp='<a href="/search/label/SpaceSpace" rel="tag">Space</a>, ';for(Sup=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Super Power"==data.feed.entry[i].category[sx].term)Sup='<a href="/search/label/Super Power" rel="tag">Super Power</a>, ';for(Sy=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("System"==data.feed.entry[i].category[sx].term)Sy='<a href="/search/label/System" rel="tag">System</a>, ';for(Th=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Thriller"==data.feed.entry[i].category[sx].term)Th='<a href="/search/label/Thriller" rel="tag">Thriller</a>, ';for(Tr=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Tragedy"==data.feed.entry[i].category[sx].term)Tr='<a href="/search/label/Tragedy" rel="tag">Tragedy</a>, ';for(Va=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Vampire"==data.feed.entry[i].category[sx].term)Va='<a href="/search/label/Vampire" rel="tag">Vampire</a>, ';for(We=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Webtoon"==data.feed.entry[i].category[sx].term)We='<a href="/search/label/Webtoon" rel="tag">Webtoon</a>, ';for(Web=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Webtoons"==data.feed.entry[i].category[sx].term)Web='<a href="/search/label/Webtoons" rel="tag">Webtoons</a>, ';for(Yur=[],sx=0;sx<data.feed.entry[i].category.length;sx++)if("Yuri"==data.feed.entry[i].category[sx].term)Yur='<a href="/search/label/Yuri" rel="tag">Yuri</a>, ';


var daftarGenre = ''+pk+Ac+Ad+Adv+Co+Coo+Cr+De+Dem+Do+Dr+Ec+Fa+Ga+Ge+Go+Ha+Hi+Ho+Is+Js+Ki+Ma+Lo+Mar+Mart+Matu+Me+Med+Mi+Mu+My+On+Pa+Po+Pos+Psy+Re+Rev+Ro+Sa+Sc+Sch+Sci+Se+Su+Sh+Sho+Shu+Shoun+Shne+Si+Sl+Sp+Sup+Sy+Th+Tr+Va+We+Web+Yur+'';

          var ChangeLabel = daftarGenre.substr(0,(daftarGenre.length -2));
         

         htmlcode +='<div class="slide-item full"><div class="slide-bg">'+thumb+'</div><div class="slide-shadow"></div><div class="slide-content"><div class="poster" style="position:relative"><a href="'+posturl+'">'+thumb2+'</a></div><div class="info-left"><div class="title"><div class="rating"><div class="vote"><div class="site-vote"><span class="fa fa-star" aria-hidden="true"><span>'+TtlRate+'</span></span></div></div></div><span class="ellipsis"><a href="'+posturl+'">'+posttitle+'</a></span><span class="release-year">'+Status+'</span></div><div class="extras"><div class="extra-category">'+ChangeLabel+'</div></div><div class="excerpt"> <span class="title">Summary</span><p class="story"></p><p>'+ElmntSinopsiSeries+'</p><p></p></div><div class="cast"><span class="director"><strong>Status:</strong> '+Status+'</span><span class="actor"><strong>Author:</strong>  '+dataAuthorSeries+'   </span></div></div></div></div>';
       }

          htmlcode +='</div>';

       $('#HTML5 .widget-content').each(function(){
        $(this).html(htmlcode)

        $('.loop').owlCarousel({
			    center: true,
			    loop:true,
			    nav:true,
			    //animateOut: 'fadeOut',
			    navText: ["<span class='prev icon-angle-left'></span>","<span class='next icon-angle-right'></span>"],
			    margin:0,
			    autoplay: true,
				autoplayTimeout:5000,
		    		autoplayHoverPause:true,
			    responsive:{
			        0:{
			            items:1,
			            stagePadding: 0,
			        }
			    }
			})

       });
   });

   }
  });

 });
