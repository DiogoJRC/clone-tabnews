import { useEffect, useState } from "react";

function Home() {
  const [hora, setHora] = useState(false);

  useEffect(() => {
    const date = new Date();

    setHora(date.getHours());
  }, []);

  let bg = "lightskyblue";
  let alignment = "baseline";
  let icon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFD43B" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>';

  if (hora >= 18 || hora <= 5) {
    bg = "midnightblue";
    alignment = "end";
    icon =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#FFD43B" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>';
  } else if (hora >= 12) {
    bg = "#fd5e53";
    alignment = "center";
    icon =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFD43B" d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/></svg>';
  }

  return (
    <section>
      <style jsx global>
        {`
          html,
          body {
            font-family: sans-serif;
            text-align: center;
            background-color: ${bg};
            padding: 0 15px 10px;
          }
          section {
            max-width: 600px;
            min-height: 90vh;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          section span {
            position: relative;
            margin-bottom: -25px;
            align-self: ${alignment};
            z-index: 99;
          }
          section span svg {
            height: 50px;
          }
          .message {
            padding: 30px;
            border-radius: 30px;
            box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);
            background-color: #fff;
          }
          .message h1 {
            margin-top: 0;
          }
          .message h1 > strong {
            display: block;
            margin-top: 5px;
            font-weigth: 900;
            color: #f9c23c;
          }
          .message small {
            color: #6c757d;
          }
        `}
      </style>
      <span dangerouslySetInnerHTML={{ __html: icon }}></span>
      <div className="message">
        <h1>
          Amiga, criei essa página só para dizer que você é uma pessoa muito{" "}
          <strong>✨ESPECIAL✨</strong>
        </h1>
        <p>
          Obrigado por me mostrar uma nova perspectiva de vida e por me ajudar a
          me tornar uma pessoa cada vez melhor
        </p>
        <p>
          Por me fazer sentir acolhido, acreditar mais em mim mesmo e mostrar
          que sou capaz de continuar me aprimorando
        </p>
        <p>
          Se hoje estou escrevendo esta mensagem, é porque me sinto um pouco
          mais animado com minha profissão e motivado a estudar coisas novas{" "}
          <small>
            (esse é o primero código utilizando o que estou aprendendo. Mas não
            se engane, foi muuuuuito mais dificil escrever este texto do que
            montar tudo isso hahaha)
          </small>
        </p>
        <p>
          E, se amanhã não estiver mais, sei que posso buscar outros caminhos
        </p>
        <p>Obrigado por ser sempre tão incrível comigo🧡</p>
        <small>
          Não esqueci do seu sistema, tá? Aconteceram alguns contratempos, e
          este ano foi muito puxado no trabalho, acabei ficando sem tempo e
          desanimado. Mas essa simples página um dia vai se tornar seu sistema.
          E pode me cobrar, viu? Não me deixe procrastinar 🤣
        </small>
      </div>
    </section>
  );
}

export default Home;
