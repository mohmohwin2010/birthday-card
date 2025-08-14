import { useEffect } from "react";
import confetti from "canvas-confetti";
import myPhoto from "./assets/mymessage.jpeg";
import "./App.css";

export default function App() {
  useEffect(() => {
    // Confetti on load
    confetti({
      particleCount: 180,
      spread: 75,
      origin: { y: 0.6 },
      ticks: 200,
    });

    // Falling hearts
    const id = setInterval(createHeart, 300);
    return () => clearInterval(id);
  }, []);

  const createHeart = () => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // 3–5s
    heart.style.fontSize = Math.random() * 18 + 18 + "px"; // 18–36px
    heart.style.opacity = String(0.7 + Math.random() * 0.3);
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5500);
  };

  return (
    <>
      {/* BG music (place /public/music.mp3) */}
      <audio autoPlay loop playsInline>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* Animated background */}
      <div className="bg">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="stars" />
      </div>

      <main className="shell">
        <section className="card glass">
          <h1 className="title">
            <span role="img" aria-label="party">🎉</span>{" "}
           Happy Birthday!!! My Dearest Person 🎂
            <span className="pulse">❤️</span>
          </h1>

          <p className="subtitle">
            My heart is always nearest with you, even though we are far apart. I wish
            you the fullest, healthiest, and happiest day ever!{" "}
            <span role="img" aria-label="love-letter">💌</span>
          </p>

          <p className="signature">— From Your Apple <span>💕</span></p>

          {/* Memory Photo – put /public/previous-wish.jpg */}
          <figure className="polaroid">
            <img
              src={myPhoto}
              alt="Your sweet wish to me from last birthday"
              loading="eager"
            />
           
            <figcaption>
              Our sweet memory — your sweet wish from my birthday to you 💖
               Wishing you lots of joy and happiness today and ever!{" "}
            <span role="img" aria-label="sparkles">✨</span>
              </figcaption>
          </figure>

          <p className="footer-note">
            {/* <figcaption>
              Our sweet memory — your wish to me 💖
              </figcaption> */}
            {/* Wishing you lots of joy and happiness today and always!{" "} */}
            {/* <span role="img" aria-label="sparkles">✨</span> */}
          </p>
        </section>
      </main>
    </>
  );
}

