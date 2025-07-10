import login from "./@login/page";

export default async function complex_dashboard_layout({ header, footer, sidebar, children,login}) { 
    let islogin = true;
    return islogin ? (
        <>
            <div>
                <h1>children { children}</h1>
                {header}
                {sidebar}
                {footer}
            </div>
        </>
    )   : (
        <>
            <div>
              {login}
            </div>
        </>
    );
}   