export default function Page({ title, subtitle, header_side, removeBodyClass, children }) {
    return (

        <div className="uk-card uk-card-default uk-box-shadow-large">
            <PageHeader title={title} subtitle={subtitle} header_side={header_side} />
            <div className={removeBodyClass ? "" : "uk-card-body"}>
                {children}
            </div>
        </div>

    );
}

function PageHeader({title, subtitle, header_side}) {
    return (
        <div className="uk-card-header">
            <div className="uk-flex uk-flex-between uk-flex uk-flex-middle">
                <div>
                    <h3 className="uk-card-title uk-margin-remove-bottom">{title}</h3>
                    <h4 className="uk-text-meta uk-margin-remove">{subtitle}</h4>
                </div>
                {header_side &&
                    <div>
                        {header_side}
                    </div>
                }
            </div>
        </div>
    );
}