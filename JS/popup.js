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

// var priceList = {
// "000" : {
// "id" : "000",
// "subid" : {},
// "name" : "Ким-чи весовая",
// "price" : "230",
// "composition" : "Состав: пекинская капуста, соль, сахар, пряности, чеснок, перец красный молотый",
// "description" : "100г продукта содержат: белок - 1.7г, углеводы - 5.0г Энергетическая ценность: 109.0ккал",
// "bestBefore" : "Срок годности и условия хранения: хранить при t от 2&#176; до 6&#176; - 30 суток",
// "imageSource-00" : "<img src='images/final_low_resized/ким-ча_low_resized.png' >",
// "imageSource-01" : "<img src='images/final_low_resized/ким-ча_low_resized.png' >",
// "imageSource-02" : "<img src='images/final_low_resized/ким-ча_low_resized.png' >"},
// "001" : {
// "id" : "001",
// "subid" : {},
// "name" : "Редька по-восточному весовая",
// "price" : "230",
// "composition" : "Состав: редька, соль, сахар, пряности, чеснок, перец красный молотый",
// "description" : "100г продукта содержат: белок - 1.7г, углеводы - 5.0г Энергетическая ценность: 109.0ккал",
// "bestBefore" : "Срок годности и условия хранения: хранить при t от 2&#176; до 6&#176; - 30 суток",
// "imageSource-00" : "<img src='images/final_low_resized/редька по-восточному_low_resized.png' >",
// "imageSource-01" : "<img src='images/final_low_resized/ким-ча_low_resized.png' >",
// "imageSource-02" : "<img src='images/final_low_resized/редька по-восточному_low_resized.png' >"},
// "002" : {
// "id" : "002",
// "subid" : {},
// "name" : "Морская капуста по-восточному",
// "price" : "90",
// "composition" : "Состав: морская капуста, морковь, соль, красный и черный перец, чеснок, уксус, кунжутное семя",
// "description" : "100г продукта содержат: белок - 9г, жир = 0.2г углеводы - 3.0г Энергетическая ценность: 286.1ккал",
// "bestBefore" : "Срок годности и условия хранения: хранить при t от 2&#176; до 6&#176; - 10 суток",
// "imageSource-00" : "<img src='images/final_low_resized/морская капуста_low_resized.png' >",
// "imageSource-01" : "<img src='images/final_low_resized/морская капуста_low_resized.png' >",
// "imageSource-02" : "<img src='images/final_low_resized/морская капуста_low_resized.png' >"},
// "003" : {
// "id" : "003",
// "subid" : {},
// "name" : "Капуста белокочанная",
// "price" : "90",
// "composition" : "Состав: капуста, соль, морковь, красный перец, чеснок, сахар",
// "description" : "100г продукта содержат: белок - 1.7г, жиры - 0.1г, углеводы - 5.2г Энергетическая ценность: 25ккал",
// "bestBefore" : "Срок годности и условия хранения: хранить при t от 2&#176; до 6&#176; - 10 суток",
// "imageSource-00" : "<img src='images/final_low_resized/капуста по-восточному_low_resized.png' >",
// "imageSource-01" : "<img src='images/final_low_resized/капуста по-восточному_low_resized.png' >",
// "imageSource-02" : "<img src='images/final_low_resized/капуста по-восточному_low_resized.png' >"},
// "004" : {
// "id" : "004",
// "subid" : {},
// "name" : "Редька с морковью по-восточному",
// "price" : "90",
// "composition" : "Состав: редька, соль, морковь, красный перец, сахар, уксус, специи",
// "description" : "100г продукта содержат: белок - 2.18г, жир - 0.31г, углеводы - 5.81г Энергетическая ценность: 34.01ккал",
// "bestBefore" : "Срок годности и условия хранения: хранить при t от 2&#176; до 6&#176; - 10 суток",
// "imageSource-00" : "<img src='images/final_low_resized/редька с морковкой_low_resized.png' >",
// "imageSource-01" : "<img src='images/final_low_resized/редька с морковкой_low_resized.png' >",
// "imageSource-02" : "<img src='images/final_low_resized/редька с морковкой_low_resized.png' >"},
// "005" : {
// "id" : "005",
// "subid" : {},
// "name" : "Морковь по-восточному",
// "price" : "90",
// "composition" : "Состав: кунжут, соль, морковь, черный перец, сахар, уксус, специи",
// "description" : "100г продукта содержат: белок - 2.22г, жир - 0.76г углеводы - 8.09г Энергетическая ценность: 37.9ккал",
// "bestBefore" : "Срок годности и условия хранения: хранить при t от 2&#176; до 6&#176; - 10 суток",
// "imageSource-00" : "<img src='images/final_low_resized/морковь по-восточному_low_resized.png' >",
// "imageSource-01" : "<img src='images/final_low_resized/морковь по-восточному_low_resized.png' >",
// "imageSource-02" : "<img src='images/final_low_resized/морковь по-восточному_low_resized.png' >"},
// "006" : {
// "id" : "006",
// "subid" : {},
// "name" : "Грибы по-восточному",
// "price" : "100",
// "composition" : "Состав: грибы, морковь, специи, масло растительное, кунжут",
// "description" : "100г продукта содержат: белок - 10.45г, жиры - 2.56г, углеводы - 5.31г Энергетическая ценность: 85.12ккал",
// "bestBefore" : "Срок годности и условия хранения: хранить при t от 2&#176; до 6&#176; - 10 суток",
// "imageSource-00" : "<img src='images/final_low_resized/грибы по-восточному_low_resized.png' >",
// "imageSource-01" : "<img src='images/final_low_resized/грибы по-восточному_low_resized.png' >",
// "imageSource-02" : "<img src='images/final_low_resized/грибы по-восточному_low_resized.png' >"},
// "007" : {
// "id" : "007",
// "subid" : {},
// "name" : "Салат Пекинский",
// "price" : "90",
// "composition" : "Состав: капуста, соль, морковь, красный перец, чеснок, уксус, редька, огурец, сахар, специи",
// "description" : "100г продукта содержат: белок - 1.4г, жир - 10г, углеводы - 4.2г Энергетическая ценность: 111.8ккал",
// "bestBefore" : "Срок годности и условия хранения: хранить при t от 2&#176; до 6&#176; - 10 суток",
// "imageSource-00" : "<img src='images/final_low_resized/салат пекинский_low_resized.png' >",
// "imageSource-01" : "<img src='images/final_low_resized/салат пекинский_low_resized.png' >",
// "imageSource-02" : "<img src='images/final_low_resized/салат пекинский_low_resized.png' >"},
// "008" : {
// "id" : "008",
// "subid" : {},
// "name" : "Щике",
// "price" : "110",
// "composition" : "Состав: камбала, редька, соль, красный перец, пряности, чеснок, сахар",
// "description" : "100г продукта содержат: белок - 24.3г, жир - 9.6г, углеводы - 5.0г Энергетическая ценность: 184.0ккал",
// "bestBefore" : "Срок годности и условия хранения: хранить при t от 2&#176; до 6&#176; - 10 суток",
// "imageSource-00" : "<img src='images/final_low_resized/щике_low_resized.png' >",
// "imageSource-01" : "<img src='images/final_low_resized/щике_low_resized.png' >",
// "imageSource-02" : "<img src='images/final_low_resized/щике_low_resized.png' >"},
// "009" : {
// "id" : "009",
// "subid" : {},
// "name" : "Кактуги",
// "price" : "110",
// "composition" : "Состав: кета, редька, соль, пряности, чеснок, сахар, перец красный молотый",
// "description" : "100г продукта содержат: белок - 24.3г, жир - 9.6г, углеводы - 5.0г Энергетическая ценность: 184.0ккал",
// "bestBefore" : "Срок годности и условия хранения: хранить при t от 2&#176; до 6&#176; - 10 суток",
// "imageSource-00" : "<img src='images/final_low_resized/кактуги с кетой_low_resized.png' >",
// "imageSource-01" : "<img src='images/final_low_resized/кактуги с кетой_low_resized.png' >",
// "imageSource-02" : "<img src='images/final_low_resized/кактуги с кетой_low_resized.png' >"},
// "010" : {
// "id" : "010",
// "subid" : {},
// "name" : "Каракатица",
// "price" : "90",
// "composition" : "Состав: каракатица, стручковый перец, соль, красный перец, пряности, чеснок, сахар",
// "description" : "100г продукта содержат: белок - 16.2г, жир - 0.7г, углеводы - 0.8г Энергетическая ценность: 79ккал",
// "bestBefore" : "Срок годности и условия хранения: хранить при t от 2&#176; до 6&#176; - 10 суток",
// "imageSource-00" : "<img src='images/final_low_resized/каракатица_low_resized.png' >",
// "imageSource-01" : "<img src='images/final_low_resized/каракатица_low_resized.png' >",
// "imageSource-02" : "<img src='images/final_low_resized/каракатица_low_resized.png' >"},
// "011" : {
// "id" : "011",
// "subid" : {},
// "name" : "Квашеная капуста",
// "price" : "150",
// "composition" : "Состав: капуста, морковь, соль, сахар, перец горошек, лавровый лист",
// "description" : "100г продукта содержат: белок - 1.7г, жир - 0.1г, углеводы - 5.2г Энергетическая ценность: 25ккал",
// "bestBefore" : "Срок годности и условия хранения: хранить при t от 2&#176; до 6&#176; - 30 суток",
// "imageSource-00" : "<img src='images/final_low_resized/квашеная капуста_low_resized.png' >",
// "imageSource-01" : "<img src='images/final_low_resized/квашеная капуста_low_resized.png' >",
// "imageSource-02" : "<img src='images/final_low_resized/квашеная капуста_low_resized.png' >"},
// "012" : {
// "id" : "012",
// "subid" : {},
// "name" : "Горчица",
// "price" : "50",
// "composition" : "Состав: горчичный порошок, соль, масло растительное, уксус, сахар, специи, вода",
// "description" : "100г продукта содержат: белок - 1.7г, углеводы - 5.0г Энергетическая ценность: 164.6ккал",
// "bestBefore" : "Срок годности и условия хранения: хранить при t от 0&#176; до 10&#176; - 45 суток",
// "imageSource-00" : "<img src='images/final_low_resized/горчица_low_resized.png' >",
// "imageSource-01" : "<img src='images/final_low_resized/горчица_low_resized.png' >",
// "imageSource-02" : "<img src='images/final_low_resized/горчица_low_resized.png' >"}
// };

