<script setup>
import { useRegistrationStore } from '../store';
import { computed } from 'vue';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const userStore = useRegistrationStore();

const firstName = computed({
  get: () => userStore.firstName,
  set: (value) => {
    userStore.firstName = value;
  },
});
const lastName = computed({
  get: () => userStore.lastName,
  set: (value) => {
    userStore.lastName = value;
  },
});
const email = computed({
  get: () => userStore.email,
  set: (value) => {
    userStore.email = value;
  },
});

const updateProfileHandler = (event) => {
  event.preventDefault();
  userStore.setRegistrationData({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  });

  alert('Profile updated successfully!');
}
</script>

<template>
  <Header />
  <div class="form-container">
    <h1>User Profile</h1>
    <form @submit="updateProfileHandler">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" class="input-field" v-model="firstName" /><br /><br />
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" class="input-field" v-model="lastName" /><br /><br />
      <label for="email">Email:</label>
      <input type="email" id="email" class="input-field" v-model="email" readonly/><br /><br />
      <button type="submit" class="button">Save Changes</button>
    </form>
  </div>
  <Footer />
</template>

<style scooped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
} 

.form-container form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
} 

.input-field {
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

.button{
  background-color: hotpink;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.button:hover {
  background-color: rgb(246, 151, 198);
  transform: scale(1.05);
} 
</style>