
  $(window).on('scroll load', function(){
    

         if($(window).scrollTop() > 0){
            $('.rocket').show();
         }else{
             $('.rocket').hide();
         }

    })



const products = document.querySelector(".myflexy");

function createCard(img, product, title, address, price, num1, num2, num3) {
  let code = `
    <div class="card" data-title="${title}">
      <img src="${img}" class="card-img-top" alt="${product}">
      <div class="card-body">
        <h5 class="card-title fw-bolder text-capitalize">${title}</h5>
        <p class="card-text">${address}</p>
        <h4>${price}</h4>
        <div class="div">
          <h5><span class="material-symbols-outlined">bedroom_parent</span>${num1}</h5>
          <h5><span class="material-symbols-outlined">bathtub</span>${num2}</h5>
          <h5><span class="material-symbols-outlined">balcony</span>${num3}</h5>
        </div>
      </div>
    </div>
  `;
  products.innerHTML += code;
}

let item = [  "https://media.istockphoto.com/id/1320991884/photo/aerial-view-of-residential-distratic-at-major-mackenzie-dr-and-islinton-ave-detached-and.jpg?b=1&s=170667a&w=0&k=20&c=kIKzJYI9ZWn82q8REw4L0Ie6-shLWhd4rAyamicyeiQ=",
  "two bedroom", 
   "Two Bedroom flat",
  "04, Bode Edo Estate",
  "20,000", 
   "3",  
   "1", 
    "2"];

createCard(
  item[0],
  item[1],
  item[2],
  item[3],
  item[4],
  item[5],
  item[6],
  item[7]
);


let item2 = [  "https://media.istockphoto.com/id/1396856251/photo/colonial-house.jpg?b=1&s=170667a&w=0&k=20&c=gtwOJj8NhCVhDxz8_JxkN8sJFVjEiT9knHYT8VutTLI=",
  "three bedroom",
  "Three Bedroom flat",
  "04, Badmus Estate", 
   "200,000", 
    "3", 
     "1", 
      "2"];

createCard(
  item2[0],
  item2[1],
  item2[2],
  item2[3],
  item2[4],
  item2[5],
  item2[6],
  item2[7]
);

let item3 = [  "https://media.istockphoto.com/id/1368330586/photo/front-porch-and-entrance-to-new-home.jpg?b=1&s=170667a&w=0&k=20&c=g2W2k7VFWMrreuPjL_JX7B8Ztswk0Ag9Wf8tkU4poDA=",
  "one bedroom",
  "One Bedroom flat",
  "23, Scroll In  Estate", 
   "20,000", 
    "3", 
     "1", 
      "2"];

createCard(
  item3[0],
  item3[1],
  item3[2],
  item3[3],
  item3[4],
  item3[5],
  item3[6],
  item3[7]
);

let item4 = [  "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  "four bedroom",
  "Four Bedroom flat",
  "10, Splash Me Estate", 
   "220,000", 
    "2", 
     "3", 
      "2"];

createCard(
  item4[0],
  item4[1],
  item4[2],
  item4[3],
  item4[4],
  item4[5],
  item4[6],
  item4[7]
);

let item5 = [  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  "three bedroom flat",
  "Three Bedroom flat",
  "78, Prettier Estate", 
   "67,000", 
    "4", 
     "2", 
      "2"];

createCard(
  item5[0],
  item5[1],
  item5[2],
  item5[3],
  item5[4],
  item5[5],
  item5[6],
  item5[7]
);

let item6 = [  "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "Mansion",
  "Mansion",
  "04, Bable Estate", 
   "70,000", 
    "5", 
     "4", 
      "2"];

createCard(
  item6[0],
  item6[1],
  item6[2],
  item6[3],
  item6[4],
  item6[5],
  item6[6],
  item6[7]
);

let item7 = [  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
  "mini flat",
  "Mini flat",
  "04, Spaces Estate", 
   "20,000", 
    "1", 
     "1", 
      "1"];

createCard(
  item7[0],
  item7[1],
  item7[2],
  item7[3],
  item7[4],
  item7[5],
  item7[6],
  item7[7]
);

let item8 = [  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "duplex ",
  "Duplex",
  "04, BodeEdo Estate", 
   "150,000", 
    "6", 
     "5", 
      "2"];

