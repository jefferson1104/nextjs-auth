import { FormEvent } from 'react'
import styles from '../styles/login.module.css'
import { setCookie } from '../util/cookies';
import { http } from '../util/http';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router =  useRouter();

  async function onSubmit(event: FormEvent) {

    // evitando refresh na pagina após enviar dados do form
    event.preventDefault();

    // capturando dados digitados nos campos
    const username = (document.querySelector("#username") as HTMLInputElement).value;
    const password = (document.querySelector("#password") as HTMLInputElement).value;

    // requisicao na api e salvando token nos cookies
    const { data } = await http.post('login', {username, password});
    setCookie('token', data.token);
    router.push('/private')
  }

  return (
    <div className={styles.loginContent}>
      <form className={styles.loginForm} method="post" onSubmit={onSubmit}>
        <h1>LOGIN</h1>
        <br />
        <div className={styles.formGroup}>
          <label htmlFor="username">Usuário</label>
          <input type="text" id="username" name="username"/>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password"/>
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
