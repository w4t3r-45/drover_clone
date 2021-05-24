let drop_clicked = false;

document.querySelector(".small_header_btn").addEventListener("click",(e)=>{
  // e.preventDefault();
  drop_clicked =! drop_clicked;
  if(drop_clicked){
    document.querySelector(".Coupon_div").style.display = "none";
    document.querySelector(".Drop_down_Hdr_Menu").style.display = "block";
  } else{
    document.querySelector(".Coupon_div").style.display = "block";
    document.querySelector(".Drop_down_Hdr_Menu").style.display = "none";
  }
  console.log(drop_clicked); 
});