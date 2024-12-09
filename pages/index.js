function Home() {
  let icon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#B197FC" d="M240.8 4.8C250.3 10.6 256 20.9 256 32l0 72 89 0c3.6-13.8 16.1-24 31-24l88 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-88 0c-14.9 0-27.4-10.2-31-24l-89 0 0 72c0 11.1-5.7 21.4-15.2 27.2s-21.2 6.4-31.1 1.4l-192-96C6.8 151.2 0 140.1 0 128s6.8-23.2 17.7-28.6l192-96c9.9-5 21.7-4.4 31.1 1.4zM288 256c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM32 384l96 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm192 0l256 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32z"/></svg>';

  return (
    <section>
      <style jsx global>
        {`
          html,
          body {
            font-family: sans-serif;
            text-align: center;
            background-color: midnightblue;
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
          section svg {
            height: 40px;
          }
          .message {
            padding: 30px;
            border-radius: 30px;
            box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);
            background-color: #fff;
          }
          .message h1 {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            color: #222;
          }
          .message h1 span:last-child svg {
            transform: scaleX(-1);
          }
          .message h1 strong {
            margin: 0 0.75rem;
            font-weight: 800;
          }
        `}
      </style>

      <div className="message">
        <h1>
          <span dangerouslySetInnerHTML={{ __html: icon }}></span>{" "}
          <strong>EM CONSTRUÇÃO</strong>{" "}
          <span dangerouslySetInnerHTML={{ __html: icon }}></span>
        </h1>
      </div>
    </section>
  );
}

export default Home;
