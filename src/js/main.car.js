require.config({
    paths: {
        jquery: './jquery.min',
        car: './lib/car',
        cookie: './cookie'
    }
});
require(['car', 'cookie'], function (car, cookie) {
    car.render(function () {
        function resprice(){
            // console.log(1)
            let arr = $('.one:checked')
            arr=Array.from(arr)
            let price = 0
            arr.forEach(elm => {
                // price += (elm.parentNode)
                // console.log(elm.checked)
                // console.log(elm.checked)

                // console.log(elm.parentNode.parentNode.childNodes[11].textContent)
                price +=(parseInt(elm.parentNode.parentNode.childNodes[11].textContent))
                // console.log(price)
                return price
            });
            $('.lastprice').html(price + '元')
        }
        $('.all').on('click', function () {
            if ($('.all').prop('checked')) {
                $('.one').prop('checked', true);
            } else {
                $('.one').prop('checked', false);
            };
            resprice()
        })

        $('.one').on('click', function () {
            let flag = true;
            $('.one').each(elm => {
                $(elm).prop('checked')
                if ($(elm).prop('checked') == false) {
                    flag = false
                } else {
                    flag;
                };
                return flag
            })

            if (flag == false) {
                $('.all').prop('checked', false);
          
            } else {
                $('.all').prop('checked', true);
          
            }
            resprice()
        })

        $('.add').on('click', function () {
            let num = $(this).prev().val() - 0;
            num++;
            $(this).prev().val(num)

            let result2 = num * ($(this).parent().prev().children().html())
            $(this).parent().next().html(result2 + '元')
            shop = JSON.parse(cookie.get('shop'))
            let idadd = $(this.parentNode).parent().attr('data-id')

            if (shop.some(elm => elm.id == idadd)) {
                shop.forEach(elm => {
                    elm.id == idadd ? elm.num = num : null;
                })
            }
            cookie.set('shop', JSON.stringify(shop), 1)
            resprice()
            // location.reload();
        });




        $('.reduce').on('click', function () {
            let num = $(this).next().val() - 0;
            num--;
            if (num < 1) {
                num = 1
            }
            $(this).next().val(num);
            let result2 = num * ($(this).parent().prev().children().html())
            $(this).parent().next().html(result2 + '元')
            shop = JSON.parse(cookie.get('shop'))
            let idadd = $(this.parentNode).parent().attr('data-id')

            if (shop.some(elm => elm.id == idadd)) {
                shop.forEach(elm => {
                    elm.id == idadd ? elm.num = num : null;
                })
            }
            cookie.set('shop', JSON.stringify(shop), 1)
            resprice()
            // location.reload();
        })


        $('.nums').on('change', function () {
            let num = $(this).val() - 0;
            let result2 = num * ($(this).parent().prev().children().html())
            $(this).parent().next().html(result2 + '元')
            shop = JSON.parse(cookie.get('shop'))
            let idadd = $(this.parentNode).parent().attr('data-id')

            if (shop.some(elm => elm.id == idadd)) {
                shop.forEach(elm => {
                    elm.id == idadd ? elm.num = num : null;
                })
            }
            cookie.set('shop', JSON.stringify(shop), 1)
            // location.reload();
            resprice()
        })


        $('.move').on('click', function () {

            alert('确定删除吗？！');
            let idli = $(this).parent().attr('data-id')
            $(this).parent().remove();
            //    console.log(idli)
            let arr = []
            JSON.parse(cookie.get('shop')).forEach(elm => {
                if (elm.id != idli) {
                    arr.push(elm);
                }

            })
            shop = JSON.stringify(arr)
            cookie.set('shop', shop, 1) 
            // resprice()            // cookie.remove('shop');
            location.reload();
        })
  
       
        resprice()
    //    }
            
       
      

    });


});