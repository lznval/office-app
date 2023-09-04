import React, {useState} from 'react';

const SighIn = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(name + " name");
    console.log(email + " Email")

    return (
        <div>
            <input type="text" placeholder="Введите ваше имя" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Введите вашу почту" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Введите ваш пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button>Зарегистрироваться</button>
        </div>
    );
};

export default SighIn;
