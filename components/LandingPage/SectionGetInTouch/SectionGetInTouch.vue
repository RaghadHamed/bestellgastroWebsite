<template>
  <section class="section--get--in--touch" >
    <div class="sheet">
      <div class="shape" data-aos="fade">
        <svg
          class="u-svg-link"
          preserveAspectRatio="none"
          viewBox="0 0 160 100"
          style=""
        >
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#svg-5593"
          ></use>
        </svg>
        <svg
          class="u-svg-content"
          viewBox="0 0 160 100"
          x="0px"
          y="0px"
          id="svg-5593"
          style="enable-background: new 0 0 160 100"
        >
          <path
            d="M135.3,42.1C135,19.2,115.4,0,91.4,0C76,0,60.2,6.9,52.3,18.3c-3.5-2.2-6.4-2.5-10.9-2.5c-12.2,0-22.1,9.4-22.1,21.1
	c0,0.4,0,0.8,0.1,1.2c0,0.5,0.3,3.9,0.3,4.4C8.7,47.5,0,56.5,0,68.9C0,86,14.7,100,32.7,100h67.6c0.4,0,0.8,0,1.1-0.1
	c0.4,0,0.7,0.1,1.1,0.1h27c16.7,0,30.4-13.1,30.4-29C160.1,56.8,149.4,44.6,135.3,42.1z"
          ></path>
        </svg>
      </div> 
      <div class="group-elements" data-aos="fade-up"
        data-aos-duration="600">
        <a href="https://nicepage.com/website-builder"
          ><span class="icon"
            ><img src="~/static/images/new/731985.png" alt="" /></span
          >&nbsp;App Store
        </a>
        <a href="https://nicepage.com/website-builder"
          ><span class="icon"
            ><img src="~/static/images/new/6124997.png" alt="" /></span
          >Google Play
        </a>
      </div>
      <h3 data-aos="fade-up"
        data-aos-duration="600" data-aos-delay="600">App kostenlos herunterladen<span style="font-weight: 700"></span></h3>
    </div>
  </section>
</template>

<style lang="scss" scoped>
html:lang(ar) {
  .section--get--in--touch {
    direction: rtl;
  }
}

.section--get--in--touch {
  background-image: linear-gradient(#ffc75a, #0b3947);
  background-size: cover;
  padding: 5rem 9.285rem;

  .sheet {
    min-height: 482px;
    position: relative;
    margin: 0 auto;
    text-align: center;
  }
  .shape{
    width: 612px;
    height: 313px;
    margin: 70px auto 0;
    position: relative;
  }
  .u-svg-link{
    fill: #f9f9f9;
    color: #f9f9f9;
    transition-duration: inherit;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
    text-align: center;
  }
  .u-svg-content {
    width: 0;
    height: 0;
}
  .group-elements {
    width: 387px; 
     min-height: 58px; 
     height: auto; 
     margin: -176px auto 0;
     position: relative;
     pointer-events: initial;
     display: flex;
     justify-content: space-around;
  }
  .group-elements a {
    color: #000 !important;
    background-color: #b7b7b7 !important;
    text-align: center;
    border-radius: 15px;
    padding: 15px 20px 10px;
    height: 60px;
    font-size: 2rem;
  }
  
  img{
    display: inline-block;
    height: 1em;
    width: auto;
    line-height: 1;
    vertical-align: -0.15em;
  }
  [data-aos=fade][data-aos=fade].aos-animate {
        animation: animationimage 0.5s reverse;
  }
  h3 {
    font-weight: 700;
    font-size: 2.5rem;
    margin: 32px auto 60px;
    position: relative;
    color: $color-secondary;
  }
}

@keyframes animationimage {
  0%{
    width: 612px;
  }
  50%{
    width: 412px;
  }
  100%{
    width: 612px;
  }
}
@media  (max-width: $bp-medium) {
  .section--get--in--touch {
    padding: 20px 0;
  }
  svg {
        display: none;
    }
    h3 {
        color: #fff !important;
    }
}
</style>
