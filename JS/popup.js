var popupImages = [
    "<img src='images/final_low_resized/ким-ча_low_resized.png' >",
    "<img src='images/final_low_resized/редька по-восточному_low_resized.png' >",
    "<img src='images/final_low_resized/морская капуста_low_resized.png' >",
    "<img src='images/final_low_resized/капуста по-восточному_low_resized.png' >",
    "<img src='images/final_low_resized/редька с морковкой_low_resized.png' >",
    "<img src='images/final_low_resized/морковь по-восточному_low_resized.png' >",
    "<img src='images/final_low_resized/грибы по-восточному_low_resized.png' >",
    "<img src='images/final_low_resized/салат пекинский_low_resized.png' >",
    "<img src='images/final_low_resized/щике_low_resized.png' >",
    "<img src='images/final_low_resized/кактуги с кетой_low_resized.png' >",
    "<img src='images/final_low_resized/каракатица_low_resized.png' >",
    "<img src='images/final_low_resized/квашеная капуста_low_resized.png' >",
    "<img src='images/final_low_resized/горчица_low_resized.png' >"
  ];

var pLIndex;

var prices = ["230 руб.", "230 руб.", "90 руб.", "90 руб.", "90 руб.", "90 руб.", "100 руб.", "90 руб.",
              "110 руб.", "110 руб.", "90 руб.", "150 руб.", "50 руб.",];

function popupAdditional(i)	{
  if (i != 'close') {
    this.popup(i);
  }
  if (i == 'close') {
    this.closeAdditionalWindow();
  }
}

this.closeAdditionalWindow = function() {
  $(".more-info-parent").hide();
  $("#products").show();
  $("footer").show();
  $(".aboutContainer").show();
  $(".contactsContainer").show();
}

this.popup = function(i)	{
  if (i <= 9) {
    pLIndex = "00" + i;
  }
  if (i >= 10 && i <= 99) {
    pLIndex = "0" + i;
  }
  $("#placeHolder").append("<div class='more-info-parent'> \
                              <div class='more-info'> \
                                <a id='close' href='#' onclick='popupAdditional(\"close\");'> \
                                  <img width='30px' style='float:right' src='images/icons/black-close-icon-3.png' /> \
                                </a> \
                                <button type='button' id='bwAdditional' href='#' onclick=\"cart.showWinow('bcontainer', 1)\"></button> \
                                <div class='panel-thumbnail panel-body'> \
                                  " + popupImages[i] + " \
                                </div> \
                                <div class='row additional-panels panel-footer'> \
                                  <div class='panel-mod thumbnail col-30'>" + popupImages[i] + "</div> \
                                  <div class='panel-mod thumbnail col-30'>" + popupImages[i] + "</div> \
                                  <div class='panel-mod thumbnail col-30'>" + popupImages[i] + "</div> \
                                </div> \
                                <div class='description container-fluid'> \
                                  <div class='col-sm-12'> \
                                    <h2>Описание продукции</h2><br> \
                                    <h4>Состав:</h4><br> \
                                    <p>1.Редька 2. Соль 3. Сахар </p><br> \
                                  </div> \
                                </div> \
                                <div class='price-button'> \
                                  <h3> \
                                    <button id='wicartbutton_" + pLIndex + "' onclick=\"cart.addToCart('this', '"+pLIndex+"', priceList['"+pLIndex+"'])\"> \
                                      <span id='pricePopup'>  " + prices[i] + " </span> \
                                      <span><img src='images/icons/shopping cart icon.png' width='50px'></span> \
                                    </button> \
                                  </h3> \
                                </div> \
                              </div> \
                            </div> \
                            ");
  $("#products").hide();
  $("footer").hide();
  $(".aboutContainer").hide();
  $(".contactsContainer").hide();
}
