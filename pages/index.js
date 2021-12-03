import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
    return (
        <div className="bg-black h-screen overflow-hidden">
            <Head>
                <title>Spotify 2.0</title>
                <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/174/174872.png" />
            </Head>

            <main className=''>
                <Sidebar />
                {/* Center */}

                <div>
                    {/* Player */}
                </div>
            </main>
        </div>
    )
}
