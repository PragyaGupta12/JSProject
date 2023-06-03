function calculation()
{
    let billamt = Number(document.getElementById("billamount").value);
    let tippercent = Number(document.getElementById("tipamount").value);
    let total = billamt + (billamt*(tippercent/100));
    return document.getElementById("total").innerHTML =total;
}
