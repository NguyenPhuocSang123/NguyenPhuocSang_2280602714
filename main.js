// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 5 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
  new Product(1, "iPhone 15 Pro", 29990000, 15, "Electronics", true),
  new Product(2, "Samsung Galaxy S24", 24990000, 8, "Electronics", true),
  new Product(3, "Áo Thun Nam", 199000, 0, "Fashion", false),
  new Product(4, "Giày Nike Air Max", 3500000, 25, "Fashion", true),
  new Product(5, "Tai nghe AirPods Pro", 6500000, 12, "Accessories", true),
  new Product(6, "Balo Laptop", 850000, 5, "Accessories", true),
  new Product(7, "Macbook Pro M3", 45000000, 3, "Electronics", true)
];

// Câu 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
const productNamePrice = products.map(product => ({
  name: product.name,
  price: product.price
}));
console.log("Câu 3 - Mảng name và price:");
console.log(productNamePrice);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
const productsInStock = products.filter(product => product.quantity > 0);
console.log("\nCâu 4 - Sản phẩm còn hàng:");
console.log(productsInStock);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30 hay không
const hasExpensiveProduct = products.some(product => product.price > 30);
console.log("\nCâu 5 - Có sản phẩm giá trên 30:");
console.log(hasExpensiveProduct);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
const allAccessoriesAvailable = products
  .filter(product => product.category === "Accessories")
  .every(product => product.isAvailable === true);
console.log("\nCâu 6 - Tất cả Accessories có sẵn:");
console.log(allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng (price × quantity)
const totalInventoryValue = products.reduce((total, product) => {
  return total + (product.price * product.quantity);
}, 0);
console.log("\nCâu 7 - Tổng giá trị kho hàng:");
console.log(totalInventoryValue.toLocaleString('vi-VN') + " VNĐ");

// Câu 8: Dùng for...of để duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("\nCâu 8 - Danh sách sản phẩm:");
for (const product of products) {
  const status = product.isAvailable ? "Còn hàng" : "Hết hàng";
  console.log(`${product.name} - ${product.category} - ${status}`);
}

// Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng
console.log("\nCâu 9 - Thuộc tính của sản phẩm đầu tiên:");
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
const availableAndInStockProducts = products
  .filter(product => product.isAvailable === true && product.quantity > 0)
  .map(product => product.name);
console.log("\nCâu 10 - Sản phẩm đang bán và còn hàng:");
console.log(availableAndInStockProducts);