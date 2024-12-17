// Don't forget async like promise and await like then 
async function getMeal(id='pizza')
{
    var response = await fetch (`https://forkify-api.herokuapp.com/api/search?q=${id}`)
    //response --> is that variable to take fetch api
    // `` backTak --> using for multiple line and if vode contain variable 
    // i put ${id} beacuse code are same differnet is last word pizza - brocilil so i put the link and id change 
    var data = await response.json();
    //json --> بتيجي استرينج وتبحولي الي array of objects 
    // i used json because data from api is json so turn data to json and json make connect easy between back and front
    // console.log(data) -- will print text data and recipes so will print data.recipes
    console.log(data.recipes);
    display(data.recipes); 
}
getMeal(); // call for deafulat 
 //function display such crud expalin in crud assigment 
 function display (array){
    var cartona ="";
    //image_url in api and . parameter to call thing 
    for(var i=0 ; i<array.length ; i++ ){
        cartona+=`<div class="col-md-3">
                <div class="card my-3">
                    <img src="${array[i].image_url}" class="card-img-top w-100" alt="...">
                    <div class="card-body">
                        <p class="card-text">${array[i].title}</p>
                    </div>
                </div>
            </div>`
    }
    document.getElementById("rooow").innerHTML=cartona;
 }
 // select all queres by id 
var buttons = document.querySelectorAll('.nav-link');
// pass to all buttons and addd event 
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        var query = e.target.innerHTML; 
        //e.target --> maskt el3onser , ba3deen 2olna .innerHTML بستخدمها لما اجي اسحب حاجه من html 
        getMeal(query); // hteet gowa elMethod kol wahda 
    });
}





