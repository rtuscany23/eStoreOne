let inventory = [
  {
    upc: '45734548',
    name: 'Computer Monitor',
    image: '',
    price: 298.05,
    qtyInCart: 0
  },
    {
    upc: '43456643',
    name: 'Gaming Desktop',
    image: '',
    price: 567.32,
    qtyInCart: 0
  },
    {
    upc: '89439494',
    name: 'Trackball',
    image: '',
    price: 45.32,
    qtyInCart: 0
  },
    {
    upc: '12647423',
    name: 'Printer',
    image: '',
    price: 143.32,
    qtyInCart: 0
  },
    {
    upc: '72443456',
    name: 'Keyboard',
    image: '',
    price: 24.65,
    qtyInCart: 0
  },
    {
    upc: '09654377',
    name: 'Notebook',
    image: '',
    price: 678.32,
    qtyInCart: 0
  },
]

function drawInventoryWindow(){
let inventoryDivCard = document.getElementById('readOutDiv')
let stringInsertion = ''
  inventory.forEach(element => {
    stringInsertion += `
            <div class="col-md-6 col-lg-4 my-3">
              <div class="card product-card">
                <img src="//via.placeholder.com/150" alt="">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between">
                    <p><b>${element.name}</b></p>
                    <p>$${element.price}</p>
                  </div>
                  <button class="btn btn-outline-secondary" title="Add to cart" onclick="addItemToCart('${element.upc}')">
                    <i class="mdi mdi-cart"></i>
                    <small>ADD</small>
                  </button>
                </div>
              </div>
            </div>
    `  
});
inventoryDivCard.innerHTML = stringInsertion
}
drawInventoryWindow()

function addItemToCart(upc){  
  let cartElem = document.getElementById('cart')
  let inventoryElement = inventory.find(item => item.upc == upc)
  if(inventoryElement){
    inventoryElement.qtyInCart++


    //console.log(inventoryElement.qtyInCart)
    let template = ''
    if(inventoryElement.qtyInCart == 1){
      console.log('here')
      template = `<div>${inventoryElement.name} - ${inventoryElement.qtyInCart}</div>`
      cartElem.innerHTML += template
    }
    if(inventoryElement.qtyInCart > 1){
      
    }
    }
  }

  /*
  if(inventory.qtyInCart == 1){
    console.log('help');
    cartElem.innerHTML = `<div>${inventoryElement.name} - ${inventoryElement.quantity} 
    <button 
      onclick="removeItem('${inventoryElement.sku}')" 
      class="btn btn-danger"> <i class="mdi mdi-delete-forever"></i> </button></div>`
  }
}
*/

