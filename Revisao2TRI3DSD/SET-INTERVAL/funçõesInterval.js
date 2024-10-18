const bolau = {
  pau: "mamão papai",
  orificios: "403",
};

function VaiDarBom() {
  return bolau;
}

let burro = setInterval(function () {
  const bom = VaiDarBom();
  console.log(`Fruta: ${bom.pau}\nBuracos: ${bom.orificios}`);
  console.log(bom);
}, 2000);

setTimeout(function() {
  clearInterval(burro)
    console.log("acabou")
    ;
}, 11000);

//SetTimeOut - ClearTimeout
//SetInterval - ClearInterval


