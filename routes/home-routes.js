const express = require('express');

const {indexView, priceView, auditsView, dappView, dropView, newsletterView, web3View, web3scamView, tabledetailView, ethereumView, bscView, polygonView, walletView, l1View, zksyncView, starknetView, polkadotView, solanaView, suiView, nearView, algorandView, tezosView, fantomView, hyperledgerfabricView, popupView, getfreeView} = require('../controllers/homeController');
const router = express.Router();


router.get('/', indexView);
router.get('/price', priceView);
router.get('/audits', auditsView);
router.get('/dapp-audit', dappView);
router.get('/drop', dropView);
router.get('/newsletter', newsletterView);
router.get('/web3', web3View);
router.get('/web3scam', web3scamView);
router.get('/tabledetail', tabledetailView);
router.get('/ethereum-audit', ethereumView);
router.get('/bsc-audit', bscView);
router.get('/polygon-audit', polygonView);
router.get('/wallet-audit', walletView);
router.get('/l1-audit', l1View);
router.get('/zksync-audit', zksyncView);
router.get('/starknet-audit', starknetView);
router.get('/polkadot-audit', polkadotView);
router.get('/solana-audit', solanaView);
router.get('/sui-audit', suiView);
router.get('/near-audit', nearView);
router.get('/algorand-audit', algorandView);
router.get('/tezos-audit', tezosView);
router.get('/fantom-audit', fantomView);
router.get('/hyperledgerfabric-audit', hyperledgerfabricView);
router.get('/popup', popupView);
router.get('/getfree', getfreeView);

module.exports = {
    router: router
}