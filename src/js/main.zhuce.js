require.config({
     paths:{
        jquery:'./jquery.min',
        zhuce:'./lib/zhuce'
}
   
    });
    require(['jquery','zhuce'],function($,zhuce){
        zhuce.render();
    })