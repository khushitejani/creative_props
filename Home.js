import './App.css';
import { MdMarkEmailUnread, MdOutlineFacebook } from "react-icons/md";
import { IoLogoFacebook, IoLogoTwitter, IoLogoGoogleplus, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube, IoLogoWhatsapp, IoIosArrowRoundForward, IoMdPlayCircle, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiSun } from "react-icons/hi";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { PiQuotesFill } from "react-icons/pi";
import logo from './image/logo.svg';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import s1 from './image/s1.webp';
import s2 from './image/s2.webp';
import s3 from './image/s3.webp';
import aboutus from './image/aboutus.webp';
import h1 from './image/h1.webp';
import h2 from './image/h2.png';
import h3 from './image/h3.jpeg';
import r1 from './image/r1.png';
import r2 from './image/r2.png';
import r3 from './image/r3.png';
import r4 from './image/r4.png';
import r5 from './image/r5.png';
import r6 from './image/r6.png';
import whitelogo from './image/whitelogo.svg';

import { FaHandPointRight } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";



var mainmenu = ['Home', 'course', 'Activites', 'Blog', 'Know-us', 'Get-in-touch', 'Student-Zon'];
var creative_courses = [
    { img: require('./image/course1.webp'), name: 'full Stack' },
    { img: require('./image/course2.webp'), name: 'Data science' },
    { img: require('./image/course3.webp'), name: 'React native' },
    { img: require('./image/course4.webp'), name: 'Game development' },
    { img: require('./image/course5.webp'), name: 'C++' },
    { img: require('./image/course6.webp'), name: 'Node js' }
]

var main_slider = [require('./image/s1.webp'), require('./image/s2.webp'), require('./image/s4.webp')]

