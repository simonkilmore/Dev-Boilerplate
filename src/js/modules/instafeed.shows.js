//if(typeof(flickr_tag) != '') {
if (typeof flickr_tag !== 'undefined' && flickr_tag !== null) {

/*global $, jQuery*/
$(function () {
    var apiKey = '9d94815889f0602f1e71df77341f8445',
        tag = flickr_tag,
        perPage = '36',
        showOnPage = '36',
        page = '1';
    
    

    $.getJSON('https://api.flickr.com/services/rest/?format=json&method=' +
        'flickr.photos.search&api_key=' + apiKey +
        '&tags=' + tag + '&per_page=' + perPage + '&jsoncallback=?&extras=owner_name&media=photos&tag_mode=all',
        function (data) {
        
            if(data.photos.photo != '') {
            $.each(data.photos.photo, function (i, rPhoto) {
                var basePhotoURL = 'http://farm' + rPhoto.farm + '.static.flickr.com/' + rPhoto.server + '/' + rPhoto.id + '_' + rPhoto.secret,
                    
                    thumbPhotoURL = basePhotoURL + '_q.jpg',
                    
                    mediumPhotoURL = basePhotoURL + '_c.jpg',
                   
                    ownerid = rPhoto.ownername, //ownername var ready to print somewhere
                    photoTitle = rPhoto.title, //title of photo ready to print somewhere
                
                    //photoString = '<div class="col-xs-6 col-sm-4 col-lg-2"><a class="gallery" href="' + mediumPhotoURL + '"><img title="" class="img-responsive"  data-src="' + thumbPhotoURL + '" alt="' +  rPhoto.title + '"/></a></div>;';
                
                    photoString = '<a class="show-photos-item" target="_blank" href="https://www.flickr.com/photos/' + rPhoto.owner +'/'+ rPhoto.id + '"><img title="" class="show-photos-image" data-src="' + thumbPhotoURL + '" alt="' +  rPhoto.title + '"/></a>;';
                
                    //https://www.flickr.com/photos/nrk-p3/2327387776/
                    ///owner/id
                $(photoString).appendTo("#flickr");
            }); //end of what to do for each photo
            }//end of if
        else {
            $('<p class="bigger-pad">No images found for this performance.</p>').appendTo("#flickr");
        }//end of else
        }); //end of function data
}); //end of entire function
    
}