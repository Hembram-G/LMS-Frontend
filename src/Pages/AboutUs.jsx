import aboutMainImage from "../Assets/images/aboutMainImage.png";
import apj from "../Assets/images/apj.png";
import billGates from "../Assets/images/billGates.png";
import einstein from "../Assets/images/einstein.png";
import nelsonMandela from "../Assets/images/nelsonMandela.png";
import steveJobs from "../Assets/images/steveJobs.png"
import HomeLayout from "../Layouts/HomeLayout";
function AboutUs(){
    return (
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                      <h1 className="text-5xl text-yellow-500 font-semibold">
                        Affordale And Quality Education
                      </h1>
                      <p className="text-xl text-gray-200">
                        Our goal is to provide the affordable and quality education to the world.
                        We are providing the platform for the aspiring teacher and students to share their skills, creativity and knowledge to each other to empower and contribute in the growth and wellness of mankid.
                      </p>
                    </section>

                    <div className="w-1/2">
                        <img
                           id="test1"
                           style={{
                               filter: "drop-shadow(0px 10px 10px rgb(0,0,0));"
                           }}
                           alt="about main image"
                           className="drop-shadow-2xl"
                           src={aboutMainImage} 
                        />
                    </div>
                </div>

                <div className="carousel w-1/2 my-16 m-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                    <img
                    src={steveJobs}
                    className="w-40 rounded-full border-2 border-gray-400" />
                    <p>
                       {"Innovation distinguishes between a leader and a follower."}
                    </p>
                    <h3>~ Steve Jobs</h3>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>    
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                    <img
                    src={billGates}
                    className="w-40 rounded-full border-2 border-gray-400" />
                    <p>
                       {"Don’t compare yourself with anyone in this world. If you do so, you are insulting yourself."}
                    </p>
                    <h3>~ Bill Gates</h3>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                    <img
                    src={apj}
                    className="w-40 rounded-full border-2 border-gray-400" />
                    <p>
                       {"The best brains of the nation may be found on the last benches of the classroom."}
                    </p>
                    <h3>~ A.P.J. Abdul Kalam</h3>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                    <img
                    src={einstein}
                    className="w-40 rounded-full border-2 border-gray-400" />
                    <p>
                       {"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world."}
                    </p>
                    <h3>~ Albert Eistein</h3>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                    <img
                    src={nelsonMandela}
                    className="w-40 rounded-full border-2 border-gray-400"  />
                    <p>
                       {"Education is the most powerful weapon which you can use to change the world."}
                    </p>
                    <h3>~ Nelson Mandela</h3>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                    </div>
                </div>
                
            </div>
        </HomeLayout>

    )
  
}


export default AboutUs;