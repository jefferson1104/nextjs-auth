import { useAuthHttp } from '../hooks/useAuthHttp'
import Link from 'next/link'

export default function Home() {
  const { data: user, error } = useAuthHttp('user');
  return user 
    ? <div className="home">
        <h1>Next.js Auth App</h1>
        <Link href='/private'>
          <a className='private-link'>Acessar dados do usuário</a>
        </Link>
      </div> 
    : null;
}
