 $('.main-dd a').click(function () {
     $spec = $(this).text();
     $('#selected').text($spec);
     $('#sp_d_catg').removeClass("hidden");

     if ($spec == "Maize") {
         $('#sp_d_sb-catg').addClass("hidden");
         $('#sp_d_Maize-catg').addClass("hidden");
         $('.inter-space').addClass("hidden");
     }
     if ($spec == "Stickleback") {
         $('#sp_d_sb-catg').addClass("hidden");
         $('#sp_d_Maize-catg').addClass("hidden");
         $('.inter-space').addClass("hidden");

     }
 });


 $('.sub-dd a').click(function () {
     $('#sub-selected').text($(this).text());
     if ($(this).text() == "By Gene Name" || $(this).text() == "By Gene ID") {
         $('#main-search').prop("disabled", false);
         $('#sp_d_sb-catg').addClass("hidden");
         $('#sp_d_Maize-catg').addClass("hidden");
         $('.inter-space').addClass("hidden");
     }
     if ($(this).text() == "By Interganic Space") {
         $('.inter-space').removeClass("hidden");
         $('#main-search').prop("disabled", true);
         $('#sp_d_Maize-catg').addClass("hidden");
         $('#sp_d_sb-catg').addClass("hidden");
     }
     if ($(this).text() == "By Tissue") {
         $('.inter-space').addClass("hidden");

         if ($spec == "Maize") {
             $('#sp_d_Maize-catg').removeClass("hidden");
             $('#sp_d_sb-catg').addClass("hidden");
         }
         if ($spec == "Stickleback") {
             $('#sp_d_Maize-catg').addClass("hidden");
             $('#sp_d_sb-catg').removeClass("hidden");
         }

     }
 });


 $('.Maize-dd a').click(function () {
     $('#Maize-selected').text($(this).text());
     $('#main-search').prop("disabled", false);

 });
 $('.sb-dd a').click(function () {
     $('#sb-selected').text($(this).text());
     $('#main-search').prop("disabled", false);

 });

 $("#checkAll").click(function () {
     $('input:checkbox').not(this).prop('checked', this.checked);
 });