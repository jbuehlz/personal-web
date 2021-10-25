<template>
  <header>
    <div class="buehler">jb</div>
    <ol>
      <li><a href="#about">About</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#contact">Contact</a></li>
    </ol>
    <a class="button" target="_blank"
       href="https://drive.google.com/file/d/1lYJd-eTsHdEdM8UvV3Ea6082HcKxMJFn/view?usp=sharing">Resume</a>
  </header>
  <div class="social-bar">
    <ul class="social-list fade-enter-done">
      <li><a href="https://github.com/vorion" aria-label="GitHub" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>
          GitHub</title>
          <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a></li>
      <li><a href="https://www.linkedin.com/in/jonathan-buehler-750a6662/" aria-label="Linkedin" target="_blank"
             rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><title>
          LinkedIn</title>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a></li>
    </ul>
  </div>
  <div orientation="right"></div>
  <div class="main">

    <section class="jumbotron">
      <div class="jumbotron">
        <p class="green mono">Hi, my name is</p>
        <h1>Jonathan Buehler.</h1>
        <h1 class="faded">Automation Engineer</h1>
        <p>I am an experienced software engineer that specializes in hardware workload automation. I have previously
          worked in
          data-center, cryptocurrency and Esport industries.
          Currently, I help build at-scale automation validation infrastructure at <a href="https://amd.com/">Advanced
            Micro Devices</a> for Data Center GPU products.</p>
      </div>
    </section>

    <section id="about">
      <h2 class="numbered-heading">About me</h2>
      <p>Howdy! My name is Jonathan and I enjoy creating internal tools and automation frameworks. My interest in
        software development began in 2010, building game-modes for <a href="https://gmod.facepunch.com/">Garry's Mod</a>.
        Since then, I've explored many aspects of software development and have found a passion for hardware automation.
      </p>
      <p>I have had the privilege of working at <a href="https://mainline.gg" target="_blank">a couple </a> of <a
          href="https://nextdesign.ai" target="_blank">start-ups</a>.
        These days, my main focus is building internal automation tools at <a href="https://amd.com" target="_blank">AMD</a> for the
        Data Center GPU organization.</p>

      <p>Here are a few technologies I have been working with recently:</p>
      <ul class="skills">
        <li>TypeScript</li>
        <li>Python</li>
        <li>Node.js</li>
        <li>Kubernetes</li>
        <li>Docker</li>
        <li>MAAS</li>
        <li>Jenkins</li>
        <li>Azure + CLI</li>
      </ul>
    </section>

    <section id="work">
      <h2 class="numbered-heading">Where I've Worked</h2>

      <n-config-provider :theme="darkTheme">
        <n-timeline size="large">
          <n-timeline-item
              type="warning"
              title="AMD | Systems Design Engineer, Member of Technical Staff"
              content="Develop internal automation tools for pre and post-silicon gpu validation at
scale. Collaborate with multiple business units and domains on a daily basis."
              time="Jul 2021 - Present"
          />
          <n-timeline-item
              type="success"
              title="NextDesign.ai | Full Stack Engineer"
              content="Develop internal tools for management of server farms in excess of 5,000 FPGA accelerator cards."
              time="Aug 2019 - Present"
          />
          <n-timeline-item
              type="info"
              title="Mainline.GG | Front-End Developer"
              content="Built a fully responsive tournament platform with Angular 8+ and C#.
Lead documentation efforts and on-boarding procedures. Diagnosed and implemented solution for a business critical data storage performance regression issue."
              time="Oct 2019 - Jun 2021"

          />
          <n-timeline-item
              type="info"
              title="eGaming Solutions | Lead Engineer"
              content="Developed responsive web apps in Vue and NodeJS leveraging
Google Cloud scaling technologies to deliver seamless online
gaming experiences."
              time="Aug 2017 - Sep 2019"
          />
          <n-timeline-item
              type="default"
              title="HCC | Computer Science Tutor"
              content="Taught and reinforced computer science fundamentals for swathes of students. Decreased attrition of Computer Science Associate's Program."
              time="Aug 2016 - May 2017"
          />
        </n-timeline>
      </n-config-provider>
    </section>

    <section id="contact">
      <h2 class="numbered-heading">Interested?</h2>
      <p>Although I’m not currently looking for any new opportunities, my <a href="mailto:jonathanbuehler@gmail.com">inbox</a>
        is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
    </section>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {darkTheme} from 'naive-ui';

