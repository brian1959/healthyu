import React, {useState, useEffect, useRef} from "react";
import PayPal from '../PayPal';
import Login from '../Login/login';

export default function MealType(props) {

const ref = useRef();
// State for our checkout button
const [checkout, setCheckOut] = useState(false);
// Call hook passing in the ref and a function to call on outside click
useOnClickOutside(ref, () => setCheckOut(false)); 

function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = event => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
  
          handler(event);
        };
  
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
  
        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }

return (
  
    <div className="prep-box">
 <img className="prep-images"
        src={props.mealtypeImage}
        alt={props.mealtypeName}
    /><br/>
    <div className="prep-text">
        <h2>{props.mealtypeName}</h2>
        <p>{props.mealtypeBody}</p>
    </div><br/>
    <div className="cst">
        <center>{props.mealtypeTcost}</center>
    </div><br/>
    <div className="chk-out" ref={ref}>
        { (props.mealtypeCost <1? (<button className="login-button"> <a href={`/#/${props.mealtypeLink}`}>Learn More</a></button>):(
        checkout ? ( <PayPal desc={props.mealtypeName} amnt={props.mealtypeCost} items={[""]}/>
        ):(props.loggedIn?(
            <button className="login-button" onClick={()=> {setCheckOut(true)}}>Purchase</button>
        ):(<Login button/>) ) ) ) }
    </div>
    </div>
    )
}
