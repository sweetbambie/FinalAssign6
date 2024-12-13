import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';

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
  };

  return {
    firstName,
    lastName,
    email,
    password,
    setRegistrationData,
  };
});

export const useStore = defineStore('store', () => {
  const cart = ref(new Map());

  function addToCart(id, movieData) {
    cart.value.set(id, movieData);
  }

  function removeFromCart(id) {
    cart.value.delete(id);
  }

  return {
    cart,
    addToCart,
    removeFromCart,
  };
});