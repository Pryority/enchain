import React, { useEffect, useState } from 'react'
// import { ethers } from 'ethers';
// import artifact from '../../chain/artifacts/contracts/Staking.sol/Staking.json';
// import artifact from '../../artifacts/contracts/MultiSig.sol/MultiSig.json';
const url = 'https://ethereum.org/en/staking/#what-is-staking';
const STAKING_CONTRACT_ADDRESS = '';
const CONTRACT_ADDRESSES = [
    {
        'name': 'LINK',
        'address': '0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44',
        'artifact': '../../../../chain/artifacts/contracts/Chainlink.sol/Chainlink.json'
    },
    {
        'name': 'USDT',
        'address': '0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f',
        'artifact': '../../../../chain/artifacts/contracts/Tether.sol/Tether.json'
    },
    {
        'name': 'WBTC',
        'address': '0x7a2088a1bFc9d81c55368AE168C2C02570cB814F',
        'artifact': '../../../../chain/artifacts/contracts/WrappedBitcoin.sol/WrappedBitcoin.json'
    },
    {
        'name': 'WETH',
        'address': '0x09635F643e140090A9A8Dcd712eD6285858ceBef',
        'artifact': '../../../../chain/artifacts/contracts/WrappedEther.sol/WrappedEther.json'
    },
];