createCard(
  item8[0],
  item8[1],
  item8[2],
  item8[3],
  item8[4],
  item8[5],
  item8[6],
  item8[7]
);

let item9 = [  "https://media.istockphoto.com/id/1368330586/photo/front-porch-and-entrance-to-new-home.jpg?b=1&s=170667a&w=0&k=20&c=g2W2k7VFWMrreuPjL_JX7B8Ztswk0Ag9Wf8tkU4poDA=",
  "Skyscraper",
  "Skyscraper",
  "64, Soladamma  Estate", 
   "200,000", 
    "15", 
     "1", 
      "2"];

createCard(
  item9[0],
  item9[1],
  item9[2],
  item9[3],
  item9[4],
  item9[5],
  item9[6],
  item9[7]
);


let item10 = [  "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  "One room",
  "One room",
  "01, Bodemada Estate", 
   "40,000", 
    "1", 
     "1", 
      "2"];

createCard(
  item10[0],
  item10[1],
  item10[2],
  item10[3],
  item10[4],
  item10[5],
  item10[6],
  item10[7]
);


let item11 = [  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  "self contain",
  "Self Contain",
  "04, Bode Edo Estate", 
   "20,000", 
    "3", 
     "1", 
      "2"];

createCard(
  item11[0],
  item11[1],
  item11[2],
  item11[3],
  item11[4],
  item11[5],
  item11[6],
  item11[7]
);

let item12 = [  "https://media.istockphoto.com/id/1393885905/photo/real-estate-agent-showing-a-mature-couple-a-new-house.jpg?b=1&s=170667a&w=0&k=20&c=O6ROn4qlooIZo8xb124PcS3A3XncKnDRuASWJb3Jk3Y=",
  "boys quatre ",
  "Boy's quatre ",
  "4, Bode Edo Estate", 
   "8,000", 
    "1", 
     "1", 
      "1"];

createCard(
  item12[0],
  item12[1],
  item12[2],
  item12[3],
  item12[4],
  item12[5],
  item12[6],
  item12[7]
);


let item13 = [  "https://media.istockphoto.com/id/1442689861/photo/old-fort-house-with-autumnal-trees-and-a-green-field-on-a-sunny-day.jpg?b=1&s=170667a&w=0&k=20&c=uMtOglJx-1QEh7MzG3Z2WaCXOD8bJKi6GEux5rZHe88=",
  "three bedroom flat",
  "Three Bedroom flat",
  "2, Miradda Goda Estate", 
   "68,000", 
    "3", 
     "1", 
      "2"];

createCard(
  item13[0],
  item13[1],
  item13[2],
  item13[3],
  item13[4],
  item13[5],
  item13[6],
  item13[7]
);

let item14 = [  "https://media.istockphoto.com/id/1390092018/photo/house-with-solar-panels.jpg?b=1&s=170667a&w=0&k=20&c=2XTUuRycexIqNtuKD4jKyG5F7lKvEP01pASeIw0RE1Q=",
  "two bedroom flat",
  "Two Bedroom flat",
  "04, Colobus Dadlola Estate", 
   "50,000", 
    "3", 
     "1", 
      "2"];

createCard(
  item14[0],
  item14[1],
  item14[2],
  item14[3],
  item14[4],
  item14[5],
  item14[6],
  item14[7]
);

let item15 = [  "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  "one bedroom flat",
  "One Bedroom flat",
  "04, Qouar Estate", 
   "20,000", 
    "1", 
     "1", 
      "1"];

createCard(
  item15[0],
  item15[1],
  item15[2],
  item15[3],
  item15[4],
  item15[5],
  item15[6],
  item15[7]
);

let item16 = [  "https://media.istockphoto.com/id/1390092018/photo/house-with-solar-panels.jpg?b=1&s=170667a&w=0&k=20&c=2XTUuRycexIqNtuKD4jKyG5F7lKvEP01pASeIw0RE1Q=",
  "four bedroom flat",
  "Four Bedroom flat",
  "04, Bode Edo Estate", 
   "60,000", 
    "3", 
     "1", 
      "2"];

createCard(
  item16[0],
  item16[1],
  item16[2],
  item16[3],
  item16[4],
  item16[5],
  item16[6],
  item16[7]
);

