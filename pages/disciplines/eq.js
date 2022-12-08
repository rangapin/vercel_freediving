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
          <div class={styles.skill}>
            <h2>Equalization</h2>

            <ul>
              <li>Begin equalizing before starting to descend</li>
              <li>Continue to equalize with every fin stroke or arm pull</li>
              <li>Do not remove the hand from the nose if finning</li>
              <li>Do not try to force equalization</li>
              <li>
                Do not continue to descend if there are problems equalizing;
                instead, surface and try again, equalizing more frequently
              </li>
            </ul>
          </div>
          <div class={styles.video}>
            <iframe
              width="854" height="480"
              src="https://www.youtube.com/embed/V302fsi5qis"
              title="Equalization | Freediving Skills"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class={styles.skill}>
            <h2>Frenzel Technique</h2>

            <ul>
              <li>Pinch the nose closed with the fingers</li>
              <li>
                Push the back of the tongue back and up in to the soft palate in
                a piston-like motion to close off the epiglottis
              </li>
              <li>
                The air in the nasal cavity compresses, pushing the Eustachian
                tubes open
              </li>
              <li>
                After 1 or 2 equalizations, the tongue and soft palate should be
                relaxed to allow air to flow up from the lungs
              </li>
              <li>Repeat without pausing</li>
            </ul>
          </div>
          <div class={styles.video}>
            <iframe
             width="854" height="480"
              src="https://www.youtube.com/embed/zzXlJdICb4M"
              title="Frenzel equalization | Freediving Skills"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class={styles.skill}>
            <h2>Mouth-fill Technique</h2>

            <ul>
              <li>
                Pinch the nostrils closed and keep them closed during the
                exercise
              </li>
              <li>
                Fill the mouth and nasal cavity with as much air as possible by
                vocalizing a M sound to move air from the lungs to the
                mouth
              </li>
              <li>Keep the epiglottis closed for the rest of the dive</li>
              <li>
                After performing the mouth-fill, no more air should leave the
                lungs
              </li>
              <li>
                Use the pressure from the over-filled mouth and tongue to keep
                the equalizing pressure constant until it is gone
              </li>
              <li>
                After this, continue equalizing using the Frenzel maneuver, but
                with epiglottis constantly closed
              </li>
              <li>
                Make sure to open the soft palate between equalizations to move
                air from the mouth cavity to the nasal cavity
              </li>
              <li>
                Tuck the head in as the air in the mouth cavity gets smaller
              </li>
              <li>
                When mask equalization is necessary, relieve pressure by briefly
                removing the fingers from the nose
              </li>
            </ul>
          </div>
          <div class={styles.video}>
            <iframe
              width="854" height="480"
              src="https://www.youtube.com/embed/qg5-0P3Vam8"
              title="Mouth fill equalization | Freediving Skills"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
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
