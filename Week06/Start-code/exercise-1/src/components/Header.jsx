import PN from "../assets/pn-logo.png";


function header({batchName}){
    return(
        <div id="header">
            <img src={PN} alt="" />
            <h1>Students results for {batchName}</h1>
        </div>
    );
}

export default header;