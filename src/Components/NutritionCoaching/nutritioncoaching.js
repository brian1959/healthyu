import React, { Component } from "react";
import axios from "axios";

export default class NutritionCoaching extends Component {
    
render() {
    document.title='HealthyU2 | Nutrition Coaching';
    document.description = "Coaching about foods and habits that help to strengthen our immune system"   
       
    return(
      <div className="nibble-main">
        <div className="meal-title-wrapper">
          <div className="meal-title-image">
            <img src="../../images/coach.png" alt="Nutrition coach"/>
          </div>
          <div className="meal-title">Nutrition Coaching</div>
          <div className="meal-text">
            Ask a plant-based nutritionist!<br/>
          </div>
        </div>
        <div className="nut-group">
          <div className="nut-h">First 10 Minute Consultation: FREE</div>
          <div className="nut-text">
            In this consultation I will help you decide on the information and coaching that best suites your needs.<br/>
          </div>
          <div className="nut-h">One on One Video Chat: $45/hour or $25/half hour</div>
          <div className="nut-text">
            Online video calls happen on Tuesdays and Wednesdays between 10am-2pm and are great for those who need a coaching session during a lunch break.  <br/>
          </div>
          <div className="nut-h">In Home Coaching: $250 for a four hour session or $150 for a two hour session</div>
          <div className="nut-text">
            This fee includes us traveling to your home, a pantry review, going on a shopping trip with you and showing you how to create delicious plant-based meals that last all week, based on your personal preferences.  No evening appointments.<br/>
            <strong>Any travel time beyond 30 minutes will include an additional travel expense fee.</strong><br/>
          </div>
          <div className="nut-h">Marco Polo Coaching: $60 for either six 10 minute discussions or four 15 minute discussions, plus follow-up emails with links to pertinent information.</div>
          <div className="nut-text">
            Send me a polo with your questions on Monday and I'll reply on Tues or Wed and include an email with notes on the details of what we discussed, plus links to additional information.<br/>
            This option is best for:
            <ol>
            <li>1.  Those stuck in a nutrition rut who need a little extra guidance throughout the month to stay on track.</li><br/>
            <li>2.  Individual's with busy schedules who need more flexibility in my coaching services.</li></ol> <br/>
          </div>
          <div className="nut-dis">
            Email me at: healthy.u.two@gmail.com to set up your initial free consultation.<br/>
            <br/>
            Payment accepted through Paypal or Venmo.  Your appointment will be booked upon payment. <br/>
            <br/>
            <strong>IMPORTANT: Cancellation, rescheduling and refund policy:  We value your time and our time. For that reason, each appointment can be rescheduled one time if needed, but you must contact us at least 24 hours prior to your appointment so that we have adequate time to fill your missed slot.  No refunds for no-shows.  If you decide to cancel our appointment and give us at least 24 hours notice, you will receive a full refund.</strong>
          </div>
        </div>   
      </div>
        
    )

  }
}