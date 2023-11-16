
async function interfazData(){
  try{
    

    let rest = await fetch("https://mindhub-xj03.onrender.com/api/amazing");
    let data = await rest.json();

    const queryString = location.search;

    const params = new URLSearchParams(queryString);

    const id = params.get('id');

    const detail_card = data.events.find(events => events._id == id);


    const div = document.getElementById('cards_details');

    div.innerHTML = `
    <div class="card_details_body">
      <div class="card_details_img">
        <figure class="card_img">
          <img src="${detail_card.image}" alt="${detail_card.name}" class="card_img">
        </figure>
      </div>
      <div class="card_main">
        <h3 class="card_title">${detail_card.name}</h3>
        <p class="card-text">Date: ${detail_card.date}</p>
        <p class="card-text">Description: ${detail_card.description}</p>
        <p class="card-text">Category: ${detail_card.category}</p>
        <p class="card-text">Place: ${detail_card.place}</p>
        <p class="card-text">Capacity: ${detail_card.capacity}</p>
        ${detail_card.assistance ? `<p class= "card-text">Assistance: ${detail_card.assistance}</p>` : ''}
        ${detail_card.estimate ? `<p class="card-text">Estimate: ${detail_card.estimate}</p>` : ''}
        <p class="card-text"><small class="text-muted">Price ${detail_card.price}</small></p>
      </div>
    </div> `
  }catch(error){
    console.log('Estoy en el catch: ' + error.mesage)
  }
}

interfazData()

