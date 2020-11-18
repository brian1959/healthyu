import React, { Component } from "react";

export default class Foryourfamily extends Component {
  render() {
    document.title = "For Your Family";
    return (
      <div className="nibble-main">
        <div className="meal-title-wrapper">
          <div className="meal-title">For Your Family</div>
          <div className="meal-text">
          This video gives a deeper look into what researchers are saying about healthy habits to foster in our homes that will protect children and adults alike.  Covering sleep, shift work, skin and the importance of hormonal balance.
            <br />
          </div>
          <div className="inst-vids-container">
            <div className="inst-vids-wrapper">
              <div className="snk-vids">
                <iframe height="100%" 
                title="For Your Family"
src="https://drive.google.com/file/d/1vucBXRHYpd0H1fvqYsfLSUPBND8kZi_P/preview" allow="fullscreen" />
                <h2>Circadian Rhythms</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="digdeeper-wrapper">
          <div className="digdeeper-title">Dig a Little Deeper Links</div>
          <div className="digdeeper-text">
              <h2>Why We Sleep:</h2>
            <a
              href="https://www.amazon.com/Why-We-Sleep-Unlocking-Dreams/dp/1501144316">
              Why We Sleep: Unlocking the Power of Sleep and Dreams
            </a>
            <br />

            <h2>The circadian code:</h2>
            <a href="https://www.youtube.com/https://www.amazon.com/Circadian-Code-Supercharge-Transform-Midnight/dp/163565243X">The Circadian Code: Lose Weight, Supercharge Your Energy, and Transform Your Health from Morning to Midnight</a><br/>
            <h2>Fresh Feeder:</h2>
            <a href="https://www.amazon.com/Munchkin-Fresh-Food-Feeder-Green/dp/B000GK5XY2/ref=sr_1_9?dchild=1&keywords=fresh+feeder+baby&qid=1597272175&sr=8-9">Munchkin Fresh Food Feeder</a><br/>
            <a href="https://www.amazon.com/Boon-Pulp-Silicone-Feeder-Yellow/dp/B078HPDLXS/ref=sr_1_12?dchild=1&keywords=fresh+feeder+baby&qid=1597272218&sr=8-12">Boon Pulp Silicone Feeder</a><br/>
            <h2>Vitamin B5:</h2>
            <a href="https://www.amazon.com/Solgar-Pantothenic-Vegetable-Capsules-Count/dp/B00020IB0O/ref=sxts_sxwds-bia-wc-p13n1_0?crid=2I33V5UIEMJ25&cv_ct_cx=pantothenic+acid+capsules&dchild=1&keywords=pantothenic+acid+capsules&pd_rd_i=B00020IB0O&pd_rd_r=d83b9846-dc59-4f42-b97c-eb0637bfaa7b&pd_rd_w=cl8Qf&pd_rd_wg=b0unu&pf_rd_p=13bf9bc7-d68d-44c3-9d2e-647020f56802&pf_rd_r=8Q3QHPKTVFVQK9VG0WAV&psc=1&qid=1597272253&sprefix=pantothenic+acid+cap%2Caps%2C190&sr=1-1-791c2399-d602-4248-afbb-8a79de2d236f">Solgar - Pantothenic Acid 550 mg Vegetable Capsules 100 Count</a>
            <br/>
            <h2>Sun screen</h2>
            <a href="https://www.amazon.com/Mineral-Sunscreen-Chemical-Ingredients-Protection/dp/B07NVVVCV2/ref=sr_1_1_sspa?dchild=1&keywords=blue+lizard+sunscreen&qid=1598715741&s=hpc&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyRDZONkk2ODk0VzJYJmVuY3J5cHRlZElkPUEwMzU3MzgyM1NPTkVKU1NMWlFERCZlbmNyeXB0ZWRBZElkPUEwNDIyMjI0WlY0V1EyWE05UFkyJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==">Blue Lizard</a><br/>
            <a href="https://www.amazon.com/EltaMD-Clear-Facial-Sunscreen-Broad-Spectrum/dp/B002MSN3QQ/ref=sr_1_2?crid=3LUWA8B3T76U7&dchild=1&keywords=elta+md+uv+clear+broad-spectrum+spf+46&qid=1597272300&s=hpc&sprefix=elta%2Chpc%2C196&sr=1-2">Elta MD</a>
          </div>
        </div>
      </div>
    );
  }
}