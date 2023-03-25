import React from 'react';

const DownloadButton = props => {

    const download = e => {
        console.log(e.child);
        fetch(e.target.href, {
            method: "GET",
            headers: {}
        })
            .then(response => {
            response.arrayBuffer().then(function(buffer) {
                const url = window.URL.createObjectURL(new Blob([buffer]));
                const link = document.createElement("a");
                console.log(link);
                link.href = url;
                link.setAttribute("download", "image.jpg"); //or any other extension
                document.body.appendChild(link);
                link.click();
            });
            })
            .catch(err => {
            console.log(err);
            });
    };

    return (
        <a href={props.src} download ><i class="fa-solid fa-download"></i></a>
    )
  }
  export default DownloadButton;


