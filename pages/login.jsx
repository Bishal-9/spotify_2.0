import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
    return (
        <div>
            <img
                className='w-52 mb-5'
                src='https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png'
                alt=''
            />
            {
                Object.values(providers).map(provider => (
                    <div key={provider.name}>
                        <button>Login with {provider.name}</button>
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
