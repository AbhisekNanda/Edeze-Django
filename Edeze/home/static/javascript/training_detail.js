// var options = {
//     "key": "rzp_test_kElfgGUB6qKo1e", // Enter the Key ID generated from the Dashboard
//     "amount": "{{payment['amount']}}", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     "currency": "INR",
//     "name": "Acme Corp",
//     "description": "Test Transaction",
//     "image": "https://example.com/your_logo",
//     "order_id": "{{payment['id']}}", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     "handler": function (response){
        
//     },
//     "prefill": {
//         "name": "Gaurav Kumar",
//         "email": "gaurav.kumar@example.com",
//         "contact": "9000090000"
//     },
//     "notes": {
//         "address": "Razorpay Corporate Office"
//     },
//     "theme": {
//         "color": "#3399cc"
//     }
// };


// var rzp1 = new Razorpay(options);
// rzp1.on('payment.failed', function (response){
//         alert(response.error.code);
//         alert(response.error.description);
//         alert(response.error.source);
//         alert(response.error.step);
//         alert(response.error.reason);
//         alert(response.error.metadata.order_id);
//         alert(response.error.metadata.payment_id);
// });
// document.getElementById('enroll').onclick = function(e){
    
//     rzp1.open();
//     e.preventDefault();
// }


// var FullName = document.getElementById("FullName");
// var EmailAddress = document.getElementById("EmailAddress");
// var Telephoneno = document.getElementById("Telephoneno.");
// var Query = document.getElementById("Query");

// function call(){
//     URL="/4/1/'+FullName+'/'+EmailAddress+'/'+Telephoneno+'/'+Query+'/enquire';
//     window.location.href=url;
// }

