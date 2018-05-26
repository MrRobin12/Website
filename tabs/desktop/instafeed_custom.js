$(document).ready(function() {
    
    var userFeed = new Instafeed({
    get: 'user',
    userId: '1110388699',
    limit: '6',
    resolution: 'low_resolution',
    clientId: 'b8e01272e8024e01a63be44ef494da98',
    accessToken:'1110388699.b8e0127.1b61718490fe4e3e8f60fd58807fae95',
	sortBy: 'most-recent',
    template: '<div class="col-lg-4 gallery"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });
	userFeed.run();

    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery:{
            enbled:true
        }
    });
    
});