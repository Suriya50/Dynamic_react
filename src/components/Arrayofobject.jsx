
import ticket1 from "../assets/images/ticket1.png"
import ticket2 from "../assets/images/ticket5.png"
import ticket3 from "../assets/images/ticket3.png"
import ticket4 from "../assets/images/ticket6.png"



const Arrayofobject = () => {

    const ticket = "Ticket booking"

    const movietickets = [{ moviename: "RRR", img: ticket1, time: "9am to 12am", location: "sathyam cinema,chennai" },
    { moviename: "RRR", img: ticket2, time: "1pm to 4pm", location: "kamala cinemas,chennai" },
    { moviename: "RRR", img: ticket3, time: "6pm to 10pm", location: "Inox cinema,chennai" },
    { moviename: "RRR", img: ticket4, time: "11pm to 2.30pm", location: "PVR cinema,chennai"}
]


    return (
        <>

<div className="booking">
    <h2>{ticket}</h2>
</div>


            <div className='ticketmain'>



                {movietickets.map((e, i) => (
                    <div className='parenttickets' key={i}>



                        <div className='ticketimage'>
                            <img src={e.img} alt="" />
                        </div>

                        <div className='bookticket'>
                            <h3>Movie Name: {e.moviename}</h3>
                            <p>Location:{e.location}</p>
                            <p>Show Time:{e.time}</p>
                            <button style={{width:"120px",height:"35px",padding:"5px", marginTop:"4px",borderRadius:"8px",fontSize:"medium"}}>Book Now</button>
                        </div>
                    </div>
                ))}



            </div>
        </>
    )
}

export default Arrayofobject;