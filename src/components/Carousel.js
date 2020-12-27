import React from 'react';
import Carousel from "react-material-ui-carousel";
import { useState, useEffect } from 'react'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    InputLabel,
    Select,
    MenuItem
} from '@material-ui/core';
import '../style/Example.scss';
import {jsonData} from '../data.js';


function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={12 / totalItems} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography><br></br><br></br>
                <Typography className="media">
                <img src={props.item.Image} alt="recipe thumbnail"  style={{marginTop:25}} className="image"/>

                </Typography>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];
        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia

                    className="Media"
                    title={item.Name}
                >
                    <CardContent className="Content">
                        <Typography className="Title">
                            {item.Name ? item.Name:""}
                        </Typography>

                        <Typography className="Caption">
                           RS:  {item.Price?item.Price:0}
                        </Typography>

                        <Typography>
                        <img src={item.Image} alt="recipe thumbnail"  className="image"/>
                        </Typography>

                    </CardContent>
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);

        //this will apply when item->contentPosition->middle
    } else if (contentPosition === "right") {
        items.push(content);

        //this will apply when item->contentPosition->right
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}


function CarouselSlider() {

    const [items, setItems] = useState([]);
    const [category, setCategory] = useState([]);
    const [newItems, setnewItems] = useState([]);
    const [navButton, setNavButton] = useState(false);

    useEffect(() => {
        console.log(jsonData)
        setItems(jsonData);
        setnewItems(jsonData);
    }, [])


    const handleChange = (event) => {
        const allitems = items;
        if (event.target && event.target.value === "") {
            setnewItems(allitems);
            setNavButton(false);
        } else {
            setnewItems(allitems.filter(item => item.Category === event.target.value));
            setNavButton(true);
         }
        setCategory(event.target.value);
    };



    return (
        <div style={{ marginTop: "50px", color: "#494949" }}>
            <h2>
                <InputLabel id="demo-simple-select-label">category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={handleChange}>
                    <MenuItem value=""><em>ALL</em></MenuItem>
                    <MenuItem value={'EC'}>Electronics</MenuItem>
                    <MenuItem value={'HOME'}>Home Appliances</MenuItem>
                    <MenuItem value={'DEC'}>Decoratives</MenuItem>
                </Select>
            </h2>

            <Carousel
                autoPlay={false}
                timer={0}
                timeout={0}
                navButtonsAlwaysVisible={false}
                navButtonsAlwaysInvisible={navButton}>
                {
                    newItems.map((item, index) => {
                        return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                    })

                }
            </Carousel>
        </div>

    )

}

export default CarouselSlider;