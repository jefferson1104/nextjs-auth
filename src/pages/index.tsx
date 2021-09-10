import { useAuthHttp } from '../hooks/useAuthHttp'

export default function Home() {
  const { data: user, error } = useAuthHttp('user');
  return user ? <div className="home"><h1>Next.js Auth App</h1></div> : null;
}
