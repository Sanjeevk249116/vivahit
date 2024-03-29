
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import React, { useContext, useEffect, useState } from "react";
import { AppContextData } from "../cryptoContext/AuthContext";
import { TrendingCoins } from "../apidata/api";
import { Link } from "react-router-dom";



const array = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    current_price: 5534426,
    market_cap: 108832339537966,
    market_cap_rank: 1,
    fully_diluted_valuation: 116318291194000,
    total_volume: 4310841863194,
    high_24h: 5730102,
    low_24h: 5512276,
    price_change_24h: -17859.195104777813,
    price_change_percentage_24h: -0.32165,
    market_cap_change_24h: -545699055567.3281,
    market_cap_change_percentage_24h: -0.49891,
    circulating_supply: 19648493.0,
    total_supply: 21000000.0,
    max_supply: 21000000.0,
    ath: 5730102,
    ath_change_percentage: -3.48047,
    ath_date: "2024-03-08T15:30:54.125Z",
    atl: 3993.42,
    atl_change_percentage: 138394.54638,
    atl_date: "2013-07-05T00:00:00.000Z",
    roi: null,
    last_updated: "2024-03-08T16:36:43.363Z",
    price_change_percentage_24h_in_currency: -0.3216548659958837,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    current_price: 319496,
    market_cap: 38390169355096,
    market_cap_rank: 2,
    fully_diluted_valuation: 38390169355096,
    total_volume: 2213139666606,
    high_24h: 330779,
    low_24h: 315766,
    price_change_24h: 3730.63,
    price_change_percentage_24h: 1.18146,
    market_cap_change_24h: 396889369025,
    market_cap_change_percentage_24h: 1.04463,
    circulating_supply: 120109168.007423,
    total_supply: 120109168.007423,
    max_supply: null,
    ath: 362338,
    ath_change_percentage: -11.95499,
    ath_date: "2021-11-10T14:24:19.604Z",
    atl: 28.13,
    atl_change_percentage: 1133945.01792,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 76.22990162067212,
      currency: "btc",
      percentage: 7622.990162067213,
    },
    last_updated: "2024-03-08T16:36:37.147Z",
    price_change_percentage_24h_in_currency: 1.1814569765942105,
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    current_price: 50.41,
    market_cap: 2764104049042,
    market_cap_rank: 7,
    fully_diluted_valuation: 5055917415784,
    total_volume: 178097127258,
    high_24h: 52.89,
    low_24h: 50.05,
    price_change_24h: -0.9345834929941361,
    price_change_percentage_24h: -1.82036,
    market_cap_change_24h: -60814630010.96973,
    market_cap_change_percentage_24h: -2.15279,
    circulating_supply: 54664031281.0,
    total_supply: 99987852435.0,
    max_supply: 100000000000.0,
    ath: 215.1,
    ath_change_percentage: -76.63156,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 0.159343,
    atl_change_percentage: 31446.14458,
    atl_date: "2013-08-16T00:00:00.000Z",
    roi: null,
    last_updated: "2024-03-08T16:37:06.377Z",
    price_change_percentage_24h_in_currency: -1.8203586536070138,
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
    current_price: 12000.01,
    market_cap: 5333243326264,
    market_cap_rank: 5,
    fully_diluted_valuation: 6876669013886,
    total_volume: 472985495497,
    high_24h: 12604.84,
    low_24h: 11800.56,
    price_change_24h: -86.76977807510048,
    price_change_percentage_24h: -0.71789,
    market_cap_change_24h: -42573058426.33496,
    market_cap_change_percentage_24h: -0.79194,
    circulating_supply: 443130221.765009,
    total_supply: 571370867.352154,
    max_supply: null,
    ath: 19286.66,
    ath_change_percentage: -38.08408,
    ath_date: "2021-11-06T21:54:35.825Z",
    atl: 38.03,
    atl_change_percentage: 31303.79439,
    atl_date: "2020-05-11T19:35:23.449Z",
    roi: null,
    last_updated: "2024-03-08T16:37:06.346Z",
    price_change_percentage_24h_in_currency: -0.7178901425481601,
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    current_price: 39006,
    market_cap: 5998288365356,
    market_cap_rank: 4,
    fully_diluted_valuation: 5998288365356,
    total_volume: 370897972724,
    high_24h: 40526,
    low_24h: 37338,
    price_change_24h: 1617.35,
    price_change_percentage_24h: 4.3258,
    market_cap_change_24h: 245079246070,
    market_cap_change_percentage_24h: 4.25987,
    circulating_supply: 153856150.0,
    total_supply: 153856150.0,
    max_supply: 200000000.0,
    ath: 50351,
    ath_change_percentage: -22.97856,
    ath_date: "2021-05-10T07:24:17.097Z",
    atl: 2.58,
    atl_change_percentage: 1500286.48225,
    atl_date: "2017-10-19T00:00:00.000Z",
    roi: null,
    last_updated: "2024-03-08T16:36:45.696Z",
    price_change_percentage_24h_in_currency: 4.325800314726077,
  },
  {
    id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
    image:
      "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
    current_price: 13.52,
    market_cap: 1931684097666,
    market_cap_rank: 10,
    fully_diluted_valuation: 1931679786600,
    total_volume: 324501831357,
    high_24h: 14.38,
    low_24h: 12.64,
    price_change_24h: 0.760501,
    price_change_percentage_24h: 5.96183,
    market_cap_change_24h: 97764361971,
    market_cap_change_percentage_24h: 5.3309,
    circulating_supply: 143384226383.705,
    total_supply: 143383906383.705,
    max_supply: null,
    ath: 53.62,
    ath_change_percentage: -75.12494,
    ath_date: "2021-05-08T05:08:23.458Z",
    atl: 0.00552883,
    atl_change_percentage: 241134.28098,
    atl_date: "2015-05-06T00:00:00.000Z",
    roi: null,
    last_updated: "2024-03-08T16:36:59.314Z",
    price_change_percentage_24h_in_currency: 5.961832373329087,
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
    image:
      "https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
    current_price: 58.88,
    market_cap: 2072928291466,
    market_cap_rank: 9,
    fully_diluted_valuation: 2651892062532,
    total_volume: 70799349895,
    high_24h: 62.41,
    low_24h: 58.34,
    price_change_24h: -2.232827132932364,
    price_change_percentage_24h: -3.65355,
    market_cap_change_24h: -91689831234.36719,
    market_cap_change_percentage_24h: -4.23584,
    circulating_supply: 35175554251.9648,
    total_supply: 45000000000.0,
    max_supply: 45000000000.0,
    ath: 225.26,
    ath_change_percentage: -73.9772,
    ath_date: "2021-09-02T06:00:10.474Z",
    atl: 1.38,
    atl_change_percentage: 4161.94905,
    atl_date: "2017-11-02T00:00:00.000Z",
    roi: null,
    last_updated: "2024-03-08T16:36:55.145Z",
    price_change_percentage_24h_in_currency: -3.6535460600145067,
  },
  {
    id: "chainlink",
    symbol: "link",
    name: "Chainlink",
    image:
      "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
    current_price: 1614.37,
    market_cap: 947527577692,
    market_cap_rank: 15,
    fully_diluted_valuation: 1613911810591,
    total_volume: 52451630028,
    high_24h: 1685.09,
    low_24h: 1602.37,
    price_change_24h: -41.213634679820416,
    price_change_percentage_24h: -2.48937,
    market_cap_change_24h: -25891319925.2052,
    market_cap_change_percentage_24h: -2.65983,
    circulating_supply: 587099971.3083414,
    total_supply: 1000000000.0,
    max_supply: 1000000000.0,
    ath: 3862.15,
    ath_change_percentage: -58.29994,
    ath_date: "2021-05-10T00:13:57.214Z",
    atl: 9.55,
    atl_change_percentage: 16769.97794,
    atl_date: "2017-11-29T00:00:00.000Z",
    roi: null,
    last_updated: "2024-03-08T16:37:02.674Z",
    price_change_percentage_24h_in_currency: -2.4893720106934314,
  },
  {
    id: "polkadot",
    symbol: "dot",
    name: "Polkadot",
    image:
      "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1696512008",
    current_price: 837.49,
    market_cap: 1124865455451,
    market_cap_rank: 13,
    fully_diluted_valuation: 1192833940975,
    total_volume: 44407406896,
    high_24h: 881.62,
    low_24h: 831.21,
    price_change_24h: -18.395267671246984,
    price_change_percentage_24h: -2.14926,
    market_cap_change_24h: -24629866564.636475,
    market_cap_change_percentage_24h: -2.14267,
    circulating_supply: 1338716615.73076,
    total_supply: 1419606770.61597,
    max_supply: null,
    ath: 4095.22,
    ath_change_percentage: -79.52236,
    ath_date: "2021-11-04T14:10:09.301Z",
    atl: 202.26,
    atl_change_percentage: 314.62298,
    atl_date: "2020-08-19T03:44:11.556Z",
    roi: null,
    last_updated: "2024-03-08T16:37:04.734Z",
    price_change_percentage_24h_in_currency: -2.149259824102422,
  },
  {
    id: "stellar",
    symbol: "xlm",
    name: "Stellar",
    image:
      "https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1696501482",
    current_price: 11.45,
    market_cap: 328363680080,
    market_cap_rank: 36,
    fully_diluted_valuation: 573487221999,
    total_volume: 17614612913,
    high_24h: 12.02,
    low_24h: 11.4,
    price_change_24h: -0.11280900367022717,
    price_change_percentage_24h: -0.97541,
    market_cap_change_24h: -3132050108.0236206,
    market_cap_change_percentage_24h: -0.94482,
    circulating_supply: 28629706416.2801,
    total_supply: 50001787028.7101,
    max_supply: 50001787028.7101,
    ath: 58.01,
    ath_change_percentage: -80.29225,
    ath_date: "2021-05-16T09:48:45.220Z",
    atl: 0.02966141,
    atl_change_percentage: 38441.32256,
    atl_date: "2015-03-05T00:00:00.000Z",
    roi: null,
    last_updated: "2024-03-08T16:36:57.712Z",
    price_change_percentage_24h_in_currency: -0.9754147098787861,
  },
];
const numberWithCommas = (s) => {
  return s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function Carousal() {
 
  const [trending, SetTrending] = useState([]);
  const { currency, symbol } = useContext(AppContextData);

  const fetchTrandindCoins = async () => {
   
    try{
      const { data } = await axios.get(TrendingCoins(currency));
      SetTrending(data);
    }catch{
      SetTrending(array)
    }
    // console.log(data)
  };
 
  useEffect(() => {
    fetchTrandindCoins();
  }, [currency]);

  const items = trending.map((el) => {
    let profit = el.price_change_percentage_24h >= 0;
    return (
      <Link style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        cursor:"pointer",
        textTransformm:"Uppercase",
        color:"white"
      }} to={`/coins/${el.id}`}>
        <img
          src={el?.image}
          alt={el?.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {el?.symbol}
          &nbsp;
          <span style={{color:profit>0?"rgb(14,203,129)":"red",fontWeight:500}}>
            {profit && "+"}
            {el?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol}
          {numberWithCommas(el?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });
  const responsive = {
    0: {
      items: 2,
    },
    400: {
      items: 3,
    },
    712: {
      items: 5,
    },
  };
  return (
    <div style={{
      height: "50%",
      display: "flex",
      alignItems: "center",
    }}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
}

export default Carousal;
