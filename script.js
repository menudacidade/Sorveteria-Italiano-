// ============================================================
// CONFIGURAÇÃO
// ============================================================
const WHATSAPP_NUMERO = "554298565496";

// ============================================================
// PRODUTOS
// ============================================================
const produtos = [
    // ===== AÇAÍ =====
    { nome: "Açaí Copo 300ml", preco: 12.00, categoria: "acai", tipoAddon: "acai", desc: "Açaí cremoso + acompanhamentos", img: "AÇAÍS/AÇAÍ 300.png", tag: "MAIS VENDIDO" },
    { nome: "Açaí Copo 400ml", preco: 15.00, categoria: "acai", tipoAddon: "acai", desc: "Açaí cremoso + acompanhamentos", img: "AÇAÍS/AÇAÍ400.png" },
    { nome: "Açaí Copo 500ml", preco: 17.00, categoria: "acai", tipoAddon: "acai", desc: "Açaí cremoso + acompanhamentos", img: "AÇAÍS/AÇAÍ 500.png" },
    { nome: "Açaí na Tigela", preco: 15.00, categoria: "acai", tipoAddon: "acai", desc: "Açaí cremoso + acompanhamentos", img: "AÇAÍS/AÇAÍ NA TIGELA.png" },

    // ===== MILK SHAKE BAUNILHA =====
    { nome: "Milk Shake Baunilha 300 ML", preco: 9.00, categoria: "shake", tipoAddon: "shake", desc: "Delicioso e cremoso", img: "MILK SHAKE/milk baunilha300.png" },
    { nome: "Milk Shake Baunilha 400 ML", preco: 11.00, categoria: "shake", tipoAddon: "shake", desc: "Delicioso e cremoso", img: "MILK SHAKE/milk baunilha400.png", tag: "POPULAR" },
    { nome: "Milk Shake Baunilha 500 ML", preco: 12.00, categoria: "shake", tipoAddon: "shake", desc: "Delicioso e cremoso", img: "MILK SHAKE/milk baunilha500.png" },

    // ===== MILK SHAKE COM PAÇOCA =====
    { nome: "Milk Shake c/ Paçoca 300 ML", preco: 11.00, categoria: "shake", tipoAddon: "shake", desc: "Delicioso e cremoso", img: "MILK SHAKE/MILK DE PAÇOCA.png" },
    { nome: "Milk Shake c/ Paçoca 400 ML", preco: 13.00, categoria: "shake", tipoAddon: "shake", desc: "Delicioso e cremoso", img: "MILK SHAKE/MILK DE PAÇOCA.png" },
    { nome: "Milk Shake c/ Paçoca 500 ML", preco: 14.00, categoria: "shake", tipoAddon: "shake", desc: "Delicioso e cremoso", img: "MILK SHAKE/MILK DE PAÇOCA.png" },

    // ===== MILK SHAKE MISTO =====
    { nome: "Milk Shake Misto 300 ML", preco: 10.00, categoria: "shake", tipoAddon: "shake", desc: "Delicioso e cremoso", img: "MILK SHAKE/milk misto300.png" },
    { nome: "Milk Shake Misto 400 ML", preco: 12.00, categoria: "shake", tipoAddon: "shake", desc: "Delicioso e cremoso", img: "MILK SHAKE/milk misto 400.png" },
    { nome: "Milk Shake Misto 500 ML", preco: 14.00, categoria: "shake", tipoAddon: "shake", desc: "Delicioso e cremoso", img: "MILK SHAKE/milk misto 500.png" },

    // ===== SORVETES =====
    { nome: "Copinho", preco: 7.00, categoria: "sorvete", tipoAddon: "copinho", desc: "Sorvete no copinho", img: "SORVETES/copinho.jpg" },
    { nome: "Moreninha", preco: 3.50, categoria: "sorvete", tipoAddon: "sorvete", desc: "Sorvete com calda", img: "SORVETES/mopreninha.jpg" },
    { nome: "Picolés Sortidos", preco: 2.00, categoria: "sorvete", tipoAddon: "sorvete", desc: "Diversos sabores", img: "SORVETES/PICOLÉS.png" },
    { nome: "Pote 1 Litro/unidade", preco: 10.00, categoria: "sorvete", tipoAddon: "sorvete", desc: "Sorvete para levar", img: "SORVETES/pote 1l.jpeg" },
    { nome: "Sundae", preco: 2.50, categoria: "sorvete", tipoAddon: "sorvete", desc: "Sorvete para levar", img: "sundae.webp" },

    // ===== BEBIDAS =====
    { nome: "Água", preco: 3.00, categoria: "bebida", tipoAddon: "bebida", desc: "Garrafa 500ml", img: "BEBIDAS/Água Sem Gás Crystal 500ml - Swift.jpg" },
    { nome: "Água com Gás", preco: 3.00, categoria: "bebida", tipoAddon: "bebida", desc: "Garrafa 500ml", img: "BEBIDAS/Água Crystal com Gás - 500ml em Promoção _ Centauro.jpg" },
    { nome: "Coca-Cola", preco: 5.00, categoria: "bebida", tipoAddon: "bebida", desc: "Lata 350ml", img: "BEBIDAS/COCA COLA.jpg" },
    { nome: "Coca-Cola Zero", preco: 5.00, categoria: "bebida", tipoAddon: "bebida", desc: "Lata 350ml", img: "BEBIDAS/COCA ZERO.jpg" },
    { nome: "Guaraná", preco: 5.00, categoria: "bebida", tipoAddon: "bebida", desc: "Lata 350ml", img: "BEBIDAS/GUARANÁ.jpg" },
    { nome: "Sprite", preco: 5.00, categoria: "bebida", tipoAddon: "bebida", desc: "Lata 350ml", img: "BEBIDAS/SPRITE.jpg" },
    { nome: "Brahma", preco: 5.00, categoria: "bebida", tipoAddon: "bebida", desc: "Lata 350ml", img: "BEBIDAS/BRAHMA.jpg" },
    { nome: "Skol", preco: 5.00, categoria: "bebida", tipoAddon: "bebida", desc: "Lata 350ml", img: "BEBIDAS/SKOL.jpg" }
];