let item17 = [  "https://media.istockphoto.com/id/1427608956/photo/rear-view-of-dad-holding-her-little-girl-in-arms-and-showing-at-their-house-with-installed.jpg?b=1&s=170667a&w=0&k=20&c=V9cPqNDO4cIzaGPApLXT69iAgVHo8lttWXH1Kx4jzAY=",
  "five bedroom flat",
  "Five Bedroom flat",
  "04, Bode Edo Estate", 
   "67,000", 
    "3", 
     "0", 
      "2"];

createCard(
  item17[0],
  item17[1],
  item17[2],
  item17[3],
  item17[4],
  item17[5],
  item17[6],
  item17[7]
);

let item18 = [  "https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?b=1&s=170667a&w=0&k=20&c=acVdz2wMQAu_M9ZXOuECxSJwoKavvgo1_ZJUr8pOYWA=",
  "three bedroom flat",
  "Three Bedroom flat",
  "56, Bode Edo Estate", 
   "70,000", 
    "2", 
     "1", 
      "2"];

createCard(
  item18[0],
  item18[1],
  item18[2],
  item18[3],
  item18[4],
  item18[5],
  item18[6],
  item18[7]
);

let item19 = [  "https://media.istockphoto.com/id/1390092018/photo/house-with-solar-panels.jpg?b=1&s=170667a&w=0&k=20&c=2XTUuRycexIqNtuKD4jKyG5F7lKvEP01pASeIw0RE1Q=",
  "One Room",
  "One Room",
  "22, Sannjju Edo Estate", 
   "24,000", 
    "1", 
     "1", 
      "2"];

createCard(
  item19[0],
  item19[1],
  item19[2],
  item19[3],
  item19[4],
  item19[5],
  item19[6],
  item19[7]
);


let item20 = [  "https://media.istockphoto.com/id/1415886888/photo/freshly-painted-craftsman-bungalow-house.jpg?b=1&s=170667a&w=0&k=20&c=lWGj1yZBmuZ-FB7401-NraD_tvhE36hw_zF363hsXAY=",
  "three bedroom flat",
  "Three Bedroom flat",
  "88, Mabajje  Estate", 
   "70,000", 
    "2", 
     "1", 
      "2"];

createCard(
  item20[0],
  item20[1],
  item20[2],
  item20[3],
  item20[4],
  item20[5],
  item20[6],
  item20[7]
);

let item21 = [  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  "two bedroom flat",
  "Two Bedroom flat",
  "04, Treegreen  Estate", 
   "70,000", 
    "1", 
     "1", 
      "2"];

createCard(
  item21[0],
  item21[1],
  item21[2],
  item21[3],
  item21[4],
  item21[5],
  item21[6],
  item21[7]
);


let item22 = [  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
  "Four bedroom flat",
  "Four Bedroom flat",
  "699, Lavelly Estate", 
   "80,000", 
    "2", 
     "1", 
      "2"];

createCard(
  item22[0],
  item22[1],
  item22[2],
  item22[3],
  item22[4],
  item22[5],
  item22[6],
  item22[7]
);


let item23 = [  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "Mansion",
  "Mansion",
  "04, Bode Edo Estate", 
   "27,000", 
    "3", 
     "1", 
      "2"];

createCard(
  item23[0],
  item23[1],
  item23[2],
  item23[3],
  item23[4],
  item23[5],
  item23[6],
  item23[7]
);


let item24 = [  "https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "three bedroom",
  "Three Bedroom flat",
  "01, Damisi Estate", 
   "27,000", 
    "3", 
     "1", 
      "2"];

createCard(
  item24[0],
  item24[1],
  item24[2],
  item24[3],
  item24[4],
  item24[5],
  item24[6],
  item24[7]
);

// https://images.unsplash.com/photo-1609757754057-8a8e17eb73b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60

let item25 = [  "https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "Single bedroom",
  "Single Bedroom",
  "400, Jookss Edo Estate", 
   "33,000", 
    "1", 
     "1", 
      "2"];

createCard(
  item25[0],
  item25[1],
  item25[2],
  item25[3],
  item25[4],
  item25[5],
  item25[6],
  item25[7]
);


