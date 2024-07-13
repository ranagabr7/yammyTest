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
  
let allarea;
async function getArea() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  let data = await response.json();
  allarea = data.meals;
  console.log(allarea);
  displayData();
}

function displayData() {
  let box = ``;
  for (let i = 0; i < allarea.length; i++) {
    box += `
          <div class="col-md-4">
                  <div class="card">
                    <div>
                      <div class="icon">
                        <i class="fas fa-laptop-house"></i>
                      </div>
                      <p>${allarea[i].strArea}</p>
                    </div>
                  </div>
            </div>
    
`;
  }
  document.getElementById("rowData").innerHTML = box;
}
getArea();
