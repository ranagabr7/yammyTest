$(function () {
    $(".loader").fadeOut(1000, function () {
      $(".loading").slideUp(1000, function () {
        $("body").css("overflow", "auto");
        $(".loading").remove();
      });
    });
  });
  
  // ---------------------------------------------
$(".icon").on("click", function () {
   
    $(".side").animate(
      { width: "toggle", paddingInline: "toggle" },
      1000,
      function () {
       $('#close').toggleClass('d-block')
        $('#open').toggleClass('d-none')
      
      }
    );
  });
//   --------------------------------------
let allCategory;
async function getCategory() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let data = await response.json();
  allCategory = data.categories;
  displayData();

}

function displayData() {
  let box = ``;
  for (let i = 0; i < allCategory.length; i++) {
    box += `
         <div class="col-md-4">
                  <div class="card" >
                    <div class="p-relative">
                      <img
                        src="${allCategory[i].strCategoryThumb}"
                        class="catImage w-100"
                        alt=""
                      />
                      <div class="cover">
                        <h3>${allCategory[i].strCategory}</h3>
                        <p>${allCategory[i].strCategoryDescription}</p>
                         </div>
                    </div>
                  </div>
                </div>
        `;
  }
  document.getElementById("rowData").innerHTML = box;
}
getCategory();
// ----------------------------------------------
