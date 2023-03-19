import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'

function App() {
    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()])

    const items = [{name: "Creative", image: "creative"},
        {name: "Community", image: "community"},
        {name: "Meme maker", image: "meme-maker"},
        {name: "Data Science", image: "data-science"},
        {name: "Developer", image: "developer"},
        {name: "West Ham", image: "west-ham"},
        {name: "Developer Relations", image: "developer-relations"},
        {name: "Finance", image: "finance"},
        {name: "Threadooor", image: "threadooor"},
        {name: "Founder", image: "founder"},
        {name: "Business Development", image: "business-development"},
        {name: "Journalism", image: "journalist"},
        {name: "Marketing", image: "marketing"},
        {name: "Lobster", image: "lobster"},
        {name: "Math", image: "math"},
        {name: "Meme maker", image: "meme-maker"},
        {name: "Operations", image: "operations"},
        {name: "Product", image: "product"},
        {name: "Project management", image: "project-management"},
    ]

    return (
        <section className="h-screen flex flex-col justify-between">
            <div className={"flex flex-col justify-items-stretch"}>
                <header className="p-8">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <div className={"text-xs place-content-center"}>
                        <p className={"uppercase text-center"}>Blossom Land ~ soon™</p>
                    </div>
                </header>

                <div className={"text-xs h-24 w-full mx-auto text-center dotted-01"}>
                    <a target={'_blank'} className={"cursor-pointer"} rel="noreferrer noopener"
                       href={"https://t.me/+M7kbmbbbdnI2NDM0"}>
                        <p className={"pt-8"}>Get notifications: </p>
                        <p className={"py-2 uppercase"}>https://t.me/+M7kbmbbbdnI2NDM0</p></a>
                </div>

                <article>
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container">
                            {items.map((item, i) => (
                                <div key={i} className="embla__slide">
                                    <div className={"w-96 mx-auto"}>
                                        <img className={"mx-auto w-96"} src={`../img/skills/${item.image}.jpg`}
                                             alt={item.name}/>
                                        <div
                                            className={"text-xs mx-auto w-96 py-8 text-center uppercase"}>{item.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
            </div>


        </section>
    );
}

export default App;
