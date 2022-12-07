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
          <div class="skill">
            <h2>Start and Setting Neutral Buoyancy</h2>
            <ul>
              <li>Stand at the starting point and take a full breath</li>
              <li>Stretch the arms out in front of the body</li>
              <li>
                Dive down (about 30-50cm), with arms extended out over the head
                (If the pool is deep, find neutral buoyancy about 1-1.5 meters
                below the surface)
              </li>
              <li>Do one arm stroke to establish a streamlined position</li>
              <li>Keep the body streamlined, and do not look forward</li>
            </ul>
          </div>
        <div class="video">
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/0RdJx5hUqYg"
            title="Dynamic start and setting neutral buoyancy | Freediving Skills"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="skill">
          <h2>Body Position/Streamlining </h2>
          <ul>
            <li>Arms should be beside the body, relaxed and not moving</li>
            <li>Keep the shoulders slightly tucked</li>
            <li>Keep the hips slightly tucked to prevent arching the back</li>
            <li>
              The head should be looking straight down at the bottom or slightly
              tucked with the chin towards the chest
            </li>
          </ul>
        </div>
        <div class="video">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/QIZPkvDZy8c" title="Dynamic body position and streamlining | Freediving Skills" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="skill">
          <h2>Dynamic Dive</h2>
          <ul>
            <li>Start</li>
            <li>Buoyancy</li>
            <li>Body position and streamlining</li>
            <li>A turn</li>
            <li>Surfacing technique</li>
          </ul>
        </div>
        <div class="video">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/jowez07Z8pk" title="Dynamic apnea attempt | Freediving Skills" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="skill">
          <h2>Arm Stroke Only</h2>
          <ul>
            <li>
              Grab the water with the palms above the head, pull down in a
              circle to the middle of the body, and then push down and out to
              the side as the arms straighten
            </li>
            <li>Glide for a few seconds after the stroke</li>
            <li>
              To reduce drag, keep the arms and hands close to the body (palms
              may face the body) as they are raised for the next stroke
            </li>
          </ul>
        </div>
        <div class="video">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/SMM3A4G_eUA" title="Arms only dynamic | Freediving Skills" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="skill">

        <h2>Turns (no wall)</h2>
        <ul>
          <li>Put one hand on the bottom at the turning point</li>
          <li>Maintain momentum gained while swimming</li>
          <li>Bend the knees and tuck in the legs</li>
          <li>Use momentum and the free arm to rotate the body 180 degrees</li>
        </ul>
        </div>
        <div class="video">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/JOWrAnLBjug" title="Dynamic turns | Freediving Skills" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="skill">
          <h2>Surfacing from Dynamic and OW</h2>
          <ul>
            <li>
              Upon surfacing, grab the side of the pool, a float or arm provided
              by the instructor or buddy, or the freediving buoy
            </li>
            <li>Stay low in the water DO NOT STAND UP (if Dynamic)</li>
            <li>Do not remove the mask or put the face back in the water</li>
            <li>Perform 3 to 5 recovery breaths</li>
            <li>Give the OK sign to a buddy or instructor</li>
          </ul>
        </div>
        <div class="video">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/nBGlMCACq5A" title="Surfacing | Freediving Skills" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