@Options({
  components: {},
  data() {
    return {
      darkTheme
    }
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">

$slate: #8892b0;
$lighter-slate: #ccd6f6;
$green-muted: #213434;
//$green-muted: #151515;

$green: #64ffda;

body {
  counter-reset: section;
  background-color: $green-muted;
  //background-color: #1e1e1e;
}

h1, h2, h3, h4, h5, h6, p, span {
  color: #fff;
}

p {
  margin: 0px 0px 15px;
  font-size: 20px;
}

header {
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  align-items: center;
  box-shadow: 0 10px 30px -10px #213434;
  backdrop-filter: blur(5px);
  background-color: rgba(33, 54, 54, 0.85);
  z-index: 11;

  .buehler {
    font-size: 32px;
    flex-grow: 1;
    text-align: left;
    margin-left: 100px;
    font-family: 'Roboto Mono', monospace;
    filter: blur(3px);

    &:before{
      content: "<";
      color: $green;
    }
    &:after{
      content: "/>";
      color: $green;
    }
  }

  a {
    margin-right: 100px;
  }

  ol {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;
    counter-reset: nav;

    a {
      counter-increment: nav;
      color: $lighter-slate;
      margin: 16px;
    }

    li a::before {
      content: "0" counter(nav) ".";
      margin-right: 5px;
      color: $green;
      font-family: 'Roboto Mono', monospace;
      font-size: 12px;
      text-align: right;
    }
  }

  @media(max-width: 600px) {
    .buehler {
      margin-left: unset;
      text-align: center;
    }

    a, ol {
      display: none;
    }
  }
}

p:focus {
  outline: 2px dashed var(--green);
  outline-offset: 3px;
}

div .main {
  margin: auto;
  padding: 0 100px;
}

@media (max-width: 600px) {
  div .main {
    margin: auto;
    padding: 0 10px;
  }
}

section {
  text-align: left;
  min-height: 50vh;
  max-width: 900px;
  margin: 0 auto;
  padding: 100px 0px;

  h2.numbered-heading {
    margin-bottom: 48px;
    position: relative;
    counter-increment: section;
    display: flex;
    align-items: center;
    font-size: 32px;

    &:before {
      content: "0" counter(section) ". ";
      color: $green;
      margin-right: 10px;
      font-family: 'Roboto Mono', monospace;
      font-size: 24px;
    }

    &:after {
      content: " ";
      display: block;
      position: relative;
      top: 0;
      height: 1px;
      width: 200px;
      background-color: $slate;
      margin-left: 16px;
    }
  }

  &.jumbotron {
    min-height: 100vh;
    max-width: 800px;
    margin: 0 auto;
    text-align: start;
    background-color: unset;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px;

    h1 {
      font-size: 4rem;
      margin: unset;

      &.faded {
        opacity: 0.7;
        font-style: italic;
        font-weight: 100;
      }
    }

    p {
      font-size: 1rem;
      font-weight: 500;
      opacity: 0.9;
    }
  }
}

.mono {
  font-family: 'Roboto Mono', monospace;
}

ul.skills {
  display: grid;
  grid-template-columns: repeat(2, minmax(160px, 200px));
  gap: 0px 10px;
  overflow: hidden;
  list-style: none;

  li {
    position: relative;
    padding-left: 24px;
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;

    &:before {
      content: "►";
      position: absolute;
      left: 0px;
      color: $green;
      line-height: 24px;
    }
  }
}

.green {
  color: $green;
}

a {
  color: $green;
  display: inline-block;
  position: relative;
  cursor: pointer;
  text-decoration: none;

  &.button {
    margin-left: 16px;
    padding: 8px;
    border: 1px solid $green;
    border-radius: 15px;

    &:after {
      content: unset;
    }
  }
}

a:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  background: #64ffda;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.25s ease-in-out;
  z-index: -1;
}

a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $lighter-slate;
}


.social-bar {
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  color: $lighter-slate;
}

@media(max-width: 600px) {
  .social-bar {
    display: none;
  }
}

.social-list {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
}

.social-list::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: $lighter-slate;
}

.social-list li a {
  padding: 10px;
  color: $lighter-slate;

  &:hover {
    transform: translateY(-3 px
    );
    color: $green
  }

  &:after {
    content: unset;
  }
}

.social-list li a svg {
  width: 20px;
  height: 20px;
}
</style>
