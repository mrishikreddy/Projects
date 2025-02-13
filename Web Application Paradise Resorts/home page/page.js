import styles from "./wahome.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


// For FontAwesome Regular or Solid icons
import { faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// For FontAwesome Brands icons
import { faGithub, faLinkedin, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

export default function wahome()
{
    return(
        <>
        <div className={styles.fdiv}>
    <table className={styles.nav}>
		<thead>
	<tr><th><img src="/logo.jpg" style={{ width: '55%', height: '50px', marginTop: '-10px' }}/></th>
	<th><a href="#home">Home</a></th>
	<th><a href="#Rooms" style={{ paddingBottom: '13.4%' }}>Rooms</a></th>
	<th><a href="#Act" style={{ paddingBottom: '10.9%' }}>Activites</a></th>
	<th><a href="#Eve" style={{ paddingBottom: '13.8%' }}>Events</a></th>
	<th><a href="" style={{ paddingBottom: '13.4%' }}>Gallery</a></th>
	<th><a href="" style={{ paddingBottom: '13.4%' }}>Pricing</a></th>
	</tr>
	</thead>
    </table>
</div>
<br id="home"/><br/><br/>		
<div className={styles.hm} >
<h1 >Welcome to Paradise - Your Gateway to Maldivian Bliss</h1>
<img src="/img2.jpg" className={styles.res}/>
<br/><br/>
<p className={styles.fs}>&emsp;&emsp;&emsp; Discover a world of unparalleled luxury and natural beauty at Paradise Resort, 
nestled on the enchanting Panama Island in the heart of the Maldives. Just 80 kilometers away 
from the bustling capital of Malé, our resort offers a secluded haven where you can unwind, 
rejuvenate, and immerse yourself in the tropical paradise that is the Maldives.</p>
<p className={styles.fs}>
&emsp;&emsp;&emsp;Panama Island serves as the perfect backdrop for your dream getaway, providing pristine beaches, 
crystal-clear turquoise waters, and lush greenery that will leave you awe-inspired from the moment you arrive. 
Whether you're seeking a romantic retreat, a family adventure, or a tranquil solo expedition, Paradise Resort has 
meticulously crafted packages that cater to your every desire.</p>
</div>
<br id="Rooms"/><br/><br/>
 <div className={styles.vv}>
 	<h1>Maldivian Paradise Suites</h1><br/>
&emsp;&emsp;&emsp;Discover a world of refined indulgence within our resort's exquisite accommodations.
 From the idyllic charm of our Beach Villas and the captivating allure of our Water Villas suspended over the lagoon,
 to the spacious elegance of our Family Suites and the tranquil retreat offered by our Garden Villas, 
each room type provides a unique and luxurious experience. 
Immerse yourself in comfort, surrounded by breathtaking natural beauty, 
as you create lasting memories in your chosen haven.
<br/>
<br/>
<br/>
<br/>



 	<div className={styles.sd}>
        	<img src="/bv.jpg" className={styles.idi}/>
			<div className={styles.toCenter}>Beach Villas</div>
        	
		<br/>
                <p style={{ fontSize: '30px', color: 'white', paddingLeft: '37%' }}>4.7 <FontAwesomeIcon icon={faStar} width="20px" color="gold"/></p>
		<p style={{ paddingLeft: '15%', color: 'white' }}>25,000 &#8377; per night</p>
		<button className={styles.botn}>Check availability</button>
        </div>
        <div className={styles.sd}>
        	<img src="/wv.jpg" className={styles.idi}/>
		<div className={styles.toCenter}>Water Villas</div>
		<br/>
                <p style={{ fontSize: '30px', color: 'white', paddingLeft: '37%' }}>4.5 <FontAwesomeIcon icon={faStar} width="20px" color="gold"/></p>
		<p style={{ paddingLeft: '15%', color: 'white' }}>30,000 &#8377; per night</p>
		<button className={styles.botn}>Check availability</button>
        </div>
		<div className={styles.sd}>
		<img src="/fso.jpeg" className={styles.idi}/>
		<div className={styles.toCenter}>
		Family Suites</div>
                <br/>
                <p style={{ fontSize: '30px', color: 'white', paddingLeft: '37%' }}>4.6 <FontAwesomeIcon icon={faStar} width="20px" color="gold"/></p>
		<p style={{ paddingLeft: '15%', color: 'white' }}>60,000 &#8377; per night</p>
		<button className={styles.botn}>Check availability</button>
        </div>
        	<div className={styles.sd}>
		<img src="/gvo.jpeg" className={styles.idi}/>
		<div className={styles.toCenter}>Garden Villas</div>
		
		<br/>
                <p style={{ fontSize: '30px', color: 'white', paddingLeft: '37%' }}>4.3 <FontAwesomeIcon icon={faStar} width="20px" color="gold"/></p>
		<p style={{ paddingLeft: '15%', color: 'white' }}>15,000 &#8377; per night</p>
		<button className={styles.botn}>Check availability</button>
        </div>
 </div>
<br/>
<br/>
<br/>
<br/>
 <br id="Act"/><br/><br/><br/>	
 <div className={styles.hmp}>
<h1>Activities Unleashed: Your Gateway to Exhilaration</h1><br/>
<p className={styles.fs}>&emsp;&emsp;&emsp;Nestled in the captivating beauty of the Maldives,
 our resort offers a spectrum of exhilarating experiences. From the serenity of 
swimming in the crystal-clear waters to the thrill of boating and water jet adventures, 
every moment becomes a cherished memory. For the adventurous souls, boat parachuting provides
an unforgettable rush. We take pride in extending warm welcomes to families and newlyweds alike, 
offering enticing discounts to children and recently married couples. Discover a world of wonder
 where unforgettable moments and unbeatable offers converge, inviting you to embrace the magic of the
Maldives in every way.
</p><br/><br/>
	      <div className={styles.sdm}>
        	<img src="/para.webp" className={styles.imii}/>
        	<b style={{ color: '#66D3FA'}}>boat parachuting</b>
		
        </div>
                <div className={styles.sdm}>
        	<img src="/swim.jpg" className={styles.imii}/>
		<b style={{ color: '#66D3FA' }}>Swimming</b>
        </div>
		<div className={styles.sdm}>
		<img src="/boat.jpg" className={styles.imii}/>
		<b style={{ color: '#66D3FA' }}>Boating</b>
        </div>
        	<div className={styles.sdm}>
		<img src="/surf.webp" className={styles.imii}/>
		<b style={{ color: '#66D3FA' }}>Surfing</b>
        </div>	
</div>	
<br/>
<br/>
<br/>
<br/><br/>
<br/>
<br/>
<br/>
<br id="Eve"/><br/><br/><br/>
<br/>
<div className={styles.hmm} >
<br/><h1 style={{ margin: '5%' }}>Experience the Ultimate Events</h1>
<br/><br/><br/><br/><br/>
<p className={styles.fsmm}>&emsp;&emsp;&emsp;Welcome to our exquisite Maldivian resort, 
where an array of captivating events awaits to elevate your tropical escape.
 Immerse yourself in a vibrant tapestry of experiences as you explore the paradise
 that surrounds you. From serene morning yoga sessions by the lagoon to heart-pounding
 water sports adventures that reveal the underwater wonders, there's something for every
 soul seeking adventure or relaxation. Delve into the rich Maldivian culture through traditional
 dance performances and local artisan markets, offering a glimpse of authenticity in every interaction.
 But that's not all – the highlight of our event calendar includes the renowned Pro DJ Night and dance 
parties that set the night on fire. Under the starlit sky, experience electrifying beats, dazzling light
 displays, and an oceanfront dance floor that invites you to move to the rhythm of paradise. 
These events, alongside other popular gatherings, guarantee an unforgettable stay, 
creating cherished memories of your Maldives getaway.<br/><br/>
&emsp;&emsp;&emsp;
As the sun dips below the horizon, our resort transforms into a
 magical realm where each evening unveils a new facet of paradise.
 From intimate sunset cruises that paint the sky in mesmerizing hues
 to captivating cultural showcases that celebrate the Maldivian heritage, 
the night becomes an enchanting canvas of possibilities. Indulge in exquisite
 beachfront dining experiences that tickle your taste buds with a symphony of
 flavors, or simply unwind by the beachside bonfire, sharing stories under the 
starry expanse. Every night is an invitation to embrace
 the beauty of the Maldives, creating memories that illuminate your heart long 
after your journey ends.</p>
</div>
<br/>
<br/>
<br/>
<div className={styles.butt}>
<button className={styles.but}>Know More</button>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/><br/><br/><br/>


<br id="bottom"/>
<p style={{ textAlign: 'center', fontSize: '22px' }}><b>Book your slice of paradise today and experience the Maldives like never before.</b></p>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<div className={styles.bd}>
<br/>
<p style={{ textAlign: 'center' }}>Paradise Resorts is owned by MRR Pvt.Ltd.All Rights Reserved<sup></sup>&copy;</p>
<br/><br/><br/>
<table className={styles.bt}>
	<thead>
<tr><th><a href="#bottom">About Us</a></th>
<th style={{ paddingLeft: '25%' }}><a href="#bottom">Coustmer Care</a></th>
<th><a href="#bottom">License</a></th></tr>
<tr><th><a href="#bottom">News</a></th>
<th style={{ paddingLeft: '25%' }}><a href="#bottom">Privacy Policy</a></th>
<th><a href="#bottom">Terms & Conditions</a></th></tr>
</thead>
</table><br/><br/>
<table className={styles.info}>
  <thead>
    <tr>
      <th>
        <a 
          href="mailto:malerishikreddy@gmail.com" 
          target="_blank"
        >
		  <FontAwesomeIcon icon={faEnvelope} width="15%"/>
        </a>
      </th>
      <th><a href="https://github.com/MRishikReddy" target="_blank"><FontAwesomeIcon icon={faGithub} width="15%"/></a></th>
      <th><a href="https://www.linkedin.com/in/rishikreddym/" target="_blank"><FontAwesomeIcon icon={faLinkedin} width="15%" /></a></th>
      <th><a href="https://www.instagram.com/rishikreddy7?igsh=MWdxdTRlMW95bWYwcg==" target="_blank"><FontAwesomeIcon icon={faInstagram} width="15%" /></a></th>
      <th><a href="https://www.facebook.com/share/1A6jkumtxw/" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} width="15%" /> </a></th>
    </tr>
  </thead>
</table>

</div>
</>  )
}