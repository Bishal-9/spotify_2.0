import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
    return (
        <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
            <img
                className='w-96 mb-5'
                src='https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png'
                alt=''
            />
            {
                Object.values(providers).map(provider => (
                    <div key={provider.name}>
                        <button
                            className='bg-[#18D860] text-white px-5 py-2 rounded-full'
                            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                        >
                            Login with {provider.name}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders()

    return {
        props: {
            providers
        }
    }
}

export default Login
