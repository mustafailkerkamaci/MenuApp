
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://source.unsplash.com/400x300/?korean,spicy,food",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://source.unsplash.com/400x300/?ramen,japanese,noodle",
    desc: `Chicken noodle soup, serving with vegetables and green onion.`,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://source.unsplash.com/400x300/?bibimbap,korean,rice",
    desc: `Boiling vegetables, serving with special hot sauce.`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://source.unsplash.com/400x300/?noodle,asian,spicy",
    desc: `Dan dan noodle, serving with green onion.`,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://source.unsplash.com/400x300/?fried-rice,asian",
    desc: `Yangzhou style fried rice, serving with bean and pickles.`,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://source.unsplash.com/400x300/?onigiri,rice,ball",
    desc: `Rice sandwich, serving with soy sauce.`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://source.unsplash.com/400x300/?black-bean,noodle,korean",
    desc: `Black bean sauce noodle, serving with green onion.`,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://source.unsplash.com/400x300/?sichuan,noodle,china",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion.`,
  },
  {
    id: 9,
    title: "Dorayaki",
    category: "Japan",
    price: 3.99,
    img: "https://source.unsplash.com/400x300/?dorayaki,japanese,dessert",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// DOM seçiciler
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// Sayfa yüklendiğinde:
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

// Menü elemanlarını ekrana basan fonksiyon (MAP kullanılıyor)
function displayMenuItems(menuItems) {
  let displayMenu = menuItems
    .map(function (item) {
      return `
      <article class="menu-items col-12">
        <img src="${item.img}" alt="${item.title}" class="photo" />
        <div class="menu-info">
          <header class="menu-title">
            <h4>${item.title}</h4>
            <span class="price">$${item.price.toFixed(2)}</span>
          </header>
          <p class="menu-text">
            ${item.desc}
          </p>
        </div>
      </article>
    `;
    })
    .join("");

  sectionCenter.innerHTML = displayMenu;
}


function displayMenuButtons() {
  // ["All", "Korea", "Japan", "China"] şeklinde dizi oluştur
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button class="btn-item" type="button" data-id="${category}">
        ${category}
      </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;

  // Butonlara filtreleme event'i bağla
  const filterBtns = btnContainer.querySelectorAll(".btn-item");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;

      const menuCategory =
        category === "All"
          ? menu
          : menu.filter(function (menuItem) {
              return menuItem.category === category;
            });

      // FILTRE SONUCUNU BASTIR
      displayMenuItems(menuCategory);
    });
  });
}
