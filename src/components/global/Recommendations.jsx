import Page, { PageBody, PageHeader } from "../../layouts/Page";

const Recommendations = ({className}) => {
    const recommendations = [
        {
            name: "Jason Tang",
            relation: "Direct Project Manager",
            quote: "As a project manager you dream of having a developer like Ryan on your team. More than anything he is an amazing problem solver. When complex or unexpected things come up on projects, as they always do, Ryan will figure out how to make it work to keep the project on track. He’s not afraid to ask for clarifications or point out potential issues early to avoid disasters later on. He handles complex projects and clients with professionalism and dedication."
        },
        {
            name: "Mason Miller",
            relation: "Direct Project Manager",
            quote: "Ryan is an incredibly hardworking and smart developer. What I appreciate most about him is that he is always solution based. There is no task that can’t be solved with Ryan, he will always find a way. He is already an extremely excellent developer, but he is always eager new learn new languages and refine his craft in an ever changing landscape. Over the 4 years we worked together, Ryan delivered on countless tough projects and never showed any lack of enthusiasm towards project large or small. Overall I love working with Ryan and he delivers great work 100% of the time."
        },
        {
            name: "Daniel Jewel",
            relation: "Worked together in same department",
            quote: "One of the things that stands out most when it comes to Ryan is his drive to solve problems and find better ways to deliver a product. He has been thrown some unique projects that have required him to learn various frameworks on the fly. If you have a question or are at a road block, he loves helping find the answer with you. This in turn makes him a great teammate and a pleasant person to work with."
        },
        {
            name: "Matthew Moyle",
            relation: "Worked together in different departments",
            quote: "I can't say enough good things about Ryan. I worked closely with him for 5+ years at a full service ad agency in Salt Lake City. In that time we designed and developed dozens of websites and other digital projects. Ryan was constantly bringing new techniques and ideas to the table. Ryan has a great eye for detail and is great at solving problems quickly and creatively. He was a pleasure to work with and will be a great addition to any programing team."
        },
        {
            name: "Ryan Horrocks",
            relation: "Myself",
            quote: "I'm great!"
        },
    ];
    return (
        <Page className={className}>
            <PageHeader title="Recommendations" subtitle="Read the nice things people say about me" />
            <PageBody>
                <ul uk-accordion="">
                    {recommendations.map(r => <Recommendation key={r.name} {...r} />)}
                </ul>
            </PageBody>
        </Page>
    );
}

export default Recommendations;


const Recommendation = ({ name, relation, quote }) => (
    <li>
        <a className="uk-accordion-title" href="#a">
            <p className="uk-text-emphasis uk-margin-remove">{name}</p>
            <p className="uk-text-meta uk-margin-remove">{relation}</p>
        </a>
        <div className="uk-accordion-content">
            <p className="uk-text-small uk-margin-remove">
                {quote}
            </p>
        </div>
    </li>
)