export default function Staking() {
    // const [provider, setProvider] = useState(null);
    // const [signer, setSigner] = useState(null);
    // const [contract, setContract] = useState(null);
    // const [symbol, setSymbol] = useState([]);
    // const [token, setToken] = useState({});
    // const [stakedTokens, setStakedTokens] = useState({});
    // const [assetIds, setAssetIds] = useState([]);
    // const [assets, setAssets] = useState([]);
    // const [stakeTokenSymbol, setStakeTokenSymbol] = useState(null);
    // const [stakeTokenQuantity, setStakeTokenQuantity] = useState(null);
    // const [tokenContracts, setTokenContracts] = useState({});
    // const toEther = (wei) => Number(ethers.utils.formatEther(String(wei))).toFixed(2);

    // // useEffect(() => {
    // //     const onLoad = async () => {
    // //         const provider = await new ethers.providers.Web3Provider(window.ethereum)
    // //         setProvider(provider)

    // //         const contract = await new ethers.Contract(STAKING_CONTRACT_ADDRESS, artifact.abi, provider);
    // //         setContract(contract);

    // //         // const mappedContractAddresses = CONTRACT_ADDRESSES.map((address, i) => (
    // //         //     new ethers.Contract(address[i].address, address[i].artifact, provider)
    // //         // ));

    // //         const tokenSymbols = await contract.getTokenSymbols();

    // //         tokenSymbols.map(async symbol => {
    // //             const token = await contract.getToken(symbol);
    // //             setToken(prev => ({ ...prev, [symbol]: token }));

    // //             const stakedAmount = await contract.stakedTokens(symbol);
    // //             setStakedTokens(prev => ({ ...prev, [symbol]: toEther(stakedAmount) }));
    // //         });
    // //     };
    // //     onLoad();
    // // }, []);

    // const isConnected = () => signer !== undefined;

    // const getSigner = async () => {
    //     const signer = provider.getSigner();
    //     setSigner(signer);
    //     return signer;
    // };

    // const connectAndLoad = async () => {
    //     const signer = await getSigner(provider);
    //     setSigner(signer);

    //     const assetIdsHex = await contract.connect(signer).getPositionIdsForAddress();
    //     const assetIds = assetIdsHex.map(id => Number(id));
    //     setAssetIds(assetIds);

    //     const queriedAssets = await Promise.all(
    //         assetIds.map(id => contract.connect(signer.getPositionById(Number(id))))
    //     );

    //     queriedAssets.map(async asset => {
    //         const tokensStaked = toEther(asset.tokenQuanity);
    //         const ethAccruedInterestWei = await calcAccruedInterest(asset.apy, asset.ethValue, asset.createdDate);
    //         const ethAccruedInterest = toEther(ethAccruedInterestWei);
    //         const usdAccruedInterest = ((ethAccruedInterest * token['WETH'].usdPrice) / 100).toFixed(2);

    //         const parsedAsset = {
    //             positionId: Number(asset.positionId),
    //             tokenName: asset.name,
    //             tokenSymbol: asset.symbol,
    //             createdDate: asset.createdDate,
    //             apy: asset.apy / 100,
    //             tokensStaked: tokensStaked,
    //             usdValue: toEther(asset.usdValue) / 100,
    //             usdAccruedInterest: usdAccruedInterest,
    //             ethAccruedInterest: ethAccruedInterest,
    //             open: asset.open
    //         };

    //         setAssets(prev => [...prev, parsedAsset]);
    //     });
    // };

    // const calcAccruedInterest = async (apy, value, createdDate) => {
    //     const numberOfDays = await contract.calculateNumberDays(createdDate);
    //     const accruedInterest = await contract.calculateInterest(apy, value, numberOfDays);

    //     return Number(accruedInterest);
    // };

    // const stakeTokens = async () => {
    //     const stakeTokenQuantityWei = ethers.utils.parseEther(stakeTokenQuantity);
    //     await tokenContracts[stakeTokenSymbol].connect(signer).approve(contract.address, stakeTokenQuantityWei);
    //     contract.connect(signer).stakeTokens(stakeTokenSymbol, stakeTokenQuantityWei);
    // };

    // const withdraw = (positionId) => {
    //     contract.connect(signer).closePosition(positionId);
    // };

    // const tokenRow = (tokenSymbol) => {
    //     const token = token[tokenSymbol];
    //     const amountStaked = Number(stakedTokens[tokenSymbol]);
    // };


    return (
        <div className='flex flex-col w-full h-full'>
            <section className="dark:text-gray-100 h-full">
                <div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-3xl w-5/6 md:w-full md:text-5xl text-stone-900 dark:text-stone-50 font-bold leading-none animate-fade-in-up mb-8"><a href={url} className='bg-gradient-to-r from-lime-400 via-teal-500 to-green-500 bg-[length:100%_6px] bg-no-repeat bg-bottom hover:text-stone-900/80 cursor-pointer '>Staking</a>
                    </h1>
                    <div className="flex flex-col justify-center mt-8 space-y-8 items-center">
                        <p className='mt-32 font-bold text-4xl text-lime-500 animate-pulse uppercase'>Coming soon</p>
                        <div to='/create' className="px-8 py-3 w-2/3 m-2 text-lg font-semibold rounded bg-lime-400 border-2 cursor-not-allowed dark:bg-lime-400 dark:text-gray-900 focus:ring-offset-1  focus:outline-none focus:outline-lime-200 opacity-25">Join Waitlist</div>
                    </div>
                </div >
            </section >
        </div >
    )
}

{/* <div className='flex flex-col w-full items-center space-y-4 '>
    <div className='border-b border-lime-400/40 flex w-5/6' />
    <div className='flex flex-col justify-start w-5/6 p-1 text-stone-900 bg-stone-300/20 rounded-lg px-2 overflow-auto pb-2'>
        <table class="table-auto">
            <thead>
                <tr>
                    <th>Asset</th>
                    <th>Symbol</th>
                    <th>Price (USD)</th>
                    <th>Supply</th>
                    <th>APY</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* {
                                            CONTRACT_ADDRESSES.map((address, i) => (
                                                <td>{address[i].name}</td>
                                            ))
                                        } */}
//                 </tr >
//                 <tr>
//                     <td>Witchy Woman</td>
//                     <td>The Eagles</td>
//                     <td>1972</td>
//                 </tr>
//                 <tr>
//                     <td>Shining Star</td>
//                     <td>Earth, Wind, and Fire</td>
//                     <td>1975</td>
//                 </tr>
//             </tbody >
//         </table >
//     </div >
// </div > * /}