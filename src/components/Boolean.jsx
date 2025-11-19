import friend from "../assets/images/friend.png"

const Boolean = () => {


    const on = true
    const off = false
    const title = "THE EPIC OF RRR"
    const about = "RRR is a 2022 Telugu-language period action drama film directed by S.S. Rajamouli about two fictionalized revolutionaries in 1920s India, Alluri Sitarama Raju (played by Ram Charan) and Komaram Bheem (played by N.T. Rama Rao Jr.), who unite against British rule. The film is celebrated for its epic scale, over-the-top action sequences, and a central theme of friendship between the two leads. It received widespread critical acclaim, became a global phenomenon, and won an Oscar for Best Original Song for Naatu Naatu."

    const opt = false
    const optt = 7


    const value = undefined

    return (

        <>


            {on ? <div className="ternary">




                <img src={friend} alt="images" />

            </div> : <p style={{ textAlign: "center" }}>image unavailable</p>}


            {optt && <div style={{ marginTop: "10px" }} className="string">

                <div className="title">
                    <h2>{title}</h2>
                </div>

                <div className="about">
                    <h5>{about}</h5>
                </div>
            </div>}


            {value ?? <div style={{ marginTop: "10px" }} className="string">

                <div className="title">
                    <h2>{title}</h2>
                </div>

                <div className="about">
                    <h5>{about}</h5>
                </div>
            </div>}

        </>

    )


}
export default Boolean;