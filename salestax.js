var $ = function(id) {
    return document.getElementById(id);
  
}

var calculate_click= function() {
  
    var subtotal= parseFloat($("subtotal").value);
    var taxRate= parseFloat($("taxRate").value);
    var shippingCharges= parseFloat($("shippingCharges").value);
    if (isNaN(subtotal) || isNaN(taxRate) || isNaN(shippingCharges)) {
      alert ("Please enter numbers");
      return false;
    }
    
    $("salesTax").value ="";
    $("total").value="";
    
    var salesTax = subtotal * (taxRate/100);
    salesTax = parseFloat(salesTax.toFixed(2));
    var total = subtotal + salesTax + shippingCharges;
    
    $("salesTax").value = "$" + salesTax.toFixed(2);
    $("total").value = "$" + total.toFixed(2);
    return false;
}
    //DEBUG

window.onload=function() {
    $("subtotal").value= "";
    $("taxRate").value = "";
    $("shippingCharges").value = "";
    $("salesTax").value = "";
    $("total").value = "";
}