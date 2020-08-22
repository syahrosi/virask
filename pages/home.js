import Header from '../components/header'
import Head from 'next/head'
import Body from '../components/body'
import Link from 'next/link'

  export default function  Home(){
     return(
    <div>
      <Head>
         <title> viras shop</title>
      </Head>
      <Header/>
      <Body>
         <br></br>
         <b>Selamat datang di viras shop</b>
         <br></br>
         <p>viras shop Menyediakan Semua kebutuhan yang anda perlukan silahkan cek barang yang anda inginkan di bawah ini </p>
         <br></br>
         <Link href="/proyek/Galeriproduk"><a>Galeri Produk</a></Link>
      </Body>
   
   </div>
   );
}
   