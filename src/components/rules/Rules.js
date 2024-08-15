import React, { useContext } from "react";
import ModalContext from "../ModalContext";

const Rules = () => {
    const { modalON } = useContext(ModalContext);

    if (modalON === 4) {
        return (
            <section className="h-full p-5 text-white-400 overflow-y-auto scrollbar">
                <h2 className="text-2xl">Notas sobre a camapanha</h2>
                <hr className="my-2"></hr>
                <p>
                    <strong>Refúgio Sereno</strong> é uma campanha de RPG no
                    estilo <em>survival horror</em>, onde temas como terror
                    psicológico e horror visceral serão recorrentes ao longo da
                    história.
                </p>
                <br></br>
                <p>
                    O sistema utilizado é uma adaptação do{" "}
                    <em>Ordem Paranormal RPG</em> e seu suplemento{" "}
                    <em>Sobrevivendo ao Horror</em>.
                </p>
                <br></br>
                <p>
                    Ao explorar o universo de <strong>Refúgio Sereno</strong>, é
                    importante ter em mente que apesar do sistema escolhido,
                    essa campanha não segue a linha típica do universo{" "}
                    <em>Ordem Paranormal</em>. Por isso, os simbolismos e
                    conceitos apresentados em <em>Ordem Paranormal</em> podem
                    não ter os mesmos significados nesta campanha.
                </p>
                <br></br>

                <h2 className="text-2xl">Regras e Adaptações</h2>

                <hr className="my-2"></hr>

                <details>
                    <summary className="text-xl">
                        Regra de idade Variada{" "}
                        <em>(Ordem Paranormal Livro de Regras, pág 172):</em>
                    </summary>
                    <br></br>
                    <p>
                        Na regra padrão, todos os personagens são jovens ou
                        adultos e a idade deles não possui efeito mecânico.
                    </p>

                    <p>
                        Com essa variante, personagens podem ser de outras
                        faixas etárias e recebem modificadores por isso.
                    </p>

                    <p>
                        Se esta regra estiver em uso, cada jogador deve escolher
                        a faixa etária de seu personagem. As faixas etárias e
                        seus modificadores são as seguintes
                    </p>
                </details>

                <br></br>
                
                <details>
                    <summary className="text-xl">
                        Classe: Mundano
                    </summary>
                </details>
            </section>
        );
    } else {
        return null;
    }
};

export default Rules;
