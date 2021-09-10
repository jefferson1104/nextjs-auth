import { FormEvent } from 'react'
import styles from '../styles/login.module.css'
import { http } from '../util/http';

export default function LoginPage() {

  async function onSubmit(event: FormEvent) {
    // evitando refresh na pagina após enviar dados do form
    event.preventDefault();

    // capturando dados digitados nos campos
    const username = (document.querySelector("#username") as HTMLInputElement).value;
    const password = (document.querySelector("#password") as HTMLInputElement).value;

    // requisicao http
    const data = await http.post('login', {username, password})
    console.log(data)
  }

  return (
    <div className={styles.loginContent}>
      <form className={styles.loginForm} method="post" onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Usuário</label>
          <input type="text" id="username" name="username"/>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password"/>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}
