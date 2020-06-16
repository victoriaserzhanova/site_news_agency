
$(document).ready(function(){
    const dollarToBuyEl = $('.js-dollarToBuy');  
    const euroToBuyEl = $('.js-EuroToBuy');
    const slideBtnEl = $('.js-slideBtn');
    const tableEl = $('.js-forexRate__table');
    const forexRateErrorEl = $('.js-forexRateError');
    const URL_FIXER = 'http://data.fixer.io/api/latest';
    const ACCESS_KEY = 'a20d68bf8de6e550dfb0f3cf1a8194ad';
    

    $.get(
        URL_FIXER,
        {'access_key':ACCESS_KEY }
        ).then(
            function (response){
                var EUR = (response.rates.RUB).toFixed(2);
                var USD = (EUR/response.rates.USD).toFixed(2); 

                dollarToBuyEl.text(USD);
                euroToBuyEl.text(EUR);

                slideBtnEl.on('click',function(event){
                    event.preventDefault();
                    
                    tableEl.slideToggle();       
                }); 
            },
            function (error){
                console.log('error');
                
                slideBtnEl.on('click',function(event){
                    event.preventDefault();
                    
                    forexRateErrorEl.show();
                }); 

            });

    

});