// ============================================================
// ADICIONAIS
// ============================================================
const addonsData = {
    "acai": [
        { name: "Leite Condensado", price: 2.00 },
        { name: "Leite Ninho", price: 1.00 },
        { name: "Paçoca", price: 2.00 },
        { name: "Confete", price: 2.00 },
        { name: "Ovomaltine", price: 2.00 },
        { name: "Amendoim", price: 2.00 },
        { name: "Banana", price: 2.00 },
        { name: "Goma Fini Sortida", price: 2.00 },
        { name: "Tubets", price: 1.00 },
        { name: "Cobertura: Flocos Maltados", price: 3.00 },
        { name: "Cobertura: Coco Bianco", price: 3.00 },
        { name: "Cobertura: Cookies", price: 3.00 },
        { name: "Creme: Nutella", price: 5.00 },
        { name: "Creme: Leitinho", price: 5.00 },
        { name: "Creme: Avelã", price: 5.00 }
    ],
    "shake": [
        { name: "Calda de Morango", price: 3.00 },
        { name: "Calda de Chocolate", price: 3.00 },
        { name: "Calda de Caramelo", price: 3.00 }
    ],
    "copinho": [
        { name: "Calda de Morango", price: 3.00 },
        { name: "Calda de Chocolate", price: 3.00 },
        { name: "Calda de Caramelo", price: 3.00 }
    ],
    "sorvete": [],
    "bebida": []
};

// ============================================================
// ESTADO
// ============================================================
let currentProduct = { name: "", basePrice: 0, type: "", selectedAddons: [], img: "", qty: 1 };
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Elementos
const modalOverlay = document.getElementById('modalOverlay');
const cartOverlay = document.getElementById('cartOverlay');
const checkoutOverlay = document.getElementById('checkoutOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const addonsList = document.getElementById('addonsList');
const addonsTitle = document.getElementById('addonsTitle');
const modalTotal = document.getElementById('modalTotal');
const qtyValue = document.getElementById('qtyValue');
const productGrid = document.getElementById('productGrid');
const catItems = document.querySelectorAll('.cat-item');
const sectionTitle = document.getElementById('sectionTitle');
const cartBadge = document.getElementById('cartBadge');
const cartNavBadge = document.getElementById('cartNavBadge');
const cartBody = document.getElementById('cartBody');
const cartTotal = document.getElementById('cartTotal');
const checkoutTotal = document.getElementById('checkoutTotal');

// ============================================================
// RENDERIZAR PRODUTOS (COM ESTRELAS)
// ============================================================
function renderProducts(filter = "todos") {
    productGrid.innerHTML = '';
    
    const filtered = filter === "todos" 
        ? produtos 
        : produtos.filter(p => p.categoria === filter);

    filtered.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openModal(prod.nome, prod.preco, prod.tipoAddon, prod.img);
        
        card.innerHTML = `
            <div class="card-img">
                <img src="${prod.img}" alt="${prod.nome}">
                ${prod.tag ? `<span class="badge-tag">${prod.tag}</span>` : ''}
            </div>
            <div class="card-info">
                <h4>${prod.nome}</h4>
                <p>${prod.desc}</p>
                <div class="card-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span>(4.8)</span>
                </div>
                <div class="card-bottom">
                    <span class="price">R$ ${prod.preco.toFixed(2).replace('.', ',')}</span>
                    <button class="add-btn" title="Adicionar ao carrinho"><i class="fas fa-plus"></i></button>
                </div>
            </div>
        `;

        const addBtn = card.querySelector('.add-btn');
        addBtn.onclick = (event) => {
            event.stopPropagation();
            addDirectToCart(prod);
        };

        productGrid.appendChild(card);
    });
}

