const apiWhatsapp = 'https://wa.me/'
const getProducts = (products) => {
    console.log(products)
    const data = products.map((item, i) => `
    ${i + 1}) Producto: ${item.title}
        Precio: $${item.price}
        Link:<a href='http://localhost:5173/shop/${item.id}'>http://localhost:5173/shop/${item.id}</a> `)
    const total = products.reduce((acomulador, producto) => acomulador + producto.price, 0)
    return { data, total }
}
export function sendMessage(products) {
    const { data, total } = getProducts(products)
    // Crear un nuevo DOMParser
    let parser = new DOMParser();
    let msg = `Hola FRENCHIELOVERS, soy Genesis.
            
    Mi pedido es el siguiente:
    ${data}

    El total del pedido son: $${total}
    `
    // Convertir la cadena HTML en un objeto HTML
    let htmlDoc = parser.parseFromString(msg, 'text/html');

    // Obtener el texto del objeto HTML
    let text = htmlDoc.body.textContent;

    // Codificar el texto para que se pueda usar en una URL
    let encodedText = encodeURIComponent(text);

    // Crear la URL de WhatsApp
    let url = `${apiWhatsapp}+584241781737?text=${encodedText}`;

    // Abrir la URL en una nueva ventana
    window.open(url, '_blank');
}
