import { ChangeEvent, useState } from 'react';

import styles from './styles.module.scss';
import logo from './assets/LogoWolox.png';
import { SIGN_UP_FIELDS } from './constants';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    firstName: '',
    lastName: '',
    locale: 'en'
  });

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const printData = () => {
    /* console.log(user); */
  };
  // crear en la carpeta constants dentro de Login
  return (
    <div className={styles.app}>
      <form className={styles.container}>
        <div className={styles.headContainer} />
        <img src={logo} className={styles.logoWolox} alt="logo" />
        {SIGN_UP_FIELDS.map((data) => (
          <div key={data.name} className={styles.content}>
            <label className={styles.textLabel}>{data.label}</label>
            <input type={data.type} name={data.name} className={styles.input} onChange={changeValue} />
          </div>
        ))}
        <button type="button" onClick={printData} className={styles.btnPrimary}>
          <p>Sign Up</p>
        </button>
        <div className={styles.dividerLine} />
        <button type="button" className={styles.btnSecondary}>
          <p>Login</p>
        </button>
      </form>
    </div>
  );
}

export default Login;