// ============================================================
// ADICIONAR DIRETO AO CARRINHO (BOTÃO +)
// ============================================================
function addDirectToCart(prod) {
    cart.push({
        nome: prod.nome,
        precoBase: prod.preco,
        adicionais: [],
        qty: 1,
        totalUnit: prod.preco,
        total: prod.preco,
        img: prod.img
    });

    saveCart();
    updateCartBadge();
    showToast(`✅ ${prod.nome} adicionado!`);
}

// ============================================================
// FILTRO DE CATEGORIAS
// ============================================================
catItems.forEach(item => {
    item.addEventListener('click', () => {
        catItems.forEach(c => c.classList.remove('active'));
        item.classList.add('active');
        
        const category = item.getAttribute('data-category');
        renderProducts(category);

        const titulos = {
            "todos": "Nossos Produtos",
            "acai": "Açaí",
            "shake": "Milk Shakes",
            "sorvete": "Sorvetes",
            "bebida": "Bebidas"
        };
        sectionTitle.innerText = titulos[category] || "Nossos Produtos";
    });
});

// ============================================================
// MODAL DE PRODUTO
// ============================================================
function openModal(name, price, type, img) {
    currentProduct = { name, basePrice: price, type, selectedAddons: [], img, qty: 1 };
    modalTitle.innerText = name;
    modalImage.src = img;
    modalImage.alt = name;
    qtyValue.innerText = 1;
    renderAddons(type);
    updateTotal();
    modalOverlay.classList.add('active');
}

function closeModal(event) {
    if (event) {
        if (event.target === modalOverlay) modalOverlay.classList.remove('active');
    } else {
        modalOverlay.classList.remove('active');
    }
    currentProduct = { name: "", basePrice: 0, type: "", selectedAddons: [], img: "", qty: 1 };
}

function changeQty(delta) {
    currentProduct.qty += delta;
    if (currentProduct.qty < 1) currentProduct.qty = 1;
    qtyValue.innerText = currentProduct.qty;
    updateTotal();
}

function renderAddons(type) {
    addonsList.innerHTML = '';
    const addons = addonsData[type] || [];

    if (addons.length === 0) {
        addonsTitle.style.display = 'none';
        addonsList.innerHTML = '<p style="font-size:12px; color:#777; text-align:center; padding:15px;">Nenhum adicional disponível. Clique em "Adicionar".</p>';
        return;
    }

    addonsTitle.style.display = 'block';
    addons.forEach((addon, index) => {
        const div = document.createElement('div');
        div.className = 'addon-item';
        div.onclick = () => toggleAddon(index, div);
        
        div.innerHTML = `
            <div class="addon-info">
                <span class="addon-name">${addon.name}</span>
                <span class="addon-price">+ R$ ${addon.price.toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="addon-check"><i class="fas fa-check"></i></div>
        `;
        addonsList.appendChild(div);
    });
}

function toggleAddon(index, element) {
    const addon = addonsData[currentProduct.type][index];
    const isSelected = element.classList.contains('selected');

    if (isSelected) {
        element.classList.remove('selected');
        currentProduct.selectedAddons = currentProduct.selectedAddons.filter(i => i.name !== addon.name);
    } else {
        element.classList.add('selected');
        currentProduct.selectedAddons.push(addon);
    }
    updateTotal();
}

