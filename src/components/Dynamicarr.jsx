const Dynamicarr = () => {


    const movie = { hero: "Ramcharan & ntr", heroine: "Alya butt", director: "Rajmouli", Producer: " D. V. V. Danayya" }

    const details = "RRR (Rise Roar Revolt) is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli. The story is set in the 1920s and is a fictional tale inspired by the lives of two real Indian revolutionaries, Alluri Sitarama Raju and Komaram Bheem. The film stars Ram Charan as Raju and Jr. NTR as Bheem, showcasing their journey from strangers to powerful allies fighting against British colonial rule. With grand visuals, intense action sequences, emotional storytelling, and a strong theme of friendship and patriotism, RRR became a global blockbuster. Its song  won international acclaim, including an Oscar for Best Original Song, making it one of the most significant Indian films in world cinema history."



    const story = "RRR is a fictional story set in British-ruled India, following two revolutionaries—Komaram Bheem, a tribal protector, and Alluri Sitarama Raju, a brave police officer working undercover for the freedom struggle. When a young tribal girl named Malli is kidnapped by the British governor, Bheem travels to Delhi to rescue her, hiding his identity. Raju is assigned to capture Bheem but the two meet unknowingly and become close friends. Their bond breaks when Raju arrests Bheem during a rescue attempt, though it is later revealed that Raju only joined the British police to gain weapons for his people’s revolt. Realizing the truth, Bheem rescues Raju from prison, and the two unite as true brothers. Together, they fight the British army, kill the governor, free Malli, and continue their separate missions for India’s freedom."

    return (
        <>
            <div className="array">
                <h2>RRR movies</h2>

                <h5>{movie.hero},{movie.heroine}</h5>
            </div>

            
            <div className="story">

                <h2 style={{marginBottom:"30px",color:"black"}}>Story</h2>

                <h4>{story}</h4>

            </div>

<div className="details">

                <h2 style={{marginBottom:"30px",color:"black"}}>Details</h2>

                <h4>{details}</h4>

            </div>



        </>




    )


}
export default Dynamicarr;