import Header from '../../components/header';
   export default function pemesanan(){
    return (
    <div>
    <Header/>
    <b>Pemesanan</b>
    <p>Untuk pemesanan silahkan isi form dibawah ini</p>
    <p>
        <label> Nama :</label>
        <input type="text" name="Nama" placeholder="Masukkan Nama Anda"></input>
    </p>
    <br/>
    <p>
        <label> Alamat :</label>
        <input type="text" name="Alamat" placeholder="Masukkan Alamat Anda"></input>
    </p>
    <br/>
    <p>
        <label> No Telepon :</label>
        <input type="text" name="No Telepon" placeholder="Masukkan Nomor Anda"></input>
    </p>
    <br/>
    <p>
        <label> Kode Pos :</label>
        <input type="text" name="Kode Pos" placeholder="Masukkan kode Anda"></input>
    </p>
    <br/>
    <button>Kirimkan</button>
    <hr />
    
    <center>
    <p><small/>Alamat : Jl, KALIMOSODO BUSEK PERUMAHAN PENGATIGAN INDAH ROGOJAMPI - Banyuwangi</p>    <p>Kode Pos : 662</p>
    </center>
    </div>
    );
   }