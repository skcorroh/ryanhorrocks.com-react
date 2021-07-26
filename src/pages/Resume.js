import { useState } from 'react';
import Page, { PageHeader, PageBody } from '../layouts/Page';
import ResumeEmbed from "../components/ResumeEmbed/ResumeEmbed";


const Resume = (props) => {
    const title = "Resume";
    const subtitle = "It sounds like resume, but it's spelt resume";

    const resume_url = "https://ryanhorrocks.com/Ryan_Horrocks_Resume.pdf"
    
    const [version, setVersion] = useState( 0 );
    return (
        <Page className="resume-page">
            <PageHeader title={title} subtitle={subtitle} header_side={(
                <>
                    <button className="uk-icon-button uk-icon uk-margin-small-right"
                        uk-icon="refresh"
                        uk-tooltip="Refresh the resume viewer" onClick={()=> setVersion(version+1) } aria-label="Reload Resume"></button>
                    <a className="uk-icon-button"
                        href="/Ryan_Horrocks_Resume.pdf"
                        uk-icon="icon: download"
                        download="Ryan Horrocks Resume"
                        uk-tooltip="Feel free to take it with you!" aria-label="Download Resume"><span hidden>Download Resume</span></a>
                </>
            )} />
            <PageBody bodyClass="">
                <ResumeEmbed url={`${resume_url}&v=${version}`} />
            </PageBody>
        </Page>
    );
}

export default Resume;