
const indexView = (req, res, next) => {
    console.log(req.query.message);
    res.render('home',{
        message:req.query.message,
    });
}

const priceView = (req, res, next) => {
    res.render('price');
}


const auditsView = (req, res, next) => {
    res.render('audits');
}

const dappView = (req, res, next) => {
    res.render('dapp-audit');
}

const dropView = (req, res, next) => {
    res.render('drop');
}

const newsletterView = (req, res, next) => {
    res.render('newsletter');
}
const web3View = (req, res, next) => {
    res.render('web3');
}

const web3scamView = (req, res, next) => {
    res.render('web3scam');
}
const tabledetailView = (req, res, next) => {
    res.render('tabledetail');
}
const ethereumView = (req, res, next) => {
    res.render('ethereum-audit');
}

const bscView = (req, res, next) => {
    res.render('bsc-audit');
}

const polygonView = (req, res, next) => {
    res.render('polygon-audit');
}

const walletView = (req, res, next) => {
    res.render('wallet-audit');
}

const l1View = (req, res, next) => {
    res.render('l1-audit');
}

const zksyncView = (req, res, next) => {
    res.render('zksync-audit');
}

const starknetView = (req, res, next) => {
    res.render('starknet-audit');
}

const polkadotView = (req, res, next) => {
    res.render('polkadot-audit');
}

const solanaView = (req, res, next) => {
    res.render('solana-audit');
}

const suiView = (req, res, next) => {
    res.render('sui-audit');
}

const nearView = (req, res, next) => {
    res.render('near-audit');
}

const algorandView = (req, res, next) => {
    res.render('algorand-audit');
}

const tezosView = (req, res, next) => {
    res.render('tezos-audit');
}

const fantomView = (req, res, next) => {
    res.render('fantom-audit');
}

const hyperledgerfabricView = (req, res, next) => {
    res.render('hyperledgerfabric-audit');
}

const popupView = (req, res, next) => {
    res.render('popup');
}

const getfreeView = (req, res, next) => {
    res.render('getfree');
}


module.exports ={
    indexView,
    priceView,
    auditsView,
    dappView,
    dropView,
    newsletterView,
    web3View,
    web3scamView,
    tabledetailView,
    ethereumView,
    bscView,
    polygonView,
    walletView,
    l1View,
    zksyncView,
    starknetView,
    polkadotView,
    solanaView,
    suiView,
    nearView,
    algorandView,
    tezosView,
    fantomView,
    hyperledgerfabricView,
    popupView,
    getfreeView,
}