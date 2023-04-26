const { Movie, Scene } = require('json2video-sdk');

async function main(){
  let movie = new Movie;

  movie.setAPIKey("Hkrf4UF5S17YD2vWLNDyx9eMi63T9yub2USh2zmX");

  movie.set("comment", "Introducing the Slakenet Business Suite");
  movie.set("resolution", "full-hd");
  movie.set("quality", "high");
  movie.set("draft", false);

  // Create the scenes of the movie

  // Create SCENE 1
  let scene1 = new Scene;
  scene1.addElement({
    "type": "video",
    "src": "https://player.vimeo.com/external/451919865.sd.mp4?s=b80a74b12959c7d65f7e0bf94b8f835b192ead03&profile_id=164&oauth2_token_id=57447761",
  });
  scene1.addElement({
    "type": "text",
    "style": "008",
    "text": "Ads are usually annoying",
    "settings": {
      "font-size": "10vw",
      "text-shadow": "3px 3px black"
    }
  });
  scene1.addElement({
    "type": "voice",
    "text": "We've all been there - scrolling through our social media feeds, bombarded with generic ads that don't interest us at all. But what if there was a way to personalize those ads, to make them relevant and engaging?",
    "voice": "en-NG-EzinneNeural",
    "start": 1
  });
  movie.addScene(scene1);

  // Create SCENE 2
  let scene2 = new Scene;
  scene2.addElement({
    "type": "video",
    "src": "https://player.vimeo.com/external/539041039.sd.mp4?s=bf0324761cda43078dd68f7f8a98c39627349d21&profile_id=164&oauth2_token_id=57447761",
    "duration": 6
  });
  scene2.addElement({
    "type": "component",
    "component": "basic/001",
    "width": 920,
    "x": 960,
    "y": 160,
    "settings": {
      "headline": {
        "text": "Introducing Slakenet Business Suite",
        "color": "white",
        "font-size": "6vw"
      },
      "body": {
        "text": [
          "state-of-the-art technology to generate personalized ads that resonate with your target audience",
          "Rewards people with internet access for their data"
        ],
        "color": "white",
        "font-size": "4vw"
      },
      "card": {
        "background": "rgb(0,0,0, 0.3)",
        "padding": "4vw"
      }
    }
  });
  scene2.addElement({
    "type": "voice",
    "text": "Introducing Slakenet Business Suite - the platform that uses state-of-the-art technology to analyze customer data and generate personalized ads that resonate with your target audience. And the best part? We're very cheap, almost free.",
    "voice": "en-NG-EzinneNeural",
    "start": 1
  });
  movie.addScene(scene2);

  // Create SCENE 3
  let scene3 = new Scene;
  scene3.addElement({
    "type": "video",
    "src": "https://player.vimeo.com/external/562638295.sd.mp4?s=ed5f30580cfde44ecee638581446f5e61c2690eb&profile_id=164&oauth2_token_id=57447761",
    "muted": true
  });
  scene3.addElement({
    "type": "component",
    "component": "basic/001",
    "width": 920,
    "x": 40,
    "y": 240,
    "settings": {
      "headline": {
        "text": "Powered by AI, state-of-the-art tech, Google awarded tools and powerful APIs",
        "color": "white",
        "font-size": "6vw"
      },
      "body": {
        "text": [
          "Groundbreaking",
          "100% personalized and tailored",
          "Highly Engagine and converting!",
          "Use in organic marketing"
        ],
        "color": "white",
        "font-size": "4vw"
      },
      "card": {
        "background": "rgb(0,0,0, 0.3)",
        "padding": "2vw"
      }
    }
  });
  scene3.addElement({
    "type": "voice",
    "text": "Our platform is powered by AI, meaning your ads are 100% personalized and tailored to your customers' interests. You can target specific personas - you can create ads that speak to them in their language, best time to be approached, etc, making the experience even more engaging!",
    "voice": "en-NG-EzinneNeural",
    "start": 1
  });
  movie.addScene(scene3);

  //Create Scene 4
  let scene4 = new Scene;
  scene4.set("background-color", "#000000");
  scene4.addElement({
    "type": "video",
    "src": "https://player.vimeo.com/external/540384605.sd.mp4?s=a5e840a936d41cb50bc96b09b4553ec6325c1b35&profile_id=164&oauth2_token_id=57447761",
  });
  scene4.addElement({
    "type": "text",
    "style": "001",
    "text": "COMING SOON",
    "settings": {
      "font-family": "Bebas Neue",
      "font-weight": "400",
      "font-size": "30vw",
      "vertical-align": "bottom",
      "horizontal-align": "left",
      "text-align": "left",
      "opacity": "0.5",
      "line-height": "25vw"
    },
    "width": 960,
    "x": 30,
    "cache": false
  });
  scene4.addElement({
    "type": "component",
    "component": "basic/100",
    "settings": {
      "box": {
        "initial_left": "100%",
        "final_left": "50%",
        "background": "#0F132D",
        "box-shadow": "none",
        "duration": 2000
      }
    }
  });
  scene4.addElement({
    "type": "text",
    "style": "001",
    "text": "agenda",
    "settings": {
      "font-family": "Bebas Neue",
      "font-weight": "400",
      "color": "black",
      "font-size": "10vw"
    },
    "x": 960,
    "y": 40,
    "width": 960,
    "height": 200
  });
  scene4.addElement({
    "type": "component",
    "component": "basic/125",
    "settings": {
      "table": {
        "width": "100vw",
        "font-size": "4vw",
        "font-family": "Lato",
        "font-weight": "300",
        "border-spacing": "0 4vw"
      },
      "header": {
        "display": "none",
        "column-widths": [
          "35%",
          "65%"
        ]
      },
      "first-column": {
        "border-right": "4px solid black",
        "text-align": "right"
      },
      "cells": {
        "padding": "5px 10px"
      },
      "data": {
        "columns": [
          "agenda",
          ""
        ],
        "rows": [
          [
            "Market Analysis",
            "Analyze the market by getting access to real time data. Find where in the internet that people that need you are hanging out"
          ],
          [
            "Automated customer targeting",
            "Automate your marketing process by using AI to generate personalized engaging ad flyers, content and videos"
          ],
          [
            "Iterate",
            "Review your data to continously itereate and improve your marketing to the best way possible"
          ]
        ]
      }
    },
    "width": 960,
    "x": 960,
    "start": 2
  });
  scene4.addElement({
    "type": "voice",
    "text": "We generated this ad by simply placing a simple product description of the Slakenet business suite to our algorithms, but we're making it more robust and the video ads more advanced. We're launching our Slakenet Business Suite beta very soon, to help you launch personalized ads that truly resonate with your customers. Follow us on twitter and Facebook to get updates",
    "voice": "en-NG-EzinneNeural",
    "start": 1
  });
  scene4.set("duration", 10);
  movie.addScene(scene4);

  //Create Scene 5
  let scene5 = new Scene;

  scene5.addElement({
    "type":"image",
    "src":"https://res.cloudinary.com/db8bxn9pc/image/upload/v1682447925/Add_a_subheading_zhi744.png",
    "duration":6
  });

  movie.addScene(scene5)
  //Add audio to the movie
  movie.addElement({
    "type": "audio",
    "src": "https://res.cloudinary.com/db8bxn9pc/video/upload/v1682448360/inspire_jsmwnu.mp3",
    "start": 1
  });

  // Finally, render the movie
  const render = await movie.render();
  console.log(render);
  res.send(render);

  // Wait for the movie to be rendered
  // const result = await movie.waitToFinish();
  await movie
    .waitToFinish((status) => {
      console.log("Rendering: ", status.movie.status, " / ", status.movie.message);    
    })
    .then((status) => {
      console.log("Movie is ready: ", status.movie.url);
      console.log("Remaining final movies: ", status.remaining_quota.movies);
      console.log("Remaining drafts: ", status.remaining_quota.drafts);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

main();