var pLIndex;
var pLEntry;
var additionalImgZero;
var additionalImgOne;
var additionalImgTwo;

var prices = ["* руб.", "* руб.", "* руб.", "* руб.", "* руб.", "* руб.", "* руб.", "* руб.",
              "* руб.", "* руб.", "* руб.", "* руб.", "* руб.",];

var indexTmp;

function popupAdditional(i, params)	{
  indexTmp = i;
  if (i <= 9) {
    pLIndex = "00" + i;
  }
  if (i >= 10 && i <= 99) {
    pLIndex = "0" + i;
  }
  var pLObj = priceList[pLIndex];
  var imgZero = 'imageSource-00';
  var imgOne = 'imageSource-01';
  var imgTwo = 'imageSource-02';
  additionalImgZero = pLObj[imgZero];
  additionalImgOne = pLObj[imgOne];
  additionalImgTwo = pLObj[imgTwo];
  if (i != 'close') {
    this.popup(i, params);
  }
  if (i == 'close') {
    this.closeAdditionalWindow();
  }
  if (i == 'description') {
    this.getDescription(params);
  }
}

this.closeAdditionalWindow = function() {
  $("#header").show();
  $(".navbar").show();
  $(".more-info-parent").hide();
  $("#products").show();
  $("footer").show();
  $(".aboutContainer").show();
  $(".contactsContainer").show();
}

