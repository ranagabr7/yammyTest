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
      $("#close").toggleClass("d-block");
      $("#open").toggleClass("d-none");
    }
  );
});
// ---------------------------------------------
let allData;
async function showData() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s"
  );
  let data = await response.json();
  allData = data.meals;
  displayMeals();
}

function displayMeals() {
  let box = ``;
  for (let i = 0; i < allData.length; i++) {
    box += `
    <div class="col-md-3">
        <div class="card" >
            <div class="p-relative">
               <img
                    src="${allData[i].strMealThumb}"
                    class="searchImage w-100"
                   alt=""
                   />
       <div class="cover">
           <h3>${allData[i].strMeal}</h3>
           
           </div>
        </div>
       </div>
  </div>
        `;
  }
  document.getElementById("rowData").innerHTML = box;
}
showData();
