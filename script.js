//click on plus button
$('#plus-button').click(function () {
    $('#operator').text($(this).text());
});
//click on minus button
$('#minus-button').click(function () {
  $('#operator').text($(this).text());
});
//click on multiplication button
$('#multiply-button').click(function () {
    $('#operator').text($(this).text());
});
//click on divide button
$('#divide-button').click(function () {
    $('#operator').text($(this).text());
});
//click on equal button
$('#equals-button').click(function () {
    $('#operator').text($(this).text());
});

//calculate function
let calculate=()=>{
    let firstNumber=$('#firstNumber').val();
    let secondNumber=$('#secondNumber').val();
    let operator=$('#operator').text();
    let result=0;
    if(firstNumber !==''&&secondNumber !=='')
    {
        switch (operator){
            case +:
        }
    }
}