var student = [
    { img: require('./image/p1.png'), num: '14000+', text: 'HAPPY STUDENTS' },
    { img: require('./image/p2.png'), num: '10+', text: 'CERTIFICATION APPROVAL' },
    { img: require('./image/p3.png'), num: '70+', text: 'CERTIFIED TEACHERS' },
    { img: require('./image/p4.png'), num: '9000+', text: 'STUDENTS PLACED' },
]
var read_section = [
    { img: require('./image/r1.png'), title: "Industry Experts As Trainers", paregraph: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis." },
    { img: require('./image/r2.png'), title: "Latest Curriculum", paregraph: "We Provides latest curriculuuch a way that Students will get full knowledge within a short time." },
    { img: require('./image/r3.png'), title: "Latest Technology", paregraph: "We strive to let you have a solid foundational knowledge of technologies shaping the IT World today." },
    { img: require('./image/r4.png'), title: "Interview Assistance", paregraph: "At the end of each training,our tible technical questions technical questions you may be asked." },
    { img: require('./image/r5.png'), title: "Free Upgradation", paregraph: "We will be provided free upgradation for any newer version of the course you have." },
    { img: require('./image/r6.png'), title: "Lifetime Support", paregraph: "We will provide you lifetime support on aaaavfsll the courses you learned from us." }
]

var sliderlogo = [require('./image/l1.png'), require('./image/l2.png'), require('./image/l3.png'), require('./image/l4.png'), require('./image/l5.jpeg'), require('./image/l6.png'),]

var demanded_Course=['Best C++ Programming Langtitute','Advance Angular js training institute in surat','game design course in katargam','game design course in katargam','Web design training institute in katargam','Web design training institute in katargam','Android app development institute','Web design training institute in katargam','solidworks training institute in Mota Varachha','react js training institute in surat','Web design training institute in varachha','Creo parametrics training institute in varachha','Live game development training institute','Live game development training institute','Best nodejs training institute']






function App() {
    return (
        <div>
            {/* ================= start top header=============*/}
            <div className='top-menu'>
                <div className="container">
                    <div className="d_flex">
                        <div className="d_flex">
                            <div className="d_flex top-right">
                                <MdMarkEmailUnread></MdMarkEmailUnread>
                                <p className='top-text'>info@cdmi.in</p>
                            </div>
                            <div className="d_flex">
                                <HiSun></HiSun>
                                <p className='top-text'>Verify Certificate</p>
                            </div>
                        </div>
                        <div className='top-middile'>
                            <p>HAVE ANY QUESTION ? +91 90333 16003</p>
                        </div>
                        <div className='d_flex'>
                            <IoLogoFacebook className='top-icon'></IoLogoFacebook>
                            <IoLogoTwitter className='top-icon'></IoLogoTwitter>
                            <IoLogoGoogleplus className='top-icon'></IoLogoGoogleplus>
                            <IoLogoLinkedin className='top-icon'></IoLogoLinkedin>
                            <IoLogoInstagram className='top-icon'></IoLogoInstagram>
                            <IoLogoYoutube className='top-icon'></IoLogoYoutube>
                            <IoLogoWhatsapp className='top-icon'></IoLogoWhatsapp>
                        </div>
                    </div>
                </div>
            </div>

            {/*=======================End top header=============================*/}

            {/* =========================start navbar================*/}
            <div className='container'>
                <div className='d_flex main-menu'>
                    <div className='main-left'>
                        <img src={logo}></img>
                    </div>
                    <div className='main-right'>
                    <ul className='d_flex'>

                        {
                        mainmenu.map((ele, ind, arr) => {
                            return (
                            <li key={ind}>{ele}</li>
                            )

                        })
                        }
                    </ul>
                    </div>
                </div>
            </div>
            {/* ===================================End navbar=======================================*/}

           {/*=========================== start owl carousel==============  */}

                    <OwlCarousel className='owl-theme' items={1} autoplay autoplayTimeout={2000} loop margin={10} nav dots={false}>
                        {
                        main_slider.map((ele) => {
                            return (
                            <div class='item'>
                                <img src={ele}></img>
                            </div>
                            )
                        })
                        }
                    </OwlCarousel>
            {/* +==================End owl carousel======================= */}
            {/* ================ start  Creative courses================== */}
            <div className='spacery container offered'>
                <p className='offered-p'>CREATIVE COURCES
                    <div className='offered-div'></div>
                </p>
                <h1>OFFERED COURSES</h1>
                <div className='d_flex offered-div2'>

                    {
                        creative_courses.map((ele, ind) => {
                            return (
                                // <li key={ind}>{ele}</li>
                                <div key={ind}>
                                    <img src={ele.img}></img>
                                    <h2>{ele.name}</h2>
                                    <div className='d_flex offered-bottom'>
                                        <div>
                                            <i><IoMdStar></IoMdStar></i>
                                            <i><IoMdStar></IoMdStar></i>
                                            <i><IoMdStar></IoMdStar></i>
                                            <i><IoMdStar></IoMdStar></i>
                                            <i><IoMdStarHalf ></IoMdStarHalf ></i>
                                        </div>
                                        <button><a>Know more..!</a></button>
                                    </div>
                                </div>


                            )

                        })
                    }


                </div>

                <button className='offeref-last'><a>View ALL Courses<i><IoIosArrowRoundForward></IoIosArrowRoundForward></i></a></button>


            </div>
            {/* ================End creative courses====================== */}
           {/* ===================start about us============== */}
              <div className='aboutus'>
                <div className='about-left'>
                    <p className='about-p'>ABOUT US
                        <div className='about-div'></div>
                    </p>
                    <h3>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h3>
                    <p className='about-pp'>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                    <button className='about-last'><a>Enroll Now...!</a></button>
                </div>
                <div className='about-right'>
                    <img src={aboutus}></img>
                    <div className='about-div2'></div>
                    <i><IoMdPlayCircle></IoMdPlayCircle></i>
                </div>
            </div>
           {/* ===================End about us=========== */}


            {/* ============================start keybord================ */}

            <div className='keyboard speacery'>
                <div className='container2 d_flex'>

                    {
                        student.map((ele, ind) => {
                            return (
                                <div>
                                    <img src={ele.img}></img>
                                    <h1>{ele.num}+</h1>
                                    <h4>{ele.text}</h4>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            {/*======================= End keybord==================*/}

            {/* ====================start happy student================= */}
            <div className='container spacery d_flex happy'>
                <div className='happy-left'>
                    <p className='about-p'>HAPPY STUDENT
                        <div className='about-div'></div>
                    </p>
                    <h1>ALUMNI SPEAK</h1>
                    <div className='d_flex happy-flex'>
                        <i className='h-quotes'><PiQuotesFill></PiQuotesFill></i>
                        <div className='h-flex-right'>
                            <i><IoIosArrowBack ></IoIosArrowBack></i>
                            <i><IoIosArrowForward ></IoIosArrowForward></i>
                        </div>
                    </div>
                    <p>web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to.</p>
                    <div className='d_flex happy-bottom'>
                        <div className='happy-b1'>
                            <img src={h3}></img>
                        </div>
                        <div className='happy-b2'>
                            <h4>shruti dhameliya</h4>
                            <h3 style={{ fontStyle: 'italic', color: 'grey', fontSize: '18px' }}><font style={{ color: 'orange', fontStyle: 'italic' }}>full stack devloper</font>@Artbees solution</h3>
                        </div>
                    </div>
                </div>
                <div className='happy-right'>
                    <img src={h1} className='happy1'></img>
                    <img src={h2} className='happy2'></img>
                </div>
            </div>
            {/* ================End happy student==================== */}


            {/* =========================read our section==================*/}

            <div className='read-bg'>
                <div className='pd-y container read'>
                    <p className='read-head'>Read Our Difference
                        <div className='line'></div>
                    </p>
                    <h1>Why Choose Creative</h1>

                    <div className='d_flex flex_wrap read-img'>
                        {
                            read_section.map((ele, ind) => {
                                return (
                                    <div className='read-1 read4'>
                                        <img src={ele.img}></img>

                                        <h3>{ele.title}</h3>
                                        <p>{ele.paregraph}</p>
                                    </div>
                                )
                            })

                        }


                    </div>

                </div>
            </div>



            {/* =====================End read our section==================*/}

            {/*======================== start shruti slider================= */}
            <div className='student-place  container'>
                <p className='student-place-p'>STUDENT PLACEMENT
                    <div className='student-place-div'></div>
                </p>
                <h1>OUR RECRUITMENT PARTNERS</h1>

                 <OwlCarousel className='owl-theme' items={6} className='slider2' loop margin={10} >
                    {
                        sliderlogo.map((ele) => {
                            return (
                                <div class='item'>
                                    <img src={ele}></img>
                                </div>
                            )
                        })
                    }
                </OwlCarousel>


              

                <h2>Our Demanded Course -</h2>
                <div className='flex_wrap ancore'>
                    {
                        demanded_Course.map((ele,ind)=>{
                            return(
                                <a href=''>{ele}</a>
                            )
                        })
                    }
                 
                </div>
                <h3>Show More</h3>
            </div>
            {/*=================================End shruti slider================= */}

            {/*+======================= start footer==================== */}

            <div className=' footer mt-5'>
                <div className=' container  footer2'>
                    <div className='footer-left'>
                        <img src={whitelogo}></img>
                        <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                        <h3>FOLLOW US ON</h3>
                        <div className='footer_flex'>
                            <IoLogoFacebook className='footer-icon'></IoLogoFacebook>
                            <IoLogoTwitter className='footer-icon'></IoLogoTwitter>
                            <IoLogoGoogleplus className='footer-icon'></IoLogoGoogleplus>
                            <IoLogoLinkedin className='footer-icon'></IoLogoLinkedin>
                            <IoLogoInstagram className='footer-icon'></IoLogoInstagram>
                            <IoLogoYoutube className='footer-icon'></IoLogoYoutube>
                            <IoLogoWhatsapp className='footer-icon'></IoLogoWhatsapp>
                        </div>
                    </div>
                    <div className='footer-center'>
                        <h3>FEATURE LINKS</h3>
                        <ul>
                            <li><i><FaHandPointRight ></FaHandPointRight></i>About Us</li>
                            <li><i><FaHandPointRight ></FaHandPointRight></i>Blogs</li>
                            <li><i><FaHandPointRight ></FaHandPointRight></i>Join Us</li>
                            <li><i><FaHandPointRight ></FaHandPointRight></i>Company Logins</li>
                            <li><i><FaHandPointRight ></FaHandPointRight></i>Certificate verification</li>
                        </ul>
                    </div>
                    <div className='footer-right'>
                        <h3>CONTACT US</h3>
                        <h4>HEAD OFFICE - YOGICHOWK</h4>
                        <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
                        <p>Mo :<font style={{ color: '#EAA800' }}> +91 90333 16003</font></p>
                        <h3 style={{ color: '#EAA800' }}>OTHER BRANCHES</h3>
                        <ul>
                            <li><i><BiSolidBank ></BiSolidBank></i>Katargam</li>
                            <li><i><BiSolidBank ></BiSolidBank></i>Motavarachha</li>
                            <li><i><BiSolidBank ></BiSolidBank></i>Adajan</li>
                            <li><i><BiSolidBank ></BiSolidBank></i>Navasari</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='lastsec'>
                <p className='container'>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
            </div>

            {/*=======================End footer=========================================*/}

        </div>


    );
}

export default App;