function updateTotal() {
    let base = currentProduct.basePrice;
    let addonsTotal = currentProduct.selectedAddons.reduce((sum, a) => sum + a.price, 0);
    let total = (base + addonsTotal) * currentProduct.qty;
    modalTotal.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// ============================================================
// ADICIONAR AO CARRINHO (PELO MODAL)
// ============================================================
function addToCart() {
    let base = currentProduct.basePrice;
    let addonsTotal = currentProduct.selectedAddons.reduce((sum, a) => sum + a.price, 0);
    let totalUnit = base + addonsTotal;
    let total = totalUnit * currentProduct.qty;

    cart.push({
        nome: currentProduct.name,
        precoBase: currentProduct.basePrice,
        adicionais: [...currentProduct.selectedAddons],
        qty: currentProduct.qty,
        totalUnit: totalUnit,
        total: total,
        img: currentProduct.img
    });

    saveCart();
    updateCartBadge();
    showToast(`✅ ${currentProduct.qty}x ${currentProduct.name} adicionado!`);
    closeModal();
}

// ============================================================
// CARRINHO
// ============================================================
function openCart() {
    renderCart();
    cartOverlay.classList.add('active');
}

function closeCart(event) {
    if (event) {
        if (event.target === cartOverlay) cartOverlay.classList.remove('active');
    } else {
        cartOverlay.classList.remove('active');
    }
}

function renderCart() {
    cartBody.innerHTML = '';

    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>Seu carrinho está vazio!</p>
                <p style="font-size:12px; margin-top:5px;">Adicione produtos para continuar.</p>
            </div>
        `;
        cartTotal.innerText = 'R$ 0,00';
        return;
    }

    let totalGeral = 0;

    cart.forEach((item, index) => {
        totalGeral += item.total;

        const div = document.createElement('div');
        div.className = 'cart-item';
        
        const addonsText = item.adicionais.length > 0
            ? item.adicionais.map(a => a.name).join(', ')
            : 'Sem adicionais';

        div.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.img}" alt="${item.nome}">
            </div>
            <div class="cart-item-info">
                <h4>${item.qty}x ${item.nome}</h4>
                <p class="item-addons">${addonsText}</p>
                <p class="item-price">R$ ${item.total.toFixed(2).replace('.', ',')}</p>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartBody.appendChild(div);
    });

    cartTotal.innerText = `R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartBadge();
    renderCart();
    showToast('🗑️ Item removido!');
}

function clearCart() {
    if (cart.length === 0) return;
    if (confirm('Tem certeza que deseja limpar o carrinho?')) {
        cart = [];
        saveCart();
        updateCartBadge();
        renderCart();
        showToast('🗑️ Carrinho limpo!');
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartBadge() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    cartBadge.innerText = count;
    cartNavBadge.innerText = count;
}

// ============================================================
// CHECKOUT
// ============================================================
function openCheckout() {
    if (cart.length === 0) {
        showToast('🛒 Seu carrinho está vazio!');
        return;
    }
    closeCart();
    
    let totalGeral = cart.reduce((sum, item) => sum + item.total, 0);
    checkoutTotal.innerText = `R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
    
    checkoutOverlay.classList.add('active');
}

function closeCheckout(event) {
    if (event) {
        if (event.target === checkoutOverlay) checkoutOverlay.classList.remove('active');
    } else {
        checkoutOverlay.classList.remove('active');
    }
}

// ============================================================
// ENVIAR PEDIDO PARA WHATSAPP
// ============================================================
function enviarPedido() {
    const nome = document.getElementById('clientName').value.trim();
    const endereco = document.getElementById('clientAddress').value.trim();
    const telefone = document.getElementById('clientPhone').value.trim();
    const pagamento = document.getElementById('paymentMethod').value;
    const observacoes = document.getElementById('clientNotes').value.trim();

    if (!nome || !endereco || !telefone || !pagamento) {
        showToast('⚠️ Preencha todos os campos obrigatórios!');
        return;
    }

    let mensagem = `🛒 *NOVO PEDIDO - Sorveteria Italiano*\n\n`;
    mensagem += `👤 *Cliente:* ${nome}\n`;
    mensagem += `📍 *Endereço:* ${endereco}\n`;
    mensagem += `📞 *Telefone:* ${telefone}\n`;
    mensagem += `💳 *Pagamento:* ${pagamento}\n`;
    if (observacoes) mensagem += `📝 *Obs:* ${observacoes}\n`;
    mensagem += `\n━━━━━━━━━━━━━━━━━━\n\n`;

    let totalGeral = 0;

    cart.forEach((item, index) => {
        mensagem += `*${index + 1}. ${item.qty}x ${item.nome}*\n`;
        
        if (item.adicionais.length > 0) {
            mensagem += `   ➕ Adicionais:\n`;
            item.adicionais.forEach(a => {
                mensagem += `   • ${a.name} (+R$ ${a.price.toFixed(2).replace('.', ',')})\n`;
            });
        }
        
        mensagem += `   💰 Subtotal: R$ ${item.total.toFixed(2).replace('.', ',')}\n\n`;
        totalGeral += item.total;
    });

    mensagem += `━━━━━━━━━━━━━━━━━━\n`;
    mensagem += `💵 *TOTAL: R$ ${totalGeral.toFixed(2).replace('.', ',')}*\n\n`;
    mensagem += `Obrigado pela preferência! 🍦`;

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');

    cart = [];
    saveCart();
    updateCartBadge();
    closeCheckout();
    showToast('✅ Pedido enviado com sucesso!');
}

// ============================================================
// ESPECIAL DO DIA (BANNER INFERIOR)
// ============================================================
function especialDoDia() {
    const mensagem = "Olá, eu gostaria de saber qual o sabor especial do dia";
    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// ============================================================
// TOAST
// ============================================================
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ============================================================
// SCROLL
// ============================================================
function scrollToMenu() {
    document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// INICIALIZAR
// ============================================================
renderProducts("todos");
updateCartBadge();
