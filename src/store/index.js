import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';

// export const useRegistrationStore = defineStore('registration', () => {
//   const firstName = ref('');
//   const lastName = ref('');
//   const email = ref('');
//   const password = ref('');
//   const rePassword = ref('');

//   const persistData = () => {
//     localStorage.setItem('firstName', firstName.value);
//     localStorage.setItem('lastName', lastName.value);
//     localStorage.setItem('email', email.value);
//     localStorage.setItem('password', password.value);
//   };

//   const loadData = () => {
//     firstName.value = localStorage.getItem('firstName') || '';
//     lastName.value = localStorage.getItem('lastName') || '';
//     email.value = localStorage.getItem('email') || '';
//     password.value = localStorage.getItem('password') || '';
//   };

//   onMounted(() => {
//     loadData();
//   });

//   const setRegistrationData = (data) => {
//     firstName.value = data.firstName;
//     lastName.value = data.lastName;
//     email.value = data.email;
//     password.value = data.password;
//     rePassword.value = ''; 
//     persistData(); 
//   };

//   return {
//     firstName,
//     lastName,
//     email,
//     password,
//     rePassword,
//     setRegistrationData,
//   };
// });

// export const useStore = defineStore('store', () => {
//   const cart = ref(new Map());

//   const persistData = () => {
//     const s = JSON.stringify(Array.from(cart.value.entries()));
//     console.log("Saving cart ", s)
//     localStorage.setItem('cart', JSON.stringify(Array.from(cart.value.entries())));
//   }

//   const loadData = () => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       const parsedCart = JSON.parse(storedCart);
//       cart.value.clear();
//       parsedCart.forEach(([key, value]) => {
//         cart.value.set(key, value);
//       });
//     }
//   }

//   function addToCart(id, movieData) {
//     cart.value.set(id, movieData);
//     persistData()
//   }

//   function removeFromCart(id) {
//     cart.value.delete(id);
//     persistData()
//   }

//   onMounted(() => {
//       loadData();
//   });

//   return {
//     cart,
//     addToCart,
//     removeFromCart,
//   };
// });

// import { defineStore } from 'pinia';
// import { ref } from 'vue';

// Registration Store (without persistence)
export const useRegistrationStore = defineStore('registration', () => {
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const password = ref('');
  const rePassword = ref('');

  const setRegistrationData = (data) => {
    firstName.value = data.firstName;
    lastName.value = data.lastName;
    email.value = data.email;
    password.value = data.password;
    rePassword.value = ''; // Clear rePassword after setting data
  };

  return {
    firstName,
    lastName,
    email,
    password,
    rePassword,
    setRegistrationData,
  };
});

// Cart Store (without persistence)
export const useStore = defineStore('store', () => {
  const cart = ref(new Map());

  // Add an item to the cart
  function addToCart(id, movieData) {
    cart.value.set(id, movieData);
  }

  // Remove an item from the cart
  function removeFromCart(id) {
    cart.value.delete(id);
  }

  return {
    cart,
    addToCart,
    removeFromCart,
  };
});

