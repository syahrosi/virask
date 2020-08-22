import Link from 'next/link'

const Header = props=>(
    <div>
        <nav>
            <ul>
                <li><Link href="/home"><a>Home</a></Link></li>
                <li><Link href="/proyek/Galeriproduk"><a>Galeri Produk</a></Link></li>
                <li><Link href="/proyek/pemesanan"><a>Pemesanan</a></Link></li>
            </ul>
        </nav>
    </div>
)

export default Header;