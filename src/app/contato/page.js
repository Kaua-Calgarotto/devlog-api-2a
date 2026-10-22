'use client';
import { useState } from 'react';
import styles from './page.module.css'; // coloque esta linha em todos os arquivos js criados

export default function Contato() {
    // let cont = 0;
    const [cont, setCont] = useState(0);
    const [nome, setNome] = useState('');
    const [msg, setMsg] = useState('');
    //declare a variável de estado nome;

    const somar = () => {
        // cont = cont + 1;
        // setCont(cont + 1);
        setCont(cont + 1);
        // setCont(prev => prev + 1);
        // setCont(prev => prev + 1);
        console.log(cont);
    }
    return (
        <main>
            <h1 className={styles.h1}>Contato</h1>
            <p>Cont: {cont}</p>
            <button type='button' onClick={somar}>Somar</button>

            {/* Crie um formulário, com um fieldset, um parágrafo, um label e um botão  */}
            <form>
                <fieldset>
                    <p>Nome digitado: {nome}</p>
                    <label htmlFor='nome'>Nome: </label>
                    <input type="text" id='nome' name='nome' onKeyUp={e => setNome(e.target.value)} />
                    <label htmlFor='msg'>Mensagem: </label>
                    <input type="text" id='msg' name='msg' onKeyUp={e => setMsg(e.target.value)} />
                    {/* Crie um label e um input, ao clicar no botão abaixo (ok), exiba um alerta (alert) com o texto digitado no input */}
                    <button type='button' onClick={() => alert(msg)}>Ok</button>
                </fieldset>
            </form>
        </main>
    )
}