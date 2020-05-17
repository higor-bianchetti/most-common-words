<template>
  <div class="pill">
    <span class="name">{{ name }}</span>
    <span class="amount">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  props: ['name', 'amount'],
};
</script>

<style scoped>
.pill {
  background-color: #ff6000;
  color: #ffffff;
  margin: 10px;
  padding: 5px 10px;
  border-radius: 50px;
  display: flex;
  align-items: center;
}

.pill .name {
  margin-left: 15px;
}

.pill .amount {
  margin-left: 10px;
  padding: 3px 5px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #3a3335;
  font-size: 12px;
  font-weight: bold;
  min-width: 25px;
  text-align: center;
}
</style>
