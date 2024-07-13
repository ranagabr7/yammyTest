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
  
let allIngrad;
async function getIngredient() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  let data = await response.json();
  allIngrad = data.meals;
//   console.log(allarea);
  displayData();
}

function displayData() {
  let box = ``;
  for (let i = 0; i < allIngrad.length ; i++) {
    box += `
          <div class="col-md-3">
                  <div class="card">
                    <div>
                      <div class="icon">
                       <i class="fas fa-drumstick-bite"></i>
                      </div>
                      <p>${allIngrad[i].strIngredient}</p>
                    </div>
                  </div>
            </div>
    
`;
  }
  document.getElementById("rowData").innerHTML = box;
}
getIngredient();
