export const getRecentOrders = () => {
    // Mock data to simulate the API response
    const mockData = {
      id: 1,
      products: [
        {
          id: 1,
          title: "iPhone 15 Pro Max",
          quantity: 1,
          price: 1500,
          discountedPrice: 1200,
        },
        {
          id: 2,
          title: "Samsung ear pods",
          quantity: 1,
          price: 350,
          discountedPrice: 350,
        },
        {
          id: 3,
          title: "Gym  Wrist support",
          quantity: 3,
          price: 108,
          discountedPrice: 99,
        },
     
      ],
    };
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData); // Simulate the response with mock data
      }, 100); // Simulate delay of 1 second
    });
  };
  