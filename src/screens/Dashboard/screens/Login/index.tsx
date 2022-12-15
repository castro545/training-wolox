import { ChangeEvent, useState } from 'react';

import styles from './styles.module.scss';
import logo from './assets/LogoWolox.png';
import { dataForm } from './constants';

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
      <form className={styles.rectangle}>
        <div className={styles.head} />
        <img src={logo} className={styles.logoWolox} alt="logo" />

        <label>
          {dataForm.map((data) => (
            <div key={data.name}>
              <p className={styles.textLabel}>{data.label}</p>
              <input type={data.type} name={data.name} className={styles.rectangle1} onChange={changeValue} />
            </div>
          ))}
        </label>

        <button type="button" onClick={printData} className={styles.group1}>
          <p className={styles.signUp}>Sing Up</p>
        </button>
        <div className={styles.rectangle2} />
        <button type="button" className={styles.groupLogin}>
          <p className={styles.login}>Login</p>
        </button>
      </form>
    </div>
  );
}

export default Login;
