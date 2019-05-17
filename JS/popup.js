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

function test(i)	{
  this.popup(i);
}

this.popup = function(i)	{
  $("#placeHolder").append("<div class='more-info-parent'> \
                              <div class='more-info'> \
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
                              </div> \
                            </div> \
                            ");
  $("#products").hide();
  $("footer").hide();
  $(".aboutContainer").hide();
  $(".contactsContainer").hide();
}

this.addToCart = function(curObj, id, params)	{
  var kol = 1;

  if ( $("input").is("#" + wiNumInputPrefID + id) )	{
    kol = parseInt( $("#" + wiNumInputPrefID + id).val() );
  }
  id = ( $.isNumeric(id) ) ? "ID" + id.toString() : id;
  var id_ = ( $.isEmptyObject(params.subid) ) ? id : id + "_" + params.subid;
  var goodieLine = {"id" : id_, "name" : params.name, "price": params.price, "num" : kol, "url" : document.location.href, "photo" : ""};

  if ($.isEmptyObject(this.DATA))	{
    this.DATA[id_] = goodieLine;
    this.IDS.push(id_);
  }
  else for(var idkey in this.DATA)	{
    if($.inArray(id_, this.IDS) === -1)	{
      this.DATA[id_] = goodieLine;
      this.IDS.push(id_)
    }
    else if (idkey == id_) {
      this.DATA[idkey].num += kol;
    }
  }

  localStorage.setItem(this.cardID, JSON.stringify(this.DATA));
  localStorage.setItem(this.cardID + "_ids", JSON.stringify(this.IDS));
  this.reCalc();
  this.renderBasketTable();

  if (this.CONFIG.showAfterAdd)	{
    cart.showWinow('bcontainer', 1);
  }
}
