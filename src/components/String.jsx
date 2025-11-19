

import banner from "../assets/images/rrrbanner.png"
import hero1 from "../assets/images/hero1.png"
import hero2 from "../assets/images/hero2.png"


const String = () => {

    const title = "THE EPIC OF RRR"
    const about = "RRR is a 2022 Telugu-language period action drama film directed by S.S. Rajamouli about two fictionalized revolutionaries in 1920s India, Alluri Sitarama Raju (played by Ram Charan) and Komaram Bheem (played by N.T. Rama Rao Jr.), who unite against British rule. The film is celebrated for its epic scale, over-the-top action sequences, and a central theme of friendship between the two leads. It received widespread critical acclaim, became a global phenomenon, and won an Oscar for Best Original Song for Naatu Naatu."
    const name1 = "RAM CHARAN"
    const name2 ="JR.NTR"
    return (

        <>


            <div className="parent">
                <div className="banner">
                    <img src={banner} alt="images" />
                </div>
            </div>

            <section>

            <div className="string">

                <div className="title">
                    <h2>{title}</h2>
                </div>

                <div className="about">
                    <h5>{about}</h5>
                </div>

                <div>
                    <h2 style={{ padding: "5px", marginTop: "8px" }}>{name1}</h2>
                </div>

                <div className="heroimg">
                    <img src={hero1} alt="images" />
                </div>


                <div className="title">
                    <h2>{title}</h2>
                </div>

                <div className="about">
                    <h5>{about}</h5>
                </div>


                <div>
                    <h2 style={{ padding: "5px", marginTop: "8px" }}>{name2}</h2>
                </div>

                <div className="heroimg">
                    <img src={hero2} alt="images" />
                </div>





            </div>
            </section>









        </>

    )


}
export default String;