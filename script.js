const products = [
    { id: 1, title: 'Pergola: Laur Balaur și Pasarea Maiastra', category: 'pergola', price: 5000, img: 'aa.jpg', desc: 'Pergolă elegantă cu sculpturi inspirate din mitologie.' },
    { id: 2, title: 'Foișor, 8x8M', category: 'foisor', price: 7500, img: 'aa.jpg', desc: 'Foișor spațios, ideal pentru reuniuni în aer liber.' },
    { id: 3, title: 'Pergolă Rustic', category: 'pergola', price: 4300, img: 'asasas.jpg', desc: 'Design rustic cu grinzi groase din lemn de stejar.' },
    { id: 4, title: 'Foișor Modern 6x6M', category: 'foisor', price: 6800, img: 'photo.jpg', desc: 'Foișor cu linii moderne și acoperiș plat.' },
    { id: 5, title: 'Pergolă Minimalistă', category: 'pergola', price: 3900, img: 'photo.jpg', desc: 'Structură simplă, finisaj alb mat.' },
    { id: 6, title: 'Foișor Victorian', category: 'foisor', price: 8200, img: 'photo2.jpg', desc: 'Detalii decorative și acoperiș în stil victorian.' },
    { id: 7, title: 'Pergolă cu Plantare', category: 'pergola', price: 5600, img: 'photo3.jpg', desc: 'Include suport pentru plante cățărătoare.' },
    { id: 8, title: 'Foișor Panoramic', category: 'foisor', price: 9200, img: 'photo4.jpg', desc: 'Panouri laterale de sticlă pentru vedere neobstrucționată.' },
    { id: 9, title: 'Pergolă Familială', category: 'pergola', price: 8800, img: 'photo5.jpg', desc: 'Spațiu generos pentru reuniuni cu familia.' },
    { id: 10, title: 'Foișor Clasic', category: 'foisor', price: 6300, img: 'photo6.jpg', desc: 'Design clasic, potrivit pentru orice grădină.' },
    { id: 11, title: 'Pergolă pentru Terasă', category: 'pergola', price: 7100, img: 'photo7.jpg', desc: 'Perfectă pentru terase și balcoane spațioase.' },
    { id: 12, title: 'Foișor Lux', category: 'foisor', price: 10400, img: 'photo8.jpg', desc: 'Materiale premium și finisaje fine.' }
  ];
  
  const grid = document.querySelector('.grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cartCount = document.getElementById('cart-count');
  let cart = 0;
  
  function renderProducts(filter = 'all') {
    grid.innerHTML = '';
    const filtered = products.filter(p => filter === 'all' || p.category === filter);
    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.title}" />
        <div class="product-info">
          <h3>${p.title}</h3>
          <div class="price">${p.price} EUR</div>
        </div>`;
      card.addEventListener('click', () => openModal(p));
      grid.appendChild(card);
    });
  }
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.filter);
    });
  });
  
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalAdd = document.getElementById('modal-add');
  const modalBuy = document.getElementById('modal-buy');
  const closeBtn = document.querySelector('.close-btn');
  let currentProduct;
  
  function openModal(product) {
    currentProduct = product;
    modalImg.src = product.img;
    modalTitle.textContent = product.title;
    modalDesc.textContent = product.desc;
    modal.classList.remove('hidden');
  }
  closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  modalAdd.addEventListener('click', () => { cart++; cartCount.textContent = cart; });
  modalBuy.addEventListener('click', () => alert('Redirecționează la cumpărare pentru ' + currentProduct.title));
  
  // Contact form
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Mulțumim pentru mesaj, vă vom contacta în curând!');
    contactForm.reset();
  });
  
  // inițializare
  renderProducts();
  