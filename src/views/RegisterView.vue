<script setup>
import { useRegistrationStore } from '../store';
import { useRouter } from 'vue-router';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const store = useRegistrationStore();
const router = useRouter();

const validateForm = (event) => {
  if (store.password !== store.rePassword) {
    event.preventDefault(); 
    alert('The passwords do not match. Please check and try again.');
  } else {
    store.setRegistrationData({
      firstName: store.firstName,
      lastName: store.lastName,
      email: store.email,
      password: store.password,
    });

    router.push('/movies')
  }
};
</script>

<template>
  <Header />
  <div class="form-container">
    <h2>Create an Account</h2>
      <form @submit="validateForm">
        <input type="text" placeholder="First Name" class="input-field" v-model="store.firstName" required />
        <input type="text" placeholder="Last Name" class="input-field" v-model="store.lastName" required />
        <input type="email" placeholder="Email" class="input-field" v-model="store.email" required />
        <input type="password" placeholder="Password" class="input-field" v-model="store.password" required />
        <input type="password" placeholder="Re-Enter Password" class="input-field" v-model="store.rePassword" required />
        <button type="submit" class="register">Register</button>
      </form>
    </div>
    <Footer />
</template>

<style>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 25% !important;
}

.form-container h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.form-container form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  gap: 15px;
}

.input-field {
  padding: 15px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  transition: border-color 0.3s;
}

.input-field:focus {
  border-color: hotpink;
  outline: none;
}

.register {
  background-color: hotpink;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.register:hover {
  background-color: rgb(246, 151, 198);
  transform: scale(1.05);
}

.logo {
  font-size: 2rem;
  float: left !important;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
  font-weight: bold;
  margin-left: 8px;
  color: hotpink;
}
</style>
