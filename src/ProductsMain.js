import Product from "./Product";
function ProductsMain() {
  let products = [
    {
      id: 1,
      name: "product-2",
      description: "mobile product",
      url: "https://imgs.search.brave.com/hAuh4kaRV-AKGydWogVLBYv4dA5LvznBBgq_elp3phE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LTExLXByby1tYXgt/LmpwZw",
    },
    {
      id: 2,
      name: "Product-3",
      description: "electronics product",
      url: "https://imgs.search.brave.com/U6w_vcRwadUYuChyz7iRkzdLIwTv8GxuEq4dS2iyQUU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFOWnBUeFd6Ukwu/anBn",
    },
    {
      id: 3,
      name: "Product-4",
      description: "men product",
      url: "https://imgs.search.brave.com/IHuRBk31aZwl9VhDQkF6W9O8su-bU32dK3KHNmOKLQE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kaTJw/b252MHY1b3R3LmNs/b3VkZnJvbnQubmV0/L3Bvc3RzLzIwMjMv/MDkvMjkvNjUxNzE1/ZmVkZmY5NGQzYmQx/MjUyZjE4L3NfNjUx/NzE2N2Q1MmVlZTE2/OTZhYjNhZjZkLmpw/Zw",
    },
    {
      id: 4,
      name: "Product-5",
      description: "women product",
      url: "https://imgs.search.brave.com/xbOIK2m2nv5VwBL4ZAJRiaV3eNgjeA-J7qllOdbrixs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wLXBo/LmlwcmljZWdyb3Vw/LmNvbS9iN2ZkNmYz/Njk4MDBlNTQxNmE2/OTIzZmIwZWYzNmI0/M2E5ODcxZWZkXzAu/anBn",
    },
  ];
  return (
    <div className="product-section">
      {products.map((item) => {
        return (
          <div className="pro">
            <Product
              key={item.id}
              name={item.name}
              description={item.description}
              url={item.url}
            />
          </div>
        );
      })}
    </div>
  );
}
export default ProductsMain;
