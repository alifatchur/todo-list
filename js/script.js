var dataBarang = [
  "Buku Tulis",
  "Pensil",
  "Spidol"
];


function showBarang(){
  var listBarang = document.getElementById("list-barang");

  // clear list barang
  listBarang.innerHTML = "";

  // cetak semua barang
  for(let i = 0; i < dataBarang.length; i++){
      var btnEdit = "<button class='btn btn-success btn-sm' onclick='editBarang("+i+")'>Edit</button>";
      var btnHapus = "<button class='btn btn-danger btn-sm' onclick='deleteBarang("+i+")'>Delete</button>";

      listBarang.innerHTML += "<tr><td>" + dataBarang[i] + "</td><td class='text-center' width='40%'>"+btnEdit + " "+ btnHapus +"</td></tr>";        
  }
}

var input = document.querySelector("input[name=barang]");

function addBarang(){
  input;
  dataBarang.push(input.value);
  input.value = ""
  showBarang();
}

input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    addBarang();
  }
})

function editBarang(id){
  var newBarang = prompt("Nama baru", dataBarang[id]);
  dataBarang[id] = newBarang;
  showBarang();
}

function deleteBarang(id){
  dataBarang.splice(id, 1);
  showBarang();
}

showBarang();