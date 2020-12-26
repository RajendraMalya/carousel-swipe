import React from 'react';
import Carousel from "react-material-ui-carousel";
import './style/Example.scss';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core';

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

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>

                <Button variant="outlined" className="ViewButton">
                    View Now
                </Button>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className="MediaCaption">
                        {item.name}
                    </Typography>
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
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

const items = [
    {
        Name: "Electronics",
        Caption: "Electrify your friends!",
        contentPosition: "left",
        Items: [
            {
                Name: "Macbook Pro",
                Price:"10000",
                Category:"EC",
                Image: "./assets/images/1.jpg"
            },
            {
                Name: "iPhone",
                Price:"10000",
                Category:"EC",
                Image: "./assets/images/1.jpg"
            }
        ]
    },
    {
        Name: "Home Appliances",
        Caption: "Say no to manual home labour!",
        contentPosition: "middle",
        Items: [
            {
                Name: "Washing Machine WX9102",
                Price:"10000",
                Category:"EC",
                Image: "./assets/images/1.jpg"
            },
            {
                Name: "Learus Vacuum Cleaner",
                Price:"10000",
                Category:"EC",
                Image: "./assets/images/1.jpg"
            }
        ]
    },
    {
        Name: "Decoratives",
        Caption: "Give style and color to your living room!",
        contentPosition: "right",
        Items: [
            {
                Name: "Living Room Lamp",
                Price:"10000",
                Category:"EC",
                Image: "https://source.unsplash.com/featured/?lamp"
            },
            {
                Name: "Floral Vase",
                Price:"10000",
                Category:"EC",
                Image: "https://source.unsplash.com/featured/?vase"
            }
        ]
    }
]

class CarouselSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: false,
            timer: 0,
            animation: "fade",
            indicators: true,
            timeout: 0,
            navButtonsAlwaysVisible: false,
            navButtonsAlwaysInvisible: false
        }

       
    }

    toggleAutoPlay() {
        this.setState({
            autoPlay: !this.state.autoPlay
        })
    }

    

    toggleNavButtonsAlwaysInvisible() {
        this.setState({
            navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
        })
    }

    

    render() {
        return (
            <div style={{ marginTop: "50px", color: "#494949" }}>
                <h2><FormControlLabel
                    control={
                        <Checkbox onChange={this.toggleAutoPlay} checked={this.state.autoPlay} value="Filter"
                            color="primary" />
                    }
                    label="Auto-play"
                /></h2>

                <Carousel
                    className="Example"
                    autoPlay={this.state.autoPlay}
                    timer={this.state.timer}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                    next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                >
                    {
                        items.map((item, index) => {
                            return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                        })
                    }
                </Carousel>


               
                

                

                

                

            </div>

        )
    }
}

export default CarouselSlider;