$('#HTML1 .widget-content').each(function(){

  $.ajax({
       type: 'GET',
       url: '/feeds/posts/default/-/Project?alt=json',
       dataType: 'json'
   }).done(function(data) {
        var posturl = "";
        var htmlcode = '';

        var GetData = '';
        var DownData ='';

        function dataDown(){
         if(data.feed.entry.length > 0){
           data.feed.entry.length = 6;
           GetData = data.feed.entry;
         }
        }
        
        function dataUP(){
         if(data.feed.entry.length > 0){
            data.feed.entry.length = 5;
           GetData = data.feed.entry;
          }
        }

        if ($(window).width() < 671) {

        dataDown()

        }
        if ($(window).width() > 670) {

          dataUP()

          }
        
        $(window).resize(function() {
          if ($(window).width() < 671) {
            dataDown()
          }
        
          if ($(window).width() > 670) {
            dataUP()
          }
        });

    
        for (var i = 0; i < GetData.length; i++) {
          for (var j = 0; j < GetData[i].link.length; j++) {
            if (GetData[i].link[j].rel == "alternate") {
              posturl = GetData[i].link[j].href;
              break;
            }
          }
       var posttitle = GetData[i].title.$t;
       var content = GetData[i].content.$t,
               $content = $('<div>').html(content);

       if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1 ) {
            var src2 = GetData[i].media$thumbnail.url;
            var thumb = '<img src="'+src2.replace('s72-c','s720')+'" class="ts-post-image wp-post-image attachment-medium size-medium" loading="lazy" title="'+posttitle+'" alt="'+posttitle+'" width="165" height="225">';
         } else if (content.indexOf("<img") > -1 ) {

            var src = $content.find('img:first').attr('src');
            var thumb = '<img src="'+src+'" class="ts-post-image wp-post-image attachment-medium size-medium" loading="lazy" title="'+posttitle+'" alt="'+posttitle+'" width="165" height="225">';
          } else {
            var thumb = '<img src="http://3.bp.blogspot.com/-qnLm52EsvBE/VDkrZ46TWXI/AAAAAAAAAsM/tiJ36WiboU4/s1600/90.jpg" class="ts-post-image wp-post-image attachment-medium size-medium" loading="lazy" title="'+posttitle+'" alt="'+posttitle+'" width="165" height="225">';
          }

        for(Tipe=[],sx=0;sx<GetData[i].category.length;sx++)if("Manga"==GetData[i].category[sx].term)Tipe='<span class="type Manga"></span>';else if("Manhua"==GetData[i].category[sx].term)Tipe='<span class="type Manhua"></span>';else if("Manhwa"==data.feed.entry[i].category[sx].term)Tipe='<span class="type Manhwa"></span>';

         for(Status=[],sx=0;sx<GetData[i].category.length;sx++)if("Complete"==GetData[i].category[sx].term)Status='<span class="status Completed">Completed</span>';

         for(Color=[],sx=0;sx<GetData[i].category.length;sx++)if("Full Color"==GetData[i].category[sx].term)Color='<span class="colored"><i class="fas fa-palette" aria-hidden="true"></i> Color</span>';

         for(Hots=[],sx=0;sx<GetData[i].category.length;sx++)if("Hot"==GetData[i].category[sx].term)Hots='<span class="hotx"><i class="fab fa-hotjar"></i></span>';

         htmlcode +='<div class="bs styletere stylefiv"><div class="bsx"><a class="Url-Item-Bsx" href="'+posturl+'" title="'+posttitle+'"><div class="limit"><div class="ply"></div>'+Status+''+Tipe+''+Color+''+Hots+''+thumb+'</div></a><div class="bigor"><div class="tt"><a href="'+posturl+'" title="'+posttitle+'">'+posttitle+'</a></div></div></div></div>';
     }

     $('#HTML1 .widget-content').each(function(){

      if ($(window).width() < 671) {
        $(this).html(htmlcode)
      }
    
      if ($(window).width() > 670) {
      $(this).html(htmlcode)
      }

      $(window).resize(function() {
       if ($(window).width() < 671) {
            $(this).html(htmlcode)
          }
        
          if ($(window).width() > 670) {
          $(this).html(htmlcode)
          }

      });
      $(this).find('.Url-Item-Bsx').each(function(){
        var closestData = $(this).closest('.bs');
        var thisappend = $(closestData).find('.bigor');
        var getData = $(closestData).find('.bigor').find('a').attr('href');
        var CallBackChapter = getData.split("/").pop().replace('.html','');

        var infoxExpresSion = new RegExp(CallBackChapter, "i");

        // ajax
         $.ajax({
             type: 'GET',
             url: '/feeds/pages/default?alt=json',
             dataType: 'json'
         }).done(function(datac) {
          var htmlCode ='<ul class="chfiv">';
          var data = [];

          $.each(datac.feed.entry, function(key, value){
            if (value.link[2].href.search(infoxExpresSion) != -1 ){
              var title = value.title.$t;
              var href = value.link[2].href;
              var published = value.published.$t;
              var updated = value.updated.$t;
               data.push({updated: {$t: updated},title: {$t: title},published: {$t: published},link: {href}})
            }
          });


          function timeAgo(o){var t=(new Date).getTime()-o.getTime(),e=Math.floor(t/1e3),r=Math.floor(e/60),a=Math.floor(r/60),g=Math.floor(a/24),h=Math.floor(g/30),n=Math.floor(h/12);return 0===t?"Just now":e<60?e+" second ago":r<60?r+" mins ago":a<24?a+" hour ago":g<30?g+" days ago":h<12?h+" months ago":n+" years ago"}

          if ( data.length > 0 ){
            data.length = 2;
            Object.values(data).map(item => {
            var posturl = item.link.href;
            var posttitle = item.title.$t.split('Chapter');
            var updated = item.updated.$t;

            var NumberTitle ='';
             
            for(var ii = 0; ii < posttitle.length; ii++){
             NumberTitle = posttitle[1].replace(/[^0-9\.]+/g,"");
            }

            htmlCode +='<li><a href="'+posturl+'">Ch. '+NumberTitle+'</a><span>'+timeAgo(new Date(updated))+'</span></li>';
            })
            
        }
 
            htmlCode +='</ul>';


           $(thisappend).each(function(){
            $(this).append(htmlCode);
           })

         });
        // close ajax

      });
     });

  });

 });
