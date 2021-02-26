import React, { Component } from "react";
import fstrecpdf from "../../images/fstrecipes.pdf";
import axios from "axios";

export default class Recipes extends Component {
  constructor(props){
    super(props)

    this.state = {
      grantAccess:false
     
    };
  }

  componentDidMount(){
 
    axios.get("/api/checkaccess",{params:{
      meal: "Meal prep recipes/videos and favorite links"}})
      .then(access => {
      this.setState({ grantAccess: access.data[0]?true: false});
    });
  }


  render() {
    document.title = "Recipes";
    if (this.state.grantAccess)  {
    return (
      <div className="nibble-main">
        <div className="meal-title-wrapper">
          <div className="meal-title">Recipes</div>
          <div className="meal-text">
            All the recipes are easy to make and easy to customize to your
            tastes and preferences. Ready to eat your way to a healthier you?
            <br />
            <a href={fstrecpdf}>Click to download the recipes for the videos</a>
            <br /> <br />
            <strong>Video Recipes</strong>
          </div>
          <div className="inst-vids-container">
            <div className="recipe-vids-wrapper">
             
                <div className="recipe-vids">
                  <iframe
                    title="oats"
                   
                    src="https://drive.google.com/file/d/1sHVNGP0LCpoX8PuVqN2mL3l1LM7HyddR/preview" allow="fullscreen"
                  />
                  <h2>Oats</h2>
                </div>
                <div className="recipe-vids">
                  <iframe
                    title="Beans"
                   
                    src="https://drive.google.com/file/d/1-STConyxUyumAhb0N9BoUtiLbITZhfLh/preview"
                  />

                  <h2>Beans, quinoa, cillantro dressing</h2>
                </div>
                <div className="recipe-vids">
                  <iframe
                   
                    title="Minestrone"
                    src="https://drive.google.com/file/d/1l4WZl2TS9JVUnUxFhTnqAjNnzruKadgZ/preview" allow="fullscreen"
                  />
                  <h2>Minestrone/Cashew Parm</h2>
                </div>
             
              
                <div className="recipe-vids">
                  <iframe
                    
                    title="Pancakes"
                    src="https://drive.google.com/file/d/16TqDmhg95G578uLXTWHXRp49pzQ5KjhC/preview" allow="fullscreen"
                  />
                  <h2>Pancakes/Berry Sauce</h2>
                </div>
                <div className="recipe-vids">
                  <iframe
                    
                    title="Saute"
                    src="https://drive.google.com/file/d/1vrk6GrW7_LbdnDICL2ujKAHdB9WCsqcF/preview" allow="fullscreen"
                  />
                  <h2>Water Saute and Wraps</h2>
                </div>
                <div className="recipe-vids">
                  <iframe
                   
                    title="Fajita Soup"
                    src="https://drive.google.com/file/d/1JJh2rQtDMfbDQtbjsJko1Rxp3DXJS-E8/preview" allow="fullscreen"
                  />
                  <h2>Fajita Soup</h2>
                </div>
                <div className="recipe-vids">
                  <iframe
                    
                    title="Nice Cream"
                    src="https://drive.google.com/file/d/14z2G5JRI3Ytp8O4FDYJH-ai08ZFubbAh/preview" allow="fullscreen"
                  />
                  <h2>Nice Cream</h2>
                </div>
             
                <div className="recipe-vids">
                  <iframe
                   
                    title="The Smoothie"
                    src="https://drive.google.com/file/d/1wwWYNQoRvh6LTyI989-liikFxyzj03Be/preview" allow="fullscreen"
                  />
                  <h2>The Smoothie</h2>
                </div>
                <div className="recipe-vids">
                  <iframe
                    
                    title="Power Bowls"
                    src="https://drive.google.com/file/d/1UF_wvAnQCXdzMDilktlN8ukXaBVWiZ7Z/preview" allow="fullscreen"
                  />
                  <h2>Power Bowls</h2>
                </div>
                <div className="recipe-vids">
                  <iframe
                   
                    title="Creamy Vegie Soup"
                    src="https://drive.google.com/file/d/1DVUybESNVxYJ4E47ksnb0gQTZxyoaJri/preview" allow="fullscreen"
                  />
                  <h2>Creamy Vegie Soup</h2>
                </div>
                <div className="recipe-vids">
                  <iframe
                    
                    title="Fries"
                    src="https://drive.google.com/file/d/1eEZiP0MoOORuzNgYUs3MdlQvCMfLV3N4/preview" allow="fullscreen"
                  />
                  <h2>Fries</h2>
                </div>
             
                <div className="recipe-vids">
                  <iframe
                   
                    title="Smoke Tofuy Wrap"
                    src="https://drive.google.com/file/d/1biH4TAiRrfX9e4qrIqt-tPi4o2yZVv9f/preview" allow="fullscreen"
                  />
                  <h2>Smoked Tofu Wraps</h2>
                </div>
                <div className="recipe-vids">
                  <iframe
                   
                    title="Fried Rice"
                    src="https://drive.google.com/file/d/13K5HxriXPRksfivhFU0cH2KAXORd9q5I/preview" allow="fullscreen"
                  />
                  <h2>Fried Rice</h2>
                </div>
                <div className="recipe-vids">
                  <iframe
                   
                    title="Stir Fry"
                    src="https://drive.google.com/file/d/1ywY1JQuf6MaJVhp-SfOE9GI8xZh7oLFu/preview" allow="fullscreen"
                  />
                  <h2>Stir Fry</h2>
                </div>
                <div className="recipe-vids">
                  <iframe   title="Brownie Batter Hummus" src="https://drive.google.com/file/d/1DsmyA04BZKPcms3xDSdTgvTeeTL7kCWY/preview" allow="fullscreen"/>
                    <h2>Brownie Batter Hummus</h2>
                  
                </div>
              
            </div>
          </div>
          <div className="recipes-wrapper">
            <h1>Additional Recipes</h1>
            <br />
            <br />
            <div className="recipe-body">
              <div className="recipe-title">My go-to beans recipe:</div>
              <br />
              <ol>
                <li>3 cups dried pinto beans</li>
                <br />
                <li>1 onion (any type)</li>
                <br />
                <li>2-3 garlic cloves</li>
                <br />
                <li>1 quart vegetable broth</li>
                <br />
                <li>Salt to taste</li>
                <br />
              </ol>
              <br />
              <p>
                Soak your beans overnight. Rinse and drain the next day and
                place in an instant pot. Roughly chop the onion and add it to
                the pot. Smash the garlic cloves with the side of a large knife
                or roughly chop and add to the pot. Add the quart of veggie
                broth and additional water if needed to cover the beans by 1
                inch. Seal the instant pot and cook on high pressure for 40-50
                minutes. After the beans are cooked, salt to taste. I usually
                keep half of this recipe whole and blend the other half into
                refried beans for burritos and to top my masa cakes.
                Alternatively, you could cook in a large pot on the stove-top
                for 60-90 minutes until the beans are soft and add more water as
                needed. Or you could use a slow-cooker on high 8-10 hours.
              </p>
            </div>
            <br />
            <div className="recipe-body">
              <div className="recipe-title">
                My go-to onion ring recipe link
              </div>
              <br />

              <a href="https://nutritionfacts.org/recipe/baked-onion-rings/">
                Baked Onion Rings
              </a>
              <br />
              <p>
                My modifications: I use cajun seasoning instead of creating my
                own blend. I also just use white flour in place of the
                oat/chickpea flour used for the batter. I love to dip in vegan
                blue cheese dressing (sparingly!) or my cilantro lime dressing.
              </p>
            </div>
            <br />
            <div className="recipe-body">
              <div className="recipe-title">Tofu scramble meal prep</div>
              <br />

              <ol>
                <li>Fresh tortillas </li>
                <br />
                <li>
                  2 boxes organic smoke tofu or regular, firm organic tofu
                </li>
                <br />
                <li>½ cup unsweetened organic soy milk (or almond milk)</li>
                <br />
                <li>½ cup nutritional yeast</li>
                <br />
                <li>¾ cup salsa of choice</li>
                <br />
                <li>
                  2 fistfulls of greens of choice: spinach, collards, kale
                </li>
                <br />
                <li>Salt and pepper to taste</li>
                <br />
              </ol>
              <br />
              <br />
              <p>
                If using smoked tofu: cut outside off of tofu then crumble into
                medium sized pan with a lid. If using regular tofu: press tofu
                then crumble into pan (add some liquid smoke if desired). Heat
                to medium high. Place all other ingredients except greens in the
                pan and stir to combine. Top with greens and cover. Heat 3-5
                minutes until the greens have wilted. Stir again and take off
                heat.
              </p>
              <p>
                <br />
                To serve right away: heat tortillas in a flat plan while tofu is
                cooking, place tofu in the toasted tortilla, top with creamy
                tomatillo dressing, wrap and enjoy!
              </p>
              <br />
              <p>
                To store for later: After tofu has cooled slightly, place in a
                storage container and refrigerate. Will stay good for up to a
                week. When ready to enjoy simply toast your tortillas and heat
                the portion you want in a microwavable bowl for 2 minutes.
              </p>
            </div>
            <br />
            <div className="recipe-body">
              <div className="recipe-title">The Daily Smoothie</div>
              <br />
              This smoothie has over 500 calories and delivers 75% of
              nutritional needs. I divide it 6 ways with my family to give us a
              boost before we start the day.
              <br />
              <ol>
                <li>1 cup almond milk or water kefir</li>
                <br />
                <li>1 cup spinach</li>
                <br />
                <li>1 cup kale</li>
                <br />
                <li>1.5 cups frozen strawberries or raspberries</li>
                <br />
                <li>1 cup frozen blueberries</li>
                <br />
                <li>
                  1 scoop frozen orange juice concentrate (or .5 cup chopped
                  fresh pineapple)
                </li>
                <br />
                <li>1 small banana</li>
                <br />
                <li>2-3 T flax seeds</li>
                <br />
                <li>.5 inch piece of fresh turmeric</li>
                <br />
                <li>.25 tsp freshly cracked pepper</li>
                <br />
                <li>Water to desired consistency</li>
                <br />
              </ol>
              <br />
              NOTE: it will thicken as it sits due to all the fiber, so drink it
              right away or thin it out and stir when ready to drink. You may
              include these daily as well: Vitamin D drops (for those who live
              in colder climates and don’t see enough sun) Vitamin B5
              (pantothenic acid)--4 capsules cracked open and poured in (for my
              kids in puberty--helps to prevent acne problems and keep skin
              healthy) Information on Almond milk kefir (I do not make my own
              almond milk at home. I use unsweetened store bought almond milk
              with the kefir grains and agave.)
              <br />
              <a href="https://www.culturesforhealth.com/learn/milk-kefir/almond-milk-kefir/">
                Almond Milk Kefir
              </a>
              <br />
              Water kefir kit:
              <a href="https://www.culturesforhealth.com/learn/diy-kits/water-kefir-starter-kit/">
                Water kefir kit
              </a>
            </div>
            <br />
            <h2>Thanksgiving make ahead recipes</h2>
            <br />
            <div className="recipe-body">
              <div className="recipe-title">Mashed potatoes:</div>
              <br />
              <ol>
                <li>4 smallish potatoes steamed in instant pot</li>
                <br />
                <li>1/4 cup veggie broth</li>
                <br />
                <li>2-4 T coconut milk</li>
                <br />
                <li>.5 tsp fresh garlic salt</li>
                <br />
                <li>.5 tsp pepper</li>
                <br />
                <li>.5 tsp white pepper</li>
                <br />
                <li>.5 tsp montreal steak seasoning</li>
                <br />
              </ol>
              <br />
              Mashed all in -- skins on!
            </div>
            <br />
            <div className="recipe-body">
              <div className="recipe-title">Stuffing:</div>
              <br />
              <a href="https://www.recipetineats.com/best-stuffing-recipe/">
                Still the BEST Stuffing ever!
              </a>
              <br />I halved this recipe, used beyond meat hot sausage for the
              sausage and coconut milk in place of the cream. I used half a loaf
              of winco soft sourdough bread. This is a spicy stuffing. If you
              like more mild--reduce the amount of beyond meat hot sausage, use
              a different flavor or substitute mushrooms--I like the mushroom
              option best...but I LOVE mushrooms.
            </div>
            <br />
            <div className="recipe-body">
              <div className="recipe-title">Gravy:</div>
              <br />

              <a href="https://lovingitvegan.com/vegan-gravy/">
                Vegan Gravy, Rich and Flavorful!
              </a>
            </div>
            <br />
            <div className="recipe-body">
              <a href="https://blog.fatfreevegan.com/2006/12/sweet-potato-casserole-with-pecan.html">
                Sweet Potato Casserole with Pecan Topping
              </a>
            </div>
            <br />
            <div className="recipe-body">
              <div className="recipe-title">
                Mom’s Dutch apple pie (with Kandis’ mods):
              </div>
              <br />
              Crust:
              <ol>
                <li>1 ½ cup flour</li>
                <br />
                <li>½ tsp sugar</li>
                <br />
                <li>1 tsp salt</li>
                <br />
                <li>½ cup oil</li>
                <br />
                <li>2 Tbl soy milk</li>
                <br />
              </ol>
              Mix together and press into pie plate. <br />
              <br />
              Filling:
              <ol>
                <li>5 cups apples—peeled and sliced</li>
                <br />
                <li> ½ cup sugar</li>
                <br />
                <li>2 Tbl flour</li>
                <br />
                <li>½ tsp nutmeg</li>
                <br />
                <li>½ tsp cinnamon</li>
                <br />
                <li>13 drops lemon juice</li>
                <br />
              </ol>
              Mix dry ingredients and stir into sliced apples/lemon drops. Place
              in crust. <br /> <br />
              Topping:
              <ol>
                <li> ½ cup flour</li>
                <br />
                <li> ½ cup sugar</li>
                <br />
                <li>1 earth balance butter stick</li>
                <br />
              </ol>
              Cut butter into flour and sugar until crumbly. Sprinkle over pie.
              Bake in a brown paper grocery bag (stapled shut) at 375 for 1 hour
              and 30-45 min.
              <br />
              <br />
              Delicious served warm with coconut whip—even better cold the next
              day! I also baked up rhode's rolls and topped with garlic herb
              seasoning and orange roll icing.
            </div>
            <br />
            <h2>Additional Holiday Treats</h2>
            <br />
            <div className="recipe-body">
              <div className="recipe-title">Christmas Crack </div>
              (This is the treat I make for all the friends and neighbors for
              the Holidays): <br />
              <ol>
                <li>1 Large box rice chex cereal</li>
                <br />
                <li>1 Malt-o-meal bag of s'mores cereal</li>
                <br />
                <li>1 bag shredded coconut</li>
                <br />
                <li>2.5 c white sugar</li>
                <br />
                <li>2.5 c light corn syrup</li>
                <br />
                <li>2 sticks plant butter (1 cup smart balance)</li>
                <br />
                <li></li>
                <br />
              </ol>
              Divide cereal and coconut between 3 large heat-resistant bowls.
              Melt butter, sugar, corn syrup in a large pot. Bring to boil and
              boil for two minutes. Cool slightly, then pour evenly over 3
              bowls. Mix to evenly coat. Let cool slightly before placing in
              goodie bags. Recipe above yields 25, 5x9 inch treat bags. For
              Christmas neighbor treats to make 100 bags: 4 large chex 4 s'mores
              4 coconut 10 c sugar and corn syrup 8 sticks butter Will make 4
              batches of 25 bags each... Takes about 2 hours to make/label prior
              to delivery. Keeps good for 3-4 days in various temperatures...
              the perfect neighbor gift♡
            </div>
            <br />
            <a href="https://www.mydarlingvegan.com/cranberry-orange-pound-cake-and-thoughts-on-baby/">
              THE best cake to take to gatherings over the Holidays
            </a>
            <br />
            <br />
            <a href="https://www.melskitchencafe.com/soft-and-chewy-peanut-butter-caramel-popcorn/">
              Caramel corn that makes you forget how much you miss sweetened
              condensed milk
            </a>
            <br />
            <br />
            <a href="https://www.noracooks.com/vegan-blueberry-scones/">
              My Favorite Scones
            </a>
            <br />
            <br />
            <h2>Cool Weather Recipes</h2>
            <br />
            <a href="https://www.connoisseurusveg.com/vegan-french-dip-sandwiches/">
              FRENCH DIP SANDWICHES (I omit the oil and saute up some peppers
              and onion to top it off)
            </a>
            <br />
            <br />
            <a href="https://www.mydarlingvegan.com/broccoli-pepper-stir-fry-with-ginger-peanut-sauce/">
              Stir fry (the first one with tofu that I liked)
            </a>
            <br />
            <br />
            <a href="https://frommybowl.com/one-pot-mushroom-stroganoff/">
              Stroganoff (Sometimes I use tofutti sour cream substitute with
              some lemon juice in place of the cashew butter and I always add
              peas!):
            </a>
            <br />
            <br />
            <h2> Links to additional Resources:</h2>
            <br />
            <a href="https://nutritionstudies.org/recipes/sauce/">
              WFPB Sauces
            </a>
            <br />
            <a href="https://nutritionstudies.org/recipes/salad-dressing/">
              WFPB Dressings
            </a>
            <br />
            <br />
            These are a few of my favorite vegan food bloggers… if they don’t
            have what you’re craving, a quick google search paired with ‘vegan’
            will show you this whole wide world of options around you! Tread
            carefully--vegan does not equal healthy. But with a few
            modifications you can get a delicious and healthy meal. Sometimes
            you’re not looking for healthy--just a treat… those vegan recipes
            abound! I sign up for the newsletters from my favorite sites and
            then let them do the recipe creating that gets sent right to my
            inbox.
            <br />
            <br />
            <a href="https://chefchloe.com/recipes">Chef Chloe</a>
            <br />
            <a href="https://www.mydarlingvegan.com/">My Darling Vegan</a>
            <br />
            <a href="https://itdoesnttastelikechicken.com/">
              It doesn't taste like chicken
            </a>
            <br />
            <a href="https://www.noracooks.com/">Nora Cooks</a>
            <br />
            <a href="https://www.connoisseurusveg.com/">Connoisseurus Veg</a>
            <br />
            <a href="https://frommybowl.com/">From My Bowl</a>
            <br />
            <a href="https://nutritionstudies.org/recipes/">
              Nutrition Studies
            </a>
            <br />
            <a href="https://nutritionfacts.org/recipes/">Nutrition Facts</a>
            <br />
            <a href="https://www.pcrm.org/good-nutrition/plant-based-diets/recipes">
              Physicians Committee for Responsible Medicine Recipes
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="unauthorized">Unauthorized Access</div>; 
  }
  }
}
