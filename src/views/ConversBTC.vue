<template>
  <div class="about">
    <h1>Konversi Rupiah ke Bitcoin</h1>
    <br />
    <h3>Kurs 1 USD = 14.000 IDR</h3>
    <input id="rp-input" v-model="rupiahValue" type="number" min="0" />
    <br />
    <h1 v-if="bitcoinValue">Rp {{ rupiahValue }} = BTC {{ bitcoinValue }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      rupiahValue: null,
      bitcoinValue: null,
      apiUrl: 'https://blockchain.info/tobtc?currency=USD&value=',
    }
  },
  watch: {
    rupiahValue: async function() {
      const usdValue = this.rupiahValue / 14000;
      const response = await axios.get(`${this.apiUrl}${usdValue}`);
      this.bitcoinValue = response.data;
    }
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

  .about h1,
  .about h3,
  .about p {
    font-weight: bold;
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

  input {
  margin: 20px 0px;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
}
</style>
