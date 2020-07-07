require.config({
     paths:{
        jquery:'./jquery.min',
        car:'./lib/car',
        cookie:'./cookie'
    }
});
require(['car'],function(car,){
    // car.render(function(){
    //     console.log($('.all').css());
    //     // if($('.all').css())
    // });
});