let item26 = [  "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "Five bedroom flat",
  "Five Bedroom flat",
  "22, Omole Easre Estate", 
   "50,000", 
    "3", 
     "1", 
      "2"];

createCard(
  item26[0],
  item26[1],
  item26[2],
  item26[3],
  item26[4],
  item26[5],
  item26[6],
  item26[7]
);


let item27 = [  "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "Two bedroom flat",
  "Two Bedroom flat",
  "04, Laveh lolddo Estate", 
   "35,000", 
    "2", 
     "1", 
      "2"];

createCard(
  item27[0],
  item27[1],
  item27[2],
  item27[3],
  item27[4],
  item27[5],
  item27[6],
  item27[7]
);


let item28 = [  "https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "One bedroom flat",
  "One Bedroom flat",
  "09, Mavel Jooanne Estate", 
   "84,000", 
    "2", 
     "1", 
      "0"];

createCard(
  item28[0],
  item28[1],
  item28[2],
  item28[3],
  item28[4],
  item28[5],
  item28[6],
  item28[7]
);


let item29 = [  "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "Mansion",
  "Mansion",
  "04, Melody Melodo Estate", 
   "28,000", 
    "2", 
     "0", 
      "1"];

createCard(
  item29[0],
  item29[1],
  item29[2],
  item29[3],
  item29[4],
  item29[5],
  item29[6],
  item29[7]
);


let item30 = [  "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "duplex",
  "duplex",
  "04, Lexus Meddo Estate", 
   "80,000", 
    "3", 
     "2", 
      "2"];

createCard(
  item30[0],
  item30[1],
  item30[2],
  item30[3],
  item30[4],
  item30[5],
  item30[6],
  item30[7]
);


let item31 = [  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "three bedroom",
  "Three Bedroom flat",
  "3, EdoBode  Estate", 
   "200,000", 
    "2", 
     "2", 
      "2"];

createCard(
  item31[0],
  item31[1],
  item31[2],
  item31[3],
  item31[4],
  item31[5],
  item31[6],
  item31[7]
);

let item32 = [  "https://images.unsplash.com/photo-1584752242818-b4bd7fb3fe10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "duplex",
  "duplex",
  "04, Lovelly mmaja Estate", 
   "80,000", 
    "1", 
     "0", 
      "2"];

createCard(
  item32[0],
  item32[1],
  item32[2],
  item32[3],
  item32[4],
  item32[5],
  item32[6],
  item32[7]
);

let item33 = [  "https://images.unsplash.com/photo-1567428485548-c499e4931c10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "Mansion",
  "Mansion",
  "04, Janne Edomma Estate", 
   "80,000", 
    "1", 
     "1", 
      "2"];

createCard(
  item33[0],
  item33[1],
  item5[2],
  item5[3],
  item33[4],
  item33[5],
  item33[6],
  item33[7]
);


let item34 = [  "https://images.unsplash.com/photo-1626222628055-fb92dd194160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "three bedroom flat",
  "Three Bedroom flat",
  "222, HooEdo Street", 
   "20,000", 
    "3", 
     "3", 
      "3"];

createCard(
  item34[0],
  item34[1],
  item34[2],
  item34[3],
  item34[4],
  item34[5],
  item34[6],
  item34[7]
);


let item36 = [  "https://images.unsplash.com/photo-1602075432748-82d264e2b463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  "One bedroom flat",
  "One Bedroom flat",
  "100,  Edo Estate", 
   "22,000", 
    "3", 
     "1", 
      "2"];

createCard(
  item36[0],
  item36[1],
  item36[2],
  item36[3],
  item36[4],
  item36[5],
  item36[6],
  item36[7]
);


let item37 = [  "https://images.unsplash.com/photo-1609757754057-8a8e17eb73b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "Self Contain",
  "Self Contain",
  "01, mira  Estate", 
   "30,000", 
    "1", 
     "2", 
      "3"];

createCard(
  item37[0],
  item37[1],
  item37[2],
  item37[3],
  item37[4],
  item37[5],
  item37[6],
  item37[7]
);




const searchInput = document.querySelector('#search-input');
const carl = document.querySelector('#carl');

  $("#carl").hide();

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';   
    }
  });
});
