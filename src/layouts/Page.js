const Page = ({ children, className }) => {
    return (
        <div className={ (className || "") + " uk-card uk-card-default uk-box-shadow-large"}>
            {children}
        </div>
    );
}


const PageHeader = ({ title, subtitle, header_side }) => {
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


const PageBody = ({ bodyClass = "uk-card-body", children }) => {
    return (
        <div className={bodyClass}>
            {children}
        </div>
    );
}

const PageFooter = ({ children }) => {
    return (
        <div className="uk-card-footer">
            {children}
        </div>
    );
}

export { Page as default, PageHeader, PageBody, PageFooter }