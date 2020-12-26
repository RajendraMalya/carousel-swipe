import React from 'react';
import Carousel from "react-material-ui-carousel";
import './style/Example.scss';
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

import data from './data.json';

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
                            {item.Name}
                        </Typography>

                        <Typography className="Caption">
                            {item.price}
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





class CarouselSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: null,
            items:data
        }
        this.newItems = this.state.items;
    }


    handleChange = (event) => {
        const allitems = this.state.items;
        if (event.target && event.target.value === "") {
            this.newItems = allitems;
        } else {
            this.newItems = allitems.filter(item => item.Category === event.target.value);
        }
        this.setState({ category: event.target.value });
    };

    render() {
        this.newItems1 = this.state.items;
        return (
            <div style={{ marginTop: "50px", color: "#494949" }}>
                <h2>
                    <InputLabel id="demo-simple-select-label">category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.category}
                        onChange={this.handleChange}>
                        <MenuItem value=""><em>ALL</em></MenuItem>
                        <MenuItem value={'EC'}>Electronics</MenuItem>
                        <MenuItem value={'HOME'}>Home Appliances</MenuItem>
                        <MenuItem value={'DEC'}>Decoratives</MenuItem>
                    </Select>
                </h2>

                <Carousel
                    timer={0}
                    timeout={0}
                    navButtonsAlwaysVisible={false}
                    navButtonsAlwaysInvisible={false}>
                    {
                        this.newItems.map((item, index) => {
                            return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                        })

                    }
                </Carousel>
            </div>

        )
    }
}

export default CarouselSlider;