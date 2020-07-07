require.config({
    paths: {
        jquery: './jquery.min',
        product: './lib/product',
        cookie: './cookie'
    },
    shim: {}
});
require(['jquery', 'product'], function ($, product) {
    //回调函数解决代码执行顺序问题
    //页面渲染完成获得元素
    product.render(function (id, price) {
        
        $('.quantity-down').on('click',function(){
           let value= $('#cart-item-quanlity').val();
           value--;
           if(value<0){
               value=0;
           }
           $('#cart-item-quanlity').val(value);
            
        })
        $('.quantity-add').on('click',function(){
            let value= $('#cart-item-quanlity').val();
            value++;
            $('#cart-item-quanlity').val(value);
             
         })
        $('#add-cart').on('click', function () {
            alert('加入成功');

            product.addItem(id, price, $('#cart-item-quanlity').val());
        })
    });
})