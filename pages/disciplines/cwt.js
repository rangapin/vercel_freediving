import styles from "/styles/Home.module.css";

export default function cwt() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://freediving-nicaragua.com">Freediving School</a>
        </h1>
        <div class="skills">
          <div class="skill">
          <h2>Duck Dive</h2>
          <ul>
          <li>Lay flat on the surface while holding the buoy/dive rope</li>
          <li>
            Gently pull the body forward to get into the correct position on the
            buoy
          </li>
          <li>Take a final breath and remove the snorkel from the mouth</li>
          <li>Pre-equalize before starting the dive</li>
          <li>Keep the head in a neutral position throughout the dive</li>
          <li>
            Push the hips upwards and out of the water using a small downward
            kick while keeping the legs together
          </li>
          <li>
            Simultaneously bend the upper body downward with a jack-knife motion
            while keeping the arms extended towards the bottom
          </li>
          <li>
            Without bending the knees, keep the legs together and lift them out
            of the water
          </li>
          <li>Do one (1) complete arm stroke</li>
          <li>Continue equalizing throughout the descent</li>
        </ul>
        </div>

        <div class="video">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/PRbfetzZCcg" title="Duck dive | Freediving Skills" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="skill">
        <h2>Body Position/Streamlining Constant Weight</h2>
        <ul>
          <li>Duck dive</li>
          <li>Equalizing</li>
          <li>Bi-finning</li>
          <li>Body position/streamlining</li>
          <li>Turning</li>
          <li>Surfacing</li>
        </ul>

        <div class="video">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/xwDJxf8lmlo" title="Constant weight body position and streamlining | Freediving Skills" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
      </div>
      <div class="skill">

        <h2>Arms-Only Ascent</h2>
        <ul>
          <li>
            Descend to the appropriate depth (depending on level) by Constant
            Weight (or pulling in Level 1 if equalization is an issue)
          </li>
          <li>Turn by grabbing the rope</li>
          <li>Put the legs/fins together to prevent them from moving</li>
          <li>Do full "key hole" arm strokes all the way to the surface</li>
        </ul>

        <div class="video">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/ft0t3uagfQ0" title="Arms only ascend | Freediving Skills" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
        <div class="skill">

        <h2>Ascent without a Mask</h2>
        <ul>
          <li>
            Descend to the appropriate depth (depending on level) by Constant
            Weight (or pulling in Level 1 if equalization is an issue)
          </li>
          <li>Turn upright and hold the rope</li>
          <li>Slowly flood the mask</li>
          <li>Remove the mask</li>
          <li>Keep the mask in one hand or around the neck</li>
          <li>
            Ascend to the surface while holding one hand around the rope as a
            guide
          </li>
        </ul>

        <div class="video">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/uyI0jvvbua0" title="No mask ascend | Freediving Skills" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div class="skill">

        <h2>Advanced Bottom Turn (Introduced in Freediving Level 1 or Level 2)</h2>
        <ul>
          <li>Keep the dive rope within arm-length during the dive</li>
          <li>At the turning point, grab the rope with one hand to stop thedescent</li>
          <li>Grab the rope so that the thumb is pointing to the surface</li>
          <li>Turn sideways while holding the rope (if freefalling let the body
            weight help)</li>
          <li>Do one strong pull on the rope to start the ascent and to notify the
            safety diver</li>
          <li>Start finning to the surface</li>
        </ul>
        </div>

        <div class="video">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/l6AVaafgL2Q" title="Dive Line Turn | Freediving Skills" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Copyright 2023 Richard Angapin | All Right Reserved
        </a>
      </footer>
    </div>
  );
}
