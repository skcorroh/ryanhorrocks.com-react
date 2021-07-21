import "./ResumeEmbed.css";

export default function ResumeEmbed({ url }) {
    return (
        <div className="ResumeEmbed">
            <iframe id="resume_embed" title={url}
                src={"https://docs.google.com/viewerng/viewer?embedded=true&url=" + url}
                frameBorder="0"></iframe>
        </div>

    );
}