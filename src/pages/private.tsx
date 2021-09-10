import { http } from "../util/http";
import Link from 'next/link'
import styles from '../styles/private.module.css'
import { withAuth } from "../hof/withAuth";

interface PayloadProps {
  name: string;
  username: string;
  email: string;
  role: string;
  loginDate: string;
}
interface PrivatePagesProps {
  payload: PayloadProps;
}

export default function PrivatePage(props: PrivatePagesProps) {
  const { name, username, email, role, loginDate } = props.payload;
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Página privada</h1>
        <br />
        <div className={styles.loginData}>
          <h2>Dados do login</h2>
          <p><strong>Nome: </strong>{name}</p>
          <p><strong>Login: </strong>{username}</p>
          <p><strong>Email: </strong>{email}</p>
          <p><strong>Tipo: </strong>{role}</p>
          <p><strong>Descrição: </strong>Login realizado em {loginDate}</p>
        </div>
      </div>

      <div className={styles.logout}>
        <Link href='/login'>Clique aqui para sair</Link>
      </div>
    </div>
  );
};

export const getServerSideProps = withAuth(async (ctx: any, cookies: any, payload: any) => {
  const { data } = await http.get('test-auth', {
    headers: {
      Authorization: `Bearer ${cookies.token}`
    }
  });

  return {
    props: data,
  }
});

/*
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx.req);

  // verifica se não existe token salvo nos cookies ou se ele esta com expirado, caso sim redireciona para pagina de login
  if (!cookies.token || isTokenExpired(cookies.token)) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  try {
    const { data } = await http.get('test-auth', {
      headers: {
        Authorization: `Bearer ${cookies.token}`
      }
    });

    return {
      props: data,
    }
  } catch (error) {
    if (
      axios.isAxiosError(error) && 
      (error.response?.status === 401 || error.response?.status === 403) 
    ) {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
      };
    }

    throw error;
  }
}
*/