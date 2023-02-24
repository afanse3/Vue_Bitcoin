<template>
  <div class="about">
    <h1>Konversi Bitcoin ke Rupiah</h1>
    <br />
    <h3>Kurs 1 USD = 14.000 IDR</h3>
    <input v-model="bitcoinAmount" @input="convertBitcoinToIdr" type="number" min="0" />
    <br />
    <h1 v-if="idrAmount">BTC {{ bitcoinAmount }} = Rp {{ idrAmount }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      bitcoinToUsd: null,
      bitcoinToIdr: null,
      bitcoinAmount: null,
      idrAmount: null,
      usdToIdrRate: 14000,
    }
  },
  async created() {
    const response = await axios.get('https://blockchain.info/ticker');
    this.bitcoinToUsd = response.data.USD.last;
    this.bitcoinToIdr = this.bitcoinToUsd * this.usdToIdrRate;
  },
  methods: {
    convertBitcoinToIdr() {
      this.idrAmount = this.bitcoinAmount * this.bitcoinToIdr;
    },
  },
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
