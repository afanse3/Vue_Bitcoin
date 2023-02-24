<template>
  <div class="about">
    <h1>Harga Bitcoin Hari ini</h1>
    <br />
    <table class="table">
      <thead>
        <tr>
          <th>Mata Uang</th>
          <th>Harga Beli Bitcoin</th>
          <th>Harga Jual Bitcoin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in tickers" :key="key">
          <td>{{ key }}</td>
          <td>{{ value.buy }}</td>
          <td>{{ value.sell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tickers: {},
    };
  },
  created() {
    axios.get('https://blockchain.info/ticker')
    .then(response => {
      const filteredTickers = {};
      const currencies = [
        "AUD", "EUR", "GBP", "JPY", "USD"];
        currencies.forEach((currency) => {
          filteredTickers[currency] = response.data[currency];
        });
      this.tickers = filteredTickers;
    })
    .catch(error => {
      console.log(error);
    })
  }
}

</script>

<style>
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding: 20px;
    background-color: aliceblue;
    color: black;
    border-radius: 10px;
  }

  .table {
    border-collapse: collapse;
    width: 100%;
  }

  .table th {
    font-weight: bold;
  }

  .table th,
  .table td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
</style>
