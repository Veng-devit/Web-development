function Time() {
    let date = new Date().toLocaleTimeString();   //change to include only date not time
    return(
        <h2>
            {date}
        </h2>
    );
}

export default Time;