import styles from "/styles/Home.module.css";

export default function fim() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://freediving-nicaragua.com">Freediving School</a>
        </h1>
        <div class="skills">

        <h2>Static Apnea Coaching</h2>
        <ul>
        <li>
          The freedivers plan the session in buddy teams to learn the routines
          and goals of their buddy to be able to coach each other
        </li>
        <li>2 or 3 warm-ups should be included in their plans</li>
        <li>
          Execute the plan, with one buddy coaching and the other performing a
          static
        </li>
        <li>
          Actively coach the buddy to hold their breath longer, but ensure that
          the buddy ends the exercise when it is time
        </li>
        <li>
          They should use the tapping/safety signals agreed upon before the
          exercise
        </li>
        </ul>
        </div>

        <div class={styles.video}>
        <iframe width="854" height="480" src="https://www.youtube.com/embed/HTJkrKLPVlk" title="Static Apnea Attempt | Freediving Skills" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <h1 className={styles.card}>
        <a href="../">Go Back</a>
        </h1>
      </main>

      <footer className={styles.footer}>
          @Copyright 2023 Richard Angapin | All Right Reserved
      </footer>
    </div>
  );
}
