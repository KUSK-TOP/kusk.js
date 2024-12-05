import Client from '../client.js'
import Bc from '../kusk-bc'

let version = require('../../package.json').version;

let Kusk = function Kusk(provider) {
    let _this = this;

    this.version = version;

    this.Bc = new Bc(provider);

    // overwrite package setProvider
    let _provider = provider || window.kusk.currentProvider || ''
    let _chain = window.kusk? window.kusk.chain : 'vapor'

    let client = new Client({
        url:  _provider,
        chain: _chain
    })


    this.setProvider = function (provider) {
        _provider = provider
        client = new Client({
          url:  provider,
          chain: _chain
        })

      this.Bc.setProvider(provider, _chain)

        return true;
    };


    let defaultAccount = window.kusk.defaultAccount || window.kusk.default_account;

    Object.defineProperty(this, 'defaultAccount', {
        get: function () {
            return defaultAccount;
        },
        set: function (val) {
            return val;
        },
    });

    this.currentProvider = _provider
    this.sendTransaction = window.kusk.sendTransaction || window.kusk.send_transaction
    this.sendAdvancedTransaction = window.kusk.sendAdvancedTransaction ||  window.kusk.send_advanced_transaction
    this.signMessage = window.kusk.signMessage ||window.kusk.sign_message
    this.chain = _chain
    this.setChain = function(param){
      client = new Client({
        url:  _provider,
        chain: param
      })

      this.Bc.setProvider(_provider, param)
      if(window.kusk.setChain){
        return window.kusk.setChain(param)
      }
    }

    this.getBalance = function (accountId){
        return new Client({
          url:  _provider,
          chain: window.kusk.chain || 'vapor'
        }).balances.list(accountId);
    }

    this.getTransaction = function(transactionId){
        return client.transactions.list(transactionId)
    }


};

Kusk.version = version;
Kusk.modules = {
    Bc: Bc,
};

module.exports = Kusk;

