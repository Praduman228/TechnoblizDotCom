$(document).ready(function(){
    function AddReadMore() {
     //This limit you can set after how much characters you want to show Read More.
     var carLmt = 100;
     // Text to show when text is collapsed
     var readMoreTxt = " ...read more";
     // Text to show when text is expanded
     var readLessTxt = " read less";


     //Traverse all selectors with this class and manupulate HTML part to show Read More
     $(".add-read-more").each(function () {
        if ($(this).find(".first-section").length)
           return;

        var allstr = $(this).text();
        if (allstr.length > carLmt) {
           var firstSet = allstr.substring(0, carLmt);
           var secdHalf = allstr.substring(carLmt, allstr.length);
           var strtoadd = firstSet + "<span class='second-section'>" + secdHalf + "</span><span class='read-more'  title='Click to Show More'>" + readMoreTxt + "</span><span class='read-less' title='Click to Show Less'>" + readLessTxt + "</span>";
           $(this).html(strtoadd);
        }
     });

     //Read More and Read Less Click Event binding
     $(document).on("click", ".read-more,.read-less", function () {
        $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
     });
  }

  AddReadMore();
});
