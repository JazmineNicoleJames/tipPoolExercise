describe('sumPaymentTotal', function(){
    beforeEach(function() {
        billAmt.value = 500;
        tipAmt.value = 100;
        submitPaymentInfo();
    });


    it('should return the total of bill payment', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(500);

    });
    it('should return the total of tips', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(100);
    });
});


it('should calculate tip percent', function() {
    expect(calculateTipPercent('500','100')).toEqual(20);
})

it('should append new td to tr', function() {
    let newTr = document.createElement('tr');
    appendTd(newTr, 'test');

    expect(newTr.children.length).toBe(1);
    expect(newTr.firstElementChild.innerHTML).toEqual('test');
})




afterEach(function() {
    billAmt.value = '';
    tipAmt.value = '';
    paymentTbody.innerText= '';
    summaryTds[0].innerHTML='';
    summaryTds[1].innerHTML='';
    summaryTds[2].innerHTML='';
    allPayments= {};
    paymentId= 0;

})
