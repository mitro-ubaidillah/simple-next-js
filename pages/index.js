import Head from 'next/head'
import styles from '../styles/Home.module.css'
import InputField from '../components/InputField'
import CardResult from '../components/CardResult'
import { useState } from 'react'

export default function Home() {
  const [bil, setBil] = useState([]);
  const [result, setResult] = useState();
  const [ganjil, setGanjil] = useState([]);

  const onChangeHandler = (e) => {
    setBil(e.split(','));
  }

  const onLengthHandle = () => {
    setResult(`Jumlah Input: ${bil.length}`);
  }

  const onMinHandle = () => {
    let min = 0;
    for (let i = 0; i < bil?.length; i++) {
      if (i == 0) {
        min = parseInt(bil[i]);
      } else {
        if (min > parseInt(bil[i])) {
          min = parseInt(bil[i])
        }
      }
    }
    setResult(`Bilangan Terkecil ${min}`)
  }

  const onMaxHandle = () => {
    let max = 0;
    for (let i = 0; i < bil?.length; i++) {
      if (i == 0) {
        max = parseInt(bil[i]);
      } else {
        if (max < parseInt(bil[i])) {
          max = parseInt(bil[i])
        }
      }
    }
    setResult(`Bilangan Terbesar ${max}`)
  }

  const onHandleTotalGanjilGenap =() => {
    let ganjil = 0;
    let genap = 0;
    for (let i = 0; i < bil?.length; i++) {
      if(parseInt(bil[i]) % 2 == 0) {
        genap += 1;
      }else {
        ganjil +=1
      }
    }
    setResult(`Bilangan Ganjil ada ${ganjil} genap ada ${genap}`);
  }

  const onHandleCetakGanjilGenap = () => {
    let ganjil = [];
    let genap = [];
    for (let i = 0; i < bil?.length; i++) {
      if(parseInt(bil[i]) % 2 == 0) {
        genap.push(parseInt(bil[i]));
      }else {
        ganjil.push(parseInt(bil[i]))
      }
    }
    setResult(`Bilangan Ganjil : ${ganjil} Bilangan Genap : ${genap}`);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-slate-300'>
        <div className='w-[700px] top-[25%] left-[25%] absolute text-center border-2 border-gray-400 p-5'>
          <h1 className="text-4xl font-bold">Himpunan Bilangan Bulat</h1>
          <div className='w-full'>
            <InputField
              value={bil}
              onChange={(e) => onChangeHandler(e.target.value)}
              onLength={() => onLengthHandle()}
              onMin={() => onMinHandle()}
              onMax={() => onMaxHandle()}
              onCetak={()=>onHandleCetakGanjilGenap()}
              onTotal={()=>onHandleTotalGanjilGenap()}
            />
            <CardResult result={result} />
          </div>
        </div>
      </main>
      <footer></footer>

    </div>
  )
}
