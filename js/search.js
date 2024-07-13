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
//   -----------------------------------------------------------
const searchName = document.getElementById("searchName");
const searchLetter = document.getElementById("searchLetter");
let allsearch;
async function getDataSearch() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s"
  );
  let dataSearch = await response.json();
  allsearch = dataSearch.meals;
  getName();
  getLetter();
}
getDataSearch();

function getName() {
  let term = searchName.value;
  let box = "";
  for (let i = 0; i < allsearch.length; i++) {
    if (allsearch[i].strMeal.toLowerCase().includes(term.toLowerCase()) == true) {
      box += `
    <div class="col-md-3">
        <div class="card" >
            <div class="p-relative">
               <img
                    src="${allsearch[i].strMealThumb}"
                    class="searchImage w-100"
                   alt=""
                   />
       <div class="cover">
           <h3>${allsearch[i].strMeal}</h3>
           
           </div>
        </div>
       </div>
  </div>
        `;
    }
  }
  document.getElementById("rowData").innerHTML = box;
}
// ---------------------------
function getLetter() {
  let term = searchLetter.value;
  let box = "";
  
  for (let i = 0; i < allsearch.length; i++) {
    if (allsearch[i].strMeal.toLowerCase().startsWith(term.toLowerCase())  == true) {
      box += `
          <div class="col-md-3">
              <div class="card" >
                  <div class="p-relative">
                     <img
                          src="${allsearch[i].strMealThumb}"
                          class="searchImage w-100"
                         alt=""
                         />
             <div class="cover">
                 <h3>${allsearch[i].strMeal}</h3>
                 
                 </div>
              </div>
             </div>
        </div>
              `;
    }
  }
  document.getElementById("rowData").innerHTML = box;
}