this.changePicture = function(j) {
  pLEntry = priceList[pLIndex];
  var imgLink = pLEntry[j];
  $(".panel-thumbnail").html("");
  $(".panel-thumbnail").html(imgLink);
}

this.popup = function(i, params)	{
  $("#placeHolder").append("<div class='more-info-parent'> \
                              <div class='more-info'> \
                                <a id='close' href='#' onclick='popupAdditional(\"close\");'> \
                                  <img width='30px' style='float:right' src='images/icons/black-close-icon-3.png' /> \
                                </a> \
                                <a type='button' class='bwAdditional bwShrinked' id='basketwidjet' href='#' onclick=\"cart.showWinow('bcontainer', 1)\"></a> \
                                <div class='row panel-thumbnail'> \
                                  " + popupImages[i] + " \
                                </div> \
                                <div class='additional'> \
                                </div> \
                                <div class='description'> \
                                  <div class='col-sm-12'> \
                                    <h3>" + params.name + "</h3><br> \
                                    <p>" + params.composition + "</p><br> \
                                    <p>" + params.description + "</p><br> \
                                    <p>" + params.bestBefore + "</p><br> \
                                  </div> \
                                </div> \
                                <div class='price-button'> \
                                  <h3> \
                                    <button class='add-to-cart' id='wicartbutton_" + pLIndex + "' onclick=\"cart.addToCart('this', '"+pLIndex+"', priceList['"+pLIndex+"'])\"> \
                                      <span id='pricePopup'>  " + prices[i] + " </span> \
                                      <span><img src='images/icons/shopping cart icon.png' width='50px'></span> \
                                    </button> \
                                  </h3> \
                                </div> \
                                <a id='back' href='#' onclick='popupAdditional(\"close\");'> \
                                  <img width='30px' style='float:left' src='images/icons/back-button.png' /> \
                                </a> \
                              </div> \
                            </div> \
                            <script src='js/busketInit.js' type='text/javascript' ></script> \
                            <script src='js/cartAnimation.js' type='text/javascript' ></script> \
                            <script src='js/priceList.js' type='text/javascript' ></script> \
                            ");
  $("#header").hide();
  $(".navbar").hide();
  $("#products").hide();
  $("footer").hide();
  $(".aboutContainer").hide();
  $(".contactsContainer").hide();
}

// <div class='additional'> \
//   <div onclick='changePicture(\"imageSource-00\");' class='thumbnail col-30'>" + additionalImgZero + "</div> \
//   <div onclick='changePicture(\"imageSource-01\");' class='thumbnail col-30'>" + additionalImgOne + "</div> \
//   <div onclick='changePicture(\"imageSource-02\");' class='thumbnail col-30'>" + additionalImgTwo + "</div> \
// </div> \
